import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Персональный сайт артиста",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="h-screen grid grid-rows-[auto_1fr_auto] bg-white">
        <Header />
        <main className="flex flex-col overflow-auto hide-scrollbar">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
