import type { Metadata } from "next";
import { Besley, Figtree } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta, ui } from "@/content";

const besley = Besley({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-besley",
});
const figtree = Figtree({
  subsets: ["latin"],
  style: ["normal"],
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
    <html lang="id" className={`${besley.variable} ${figtree.variable}`}>
      <body>
        <a href="#konten" className="skip-link">
          {ui.skip}
        </a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
