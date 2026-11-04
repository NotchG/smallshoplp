import { banner } from "@/content";

// One element: delete it (and its line in layout.tsx) once the owner approves the site.
export default function MockupBanner({ shopName }: { shopName: string }) {
  return (
    <div role="note" className="mockup-banner">
      {banner(shopName)}
    </div>
  );
}
