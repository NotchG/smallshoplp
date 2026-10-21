import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";
import type { Item } from "@/content";
import ArchFrame from "@/components/ui/ArchFrame";
import { Camera } from "@/components/ui/Icons";

// An arch-shaped slot for the owner's photo: holds a drawing until the real photo arrives,
// tagged in small caps so the owner knows which picture goes here.
export default function PhotoSlot({
  tag,
  children,
  className = "",
  label,
}: {
  tag: Item;
  children?: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <figure className={`photo-slot ${className}`} {...mock(tag.mockup)}>
      <ArchFrame shapeClassName="arch-window arch-outline">
        <div role="img" aria-label={label} className="h-full w-full">
          {children}
        </div>
      </ArchFrame>
      <figcaption className="t-label slot-tag">
        <Camera />
        <span>{tag.text}</span>
      </figcaption>
    </figure>
  );
}
