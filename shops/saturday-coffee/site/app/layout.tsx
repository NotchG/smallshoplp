import type { Metadata } from "next";
import { Fredoka, Figtree } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Fredoka: soft rounded display (500–600 only). Figtree: body (400/600).
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-fredoka",
});
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600"],
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
    <html lang="id" className={`${fredoka.variable} ${figtree.variable}`}>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
