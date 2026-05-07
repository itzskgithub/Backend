🚀 What is Nodemailer?

Nodemailer is a Node.js library used to send emails from your backend.

You use it for things like:

OTP emails
Password reset links
Welcome emails
Notifications
🧠 How it works (simple flow)
Your App → Nodemailer → SMTP Server → User Inbox

Nodemailer doesn’t send emails directly—it uses an SMTP server (like Gmail, Mailtrap, SendGrid, etc.).

⚙️ Basic Setup
1. Install
npm install nodemailer
2. Create transporter
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io", // or Gmail/SendGrid
  port: 2525,
  auth: {
    user: "your_user",
    pass: "your_pass"
  }
});
3. Send email
await transporter.sendMail({
  from: '"Shubham" <shubham@example.com>',
  to: "user@example.com",
  subject: "Hello",
  text: "This is plain text",
  html: "<b>This is HTML</b>"
});
🔑 Important Concepts
1. Transporter
The object responsible for sending emails
Configured with SMTP details
2. SMTP (Simple Mail Transfer Protocol)
The protocol used to send emails
Examples:
Mailtrap (testing)
Gmail
SendGrid
AWS SES
3. Message fields
{
  from,
  to,
  subject,
  text,   // plain text version
  html    // styled version
}
🔥 Common Use Cases
User authentication (OTP / verification)
Password reset
Notifications
Transactional emails
🧪 Development vs Production
Development

Use:

Mailtrap (safe testing inbox)
Production

Use real services:

SendGrid
Amazon SES
Resend
⚡ Advanced Features
Attachments
attachments: [
  {
    filename: "file.pdf",
    path: "./file.pdf"
  }
]
CC / BCC
cc: "cc@example.com",
bcc: "bcc@example.com"
HTML Templates

You can integrate with:

Mailgen (for clean templates)
Handlebars / EJS
⚠️ Important Tips
Never hardcode credentials → use .env
Always send both:
text
html
Use Mailtrap while developing (avoid spamming real users)
Enable app passwords if using Gmail
🧩 Real-world example (clean)
const sendEmail = async () => {
  const info = await transporter.sendMail({
    from: "app@example.com",
    to: "user@example.com",
    subject: "Verify Email",
    text: "Click the link to verify",
    html: "<a href='#'>Verify</a>"
  });

  console.log("Message sent:", info.messageId);
};
🧭 When to use Nodemailer

Use Nodemailer when:

You’re building backend with Node.js
You need full control over email sending
You want to integrate with SMTP services