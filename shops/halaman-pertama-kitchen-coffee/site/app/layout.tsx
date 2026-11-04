import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// One family for display and body: geometric, single-storey "a", like the cup wordmark.
const urbanist = Urbanist({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://halaman-pertama-kitchen-coffee-mockup.achmedfidel.com"),
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

// Runs before paint: motion start states apply only when motion is welcome.
const motionScript =
  "if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches)document.documentElement.classList.add('js-motion')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={urbanist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
