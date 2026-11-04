import type { Metadata } from "next";
import { M_PLUS_1, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// latin-ext is required: ō (U+014D) is not in Google's latin subset.
const rounded = M_PLUS_Rounded_1c({
  weight: ["300", "400"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--next-font-rounded",
});
const text = M_PLUS_1({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--next-font-text",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://kyo-coffee-roaster-mockup.achmedfidel.com"),
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
    <html lang="id" className={`${rounded.variable} ${text.variable}`}>
      <body>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
