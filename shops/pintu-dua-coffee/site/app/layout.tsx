import type { Metadata, Viewport } from "next";
import { Archivo, Fredoka } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// Fredoka: the rounded geometric of the wall sign. Archivo (wght + wdth): body and spaced-caps labels.
const fredoka = Fredoka({ subsets: ["latin"], display: "swap", variable: "--font-fredoka" });
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://pintu-dua-coffee-mockup.achmedfidel.com"),
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

export const viewport: Viewport = { themeColor: "#3A3A36" };

// Before first paint, and only when JS runs and motion is allowed: start the hero sign switched off,
// so the GSAP switch-on has a single dip. No JS, reduced motion, or a failed bundle = sign stays lit
// (the timeout relights it if the animation never ran).
const signBoot = `(function(){try{var d=document.documentElement;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.setAttribute("data-sign","off");setTimeout(function(){if(d.getAttribute("data-sign")==="off")d.removeAttribute("data-sign")},2500)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${fredoka.variable} ${archivo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: signBoot }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          Langsung ke isi
        </a>
        <MockupBanner text={meta.banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
