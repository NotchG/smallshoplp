import type { Metadata } from "next";
import { Shantell_Sans, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// Display: hand-drawn face from the single-line drawing tradition the mural belongs to.
const display = Shantell_Sans({
  subsets: ["latin"],
  axes: ["INFM", "BNCE"],
  display: "swap",
  variable: "--font-shantell",
});

// Body: clean rounded sans.
const body = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-mplus",
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
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
