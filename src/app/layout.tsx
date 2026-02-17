// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Importando as fontes do Google
import "./globals.css";

// Configurando a fonte principal (leitura fluida)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Configurando a fonte de código (pra dar aquele ar de engenharia)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Victor Dev | Full Stack Engineer",
  description: "Portfólio de Victor, desenvolvedor Full Stack (Java/React).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" class="dark"> {/* Forçando o dark mode direto na tag html */}
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}