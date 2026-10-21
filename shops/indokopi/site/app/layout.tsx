import type { Metadata, Viewport } from "next";
import { Archivo, Roboto_Slab } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = { themeColor: "#1e1d1b" };

// Runs before paint: marks JS as available (lets the hero sign start dusk-dim without a flash)
// and, with #cek in the URL, outlines every [MOCKUP] item for the owner.
const headScript =
  "document.documentElement.classList.add('js');" +
  "if(location.hash==='#cek')document.documentElement.classList.add('show-mockup');";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${archivo.variable} ${robotoSlab.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
      </head>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
