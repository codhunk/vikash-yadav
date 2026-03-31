import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Clinical Sanctuary | Dr. Vikash Yadav",
  description: "Bespoke medical care and specialized treatment by Dr. Vikash Yadav. Experience a sanctuary of expertise and approachability.",
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter antialiased bg-surface text-on-surface">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
