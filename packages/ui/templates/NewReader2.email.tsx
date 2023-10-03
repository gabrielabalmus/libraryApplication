export interface NewReader2Props {
  reader: string;
}

export const NewReader2Email = ({ reader }: NewReader2Props) => `<html>
  <head>
    <meta charset="utf-8">
    <title>New reader account</title>
  </head>  
  <body>
    <div style="text-align: center; margin: 30px 0; font-size: 15px">
      <h2 style="margin-bottom: 35px; font-size: 22px">Hi ${reader},</h2>
      <p>Your reader account has been created.</p>
    </div>
  </body>
  </html>`;
