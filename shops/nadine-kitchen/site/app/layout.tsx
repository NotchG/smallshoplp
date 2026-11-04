import type { Metadata, Viewport } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Corben (Google Fonts, OFL), latin subset, self-hosted through next/font/local so its
// vertical metrics can be tuned: the stock font box is 1.85em tall (ascent 1.38, descent 0.47)
// around 0.78em caps, which pushes headings down in their line boxes and makes stacked
// lines' boxes collide. These overrides make the box hug the letters. Glyphs are unchanged.
const corben = localFont({
  src: [
    { path: "./fonts/corben-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/corben-700-latin.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-corben",
  adjustFontFallback: false,
  declarations: [
    { prop: "ascent-override", value: "90%" },
    { prop: "descent-override", value: "15%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});

const mplus = M_PLUS_Rounded_1c({
  weight: ["500", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mplus",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://nadine-kitchen-mockup.achmedfidel.com"),
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
  themeColor: "#fffbfc",
};

// Runs before paint: flags the page so the hero letters may start hidden for their
// entrance. Only when motion is allowed; with JS off or reduced motion they render at rest.
const motionFlag = `try{if(window.matchMedia("(prefers-reduced-motion: no-preference)").matches){document.documentElement.setAttribute("data-motion","ok")}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${corben.variable} ${mplus.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
