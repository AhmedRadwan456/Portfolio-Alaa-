import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundGlows from "@/components/layout/BackgroundGlows";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alaa Samir | .NET BackEnd Developer Portfolio",
  description: "Explore the professional portfolio of Alaa Samir, a backend specialist in ASP.NET, C#, Clean Architecture, and integration.",
  keywords: [".NET Developer", "C#", "ASP.NET Web API", "BackEnd Developer", "Alaa Samir", "Software Engineer", "Egypt"],
  authors: [{ name: "Alaa Samir" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-dark text-text-main selection:bg-brand-purple/30 selection:text-white">
        <BackgroundGlows />
        {children}
      </body>
    </html>
  );
}
