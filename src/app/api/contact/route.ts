import { NextRequest, NextResponse } from 'next/server';
import { createLead, checkDuplicateLead, updateLeadEmailStatus } from '@/lib/db';
import { sendAdminLeadNotification } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      company,
      website,
      service,
      budget,
      message,
      honeypot, // Spam trap
    } = body;

    // Honeypot spam check - if filled, silently succeed without storing or alerting
    if (honeypot && String(honeypot).trim() !== '') {
      return NextResponse.json({ success: true, message: 'Inquiry received.' });
    }

    // Required fields validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Please enter a valid full name.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json({ success: false, error: 'Please enter a valid business email address.' }, { status: 400 });
    }

    if (!service || typeof service !== 'string' || service.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Please select a service you are interested in.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ success: false, error: 'Please provide some details about your project or goals (min 10 characters).' }, { status: 400 });
    }

    // Check for spam / duplicate submissions within 5 minutes
    if (checkDuplicateLead(email, message)) {
      return NextResponse.json({ 
        success: false, 
        error: 'We recently received an inquiry with this email and message. Our team is already reviewing it and will get in touch shortly!' 
      }, { status: 429 });
    }

    // Get IP or client identifier
    const forwardedFor = req.headers.get('x-forwarded-for') || '';
    const ip = forwardedFor.split(',')[0].trim() || 'unknown';

    // Save lead in database
    const lead = createLead({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? String(phone).trim() : undefined,
      company: company ? String(company).trim() : undefined,
      website: website ? String(website).trim() : undefined,
      service: service.trim(),
      budget: budget ? String(budget).trim() : undefined,
      message: message.trim(),
      ip_hash: ip,
    });

    // Send admin notification
    sendAdminLeadNotification(lead)
      .then((res) => {
        updateLeadEmailStatus(lead.id, res.success, res.status, res.error);
      })
      .catch((err) => {
        console.error('Background email notification error:', err);
        updateLeadEmailStatus(lead.id, false, 'failed', String(err));
      });

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      message: 'Thank you! Your inquiry has been sent to our leadership team. We will review your requirements and respond within 24 hours.',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while processing your inquiry. Please try again or reach out directly at contact@novaspark.in' },
      { status: 500 }
    );
  }
}
