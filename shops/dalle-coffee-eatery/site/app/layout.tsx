import type { Metadata } from "next";
import { Hanken_Grotesk, Marcellus } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-marcellus",
});

const hanken = Hanken_Grotesk({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://dalle-coffee-eatery-mockup.achmedfidel.com"),
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

// Runs before first paint. Adds `motion-ok` only when motion is allowed, so the hero's
// from-states (CSS, under .motion-ok) never apply with JS off or reduced motion.
// If the hero has not started within 1.2s (slow bundle), drop the class so nothing stays hidden.
const motionGate = `(function(){try{var d=document.documentElement;if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion-ok');setTimeout(function(){if(!window.__dalleHero){d.classList.remove('motion-ok')}},1200)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={meta.lang} className={`${marcellus.variable} ${hanken.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionGate }} />
      </head>
      <body>
        <MockupBanner text={banner.text} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
