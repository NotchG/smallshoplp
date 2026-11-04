import type { Metadata, Viewport } from "next";
import { Antonio, Gantari } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

const antonio = Antonio({ subsets: ["latin"], display: "swap", variable: "--font-antonio" });
const gantari = Gantari({ subsets: ["latin"], display: "swap", variable: "--font-gantari" });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://walties-rooftop-cafe-mockup.achmedfidel.com"),
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

export const viewport: Viewport = { themeColor: "#121C35" };

// Adds `js` to <html> before first paint so the bulbs can start "off" with no lit-off-lit
// flash. If the hero timeline hasn't started within 2.5 s (GSAP failed or a very slow
// hydration), the class comes off again and the page shows its final, lit state.
const headScript = `(function(){var d=document.documentElement;d.classList.add('js');setTimeout(function(){if(!window.__lampu){d.classList.remove('js')}},2500)})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${antonio.variable} ${gantari.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
      </head>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
