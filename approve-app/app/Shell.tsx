"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartColumn, FileText, Globe, Hammer, Inbox, Kanban, List, MapPin, type LucideIcon,
} from "lucide-react";
import { useLeads } from "./useLeads";
import { ToastProvider } from "./components/Toast";
import { SALES, sentTodayCount, todayQueue, type Lead } from "@/lib/leads";

interface NavItem { href: string; label: string; icon: LucideIcon; count?: (l: Lead[]) => number; due?: boolean; match: (p: string) => boolean }

const SALES_NAV: NavItem[] = [
  { href: "/", label: "Today", icon: Inbox, due: true, count: (l) => todayQueue(l, sentTodayCount(l)).length, match: (p) => p === "/" },
  { href: "/pipeline", label: "Pipeline", icon: Kanban, match: (p) => p.startsWith("/pipeline") },
  { href: "/leads", label: "Leads", icon: List, count: (l) => l.filter((x) => SALES.has(x.stage)).length, match: (p) => p.startsWith("/leads") || p.startsWith("/shops") },
  { href: "/metrics", label: "Metrics", icon: ChartColumn, match: (p) => p.startsWith("/metrics") },
];
const PRODUCTION_NAV: NavItem[] = [
  { href: "/production/candidates", label: "Candidates", icon: MapPin, count: (l) => l.filter((x) => x.stage === "candidate").length, match: (p) => p.startsWith("/production/candidates") },
  { href: "/production/briefs", label: "Briefs", icon: FileText, count: (l) => l.filter((x) => x.stage === "brief_ready" || x.stage === "brief_rework").length, match: (p) => p.startsWith("/production/briefs") || p.startsWith("/briefs") },
  { href: "/production/build", label: "Build queue", icon: Hammer, count: (l) => l.filter((x) => ["approved", "brief_approved", "planned", "to_publish"].includes(x.stage)).length, match: (p) => p.startsWith("/production/build") },
  { href: "/production/published", label: "Published", icon: Globe, count: (l) => l.filter((x) => !!x.preview_url).length, match: (p) => p.startsWith("/production/published") },
];
const TABS: NavItem[] = [...SALES_NAV, { href: "/production/candidates", label: "Production", icon: Hammer, match: (p) => p.startsWith("/production") || p.startsWith("/briefs") }];

export default function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const { leads } = useLeads();
  const link = (item: NavItem) => {
    const n = leads && item.count ? item.count(leads) : 0;
    const Icon = item.icon;
    return (
      <Link key={item.href} href={item.href} className="item" aria-current={item.match(path) ? "page" : undefined}>
        <Icon />{item.label}{n > 0 && <span className={`n ${item.due ? "due" : ""}`}>{n}</span>}
      </Link>
    );
  };
  return (
    <ToastProvider>
      <div className="app">
        <nav className="nav" aria-label="Main">
          <Link href="/" className="brand">small<span>shop</span>lp</Link>
          <div className="nav-group"><h2>Sales</h2>{SALES_NAV.map(link)}</div>
          <div className="nav-group"><h2>Production</h2>{PRODUCTION_NAV.map(link)}</div>
          <div className="nav-foot"><Link href="/docs">Commands and prompts</Link></div>
        </nav>
        {/* The lead page, brief editor and docs are documents, not full-height screens. */}
        <main className="main">{/^\/(shops|briefs|docs)\//.test(`${path}/`) ? <div className="page">{children}</div> : children}</main>
      </div>
      <nav className="mobile-tabs" aria-label="Main">
        {TABS.map((t) => { const Icon = t.icon; return <Link key={t.label} href={t.href} aria-current={t.match(path) ? "page" : undefined}><Icon />{t.label}</Link>; })}
      </nav>
    </ToastProvider>
  );
}
