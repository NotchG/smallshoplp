import type { Metadata } from "next";
import { Fredoka, Figtree } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

const fredoka = Fredoka({
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
});
const figtree = Figtree({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://sajenak-mockup.achmedfidel.com"),
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

// Before first paint: park the logo's cups in their start pose so the clink never jumps.
// Skipped for reduced motion; released by ClinkMark, or after 3 s if scripts fail.
const clinkPrePaint = `(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){var r=document.documentElement;r.classList.add('clink-pending');setTimeout(function(){r.classList.remove('clink-pending')},3000)}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${fredoka.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: clinkPrePaint }} />
      </head>
      <body>
        <MockupBanner text={meta.banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
