import type { OrderCard as Order } from "@/content";
import { mock } from "@/lib/mockup";
import Button from "./Button";
import { ChatIcon } from "./Icons";

// Paper card on maroon. "Pesan sekarang!" in brick italic, as on the owner's menu.
export default function OrderCard({ order }: { order: Order }) {
  return (
    <article className="order" aria-labelledby={`order-${order.id}`}>
      <h3 id={`order-${order.id}`} className="order-title">
        {order.title}
      </h3>
      <p className="order-price t-body" {...mock(order.price.mockup)}>
        {order.price.text}
      </p>
      <ul className="order-lines t-body">
        {order.lines.map((l) => (
          <li key={l.text} {...mock(l.mockup)}>
            {l.text}
          </li>
        ))}
      </ul>
      <p className="order-cta">{order.cta}</p>
      <Button href={order.href} icon={<ChatIcon />} mockup={order.button.mockup} external>
        {order.button.text}
      </Button>
      {order.alt ? (
        <p className="order-alt t-body">
          {order.alt.text}{" "}
          <a className="link link-row num" href={order.alt.href}>
            {order.alt.label}
          </a>
        </p>
      ) : null}
    </article>
  );
}
