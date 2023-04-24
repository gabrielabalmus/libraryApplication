import sendgridMail from "@sendgrid/mail";
import { SendEmailProps } from "~/types/Readers.type";

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const sendEmail = async ({
  to,
  subject,
  template,
  data,
}: SendEmailProps) => {
  const message = {
    to,
    from: process.env.FROM_EMAIL!,
    subject,
    html: template,
    substitutions: data,
  };

  sendgridMail.send(message).catch(() => {});
};
