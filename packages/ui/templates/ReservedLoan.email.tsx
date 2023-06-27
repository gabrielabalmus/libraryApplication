export interface ReservedLoanProps {
  reader: string;
  byDate: string;
  number: string;
}

export const ReservedLoanEmail = ({
  reader,
  number,
  byDate,
}: ReservedLoanProps) => `<html>
<head>
  <meta charset="utf-8">
  <title>Loan status reserved</title>
</head>  
<body>
  <div style="text-align: center; margin: 30px 0; font-size: 15px">
    <h2 style="margin-bottom: 35px; font-size: 22px">Hi ${reader},</h2>
    <p>We inform you that your loan number <strong>${number}</strong> was successfully placed with status reserved. </p>
    <p>Please pick up the books within 2 days, by ${byDate}, otherwise we will have to cancel the loan.</p>
  </div>
</body>
</html>`;
