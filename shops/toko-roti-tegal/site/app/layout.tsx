import type { Metadata } from "next";
import { Besley, Libre_Franklin } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, labels, meta } from "@/content";

const besley = Besley({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-besley",
});

const franklin = Libre_Franklin({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-franklin",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${besley.variable} ${franklin.variable}`}>
      <body>
        <a href="#konten" className="skip-link">
          {labels.skip}
        </a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
