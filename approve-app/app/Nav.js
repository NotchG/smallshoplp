"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShops } from "./useShops";
import { LABELS } from "@/lib/statuses";

const ORDER = ["approved", "brief_rework", "brief_approved", "planned", "built", "owner_approved"];

export default function Nav() {
  const path = usePathname();
  const { shops } = useShops();
  const count = (st) => (shops ? shops.filter((s) => s.status === st).length : 0);
  const tabs = [
    { href: "/candidates", label: "Candidates", n: count("candidate") },
    { href: "/briefs", label: "Briefs", n: count("brief_ready") },
  ];
  const later = ORDER.map((st) => [st, count(st)]).filter(([, n]) => n > 0);

  return (
    <header className="top">
      <Link href="/candidates" className="wordmark">smallshoplp</Link>
      <nav className="tabs" aria-label="Approval queues">
        {tabs.map((t) => (
          <Link key={t.href} href={t.href} aria-current={path.startsWith(t.href) ? "page" : undefined}>
            {t.label}
            {shops && <span className="n">{t.n}</span>}
          </Link>
        ))}
      </nav>
      {later.length > 0 && (
        <p className="pipeline">
          Also in the pipeline: {later.map(([st, n]) => `${n} ${LABELS[st].toLowerCase()}`).join(", ")}
        </p>
      )}
    </header>
  );
}
