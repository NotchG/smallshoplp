import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Shrikhand: hand-painted sign lettering, h1 and h2 only. Archivo: everything else,
// with the width axis for narrow menu tiles.
// Shrikhand (OFL) latin subset, self-hosted through next/font so its line box can be trimmed:
// the font reserves 1.46em for 0.95em of letters, which made the stacked name lines' boxes
// overlap at line-height 1.05. Ascent 80% / descent 25% fits the box to the letters.
const shrikhand = localFont({
  src: "./fonts/shrikhand-latin-400.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-shrikhand",
  declarations: [
    { prop: "ascent-override", value: "80%" },
    { prop: "descent-override", value: "25%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});
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

export const viewport: Viewport = {
  themeColor: "#ba2118",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${shrikhand.variable} ${archivo.variable}`}>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
