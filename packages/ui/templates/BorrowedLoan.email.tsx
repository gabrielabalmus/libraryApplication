export interface BorrowedLoanProps {
  reader: string;
  byDate: string;
  number: string;
}

export const BorrowedLoanEmail = ({
  reader,
  number,
  byDate,
}: BorrowedLoanProps) => `<html>
<head>
  <meta charset="utf-8">
  <title>Loan status borrowed</title>
</head>  
<body>
  <div style="text-align: center; margin: 30px 0; font-size: 15px">
    <h2 style="margin-bottom: 35px; font-size: 22px">Hi ${reader},</h2>
    <p>We inform you that your loan number <strong>${number}</strong> was successfully placed with status borrowed. </p>
    <p>Please return the books within 30 days, by ${byDate}, otherwise we will have to add penalties.</p>
  </div>
</body>
</html>`;
