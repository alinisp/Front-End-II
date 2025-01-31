// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/index";

export const metadata = {
  title: "Clínica Médica",
  description: "Agendamento online de consultas",
  charset: 'UTF-8',
  author: 'Alini Perroni',
  keywords: 'HTML, CSS, JavaScript, React, Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}