import type { Metadata } from "next";
import { Young_Serif, Archivo } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { NewTabNote } from "@/components/ActionLink";
import { banner, meta } from "@/content";

const youngSerif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-young-serif",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Adds html.motion-ok before first paint when JS runs and reduced motion is off,
// so the hero's start offsets never apply without JS (see globals.css).
const motionScript =
  "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ok')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${youngSerif.variable} ${archivo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
        <NewTabNote />
      </body>
    </html>
  );
}
