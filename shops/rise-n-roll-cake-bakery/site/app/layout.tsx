import type { Metadata, Viewport } from "next";
import { Figtree, Young_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { a11y, banner, meta } from "@/content";

const display = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-young-serif",
});

const body = Figtree({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = {
  themeColor: "#A9BC8E",
};

// Runs before first paint: marks the page as "motion allowed" so the hero slice can start
// tucked into the cake. With JS off or reduced motion, the class never appears and the
// slice is drawn already pulled out.
const motionFlag =
  "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ok')}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          {a11y.skip}
        </a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
