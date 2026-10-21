import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta, ui } from "@/content";
import { bitter, kaushan } from "@/lib/fonts";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export const viewport: Viewport = {
  themeColor: "#1F2B30",
};

// Runs before first paint. Only when motion is allowed, it hides the lit sign, glow and
// room warmth so the sign can switch on. A CSS failsafe shows them after 2.5s regardless.
const prePaint = `try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('sign-pending')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${bitter.variable} ${kaushan.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prePaint }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          {ui.skip}
        </a>
        <MockupBanner />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
