"use server";

import { Resend } from "resend";
import { ConsultationConfirmationEmail } from "@/components/templates/ConsultationConfirmationEmail";
import { AdminConsultationAlertEmail } from "@/components/templates/AdminConsultationAlertEmail";
import { ContactMessageNotificationEmail } from "@/components/templates/ContactMessageNotificationEmail";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const base_url = process.env.BASE_URL_WEB;
const TO_EMAIL = process.env.TO_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL;

const resend = new Resend(RESEND_API_KEY);

export const resendEmail = async (
  formData: {
    email: string;
    name: string;
    phone: string;
    message: string;
    subject: string;
    preferredDate: string;
    preferredTime: string;
    paidAt: string;
    paymentChannel: string;
    amount: string;
  },
  paymentRef: string,
) => {
  try {
    const adminEmail = await resend.emails.send({
      from: `Bluecrest Attorneys <${FROM_EMAIL}>`,
      to: `${TO_EMAIL}`,
      subject: `New Paid Consultation: ${formData.subject} - Ref: ${paymentRef}`,
      react: AdminConsultationAlertEmail({
        logoDark: `${base_url}/bc11.png`,
        logoLight: `${base_url}/ba12.png`,
        companyName: "Bluecrest Attorneys",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        consultationDate: formData.preferredDate,
        consultationTime: formData.preferredTime,
        reference: paymentRef,
      }),
    });

    const clientEmail = await resend.emails.send({
      from: `Bluecrest Attorneys <${FROM_EMAIL}>`,
      to: formData.email,
      subject: `Consultation Confirmed - Ref: ${paymentRef}`,
      react: ConsultationConfirmationEmail({
        logoLight: `${base_url}/ba12.png`,
        logoDark: `${base_url}/bc11.png`,
        companyName: "Bluecrest Attorneys",
        name: formData.name,
        phone: formData.phone,
        amount: formData.amount,
        reference: paymentRef,
        paymentChannel: formData.paymentChannel,
        paidAt: formData.paidAt,
      }),
    });

    await Promise.all([adminEmail, clientEmail]);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export const contactEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  try {
    await resend.emails.send({
      from: `Bluecrest Attorneys <${FROM_EMAIL}>`,
      to: `${TO_EMAIL}`,
      subject: `You have a message from ${formData.name}: ${formData.subject}`,
      react: ContactMessageNotificationEmail({
        logoLight: `${base_url}/ba12.png`,
        logoDark: ` ${base_url}/bc11.png`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
