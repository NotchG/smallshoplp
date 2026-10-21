import { Bitter, Kaushan_Script } from "next/font/google";

// Bitter (variable slab) for everything; Kaushan Script only for the "kopimade" wordmark,
// a stand-in for the red brush-script sign until the owner sends the logo.
export const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bitter",
});

export const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
  variable: "--font-kaushan",
});
