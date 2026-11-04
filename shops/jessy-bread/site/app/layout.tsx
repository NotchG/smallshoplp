import type { Metadata } from "next";
import { Paytone_One, Rubik } from "next/font/google";
import localFont from "next/font/local";
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
// The logotype's own copy of Paytone One (same Google latin file, SIL OFL), with its text box
// trimmed to the ink. The stock box (1.11em up, 0.28em down) is taller than the logotype's tight
// leading, so "Jessy" and "Bread" boxes overlapped although the letters don't touch.
const paytoneLogo = localFont({
  src: "./fonts/paytone-one-latin-400.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-logo",
  declarations: [
    { prop: "ascent-override", value: "70%" },
    { prop: "descent-override", value: "20%" },
    { prop: "line-gap-override", value: "0%" },
  ],
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
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://jessy-bread-mockup.achmedfidel.com"),
  openGraph: {
    type: "website",
    url: "/",
    title: meta.title,
    description: meta.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: meta.title }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Hides the hero cake and its card before first paint so the signature moment can play.
// Skipped for reduced motion; with JS off the class is never added and everything shows.
const motionGate =
  "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ok')}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${paytone.variable} ${paytoneLogo.variable} ${rubik.variable}`} suppressHydrationWarning>
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
