import fs from 'node:fs';
import path from 'node:path';
import { Lead } from './db';

export interface EmailResult {
  success: boolean;
  status: 'sent' | 'logged_locally' | 'failed';
  error?: string;
}

export async function sendAdminLeadNotification(lead: Lead): Promise<EmailResult> {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@novaspark.in';
  const resendApiKey = process.env.RESEND_API_KEY;

  const emailSubject = `🚀 New Client Inquiry: ${lead.name} (${lead.company || 'Direct Client'}) — ${lead.service}`;
  
  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F9FC; margin: 0; padding: 24px; color: #111827; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 12px rgba(7, 27, 112, 0.06); }
          .header { background: #071B70; padding: 28px; text-align: left; }
          .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
          .header p { color: #00BCEB; margin: 6px 0 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
          .body { padding: 32px; }
          .lead-badge { display: inline-block; padding: 4px 12px; background: rgba(8, 124, 203, 0.1); color: #087CCB; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
          .field-group { margin-bottom: 16px; border-bottom: 1px solid #F1F5F9; padding-bottom: 12px; }
          .field-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B; font-weight: 600; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #111827; font-weight: 500; }
          .field-value a { color: #087CCB; text-decoration: none; }
          .message-box { background: #F8FAFC; border-left: 4px solid #FFC400; padding: 16px; border-radius: 4px; margin-top: 20px; font-size: 15px; line-height: 1.6; color: #1E293B; }
          .footer { background: #F8FAFC; padding: 20px 32px; text-align: center; border-top: 1px solid #E2E8F0; font-size: 12px; color: #64748B; }
          .cta-btn { display: inline-block; margin-top: 24px; padding: 12px 24px; background: #FFC400; color: #071B70; text-decoration: none; font-weight: 700; border-radius: 9999px; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>NovaSpark Client Acquisition</h1>
            <p>New Inbound High-Intent Inquiry</p>
          </div>
          <div class="body">
            <div class="lead-badge">Lead ID: ${lead.id}</div>
            
            <div class="field-group">
              <div class="field-label">Prospect Name</div>
              <div class="field-value">${lead.name}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Business Email</div>
              <div class="field-value"><a href="mailto:${lead.email}">${lead.email}</a></div>
            </div>

            ${lead.phone ? `
            <div class="field-group">
              <div class="field-label">Phone Number</div>
              <div class="field-value"><a href="tel:${lead.phone}">${lead.phone}</a></div>
            </div>
            ` : ''}

            ${lead.company ? `
            <div class="field-group">
              <div class="field-label">Company / Brand</div>
              <div class="field-value">${lead.company}</div>
            </div>
            ` : ''}

            ${lead.website ? `
            <div class="field-group">
              <div class="field-label">Website URL</div>
              <div class="field-value"><a href="${lead.website}" target="_blank">${lead.website}</a></div>
            </div>
            ` : ''}

            <div class="field-group">
              <div class="field-label">Service Interested In</div>
              <div class="field-value"><strong>${lead.service}</strong></div>
            </div>

            ${lead.budget ? `
            <div class="field-group">
              <div class="field-label">Estimated Monthly Budget</div>
              <div class="field-value">${lead.budget}</div>
            </div>
            ` : ''}

            <div class="field-label" style="margin-top: 20px;">Project Details / Message</div>
            <div class="message-box">
              ${lead.message.replace(/\n/g, '<br>')}
            </div>

            <div style="text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/admin" class="cta-btn">Open in NovaSpark Admin CRM →</a>
            </div>
          </div>
          <div class="footer">
            Received on ${new Date(lead.created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST • NovaSpark Digital Marketing Agency
          </div>
        </div>
      </body>
    </html>
  `;

  // 1. If Resend API Key is configured, send live email
  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'NovaSpark Inquiries <leads@novaspark.in>',
          to: [adminEmail],
          subject: emailSubject,
          html: emailHtml,
        }),
      });

      if (response.ok) {
        return { success: true, status: 'sent' };
      } else {
        const errorText = await response.text();
        console.error('Resend email error:', errorText);
        // Fallback to local outbox logging
        logEmailLocally(lead, emailSubject, emailHtml, `Resend failed: ${errorText}`);
        return { success: true, status: 'logged_locally', error: errorText };
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error('Failed to send via Resend API:', errorMessage);
      logEmailLocally(lead, emailSubject, emailHtml, errorMessage);
      return { success: true, status: 'logged_locally', error: errorMessage };
    }
  }

  // 2. Default: Store in transactional local outbox for auditing and instant inspection
  logEmailLocally(lead, emailSubject, emailHtml);
  return { success: true, status: 'logged_locally' };
}

function logEmailLocally(lead: Lead, subject: string, html: string, note?: string) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const logPath = path.join(dataDir, 'admin_notifications.log');
    const logEntry = `
================================================================================
TIME: ${new Date().toISOString()}
TO: ${process.env.ADMIN_EMAIL || 'admin@novaspark.in'}
SUBJECT: ${subject}
LEAD ID: ${lead.id}
PROSPECT: ${lead.name} (${lead.email}) | ${lead.company || 'N/A'}
SERVICE: ${lead.service} | BUDGET: ${lead.budget || 'N/A'}
NOTE: ${note || 'Admin transactional email queued and logged.'}
================================================================================
`;
    fs.appendFileSync(logPath, logEntry, 'utf8');
  } catch (e) {
    console.error('Failed to append to admin notification log:', e);
  }
}
