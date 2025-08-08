// src/app/api/submit-form/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';

// This function handles writing a new row to your Google Sheet.
async function writeToSheet(formType, data) {
  // Authenticate with Google Sheets API
  const auth = new GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS),
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  const sheets = google.sheets({ version: 'v4', auth });

  // Determine which sheet (tab) to write to
  const sheetName = formType === 'Trial Request' ? 'Trials' : 'Renewals';
  
  // Prepare the row data in the correct order
  let rowData;
  if (formType === 'Trial Request') {
    rowData = [
      new Date().toISOString(),
      data.email,
      data.device,
      data.country,
      data.language,
      data.adultContent,
    ];
  } else if (formType === 'Renewal Request') {
    rowData = [
      new Date().toISOString(),
      data.email,
      data.username,
      data.duration,
      data.devices,
      data.paymentMethod,
      data.country,
    ];
  } else {
    // For the contact form, we'll just log it simply
     rowData = [new Date().toISOString(), data.name, data.email, data.message];
     // Make sure you have a 'Contacts' sheet with headers: Timestamp, Name, Email, Message
     sheetName = 'Contacts'; 
  }

  // Append the new row to the sheet
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${sheetName}!A1`,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [rowData],
    },
  });
}


export async function POST(request) {
  try {
    const formData = await request.json();
    const { formType, ...data } = formData;

    // --- 1. Send Email (existing logic) ---
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: process.env.EMAIL_PORT === '465',
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
                   ${Object.entries(data).map(([key, value]) => `
                       <tr style="border-bottom: 1px solid #eee;">
                         <td style="padding: 8px; text-transform: capitalize; font-weight: bold; color: #333;">${key.replace(/([A-Z])/g, ' $1')}</td>
                         <td style="padding: 8px; color: #555;">${value}</td>
                       </tr>`).join('')}
                 </tbody>
               </table>
             </div>`,
    };

    await transporter.sendMail(mailOptions);

    // --- 2. Write to Google Sheet ---
    // We only write to the sheet for Trial and Renewal forms
    if (formType === 'Trial Request' || formType === 'Renewal Request' || formType === 'Contact Inquiry') {
      await writeToSheet(formType, data);
    }

    return NextResponse.json({ message: 'Submission successful!' }, { status: 200 });

  } catch (error) {
    console.error('Error in /api/submit-form:', error);
    return NextResponse.json({ message: 'Error processing submission.', error: error.message }, { status: 500 });
  }
}
