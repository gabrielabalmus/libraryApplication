import nodemailer from "nodemailer";
import { SendEmailProps } from "~/types/Readers.type";

export const sendEmail = async ({ to, subject, template }: SendEmailProps) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const message = {
      to,
      from: process.env.FROM_EMAIL,
      subject,
      html: template,
    };

    await transporter.sendMail(message);
  } catch (e) {
    console.log("eee", e);
  }
};
