import type { Metadata, Viewport } from "next";
import { Bungee, Rubik } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

const bungee = Bungee({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-bungee" });
const rubik = Rubik({ subsets: ["latin"], display: "swap", variable: "--font-rubik" });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = { themeColor: "#b5522e" };

// Adds .motion-ok before first paint when motion is allowed, so the hero shutter can cover
// the photo from the start. With JS off or reduced motion, the shutter never shows.
const motionOk =
  "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ok')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${bungee.variable} ${rubik.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionOk }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">Langsung ke konten</a>
        <MockupBanner text={meta.banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
