import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Onest } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-familjen",
});
const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://kopi-goen-mockup.achmedfidel.com"),
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

export const viewport: Viewport = { themeColor: "#13204a" };

// Marks the hero lights "pending" before first paint when motion is allowed, so they can
// switch on without an on-off flash. With JS off or reduced motion the lights are simply on.
const lightsScript =
  "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.setAttribute('data-lights','pending')}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${familjen.variable} ${onest.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: lightsScript }} />
      </head>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
