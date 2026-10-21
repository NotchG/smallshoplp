import type { Metadata } from "next";
import { Figtree, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-jost",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jost.variable} ${figtree.variable}`}>
      <body>
        <a href="#konten" className="skip-link">
          Langsung ke konten
        </a>
        <MockupBanner text={banner.text} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
