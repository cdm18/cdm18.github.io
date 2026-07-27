import type { Metadata } from "next";
import { Space_Grotesk, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Carlos Daniel Mejía Febres — Full Stack Developer",
  description:
    "Portafolio de Carlos Daniel Mejía Febres, desarrollador Full Stack (Django · React · PostgreSQL · Docker). Estudiante de Ingeniería en Ciencias de la Computación en la UTPL. Loja, Ecuador.",
  keywords: [
    "Carlos Mejía",
    "Full Stack Developer",
    "Django",
    "React",
    "Next.js",
    "PostgreSQL",
    "Docker",
    "Portafolio",
    "Loja",
    "Ecuador",
    "UTPL",
  ],
  authors: [{ name: "Carlos Daniel Mejía Febres" }],
  openGraph: {
    title: "Carlos Daniel Mejía Febres — Full Stack Developer",
    description:
      "Desarrollador Full Stack con productos en producción y software registrado ante el SENADI. Django · React · PostgreSQL · Docker.",
    type: "website",
    locale: "es_EC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
