import colorPalette from "@/theme/colorPalette";

export interface NewReader2Props {
  reader: string;
}

export const NewReader2Email = ({ reader }: NewReader2Props) => `<html>
  <head>
    <meta charset="utf-8">
    <title>New reader account</title>
  </head>  
  <body>
    <div style="text-align: center; margin: 30px 0; font-size: 15px; background-color: ${colorPalette.primary.lightest}; padding: 20px; max-width: 500px; margin: 30px auto">
      <h2 style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid ${colorPalette.grey.light}; font-size: 20px; margin-top: 10px">Hi ${reader},</h2>
      <p>Your reader account has been created.</p>
    </div>
  </body>
  </html>`;
