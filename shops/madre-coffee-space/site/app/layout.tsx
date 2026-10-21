import type { Metadata } from "next";
import { Bricolage_Grotesque, Nunito } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-display",
  display: "swap",
});
const body = Nunito({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Flash guard for the hero tags: only hide them before animating when motion is allowed.
const motionGuard = `try{if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("js-motion")}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionGuard }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          Langsung ke konten
        </a>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
