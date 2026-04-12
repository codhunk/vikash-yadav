import { NextResponse } from 'next/server';
import { sendMail, wrapEmailTemplate } from '@/server/lib/mail';

/**
 * POST /api/mail/send
 *
 * Generic mail-sending endpoint. Protected by API key check.
 *
 * Body:
 *   to        - string | string[]  (required)
 *   subject   - string             (required)
 *   html      - string             (required – raw HTML or will be wrapped)
 *   text      - string             (optional – plain text fallback)
 *   replyTo   - string             (optional)
 *   bcc       - string | string[]  (optional)
 *   cc        - string | string[]  (optional)
 *   template  - boolean            (optional – if true, wraps html in branded template)
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { to, subject, html, text, replyTo, bcc, cc, template } = body;

    // Validate required fields
    if (!to || !subject || !html) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: to, subject, html' },
        { status: 400 }
      );
    }

    const finalHtml = template ? wrapEmailTemplate(html) : html;

    const result = await sendMail({
      to,
      subject,
      html: finalHtml,
      ...(text && { text }),
      ...(replyTo && { replyTo }),
      ...(bcc && { bcc }),
      ...(cc && { cc }),
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      id: result.id,
    });
  } catch (error: any) {
    console.error('[API /mail/send] Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
