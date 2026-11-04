import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import PhotoPrefetch from "@/components/PhotoPrefetch";
import { labels, meta } from "@/content";

// Jost only: its geometric lowercase echoes the 2sons wordmark (design brief §4).
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://2sons-coffee-mockup.achmedfidel.com"),
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
  themeColor: "#c4c8ce",
};

// Runs before paint. The hero's lights-off start state only exists under data-motion="on",
// so with reduced motion or no JS the page is lit from the first frame.
const motionGate =
  "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.motion='on'}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={jost.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionGate }} />
      </head>
      <body>
        <a className="skip-link" href="#konten">
          {labels.skip}
        </a>
        <MockupBanner />
        <SmoothScroll />
        <PhotoPrefetch />
        {children}
      </body>
    </html>
  );
}
