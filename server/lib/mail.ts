import { Resend } from 'resend';

// ─── Resend Client ──────────────────────────────────────────────────────────
const resend = new Resend(process.env.RESEND_API_KEY);

// Default sender – must be a verified domain/email in your Resend dashboard.
// With a free Resend account you can only send FROM "onboarding@resend.dev".
// Once you verify your own domain, replace this with your real sender address.
const DEFAULT_FROM = process.env.RESEND_FROM_EMAIL || 'Dr. Vikash Yadav <onboarding@resend.dev>';

// ─── Types ──────────────────────────────────────────────────────────────────
export interface SendMailOptions {
  /** Recipient email address (or array of addresses) */
  to: string | string[];
  /** Email subject line */
  subject: string;
  /** HTML body of the email */
  html: string;
  /** Optional plain-text fallback */
  text?: string;
  /** Optional override of the default "from" address */
  from?: string;
  /** Optional reply-to address */
  replyTo?: string;
  /** Optional BCC recipients */
  bcc?: string | string[];
  /** Optional CC recipients */
  cc?: string | string[];
}

export interface SendMailResult {
  success: boolean;
  /** Resend message ID on success */
  id?: string;
  error?: string;
}

// ─── Core Send Function ─────────────────────────────────────────────────────
/**
 * Send an email via Resend.
 *
 * Usage:
 * ```ts
 * import { sendMail } from '@/server/lib/mail';
 *
 * await sendMail({
 *   to: 'patient@example.com',
 *   subject: 'Appointment Confirmed',
 *   html: '<h1>Your appointment is confirmed!</h1>',
 * });
 * ```
 */
export async function sendMail(options: SendMailOptions): Promise<SendMailResult> {
  const { to, subject, html, text, from, replyTo, bcc, cc } = options;

  if (!process.env.RESEND_API_KEY) {
    console.warn('[Mail] RESEND_API_KEY is not set – skipping email.');
    return { success: false, error: 'RESEND_API_KEY not configured' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: from || DEFAULT_FROM,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      ...(text && { text }),
      ...(replyTo && { replyTo }),
      ...(bcc && { bcc: Array.isArray(bcc) ? bcc : [bcc] }),
      ...(cc && { cc: Array.isArray(cc) ? cc : [cc] }),
    });

    if (error) {
      console.error('[Mail] Resend API error:', error);
      return { success: false, error: error.message };
    }

    console.log(`[Mail] Sent "${subject}" to ${to} — ID: ${data?.id}`);
    return { success: true, id: data?.id };
  } catch (err: any) {
    console.error('[Mail] Failed to send email:', err);
    return { success: false, error: err.message || 'Unknown error' };
  }
}

// ─── Email Template Helpers ─────────────────────────────────────────────────

/** Wraps content in a styled email layout */
export function wrapEmailTemplate(content: string): string {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: auto; padding: 0; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #03C0C0, #028a8a); padding: 24px 30px;">
        <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">
          Dr. Vikash Yadav
        </h2>
        <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 13px;">
          Clinical Sanctuary
        </p>
      </div>
      <!-- Body -->
      <div style="padding: 30px; color: #1f2937; line-height: 1.7; font-size: 15px;">
        ${content}
      </div>
      <!-- Footer -->
      <div style="background: #f9fafb; padding: 16px 30px; border-top: 1px solid #e5e7eb; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #9ca3af;">
          This email was sent on behalf of Dr. Vikash Yadav's Clinical Sanctuary.<br/>
          Managed by Web Duality
        </p>
      </div>
    </div>
  `;
}
