import type { Metadata, Viewport } from "next";
import { M_PLUS_Rounded_1c, Courier_Prime } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta, a11y } from "@/content";

const rounded = M_PLUS_Rounded_1c({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rounded",
});
const courier = Courier_Prime({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-courier",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = { themeColor: "#1E1C1A" };

// Adds .motion-ok before first paint, only when reduced motion is off, so the hero plate
// pieces can start hidden without a flash. With JS off the plate renders complete.
const motionScript = `try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion-ok')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${rounded.variable} ${courier.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <a className="skip-link" href="#konten">{a11y.skip}</a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
