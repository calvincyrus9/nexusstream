// src/app/api/submit-form/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.json();
    const { formType, ...data } = formData;

    // --- 1. Email Sending Logic ---
    // IMPORTANT: You must configure your email provider here.
    // I'm using environment variables for security. Add these to your Vercel project settings.
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: `"NexusStream Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // The email address you want to receive submissions
      subject: `New Submission: ${formType}`,
      html: `<div style="font-family: sans-serif;">
               <h2>New ${formType} Submission</h2>
               <table border="1" cellpadding="5" cellspacing="0">
                 <tbody>
                   ${Object.entries(data)
                     .map(([key, value]) => `<tr><td style="text-transform: capitalize; font-weight: bold;">${key}</td><td>${value}</td></tr>`)
                     .join('')}
                 </tbody>
               </table>
             </div>`,
    };

    await transporter.sendMail(mailOptions);

    // --- 2. Log File Logic ---
    const logFilePath = path.join(process.cwd(), 'form-submissions.log');
    const logEntry = `${new Date().toISOString()} - [${formType}] - ${JSON.stringify(data)}\n`;
    
    await fs.appendFile(logFilePath, logEntry);

    return NextResponse.json({ message: 'Submission successful!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ message: 'Error processing submission.', error: error.message }, { status: 500 });
  }
}
