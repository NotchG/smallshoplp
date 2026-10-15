import type { Metadata, Viewport } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { site } from "@/content";

// One family with a width axis: the hierarchy is carried by wdth (design brief §4).
const saira = Saira({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = {
  themeColor: "#121014",
};

// Marks the page as JS-capable before first paint, so the hero lines can start off
// (only under html.js) and switch on. Without JS everything is visible.
const jsFlag = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.lang} className={saira.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          {site.skipLink}
        </a>
        <MockupBanner text={site.banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
