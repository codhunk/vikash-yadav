import { sendMail, wrapEmailTemplate } from './mail';

// ─── Sent when admin confirms a booking ────────────────────────────────────
export const sendBookingConfirmation = async (booking: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
}) => {
  const { name, email, phone, date, time, service } = booking;

  console.log(`[Notifications] Sending CONFIRMATION email to: ${email}`);

  const content = `
    <p>Dear <strong>${name}</strong>,</p>
    <p>Great news! Your appointment with Dr. Vikash Yadav has been <strong style="color:#03C0C0;">confirmed</strong>.</p>
    <div style="background: #f0fdfa; padding: 18px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #03C0C0;">
      <p style="margin: 0 0 8px;"><strong>Service:</strong> ${service}</p>
      <p style="margin: 0 0 8px;"><strong>Date:</strong> ${date}</p>
      <p style="margin: 0;"><strong>Time:</strong> ${time}</p>
    </div>
    <p>Please arrive 10 minutes early. If you need to reschedule or cancel, please contact us at least 24 hours in advance.</p>
    <p>📞 Contact: <strong>+91 8708255349</strong></p>
    <p>Sincerely,<br/><strong>Team Dr. Vikash Yadav</strong></p>
  `;

  const result = await sendMail({
    to: email,
    subject: '✅ Appointment Confirmed – Dr. Vikash Yadav',
    html: wrapEmailTemplate(content),
  });

  if (result.success) {
    console.log(`[Notifications] Confirmation email sent to ${email} (Resend ID: ${result.id})`);
  } else {
    console.error(`[Notifications] Failed to send confirmation to ${email}: ${result.error}`);
  }

  // SMS placeholder
  console.log(`[SMS MOCK] To ${phone}: Hi ${name}, your appointment with Dr. Vikash Yadav is confirmed for ${date} at ${time}.`);
};

// ─── Sent immediately when a patient submits a new booking ─────────────────
export const sendBookingReceipt = async (booking: {
  name: string;
  email: string;
  date: string;
  time: string;
  service: string;
}) => {
  const { name, email, date, time, service } = booking;

  console.log(`[Notifications] Sending RECEIPT email to: ${email}`);

  const content = `
    <p>Dear <strong>${name}</strong>,</p>
    <p>We have received your appointment request at Dr. Vikash Yadav's Clinical Sanctuary. Our team will review and confirm it shortly.</p>
    <div style="background: #fefce8; padding: 18px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #eab308;">
      <p style="margin: 0 0 4px; font-size: 13px; color: #854d0e;"><strong>⏳ Status: Pending Confirmation</strong></p>
      <p style="margin: 8px 0;"><strong>Service:</strong> ${service}</p>
      <p style="margin: 8px 0;"><strong>Requested Date:</strong> ${date}</p>
      <p style="margin: 8px 0;"><strong>Requested Time:</strong> ${time}</p>
    </div>
    <p>You will receive another email once your appointment is confirmed.</p>
    <p>📞 For urgent queries: <strong>+91 8708255349</strong></p>
    <p>Sincerely,<br/><strong>Team Dr. Vikash Yadav</strong></p>
  `;

  const result = await sendMail({
    to: email,
    subject: '📋 Booking Received – Dr. Vikash Yadav',
    html: wrapEmailTemplate(content),
  });

  if (result.success) {
    console.log(`[Notifications] Receipt email sent to ${email} (Resend ID: ${result.id})`);
  } else {
    console.error(`[Notifications] Failed to send receipt to ${email}: ${result.error}`);
  }
};
