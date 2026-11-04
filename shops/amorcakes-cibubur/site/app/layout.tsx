import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// Fredoka: the sign's rounded lowercase, headings, prices, stickers, plaque writing.
const fredoka = Fredoka({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-fredoka",
});

// Nunito: body copy, buttons, labels, form controls.
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://amorcakes-cibubur-mockup.achmedfidel.com"),
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

// Marks the page as JS-capable before first paint, so the hero plaque can start blank
// and be piped. With JS off the class never lands and the writing is simply there.
// Safety net: if the hero script hasn't started within 4s, show the writing anyway.
const jsFlag = `(function(){var d=document.documentElement;d.classList.add('js');setTimeout(function(){if(!window.__amorPiping)d.classList.remove('js')},4000)})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${fredoka.variable} ${nunito.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
