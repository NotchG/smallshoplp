import type { Metadata, Viewport } from "next";
import { Comfortaa, Gelasio } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-comfortaa",
});

const gelasio = Gelasio({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-gelasio",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://nuansa-coffee-barber-mockup.achmedfidel.com"),
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

export const viewport: Viewport = {
  themeColor: "#16215a",
};

// Runs before first paint. When JS is on and motion is allowed, the sign starts unlit
// so the signature moment has no lit-then-dark flash. With JS off nothing changes.
const signScript = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.setAttribute("data-sign","pending")}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={meta.lang} className={`${comfortaa.variable} ${gelasio.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: signScript }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          Lewati ke konten
        </a>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
