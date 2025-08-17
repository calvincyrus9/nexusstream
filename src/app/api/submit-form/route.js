// src/app/api/submit-form/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';

async function writeToSheet(formType, website, data) {
  const auth = new GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS),
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  const sheets = google.sheets({ version: 'v4', auth });

  let sheetName;
  let rowData;

  // Prepare the row data, now including IP and User Agent
  if (formType.endsWith('Trial Request')) {
    sheetName = 'Trials';
    rowData = [
      new Date().toISOString(), formType, website, data.email, data.device, data.country,
      data.language, data.adultContent, data.ipAddress, data.userAgent
    ];
  } else if (formType.endsWith('Renewal Request')) {
    sheetName = 'Renewals';
    rowData = [
      new Date().toISOString(), formType, website, data.email, data.username, data.duration,
      data.devices, data.paymentMethod, data.country, data.ipAddress, data.userAgent
    ];
  } else if (formType === 'Contact Inquiry') {
    sheetName = 'Contacts';
    rowData = [
      new Date().toISOString(), formType, website, data.name, data.email, data.message,
      data.ipAddress, data.userAgent
    ];
  } else {
    return;
  }

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
    // --- NEW: Capture IP and User Agent from request headers ---
    const ipAddress = request.headers.get('x-forwarded-for') || 'Not available';
    const userAgent = request.headers.get('user-agent') || 'Not available';

    const formData = await request.json();
    const { formType, website, ...data } = formData;

    // Add the new info to the data object that gets sent
    const enhancedData = {
      ...data,
      ipAddress,
      userAgent,
    };

    // --- Email Sending Logic (will now include the new data automatically) ---
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
      from: `"NexusStream" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `NX: ${formType} from ${website}`,
      html: `<div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
               <h2 style="color: #3b82f6;"> ${formType} ${website}</h2>
               <table style="width: 100%; border-collapse: collapse;">
                 <tbody>
                   ${Object.entries(enhancedData).map(([key, value]) => `
                       <tr style="border-bottom: 1px solid #eee;">
                         <td style="padding: 8px; text-transform: capitalize; font-weight: bold; color: #333;">${key.replace(/([A-Z])/g, ' $1')}</td>
                         <td style="padding: 8px; color: #555;">${value}</td>
                       </tr>`).join('')}
                 </tbody>
               </table>
             </div>`,
    };

    await transporter.sendMail(mailOptions);

    // --- Write to Google Sheet with the enhanced data ---
    await writeToSheet(formType, website, enhancedData);

    return NextResponse.json({ message: 'Submission successful!' }, { status: 200 });

  } catch (error) {
    console.error('Error in /api/submit-form:', error);
    return NextResponse.json({ message: 'Error processing submission.', error: error.message }, { status: 500 });
  }
}