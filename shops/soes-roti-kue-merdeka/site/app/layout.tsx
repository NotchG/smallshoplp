import type { Metadata } from "next";
import { Archivo, Leckerli_One } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// "Merdeka" only, like the brown script on the shop's door and boxes.
const leckerli = Leckerli_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-leckerli",
});

// Everything else. Variable, with the width axis for the wide door capitals and headings.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
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
    <html lang="id" className={`${leckerli.variable} ${archivo.variable}`}>
      <body>
        <a href="#konten" className="skip-link">
          {meta.skipLink}
        </a>
        <MockupBanner text={meta.banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
