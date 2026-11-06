"use client";
import Link from "next/link";
import { useState } from "react";
import { useShops } from "./useShops";
import CopyBlock from "./components/CopyBlock";
import OnlineBadge, { useOnline } from "./components/OnlineBadge";
import { BATCH, isOwnerClosed, ownerPhase, type OwnerPhaseName } from "@/lib/pipeline";
import type { Shop } from "@/lib/types";
import { formatDuration } from "@/lib/outreach";
import useNow from "./components/useNow";
import { LABELS } from "@/lib/statuses";

function TaskRow({ shop, side }: { shop: Shop; side: string }) {
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

function SiteCard({ shop }: { shop: Shop }) {
  const online = useOnline(shop.slug, !!shop.preview_url);
  const [noShot, setNoShot] = useState(false);
  const PHASE_LABEL: Record<OwnerPhaseName, string> = {
    waiting: "Sent, waiting", followup_due: "Follow-up due", waiting_followup: "Followed up, waiting",
    no_answer_due: "No reply to follow-up", no_answer: "No answer", link_due: "Replied, send link",
    prospect: "Prospect", hot: "Hot prospect", do: "DO (ordered)", declined: "Owner declined",
  };
  const phase = ownerPhase(shop).phase;
  const step = phase ? PHASE_LABEL[phase] : !shop.coolify_uuid ? "Not published" : "Ready to send preview";
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

function Group({ title, shops, command, note, side }: {
  title: string;
  shops: Shop[];
  command?: string;
  note?: string;
  side?: (shop: Shop) => string;
}) {
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
  const now = useNow();
  if (error) return <p className="error">{error}</p>;
  if (!shops) return <p className="empty">Loading…</p>;

  const by = (fn: (s: Shop) => boolean) => shops.filter(fn);
  const candidates = by((s) => s.status === "candidate");
  const briefsToReview = by((s) => s.status === "brief_ready");
  const toSend = by((s) => s.status === "built" && !!s.coolify_uuid && !s.outreach_sent_at);
  const phaseOf = (s: Shop) => ownerPhase(s, now);
  const inPhase = (...ps: OwnerPhaseName[]) => by((s) => { const p = phaseOf(s).phase; return p !== null && ps.includes(p); });
  const followupsDue = inPhase("followup_due");
  const noAnswerDue = inPhase("no_answer_due");
  // A reopened archived shop is link_due again only once it's rebuilt and published.
  const linkDue = inPhase("link_due").filter((s) => !!s.coolify_uuid);
  const deals = inPhase("prospect", "hot");
  const waitingOwners = inPhase("waiting", "waiting_followup");
  const noAnswer = inPhase("no_answer");
  const declined = inPhase("declined");
  const ordered = inPhase("do");
  const needBrief = by((s) => s.status === "approved" || s.status === "brief_rework");
  const needBuild = by((s) => s.status === "brief_approved" || s.status === "planned");
  const needPublish = by((s) => s.status === "built" && !s.coolify_uuid);
  const needArchive = by((s) => isOwnerClosed(s) && !s.archived_at);
  const sites = by((s) => s.status === "built" || s.status === "owner_approved");
  const rejected = by((s) => s.status === "rejected" && !isOwnerClosed(s));

  const youCount = candidates.length + briefsToReview.length + toSend.length
    + followupsDue.length + noAnswerDue.length + linkDue.length + deals.length;
  const claudeCount = needBrief.length + needBuild.length + needPublish.length + needArchive.length;
  const waitedFor = (s: Shop) => `No answer for ${formatDuration(phaseOf(s).waited || 0)}`;
  const stageLabel = (s: Shop) => (phaseOf(s).phase === "hot" ? "Hot prospect" : "Prospect");

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
        <Group title="Previews ready to send" shops={toSend} side={() => "Send preview"} />
        <Group title="Replied: send the link" shops={linkDue} side={() => "Send the link"} />
        <Group title="Follow-ups due" shops={followupsDue} side={waitedFor} />
        <Group title="No reply to the follow-up" shops={noAnswerDue} side={() => "Close as no answer"} />
        <Group title="Deals in progress" shops={deals} side={stageLabel} />
      </section>

      {waitingOwners.length > 0 && (
        <section aria-labelledby="owners">
          <h2 id="owners" className="panel-title">WAITING ON OWNERS</h2>
          <Group title="Sent, no reply yet" shops={waitingOwners}
            side={(s) => `${waitedFor(s)}${phaseOf(s).phase === "waiting_followup" ? " (followed up)" : ""}`} />
        </section>
      )}

      <section aria-labelledby="claude">
        <h2 id="claude" className="panel-title">WAITING ON CLAUDE CODE</h2>
        {claudeCount === 0 && <p className="empty-line">Nothing right now.</p>}
        <Group title="Need a brief" shops={needBrief} command={BATCH.brief}
          note="Writes briefs for all of these. Run locally (uses the Places key)." />
        <Group title="Ready to plan and build" shops={needBuild} command={BATCH.build}
          note="Plans and builds all of these, 3 at a time. Locally or in a cloud session." />
        <Group title="Built, not published" shops={needPublish} command={BATCH.publish}
          note="Push to GitHub first, then run this locally to create their Coolify apps." />
        <Group title="Declined or no answer: archive" shops={needArchive} command={BATCH.archive}
          note="Deletes their sites and Coolify apps, keeps the briefs. Run locally."
          side={(s) => (s.declined_at ? "Owner declined" : "No answer")} />
      </section>

      <section aria-labelledby="sites">
        <h2 id="sites" className="panel-title">BUILT SITES</h2>
        {sites.length === 0 ? <p className="empty-line">No built sites yet.</p> : (
          <div className="sites">{sites.map((s) => <SiteCard key={s.slug} shop={s} />)}</div>
        )}
      </section>

      {(ordered.length > 0 || noAnswer.length > 0 || declined.length > 0 || rejected.length > 0) && (
        <p className="empty-line">
          {[
            ordered.length && `${ordered.length} ordered (DO)`,
            noAnswer.length && `${noAnswer.length} no answer`,
            declined.length && `${declined.length} declined`,
            rejected.length && `${rejected.length} rejected`,
          ].filter(Boolean).join(" · ")}
          {(rejected.length + declined.length + noAnswer.length) > 0 && (
            <> · <Link href="/candidates">they&rsquo;re under Candidates → Rejected</Link></>
          )}
        </p>
      )}
    </div>
  );
}
