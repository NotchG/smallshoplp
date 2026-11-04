import type { Metadata } from "next";
import { Besley, Atkinson_Hyperlegible_Next } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta, shop } from "@/content";

// Besley (Clarendon revival) for the name, headings and the decode line.
const besley = Besley({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-besley",
});

// Atkinson Hyperlegible Next for everything else: drawn for legibility.
const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-atkinson",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://libra-partners-law-firm-mockup.achmedfidel.com"),
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${besley.variable} ${atkinson.variable}`}>
      <body>
        <MockupBanner shopName={shop.name} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
