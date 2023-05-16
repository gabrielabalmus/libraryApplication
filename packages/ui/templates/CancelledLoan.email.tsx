import { CancelledLoanProps } from "./templates.type";

export const CancelledLoanEmail = ({
  reader,
  number,
}: CancelledLoanProps) => `<html>
<head>
  <meta charset="utf-8">
  <title>Loan status cancelled</title>
</head>  
<body>
  <div style="text-align: center; margin: 30px 0; font-size: 15px">
    <h2 style="margin-bottom: 35px; font-size: 22px">Hi ${reader},</h2>
    <p>We inform you that your loan number <strong>${number}</strong> was cancelled.</p>
  </div>
</body>
</html>`;
