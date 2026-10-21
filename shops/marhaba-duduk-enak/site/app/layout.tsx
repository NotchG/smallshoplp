import type { Metadata, Viewport } from "next";
import { Signika } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// Signika: a signage and wayfinding face, echoing the white lettering on the window.
const signika = Signika({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-signika",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = {
  themeColor: "#565C3E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={signika.variable}>
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
