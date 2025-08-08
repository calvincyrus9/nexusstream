// src/app/api/submit-form/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.json();
    const { formType, ...data } = formData;

    // --- Email Sending Logic ---
    // Ensure your environment variables are set correctly in Vercel.
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10), // Ensure port is an integer
      secure: process.env.EMAIL_PORT === '465', // `true` for port 465, `false` for others like 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"NexusStream Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Submission: ${formType}`,
      html: `<div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
               <h2 style="color: #3b82f6;">New ${formType} Submission</h2>
               <table style="width: 100%; border-collapse: collapse;">
                 <tbody>
                   ${Object.entries(data)
                     .map(([key, value]) => `
                       <tr style="border-bottom: 1px solid #eee;">
                         <td style="padding: 8px; text-transform: capitalize; font-weight: bold; color: #333;">${key.replace(/([A-Z])/g, ' $1')}</td>
                         <td style="padding: 8px; color: #555;">${value}</td>
                       </tr>`)
                     .join('')}
                 </tbody>
               </table>
             </div>`,
    };

    // This will attempt to send the email
    await transporter.sendMail(mailOptions);

    // The file logging logic has been removed as it's not compatible with Vercel's default file system.

    return NextResponse.json({ message: 'Submission successful!' }, { status: 200 });

  } catch (error) {
    // --- Improved Error Logging ---
    // This will log the detailed error to your Vercel function logs.
    console.error('Error in /api/submit-form:', error);
    return NextResponse.json({ message: 'Error processing submission.', error: error.message }, { status: 500 });
  }
}
