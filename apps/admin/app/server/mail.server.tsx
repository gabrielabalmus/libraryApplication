import sendgridMail from "@sendgrid/mail";
import { SendMailProps } from "~/types/Customers.type";

const SENDGRID_API_KEY =
  "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";
const FROM_EMAIL = "library1@email.com";

sendgridMail.setApiKey(SENDGRID_API_KEY);

export const sendMail = async ({
  to,
  subject,
  template,
  data,
}: SendMailProps) => {
  const message = {
    to,
    from: FROM_EMAIL,
    subject,
    html: template,
    substitutions: data,
  };

  sendgridMail.send(message).catch(() => {});
};
