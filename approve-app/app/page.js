"use client";
import Link from "next/link";
import { useState } from "react";
import { useShops } from "./useShops";
import CopyBlock from "./components/CopyBlock";
import OnlineBadge, { useOnline } from "./components/OnlineBadge";
import { BATCH } from "@/lib/pipeline";
import { LABELS } from "@/lib/statuses";

function TaskRow({ shop, side }) {
  return (
    <Link href={`/shops/${shop.slug}`} className="task">
      <span>
        <span className="name">{shop.name}</span>
        <span className="meta" style={{ display: "block", margin: 0 }}>{[shop.type, shop.address].filter(Boolean).join(", ")}</span>
      </span>
      <span className="task-side">{side}</span>
    </Link>
  );
}

function SiteCard({ shop }) {
  const online = useOnline(shop.slug, !!shop.preview_url);
  const [noShot, setNoShot] = useState(false);
  const step = shop.status === "owner_approved" ? "Owner approved"
    : !shop.coolify_uuid ? "Not published" : shop.outreach_sent_at ? "Sent to owner" : "Ready to send";
  return (
    <Link href={`/shops/${shop.slug}`} className="site">
      <div className="site-thumb">
        {noShot ? <div className="none">No screenshot yet</div> : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`/api/shops/${shop.slug}/file?path=screenshots/1440-fold.png`} alt="" onError={() => setNoShot(true)} />
        )}
      </div>
      <div className="site-body">
        <span className="name">{shop.name}</span>
        <span className="meta" style={{ margin: 0 }}>{step}</span>
        {shop.preview_url ? <OnlineBadge state={online} /> : <span className="badge">No link yet</span>}
      </div>
    </Link>
  );
}

function Group({ title, shops, command, note, side }) {
  if (!shops.length) return null;
  return (
    <div>
      <div className="group-head">
        <h3>{title} <span className="n" style={{ color: "var(--muted)" }}>{shops.length}</span></h3>
      </div>
      {command && <CopyBlock label={note} text={command} />}
      <div className="task-list" style={{ marginTop: command ? 10 : 0 }}>
        {shops.map((s) => <TaskRow key={s.slug} shop={s} side={side ? side(s) : LABELS[s.status]} />)}
      </div>
    </div>
  );
}

export default function Home() {
  const { shops, error } = useShops();
  if (error) return <p className="error">{error}</p>;
  if (!shops) return <p className="empty">Loading…</p>;

  const by = (fn) => shops.filter(fn);
  const candidates = by((s) => s.status === "candidate");
  const briefsToReview = by((s) => s.status === "brief_ready");
  const toSend = by((s) => s.status === "built" && s.coolify_uuid && !s.outreach_sent_at);
  const awaitingOwner = by((s) => s.status === "built" && s.outreach_sent_at);
  const needBrief = by((s) => s.status === "approved" || s.status === "brief_rework");
  const needBuild = by((s) => s.status === "brief_approved" || s.status === "planned");
  const needPublish = by((s) => s.status === "built" && !s.coolify_uuid);
  const sites = by((s) => s.status === "built" || s.status === "owner_approved");
  const rejected = by((s) => s.status === "rejected");

  const youCount = candidates.length + briefsToReview.length + toSend.length + awaitingOwner.length;
  const claudeCount = needBrief.length + needBuild.length + needPublish.length;
  const sent = (s) => `Sent ${new Date(s.outreach_sent_at).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}`;

  return (
    <div className="home-grid">
      <div>
        <h1>Dashboard</h1>
        <p className="lede" style={{ marginBottom: 0 }}>
          {shops.length === 0
            ? "No shops yet. Ask Claude Code to find some: /shop-landing find 10 places that sell food in <area>"
            : `${shops.length} shops. ${youCount} waiting on you, ${claudeCount} waiting on Claude Code.`}
        </p>
      </div>

      <section aria-labelledby="you">
        <h2 id="you" className="panel-title">WAITING ON YOU</h2>
        {youCount === 0 && <p className="empty-line">Nothing right now.</p>}
        {candidates.length > 0 && (
          <div>
            <div className="group-head">
              <h3>Candidates to review <span style={{ color: "var(--muted)" }}>{candidates.length}</span></h3>
              <Link href="/candidates" className="btn go" style={{ textDecoration: "none" }}>Review candidates</Link>
            </div>
          </div>
        )}
        <Group title="Briefs to review" shops={briefsToReview} side={() => "Review brief"} />
        <Group title="Mockups ready to send" shops={toSend} side={() => "Send message"} />
        <Group title="Waiting for the owner's answer" shops={awaitingOwner} side={sent} />
      </section>

      <section aria-labelledby="claude">
        <h2 id="claude" className="panel-title">WAITING ON CLAUDE CODE</h2>
        {claudeCount === 0 && <p className="empty-line">Nothing right now.</p>}
        <Group title="Need a brief" shops={needBrief} command={BATCH.brief}
          note="Writes briefs for all of these. Run locally (uses the Places key)." />
        <Group title="Ready to plan and build" shops={needBuild} command={BATCH.build}
          note="Plans and builds all of these, 3 at a time. Locally or in a cloud session." />
        <Group title="Built, not published" shops={needPublish} command={BATCH.publish}
          note="Push to GitHub first, then run this locally to create their Coolify apps." />
      </section>

      <section aria-labelledby="sites">
        <h2 id="sites" className="panel-title">BUILT SITES</h2>
        {sites.length === 0 ? <p className="empty-line">No built sites yet.</p> : (
          <div className="sites">{sites.map((s) => <SiteCard key={s.slug} shop={s} />)}</div>
        )}
      </section>

      {rejected.length > 0 && (
        <p className="empty-line">
          {rejected.length} rejected or declined. <Link href="/candidates">See them under Candidates → Rejected</Link>.
        </p>
      )}
    </div>
  );
}
