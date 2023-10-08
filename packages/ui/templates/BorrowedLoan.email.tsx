import colorPalette from "@/theme/colorPalette";

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
  <div style="text-align: center; margin: 30px 0; font-size: 15px; background-color: ${colorPalette.primary.lightest}; padding: 20px; max-width: 500px; margin: 30px auto">
    <h2 style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid ${colorPalette.grey.light}; font-size: 20px; margin-top: 10px">Hi ${reader},</h2>
    <p>We inform you that your loan number <strong>${number}</strong> was successfully placed with status borrowed. </p>
    <p>Please return the books within 30 days, by ${byDate}, otherwise we will have to add penalties.</p>
  </div>
</body>
</html>`;
