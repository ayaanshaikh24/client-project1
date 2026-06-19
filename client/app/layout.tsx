import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI & Robotics Summer Workshop | Online Program for Kids 8–14",
  description: "Enroll in the ultimate 4-week interactive online AI & Robotics Summer Workshop for kids ages 8–14. Learn block-based logic, train machine learning models, and build autonomous robot projects. Starting 15 July 2026.",
  keywords: [
    "AI for kids",
    "robotics summer camp",
    "online coding class",
    "visual programming",
    "computational logic",
    "STEM workshop",
  ],
  authors: [{ name: "RoboAI Academy" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
