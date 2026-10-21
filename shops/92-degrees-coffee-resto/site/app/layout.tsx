import type { Metadata } from "next";
import { Figtree, Unbounded } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["600", "800"],
  display: "swap",
  variable: "--font-unbounded",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
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
    <html lang="id" className={`${unbounded.variable} ${figtree.variable}`}>
      <body>
        <a href="#konten" className="skip-link">
          {meta.skip}
        </a>
        <MockupBanner text={meta.banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
