import type { Metadata, Viewport } from "next";
import { Antonio, Atkinson_Hyperlegible_Next } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { copy } from "@/content";

const antonio = Antonio({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-antonio",
});
// Variable font (one file per style covers 400 and 700).
const atkinson = Atkinson_Hyperlegible_Next({
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-atkinson",
  fallback: ["Atkinson Hyperlegible", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://sedap-wangi-bakery-mockup.achmedfidel.com"),
  openGraph: {
    type: "website",
    url: "/",
    title: copy.metaTitle,
    description: copy.metaDescription,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: copy.metaTitle }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = { themeColor: "#5c1620" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${antonio.variable} ${atkinson.variable}`}>
      <body>
        <MockupBanner text={copy.banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
