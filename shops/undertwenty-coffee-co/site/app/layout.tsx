import type { Metadata } from "next";
import { Archivo, Yellowtail } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Archivo carries both weight and width (the condensed U20 capitals); Yellowtail is only "Coffee. Co".
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});
const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-yellowtail",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${archivo.variable} ${yellowtail.variable}`}>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
