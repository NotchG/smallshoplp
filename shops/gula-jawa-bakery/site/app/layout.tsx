import type { Metadata, Viewport } from "next";
import { Archivo, Leckerli_One } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Leckerli One: the looping script closest to the shop's neon sign. Only for "Gula Jawa".
const leckerli = Leckerli_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-leckerli",
});

// Archivo variable with the width axis: headings at wdth 87.5, "BAKERY" at wdth 125.
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = {
  themeColor: "#6a2c26",
};

// Owner review aid: ?tandai outlines every [MOCKUP] item (see globals.css).
const tandaiScript = `try{if(/[?&]tandai\\b/.test(location.search))document.documentElement.setAttribute("data-tandai","")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${leckerli.variable} ${archivo.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: tandaiScript }} />
      </head>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
