import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// One family for display and body: geometric, single-storey "a", like the cup wordmark.
const urbanist = Urbanist({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Runs before paint: motion start states apply only when motion is welcome.
const motionScript =
  "if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches)document.documentElement.classList.add('js-motion')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={urbanist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
