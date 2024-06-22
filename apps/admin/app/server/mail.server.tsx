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
      from: process.env.FROM_EMAIL,
    });

    const message = {
      from: `Library <${process.env.FROM_EMAIL}>`,
      to,
      subject,
      html: template,
    };

    // Do not send mails
    // await transporter.sendMail(message);
  } catch (e) {}
};
