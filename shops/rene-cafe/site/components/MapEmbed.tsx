"use client";
import { useEffect, useRef } from "react";
import { shop, ui } from "@/content";

// Google Maps embed in a steel frame. Focus inside a cross-origin iframe doesn't match
// :focus / :focus-within on the frame, so the focus ring is set from JS (window blur).
export default function MapEmbed({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = ref.current;
    const iframe = frame?.querySelector("iframe");
    if (!frame || !iframe) return;
    let t = 0;
    const check = () => {
      window.clearTimeout(t);
      t = window.setTimeout(() => {
        frame.classList.toggle("is-focused", document.activeElement === iframe);
      }, 0);
    };
    window.addEventListener("blur", check);
    window.addEventListener("focus", check);
    document.addEventListener("focusin", check);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("blur", check);
      window.removeEventListener("focus", check);
      document.removeEventListener("focusin", check);
    };
  }, []);

  return (
    <div ref={ref} className={`steel-frame map-frame ${className}`}>
      {/* Shown until the lazy map loads, or if it is blocked */}
      <p className="map-fallback t-small" aria-hidden="true">
        {ui.mapLoading}
        <br />
        {shop.address}
      </p>
      <iframe
        src={shop.mapEmbedUrl}
        title={ui.mapTitle}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
