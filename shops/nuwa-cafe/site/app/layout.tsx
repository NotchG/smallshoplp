import type { Metadata } from "next";
import { Jost, Nunito } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta, skipLink } from "@/content";

// Jost: the facade's thin, widely spaced capitals. Nunito: the friendly owner's voice.
const jost = Jost({ subsets: ["latin"], display: "swap", variable: "--font-jost" });
const nunito = Nunito({ subsets: ["latin"], display: "swap", variable: "--font-nunito" });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Adds js-motion before first paint, only when motion is allowed. The hero toppings are hidden
// under that class (with a 1.5 s CSS failsafe), so with JS off or reduced motion the bowl is
// complete on first paint.
const motionScript =
  "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion')}}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jost.variable} ${nunito.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
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
