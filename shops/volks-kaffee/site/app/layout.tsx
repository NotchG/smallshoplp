import type { Metadata, Viewport } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

const rounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
  variable: "--font-rounded",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = { themeColor: "#5A1E2C" };

// Runs before first paint: marks JS as present (the sign starts dark and GSAP switches it on)
// and turns the sign off on Sundays in Asia/Jakarta, when the shop is closed.
const prePaint = `(function(){var d=document.documentElement;d.classList.add('js');try{var w=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Jakarta',weekday:'short'}).format(new Date());if(w==='Sun')d.setAttribute('data-closed','');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={rounded.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prePaint }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          Langsung ke konten
        </a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
