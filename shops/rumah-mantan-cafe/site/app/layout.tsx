import type { Metadata } from "next";
import { Archivo, Londrina_Solid } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// Londrina Solid: the mural's hand-painted solid caps. Archivo: everything that's read.
const londrina = Londrina_Solid({
  weight: ["400", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-londrina",
});
const archivo = Archivo({ subsets: ["latin"], display: "swap", variable: "--font-archivo" });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Runs before first paint: marks the page as animated unless the visitor asked for reduced
// motion, so the hero sign can hide "PERNAH" until its flap (see .flap-* in globals.css).
const motionFlag = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("motion")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${londrina.variable} ${archivo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>
        <MockupBanner text={meta.banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
