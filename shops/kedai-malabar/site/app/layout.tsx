import type { Metadata, Viewport } from "next";
import { Jost, Yellowtail } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });
const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yellowtail",
  display: "swap",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = { themeColor: "#1c1a18" };

// Marks the page as JS-capable before first paint, so the hero lights can start dark
// and switch on, instead of flashing lit → dark → lit on hydration.
const jsFlag = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jost.variable} ${yellowtail.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          Langsung ke isi
        </a>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
