import nodemailer from 'nodemailer';

// Create transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  cc?: string[];
  bcc?: string[];
  attachments?: Array<{
    filename: string;
    content: Buffer;
    contentType: string;
  }>;
}

/**
 * Send email
 */
export const sendEmail = async (options: EmailOptions): Promise<boolean> => {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: options.to,
      subject: options.subject,
      html: options.html,
      cc: options.cc,
      bcc: options.bcc,
      attachments: options.attachments,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${options.to}`);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error(`Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

/**
 * Send invoice email
 */
export const sendInvoiceEmail = async (
  to: string,
  invoiceNumber: string,
  customerName: string,
  totalAmount: number,
  companyName: string,
  pdfBuffer?: Buffer
): Promise<boolean> => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
          .footer { color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${companyName}</h1>
          </div>
          
          <p>Dear ${customerName},</p>
          
          <p>Your invoice has been created and is attached below.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td><strong>Invoice Number:</strong></td>
              <td>${invoiceNumber}</td>
            </tr>
            <tr>
              <td><strong>Amount Due:</strong></td>
              <td>₹${totalAmount.toFixed(2)}</td>
            </tr>
          </table>
          
          <p>If you have any questions, please don't hesitate to contact us.</p>
          
          <div class="footer">
            <p>This is an automated email. Please do not reply to this address.</p>
            <p>&copy; ${new Date().getFullYear()} ${companyName}. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const attachments: EmailOptions['attachments'] = [];
  if (pdfBuffer) {
    attachments.push({
      filename: `${invoiceNumber}.pdf`,
      content: pdfBuffer,
      contentType: 'application/pdf',
    });
  }

  return sendEmail({
    to,
    subject: `Invoice ${invoiceNumber}`,
    html,
    attachments,
  });
};

/**
 * Send password reset email
 */
export const sendPasswordResetEmail = async (
  to: string,
  resetLink: string,
  userName: string
): Promise<boolean> => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .button { background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Password Reset Request</h1>
          
          <p>Hi ${userName},</p>
          
          <p>We received a request to reset your password. Click the button below to reset it:</p>
          
          <p><a href="${resetLink}" class="button">Reset Password</a></p>
          
          <p>This link will expire in 1 hour.</p>
          
          <p>If you didn't request this, please ignore this email.</p>
        </div>
      </body>
    </html>
  `;

  return sendEmail({
    to,
    subject: 'Password Reset Request',
    html,
  });
};

/**
 * Send welcome email
 */
export const sendWelcomeEmail = async (
  to: string,
  userName: string,
  appName: string = 'InvoicePilot'
): Promise<boolean> => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to ${appName}!</h1>
          
          <p>Hi ${userName},</p>
          
          <p>Welcome to ${appName}. We're excited to have you on board!</p>
          
          <p>You can now log in to your account and start managing your invoices.</p>
          
          <p>If you have any questions, feel free to contact our support team.</p>
          
          <p>Best regards,<br>${appName} Team</p>
        </div>
      </body>
    </html>
  `;

  return sendEmail({
    to,
    subject: `Welcome to ${appName}`,
    html,
  });
};
