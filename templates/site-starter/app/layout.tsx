import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { shop } from "@/content";

export const metadata: Metadata = {
  title: shop.name,
  description: `${shop.name}, ${shop.type} at ${shop.address}`,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MockupBanner shopName={shop.name} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
