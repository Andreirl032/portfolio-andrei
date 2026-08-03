import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "./components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrei Ramos Lopes | Portfolio",
  description:
    "Portfolio de Andrei Ramos Lopes — Desenvolvedor de software especializado em web e mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
