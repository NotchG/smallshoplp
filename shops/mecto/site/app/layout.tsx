import type { Metadata } from "next";
import { Gantari } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta, skipLink } from "@/content";

const gantari = Gantari({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gantari",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Holds the hero LED lines dark until their timeline starts, only when motion is allowed.
// Without JS (or with reduced motion) the class is never set and the lines render lit.
const ledWait =
  "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('led-wait')}}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={gantari.variable} suppressHydrationWarning>
      <head>
        {/* Inline so it runs at parse time, before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: ledWait }} />
      </head>
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
