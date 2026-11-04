import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { shop } from "@/content";

const title = shop.name;
const description = `${shop.name}, ${shop.type} at ${shop.address}`;

export const metadata: Metadata = {
  title,
  description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs: set this to the shop's
  // preview URL from the build prompt. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image" },
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
