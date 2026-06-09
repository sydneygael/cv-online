import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sydney Adjou-Moumouni — Software Engineer",
  description:
    "Portfolio of Sydney Adjou-Moumouni, Software Engineer specialized in Java, distributed architectures and cloud-native platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-slate-50 text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
