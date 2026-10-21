import type { Metadata } from "next";
import { Figtree, Young_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

const youngSerif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-young-serif",
});

const figtree = Figtree({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
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
    <html lang="id" className={`${youngSerif.variable} ${figtree.variable}`}>
      <body>
        <a href="#konten" className="skip-link">
          Langsung ke konten
        </a>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
