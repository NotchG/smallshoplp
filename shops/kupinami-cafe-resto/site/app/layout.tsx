import type { Metadata } from "next";
import { Figtree, Quicksand } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-quicksand",
  display: "swap",
});
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Before first paint: if JS runs and motion is allowed, hold the meter bars tall so the
// settle animation starts from them without a dots-to-tall flash. Cleared by QuietMeter,
// or after 3s if hydration never happens.
const meterScript = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.classList.add('meter-pending');setTimeout(function(){d.classList.remove('meter-pending')},3000)}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${quicksand.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: meterScript }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">Langsung ke konten</a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
