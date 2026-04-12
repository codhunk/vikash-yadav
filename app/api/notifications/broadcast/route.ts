import { NextResponse } from 'next/server';
import connectDB from '@/server/mongodb';
import Patient from '@/server/models/Patient';
import { sendMail, wrapEmailTemplate } from '@/server/lib/mail';

export async function POST(req: Request) {
  try {
    await connectDB();
    const { subject, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ success: false, message: 'RESEND_API_KEY not configured on server' }, { status: 500 });
    }

    const patients = await Patient.find({ status: 'Active' });
    const emails = patients.map(p => p.email).filter(e => !!e);

    if (emails.length === 0) {
      return NextResponse.json({ success: false, message: 'No active patients with emails found' });
    }

    const content = `
      <div style="padding: 15px; border-radius: 5px; margin: 20px 0; line-height: 1.6;">
        ${message.replace(/\n/g, '<br/>')}
      </div>
      <p>Sincerely,<br/><strong>Clinical Sanctuary Team</strong></p>
    `;

    // Resend supports up to 50 recipients per call. For larger lists, batch them.
    const BATCH_SIZE = 50;
    let sentCount = 0;

    for (let i = 0; i < emails.length; i += BATCH_SIZE) {
      const batch = emails.slice(i, i + BATCH_SIZE);

      const result = await sendMail({
        to: batch,
        subject,
        html: wrapEmailTemplate(content),
      });

      if (result.success) {
        sentCount += batch.length;
      } else {
        console.error(`[Broadcast] Failed batch ${i}-${i + batch.length}: ${result.error}`);
      }
    }

    return NextResponse.json({ success: true, message: `Broadcast sent to ${sentCount} patients` });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
