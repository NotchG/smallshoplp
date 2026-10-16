"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShops } from "./useShops";
import { LABELS } from "@/lib/statuses";
import type { Status } from "@/lib/types";

const ORDER: Status[] = ["approved", "brief_rework", "brief_approved", "planned", "built", "owner_approved"];

export default function Nav() {
  const path = usePathname();
  const { shops } = useShops();
  const count = (st: Status) => (shops ? shops.filter((s) => s.status === st).length : 0);
  const tabs: { href: string; label: string; n: number | null; match?: (p: string) => boolean }[] = [
    { href: "/", label: "Dashboard", n: null, match: (p) => p === "/" || p.startsWith("/shops") },
    { href: "/candidates", label: "Candidates", n: count("candidate") },
    { href: "/briefs", label: "Briefs", n: count("brief_ready") },
    { href: "/docs", label: "Docs", n: null },
  ];
  const later = ORDER.map((st): [Status, number] => [st, count(st)]).filter(([, n]) => n > 0);

  return (
    <header className="top">
      <Link href="/" className="wordmark">smallshoplp</Link>
      <nav className="tabs" aria-label="Approval queues">
        {tabs.map((t) => (
          <Link key={t.href} href={t.href} aria-current={(t.match ? t.match(path) : path.startsWith(t.href)) ? "page" : undefined}>
            {t.label}
            {shops && t.n !== null && <span className="n">{t.n}</span>}
          </Link>
        ))}
      </nav>
      {later.length > 0 && (path.startsWith("/candidates") || path.startsWith("/briefs")) && (
        <p className="pipeline">
          Also in the pipeline: {later.map(([st, n]) => `${n} ${LABELS[st].toLowerCase()}`).join(", ")}
        </p>
      )}
    </header>
  );
}
