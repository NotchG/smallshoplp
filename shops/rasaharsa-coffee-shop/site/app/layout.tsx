import type { Metadata, Viewport } from "next";
import { M_PLUS_Rounded_1c, Figtree } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, footer, meta } from "@/content";

const rounded = M_PLUS_Rounded_1c({
  weight: ["700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rounded",
});
const sans = Figtree({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = { themeColor: "#383c42" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${rounded.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* With JS and motion allowed, hide the pendants until the hero's GSAP sets their start state. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('lampu-pending')}catch(e){}",
          }}
        />
      </head>
      <body>
        <a href="#konten" className="skip">{footer.skip}</a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
