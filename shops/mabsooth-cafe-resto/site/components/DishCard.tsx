import type { Dish } from "@/content";
import { mock } from "@/lib/mockup";
import { LycheeTea, RiceBowl, TeaPot } from "@/components/Illustrations";

// Name and price on one baseline, 12px apart (never pinned to the far edge).
export function NamePrice({ dish, as: Tag = "h3" }: { dish: Pick<Dish, "name" | "price">; as?: "h3" | "p" }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <Tag className="font-display t-lead" {...mock(dish.name.mockup)}>
        {dish.name.text}
      </Tag>
      <p className="nums t-body font-medium text-gold" {...mock(dish.price.mockup)}>
        {dish.price.text}
      </p>
    </div>
  );
}

function Visual({ dish, className }: { dish: Dish; className: string }) {
  if (dish.visual === "rice-bowl") return <RiceBowl label={dish.alt} className={className} />;
  if (dish.visual === "lychee-tea") return <LycheeTea label={dish.alt} className={className} />;
  if (dish.visual === "teapot") return <TeaPot label={dish.alt} className={className} />;
  return null;
}

// Phone: drawing on the left, text beside it. Desktop: drawing on top.
export default function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="grid content-start grid-cols-[120px_minmax(0,1fr)] items-start gap-x-4 sm:grid-cols-[160px_minmax(0,1fr)] lg:grid-cols-1 lg:gap-y-4">
      <Visual dish={dish} className="h-auto w-full max-w-[240px]" />
      <div className="pt-1 lg:pt-0">
        <NamePrice dish={dish} />
        <p className="mt-2 text-rattan-dim">{dish.desc}</p>
      </div>
    </article>
  );
}
