"use server";

import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(RESEND_API_KEY);

export const resendEmail = async (
  formData: {
    email: string;
    name: string;
    phone: string;
    message: string;
    caseType: string;
  },
  paymentRef: string
) => {
  try {
    const adminEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ashimiseide@gmail.com",
      subject: `New Paid Consultation: ${formData.caseType} - Ref: ${paymentRef}`,
      html: `<h1>New Consultation Request</h1>
        <p><strong>Payment Reference:</strong> ${paymentRef}</p>
        <p><strong>Client Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>`,
    });

    const clientEmail = await resend.emails.send({
      from: "Bluecrest Attorneys <onboarding@resend.dev>",
      to: formData.email,
      subject: `Consultation Confirmed - Ref: ${paymentRef}`,
      html: `<div style="font-family: sans-serif; max-width: 600px;">
          <h2>Hello ${formData.name},</h2>
          <p>Thank you for your payment. Your consultation request has been received.</p>
          <div style="background: #f4f4f4; padding: 20px; border-radius: 8px;">
            <p><strong>Payment Reference:</strong> ${paymentRef}</p>
            <p><strong>Subject:</strong> ${formData.caseType}</p>
          </div>
          <p>Our team will contact you at <strong>${formData.phone}</strong> within 24 hours.</p>
          <hr />
          <p style="font-size: 12px; color: #666;">This is an automated receipt for your records.</p>
        </div>`,
    });

    await Promise.all([adminEmail, clientEmail]);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
