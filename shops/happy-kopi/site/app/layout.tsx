import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Mali } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta, shop } from "@/content";
import { prePaintScript } from "@/lib/today";

const mplus = M_PLUS_Rounded_1c({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mplus",
});
const mali = Mali({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mali",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${mplus.variable} ${mali.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prePaintScript }} />
      </head>
      <body>
        <MockupBanner shopName={shop.name} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
