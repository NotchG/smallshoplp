"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import Stepper from "../../components/Stepper";
import CopyBlock from "../../components/CopyBlock";
import OnlineBadge, { useOnline } from "../../components/OnlineBadge";
import { announceChange } from "../../useShops";
import DealStepper from "../../components/DealStepper";
import useNow from "../../components/useNow";
import { currentStep, nextAction, ownerPhase } from "@/lib/pipeline";
import {
  FOLLOW_UP_AFTER_DAYS, FOLLOWUP_TEMPLATE, NO_ANSWER_AFTER_DAYS, OUTREACH_TEMPLATE,
  daysToMs, fillMessage, formatDuration, whatsappLink,
} from "@/lib/outreach";
import { LABELS } from "@/lib/statuses";
import type { Listing, OnlineState, Shop, ShopFiles } from "@/lib/types";

interface ShopDetail {
  shop: Shop;
  listing: Listing | null;
  files: ShopFiles;
}

// What the PATCH endpoint accepts.
type ShopPatch =
  | { status: Shop["status"]; note?: string }
  | { outreach_sent: boolean }
  | { owner: "followup_sent" | "followup_unsent" | "no_answer" | "prospect" | "hot" | "do" };

type Act = (body: ShopPatch) => Promise<void>;

const DOC_NAMES: Record<string, string> = {
  "design-brief.md": "Design brief", "prd.md": "PRD", "trd.md": "TRD",
  "implementation-plan.md": "Implementation plan",
};

function useShop(slug: string) {
  const [data, setData] = useState<ShopDetail | null>(null);
  const [error, setError] = useState("");
  const load = useCallback(async () => {
    const res = await fetch(`/api/shops/${slug}`, { cache: "no-store" });
    const json = (await res.json()) as ShopDetail & { error?: string };
    if (!res.ok) setError(json.error ?? "Couldn't load the shop."); else { setData(json); setError(""); }
  }, [slug]);
  useEffect(() => {
    load();
    window.addEventListener("focus", load);
    return () => window.removeEventListener("focus", load);
  }, [load]);
  return { data, error, reload: load };
}

async function patch(slug: string, body: ShopPatch): Promise<{ shop: Shop }> {
  const res = await fetch(`/api/shops/${slug}`, {
    method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
  });
  const json = (await res.json()) as { shop: Shop; error?: string };
  if (!res.ok) throw new Error(json.error);
  announceChange();
  return json;
}

function MessageComposer({ shop, listing, template, actionLabel, onAction, busy }: {
  shop: Shop;
  listing: Listing | null;
  template: string;
  actionLabel: string;
  onAction: () => void;
  busy: boolean;
}) {
  const [sender, setSender] = useState("");
  const [edited, setEdited] = useState<string | null>(null); // null = follow the template
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try { setSender(localStorage.getItem("sender_name") || ""); } catch {}
  }, []);
  function changeSender(v: string) {
    setSender(v);
    try { localStorage.setItem("sender_name", v); } catch {}
  }

  const generated = useMemo(
    () => fillMessage(template, { name: shop.name, sender, link: shop.preview_url }),
    [template, shop.name, sender, shop.preview_url],
  );
  const text = edited ?? generated;
  const wa = whatsappLink(listing?.phone, text);

  async function copy() {
    try { await navigator.clipboard.writeText(text); } catch {}
    setCopied(true); setTimeout(() => setCopied(false), 1600);
  }

  return (
    <>
      <div className="field">
        <label htmlFor="sender">Your name (saved on this computer)</label>
        <input id="sender" value={sender} onChange={(e) => changeSender(e.target.value)} placeholder="e.g. Raka" />
      </div>
      <div>
        <p className="copy-label" style={{ marginBottom: 6 }}>
          WhatsApp message {edited !== null && (
            <button className="btn quiet" onClick={() => setEdited(null)}>Reset to template</button>
          )}
        </p>
        <textarea className="message" value={text} onChange={(e) => setEdited(e.target.value)}
          aria-label="Message to the owner" />
      </div>
      {!sender.trim() && <p className="note">Add your name so the message doesn&rsquo;t say &lt;nama kamu&gt;.</p>}
      <div className="actions-row">
        <button className="btn" onClick={copy}>{copied ? "Copied" : "Copy message"}</button>
        {wa ? (
          <a className="btn" href={wa} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            Open in WhatsApp
          </a>
        ) : <span className="meta" style={{ margin: 0 }}>No phone number in the listing</span>}
        <button className="btn go" disabled={busy} onClick={onAction}>{actionLabel}</button>
      </div>
    </>
  );
}

function MockupLine({ shop, online }: { shop: Shop; online: OnlineState | null }) {
  return (
    <div className="actions-row">
      <span>Mockup:</span>
      <a href={shop.preview_url} target="_blank" rel="noreferrer">{shop.preview_url}</a>
      <OnlineBadge state={online} />
    </div>
  );
}

const when = (iso: string | undefined) => !iso ? "" : new Date(iso).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" });

function OwnerPanel({ shop, listing, online, act, busy }: {
  shop: Shop;
  listing: Listing | null;
  online: OnlineState | null;
  act: Act;
  busy: boolean;
}) {
  const now = useNow();
  const { phase, waited = 0 } = ownerPhase(shop, now);
  const left = (days: number) => formatDuration(Math.max(0, daysToMs(days) - waited));

  const timeline = (
    <ul className="timeline">
      <li>Mockup sent {when(shop.outreach_sent_at)}</li>
      {shop.followup_sent_at && <li>Follow-up sent {when(shop.followup_sent_at)}</li>}
      {shop.owner_stage_at && shop.owner_stage && <li>{STAGE_NOTE[shop.owner_stage]} {when(shop.owner_stage_at)}</li>}
    </ul>
  );

  const replied = (
    <div className="actions-row">
      <button className="btn go" disabled={busy} onClick={() => act({ owner: "prospect" })}>Owner replied</button>
      <button className="btn stop" disabled={busy} onClick={() => act({ status: "rejected" })}>Owner declined</button>
    </div>
  );

  if (phase === "waiting" || phase === "waiting_followup") {
    const isFollow = phase === "waiting_followup";
    return (
      <>
        <p className="waiting">
          <strong>No answer for {formatDuration(waited)}.</strong>{" "}
          {isFollow
            ? `If there's still no reply in ${left(NO_ANSWER_AFTER_DAYS)}, you can close it as no answer.`
            : `Follow-up due in ${left(FOLLOW_UP_AFTER_DAYS)}.`}
        </p>
        {timeline}
        {replied}
        <div className="actions-row">
          {isFollow ? (
            <button className="btn quiet" disabled={busy} onClick={() => act({ owner: "followup_unsent" })}>Follow-up not sent after all</button>
          ) : (
            <button className="btn quiet" disabled={busy} onClick={() => act({ outreach_sent: false })}>Not sent after all</button>
          )}
        </div>
      </>
    );
  }

  if (phase === "followup_due") {
    return (
      <>
        <p className="waiting due"><strong>No answer for {formatDuration(waited)}.</strong> Time for the follow-up.</p>
        {timeline}
        <MockupLine shop={shop} online={online} />
        <MessageComposer shop={shop} listing={listing} template={FOLLOWUP_TEMPLATE}
          actionLabel="Mark follow-up as sent" busy={busy} onAction={() => act({ owner: "followup_sent" })} />
        <p className="meta" style={{ margin: 0 }}>Replied in the meantime?</p>
        {replied}
      </>
    );
  }

  if (phase === "no_answer_due") {
    return (
      <>
        <p className="waiting due">
          <strong>No answer for {formatDuration(waited)} since the follow-up.</strong> Close it as no answer,
          so it stops showing up as waiting. You can reopen it if they reply later.
        </p>
        {timeline}
        <div className="actions-row">
          <button className="btn" disabled={busy} onClick={() => act({ owner: "no_answer" })}>Mark as not answered</button>
          <button className="btn go" disabled={busy} onClick={() => act({ owner: "prospect" })}>Owner replied</button>
        </div>
      </>
    );
  }

  if (phase === "no_answer") {
    return (
      <>
        <p className="waiting">Closed as no answer {when(shop.owner_stage_at)}.</p>
        {timeline}
        {replied}
      </>
    );
  }

  // prospect / hot
  return (
    <>
      <DealStepper stage={phase} />
      {timeline}
      <div className="actions-row">
        {phase === "prospect" && (
          <button className="btn go" disabled={busy} onClick={() => act({ owner: "hot" })}>Move to hot prospect</button>
        )}
        <button className="btn go" disabled={busy} onClick={() => act({ owner: "do" })}>They ordered (DO)</button>
        {phase === "hot" && (
          <button className="btn quiet" disabled={busy} onClick={() => act({ owner: "prospect" })}>Back to prospect</button>
        )}
        <button className="btn stop" disabled={busy} onClick={() => act({ status: "rejected" })}>Owner declined</button>
      </div>
    </>
  );
}

const STAGE_NOTE: Record<string, string> = {
  prospect: "Became a prospect", hot: "Became a hot prospect", do: "Ordered",
  no_answer: "Closed as no answer",
};

const OWNER_TITLES: Record<string, string> = {
  waiting: "Waiting for the owner's reply",
  followup_due: "Send the follow-up",
  waiting_followup: "Waiting for a reply to the follow-up",
  no_answer_due: "No reply to the follow-up",
  no_answer: "No answer",
  prospect: "Prospect",
  hot: "Hot prospect",
};

function NextPanel({ shop, listing, online, reload }: {
  shop: Shop;
  listing: Listing | null;
  online: OnlineState | null;
  reload: () => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const now = useNow();
  const action = nextAction(shop);
  const owner = ownerPhase(shop, now);

  async function act(body: ShopPatch) {
    setBusy(true); setErr("");
    try { await patch(shop.slug, body); await reload(); }
    catch (e) { setErr(e instanceof Error ? e.message : String(e)); }
    finally { setBusy(false); }
  }

  const title = action.kind === "owner" && owner.phase ? OWNER_TITLES[owner.phase] || action.title : action.title;

  return (
    <section className="next" aria-labelledby="next-title">
      <p className="panel-title" style={{ margin: 0 }}>NEXT STEP</p>
      <h2 id="next-title">{title}</h2>
      {action.text && action.kind !== "owner" && <p>{action.text}</p>}

      {action.kind === "decide" && (
        <div className="actions-row">
          <button className="btn stop" disabled={busy} onClick={() => act({ status: "rejected" })}>Reject</button>
          <button className="btn go" disabled={busy} onClick={() => act({ status: "approved" })}>Approve</button>
        </div>
      )}

      {action.kind === "brief" && (
        <div className="actions-row">
          <Link href={`/briefs/${shop.slug}`} className="btn go" style={{ textDecoration: "none" }}>Open the brief</Link>
        </div>
      )}

      {action.kind === "claude" && action.commands.map((c) => (
        <CopyBlock key={c.label} label={c.label} text={c.text} />
      ))}

      {action.kind === "send" && (
        <>
          <MockupLine shop={shop} online={online} />
          {online && !online.online && (
            <p className="note">Wait until the mockup is online before sending. Coolify may still be building it.</p>
          )}
          <MessageComposer shop={shop} listing={listing} template={OUTREACH_TEMPLATE}
            actionLabel="Mark as sent" busy={busy} onAction={() => act({ outreach_sent: true })} />
        </>
      )}

      {action.kind === "owner" && <OwnerPanel shop={shop} listing={listing} online={online} act={act} busy={busy} />}

      {action.kind === "done" && (
        <>
          <DealStepper stage="do" />
          <p>They ordered. Next: turn the mockup into the real site.</p>
          <div className="actions-row">
            <button className="btn quiet" disabled={busy} onClick={() => act({ owner: "hot" })}>Undo: back to hot prospect</button>
          </div>
        </>
      )}

      {action.kind === "rejected" && (
        <div className="actions-row">
          {shop.declined_at ? (
            <button className="btn" disabled={busy} onClick={() => act({ status: "built" })}>Owner changed their mind: back to prospect</button>
          ) : (
            <button className="btn" disabled={busy} onClick={() => act({ status: "candidate" })}>Move back to review</button>
          )}
        </div>
      )}

      {err && <p className="error" role="alert">{err}</p>}
    </section>
  );
}

export default function ShopPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data, error, reload } = useShop(slug);
  const online = useOnline(slug, !!data?.shop?.preview_url);

  if (error) return <><Link href="/" className="back">Dashboard</Link><p className="error">{error}</p></>;
  if (!data) return <p className="empty">Loading…</p>;
  const { shop, listing, files } = data;
  const step = currentStep(shop);
  const shot = (name: string) => `/api/shops/${slug}/file?path=screenshots/${name}`;
  const hasShots = files.screenshots.includes("1440-fold.png");

  return (
    <>
      <Link href="/" className="back">Dashboard</Link>
      <div className="shop-head">
        <h1>{shop.name}</h1>
        <span className="status-pill">{
          shop.declined_at && shop.status === "rejected" ? "Owner declined"
          : shop.status === "built" && shop.owner_stage ? OWNER_TITLES[shop.owner_stage]
          : shop.status === "built" && shop.outreach_sent_at ? "Sent to owner"
          : LABELS[shop.status]
        }</span>
      </div>
      <p className="lede" style={{ marginBottom: 8 }}>{[shop.type, shop.address].filter(Boolean).join(", ")}</p>
      <p className="shop-links">
        {listing?.rating != null && <span>{listing.rating}★ from {listing.reviews} reviews</span>}
        {listing?.mapsUrl && <a href={listing.mapsUrl} target="_blank" rel="noreferrer">Google Maps</a>}
        {listing?.website && <a href={listing.website} target="_blank" rel="noreferrer">Current website</a>}
        {shop.preview_url && <a href={shop.preview_url} target="_blank" rel="noreferrer">Mockup</a>}
        {shop.why && <span>{shop.why}</span>}
      </p>

      <div className="shop-layout">
        <Stepper current={step} />
        <NextPanel shop={shop} listing={listing} online={online} reload={reload} />
      </div>

      {hasShots && (
        <section className="section-block" aria-labelledby="shots">
          <h2 id="shots" className="panel-title">SCREENSHOTS</h2>
          <div className="shots">
            <div>
              <a href={shot("1440-full.png")} target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot("1440-fold.png")} alt={`${shop.name} mockup on desktop`} />
              </a>
              <p className="shot-cap">Desktop, first screen. Click for the full page.</p>
            </div>
            {files.screenshots.includes("390-fold.png") && (
              <div>
                <a href={shot("390-full.png")} target="_blank" rel="noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={shot("390-fold.png")} alt={`${shop.name} mockup on a phone`} />
                </a>
                <p className="shot-cap">Phone. Click for the full page.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {(files.brief || files.docs.length > 0 || files.checklist) && (
        <section className="section-block" aria-labelledby="docs">
          <h2 id="docs" className="panel-title">DOCUMENTS</h2>
          <div className="doc-links">
            {files.brief && <Link href={`/briefs/${slug}`}>Shop brief</Link>}
            {files.docs.map((d) => (
              <Link key={d} href={`/shops/${slug}/doc?path=docs/${d}`}>{DOC_NAMES[d] || d}</Link>
            ))}
            {files.checklist && <Link href={`/shops/${slug}/doc?path=owner-checklist.md`}>Owner checklist</Link>}
          </div>
        </section>
      )}
    </>
  );
}
