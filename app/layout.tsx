import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  title: "PROTOCOLO PACO :: Sistema de Contingencia - Pista 01",
  description:
    "[ CLASSIFIED SYSTEM WARNING: CONGRATULATIONS PROTOCOL ] -- Acceso restringido. Auditoría de seguridad requerida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${jbMono.variable} font-mono bg-term-bg text-term-green antialiased`}>
        {children}
      </body>
    </html>
  );
}
