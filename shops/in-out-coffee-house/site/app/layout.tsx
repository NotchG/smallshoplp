import type { Metadata } from "next";
import { League_Spartan, Nunito } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta, skipLink } from "@/content";

const display = League_Spartan({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});
const body = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Marks the page as scripted before first paint, so the two hero arrowheads can start hidden
// and rise in once (never the text). Without JS, or with reduced motion, they stay in place.
const jsFlag = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <a className="skip-link" href="#konten">
          {skipLink}
        </a>
        <MockupBanner text={banner.text} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
