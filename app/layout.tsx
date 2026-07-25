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
  title: "Carlos Daniel Mejía Febres | Full-Stack Developer",
  description:
    "Portafolio profesional de Carlos Daniel Mejía Febres, desarrollador Full-Stack especializado en Django, React y Next.js. Loja, Ecuador.",
  keywords: [
    "Carlos Mejía",
    "Full-Stack Developer",
    "Django",
    "React",
    "Next.js",
    "Portafolio",
    "Loja",
    "Ecuador",
  ],
  authors: [{ name: "Carlos Daniel Mejía Febres" }],
  openGraph: {
    title: "Carlos Daniel Mejía Febres | Full-Stack Developer",
    description:
      "Portafolio profesional: Django, React, Next.js y más. Loja, Ecuador.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
