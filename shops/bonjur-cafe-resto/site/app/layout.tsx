import type { Metadata, Viewport } from "next";
import { Rubik, Yellowtail } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// Yellowtail only for the "Bonjur" wordmark; Rubik for everything else.
const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-yellowtail",
});
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = {
  themeColor: "#FBFAF6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${yellowtail.variable} ${rubik.variable}`}>
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
