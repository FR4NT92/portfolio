import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Francisco. — Portfolio",
  description: "Diseño en Comunicación Visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    // Le sacamos el scroll-smooth de Tailwind porque ahora Lenis toma el control
    <html lang="es">
      <body className={`${montserrat.className} bg-[#e6e6e6] text-[#1a1a1a] antialiased overflow-x-hidden`}>
        <SmoothScroll>
          {children as any}
        </SmoothScroll>
      </body>
    </html>
  );
}