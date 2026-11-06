import type { Metadata, Viewport } from "next";
import { Antonio, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Shell from "./Shell";

// Self-hosted at build time: a tall condensed face for titles and shop names, a grotesk for the rest.
const display = Antonio({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-display" });
const sans = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = { title: "smallshoplp · leads" };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a0a0b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
