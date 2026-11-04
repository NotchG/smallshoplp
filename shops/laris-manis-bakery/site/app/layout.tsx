import type { Metadata, Viewport } from "next";
import { Baloo_2, Oleo_Script } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

const oleo = Oleo_Script({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oleo",
});
const baloo = Baloo_2({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://laris-manis-bakery-mockup.achmedfidel.com"),
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

export const viewport: Viewport = { themeColor: "#FBF4E4" };

// Hides the crate breads only when the drop will run, and gives up after 2.5s.
const motionOk = `(function(){try{if(window.matchMedia("(prefers-reduced-motion: no-preference)").matches){var d=document.documentElement;d.classList.add("motion-ok");setTimeout(function(){d.classList.remove("motion-ok")},2500)}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${oleo.variable} ${baloo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionOk }} />
      </head>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
