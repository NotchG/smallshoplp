import type { Metadata } from "next";
import { Federant, Gantari } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta, skipLink } from "@/content";

const display = Federant({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-federant",
});

const body = Gantari({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gantari",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#konten" className="skip-link">
          {skipLink}
        </a>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
