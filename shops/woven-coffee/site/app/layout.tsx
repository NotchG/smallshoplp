import type { Metadata } from "next";
import { Jost, Alegreya_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// Jost: nearest open face to the door's geometric caps. Alegreya Sans: soft humanist body,
// its italic stands in for the label's "Freshly weaved" notes.
const jost = Jost({ subsets: ["latin"], style: ["normal"], display: "swap", variable: "--font-jost" });
const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-alegreya",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jost.variable} ${alegreya.variable}`}>
      <body>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
