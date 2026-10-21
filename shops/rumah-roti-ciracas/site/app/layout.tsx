import type { Metadata } from "next";
import { Baloo_2, Yellowtail } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta, skipLink } from "@/content";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yellowtail",
  display: "swap",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Adds `js` to <html> before first paint, so the hero sticker can start lifted
// (CSS) without a flash. With JS off it simply renders stuck.
const jsClass = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${baloo.variable} ${yellowtail.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsClass }} />
      </head>
      <body>
        <a className="skip-link" href="#konten">
          {skipLink}
        </a>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
