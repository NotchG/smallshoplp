import type { Metadata } from "next";
import { Paytone_One, Rubik } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

const paytone = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-paytone",
});
const rubik = Rubik({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Hides the hero cake and its card before first paint so the signature moment can play.
// Skipped for reduced motion; with JS off the class is never added and everything shows.
const motionGate =
  "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ok')}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${paytone.variable} ${rubik.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionGate }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          {meta.skip}
        </a>
        <header>
          <MockupBanner text={meta.banner} />
        </header>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
