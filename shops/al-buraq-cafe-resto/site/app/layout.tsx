import type { Metadata } from "next";
import { Rakkas, Readex_Pro } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, metadata as meta, skipLink } from "@/content";

const rakkas = Rakkas({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-rakkas" });
const readex = Readex_Pro({ subsets: ["latin"], display: "swap", variable: "--font-readex" });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${rakkas.variable} ${readex.variable}`} suppressHydrationWarning>
      <head>
        {/* Lets the lantern start dark only when it will animate (see globals.css). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-motion')}catch(e){}",
          }}
        />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          {skipLink}
        </a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
