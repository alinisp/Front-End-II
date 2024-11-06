//import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Primeira aplicação",
  description: "Aplicação de front-end II",
  charset: 'UTF-8',
  author: 'Alini Perroni',
  keywords: 'HTML, CSS, JavaScript, React, Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
