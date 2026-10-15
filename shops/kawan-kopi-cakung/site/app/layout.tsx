import type { Metadata, Viewport } from "next";
import { Sofia_Sans, Sofia_Sans_Condensed } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Display: Sofia Sans Condensed 700 only. Body: Sofia Sans, used at 400/500/600.
// Sofia Sans loads as its variable file: Google serves the static 400/500/600 cuts from
// /l/font?kit=...&skey=... URLs that Turbopack's font loader cannot parse.
const display = Sofia_Sans_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-sofia-condensed",
});
const body = Sofia_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sofia",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = {
  themeColor: "#1c2420",
};

// Runs before first paint so the ceiling panels can start dim without a flash.
const jsFlag = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
