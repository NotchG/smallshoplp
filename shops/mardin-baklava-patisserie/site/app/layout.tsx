import type { Metadata, Viewport } from "next";
import { Antonio, Alegreya } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// latin-ext is required for ı, ç, ü, İ in the Turkish names.
const antonio = Antonio({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-antonio",
  display: "swap",
});
const alegreya = Alegreya({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-alegreya",
  display: "swap",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = { themeColor: "#22150f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${antonio.variable} ${alegreya.variable}`}>
      <body>
        <MockupBanner text={meta.banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
