import type { Metadata } from "next";
import { Archivo, Holtwood_One_SC } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta, skipLink } from "@/content";

// Wood-type poster face for the name only (like the "ELUD BAKERY" fascia), grotesque for the rest.
const display = Holtwood_One_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-holtwood",
});
const body = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#konten" className="skip-link">
          {skipLink}
        </a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
