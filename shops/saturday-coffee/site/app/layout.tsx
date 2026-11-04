import type { Metadata } from "next";
import { Fredoka, Figtree } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Fredoka: soft rounded display (500–600 only). Figtree: body (400/600).
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-fredoka",
});
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://saturday-coffee-mockup.achmedfidel.com"),
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
    <html lang="id" className={`${fredoka.variable} ${figtree.variable}`}>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
