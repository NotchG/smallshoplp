import type { Metadata, Viewport } from "next";
import { Italiana, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-italiana",
});
const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = {
  themeColor: "#0e1120",
};

// Runs before first paint: only with motion allowed does the hero hide its bulbs to light them.
const motionScript = `try{if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.dataset.motion="on"}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${italiana.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <MockupBanner text={meta.banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
