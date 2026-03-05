import localFont from "next/font/local";
import { Schema } from "../component/Schema";

import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Schema />
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "ScholarClone – AI ERP Platform for Schools",
  description:
    "ScholarClone is an AI-powered ERP platform designed for schools to automate attendance, academic management, and analytics using artificial intelligence.",
  
  keywords: [
    "AI ERP for schools",
    "school ERP India",
    "ScholarClone",
    "AI attendance system",
    "school management software",
    "ERP Himachal Pradesh"
  ],

  openGraph: {
    title: "ScholarClone AI ERP",
    description: "AI-powered ERP platform for educational institutions",
    url: "https://hp.scholarclone.com",
    siteName: "ScholarClone",
    type: "website"
  }
}
