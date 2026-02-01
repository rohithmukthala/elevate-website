import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'webagencyelevate@gmail.com',
    pass: 'dhnuihckjejigteb',
  },
});

const ADMIN_EMAIL = 'webagencyelevate@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      company,
      phone,
      projectDetails,
      selectedDate,
      selectedTime,
      timeZone,
    } = body;

    // Validate required fields
    if (!name || !email || !selectedDate || !selectedTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the date for display
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // HTML email template for admin
    const adminEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: #171717; color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { padding: 30px; background: #f9fafb; }
    .section { background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
    .section-title { font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px; }
    .info-row { padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
    .info-row:last-child { border-bottom: none; }
    .info-label { font-weight: 600; color: #374151; }
    .info-value { color: #111827; }
    .highlight-box { background: #171717; color: white; border-radius: 8px; padding: 20px; text-align: center; }
    .highlight-box p { margin: 5px 0; }
    .footer { padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🗓️ New Call Booking Request</h1>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Client Information</div>
        <div class="info-row">
          <span class="info-label">Name:</span>
          <span class="info-value">${name}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email:</span>
          <span class="info-value"><a href="mailto:${email}">${email}</a></span>
        </div>
        <div class="info-row">
          <span class="info-label">Company:</span>
          <span class="info-value">${company || 'Not provided'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Phone:</span>
          <span class="info-value">${phone || 'Not provided'}</span>
        </div>
      </div>

      <div class="highlight-box">
        <p><strong>📅 ${formattedDate}</strong></p>
        <p><strong>🕐 ${selectedTime}</strong></p>
        <p style="font-size: 12px; opacity: 0.8;">🌍 ${timeZone}</p>
      </div>

      <div class="section" style="margin-top: 20px;">
        <div class="section-title">Project Details</div>
        <p style="margin: 0; white-space: pre-wrap;">${projectDetails || 'No details provided'}</p>
      </div>
    </div>
    <div class="footer">
      <p>Reply to this email to respond directly to the client.</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Send email to admin
    await transporter.sendMail({
      from: '"Elevate Booking" <webagencyelevate@gmail.com>',
      to: ADMIN_EMAIL,
      replyTo: email, // So admin can reply directly to client
      subject: `New Call Booking: ${name} - ${formattedDate} at ${selectedTime}`,
      html: adminEmailHtml,
    });

    // Optional: Send confirmation email to client
    const clientEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: #171717; color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { padding: 30px; background: #f9fafb; }
    .box { background: white; border-radius: 8px; padding: 20px; text-align: center; }
    .footer { padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Booking Confirmed!</h1>
    </div>
    <div class="content">
      <p>Hi ${name},</p>
      <p>Thank you for booking a call with us! We've received your request and will be in touch shortly.</p>
      
      <div class="box">
        <p><strong>📅 ${formattedDate}</strong></p>
        <p><strong>🕐 ${selectedTime}</strong></p>
        <p style="font-size: 14px; color: #6b7280;">🌍 ${timeZone}</p>
      </div>
      
      <p style="margin-top: 20px;">We'll send you a calendar invite with the meeting link soon.</p>
      <p>If you need to reschedule, just reply to this email.</p>
    </div>
    <div class="footer">
      <p>Looking forward to speaking with you!</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    await transporter.sendMail({
      from: '"Elevate Agency" <webagencyelevate@gmail.com>',
      to: email,
      subject: `Your call is booked for ${formattedDate}`,
      html: clientEmailHtml,
    });

    return NextResponse.json({
      success: true,
      message: 'Booking confirmed! Check your email for confirmation.',
    });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking. Please try again.' },
      { status: 500 }
    );
  }
}
