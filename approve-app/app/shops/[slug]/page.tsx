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
import { currentStep, isOwnerClosed, nextAction, ownerPhase } from "@/lib/pipeline";
import {
  FALLBACK_PHOTO, FOLLOW_UP_AFTER_DAYS, FOLLOWUP_TEMPLATE, LINK_FOLLOWUP_TEMPLATE, LINK_TEMPLATE, NO_ANSWER_AFTER_DAYS,
  OUTREACH_PHOTO, OUTREACH_TEMPLATE, OUTREACH_VIDEO, daysToMs, fillMessage, formatDuration, whatsappLink,
} from "@/lib/outreach";
import { LABELS } from "@/lib/statuses";
import type { Listing, OnlineState, Outreach, Shop, ShopFiles } from "@/lib/types";

interface ShopDetail {
  shop: Shop;
  listing: Listing | null;
  outreach: Outreach | null;
  files: ShopFiles;
}

// What the PATCH endpoint accepts.
type ShopPatch =
  | { status: Shop["status"]; note?: string }
  | { outreach_sent: boolean }
  | { owner: "followup_sent" | "followup_unsent" | "no_answer" | "prospect" | "link_sent" | "link_unsent"
      | "hot" | "do" | "reopen" };

// A file from shops/<slug>/screenshots/ to send along with a message.
interface Media {
  kind: "video" | "image";
  file: string;
  download: string; // file name for the download
}

const shotUrl = (slug: string, file: string) => `/api/shops/${slug}/file?path=screenshots/${file}`;

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

// The video or image that goes with a message: preview, Download, and Copy for images.
// wa.me can't attach files, so the media is sent by hand before the message.
function MediaBlock({ slug, media }: { slug: string; media: Media }) {
  const src = shotUrl(slug, media.file);
  const [size, setSize] = useState("");
  const [copied, setCopied] = useState("");

  useEffect(() => {
    if (media.kind !== "video") return;
    fetch(src, { method: "HEAD" }).then((r) => {
      const bytes = Number(r.headers.get("content-length"));
      if (bytes) setSize(`${(bytes / 1e6).toFixed(1)} MB`);
    }).catch(() => {});
  }, [src, media.kind]);

  async function copyImage() {
    try {
      // A promise inside ClipboardItem keeps Safari's user-gesture check happy.
      await navigator.clipboard.write([new ClipboardItem({ "image/png": fetch(src).then((r) => r.blob()) })]);
      setCopied("Copied");
    } catch {
      setCopied("Couldn't copy; use Download");
    }
    setTimeout(() => setCopied(""), 1600);
  }

  return (
    <div className="media">
      {media.kind === "video" ? (
        <video src={src} controls muted playsInline preload="metadata" className="media-preview" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="Phone screenshot of the mockup" className="media-preview" />
      )}
      <div className="media-side">
        <p className="copy-label">{media.kind === "video" ? "Video" : "Image"} to send first{size && `, ${size}`}</p>
        <div className="actions-row">
          {media.kind === "image" && <button className="btn" onClick={copyImage}>{copied || "Copy image"}</button>}
          <a className="btn" href={src} download={media.download} style={{ textDecoration: "none" }}>
            Download {media.kind}
          </a>
        </div>
        <p className="meta" style={{ margin: 0 }}>
          {media.kind === "video"
            ? "Drag the downloaded video into the WhatsApp chat and send it, then send the message."
            : "Paste the image into the WhatsApp chat (⌘V) and send it, then send the message."}
        </p>
      </div>
    </div>
  );
}

function MessageComposer({ shop, listing, template, hook, actionLabel, onAction, busy }: {
  shop: Shop;
  listing: Listing | null;
  template: string;
  hook?: string;
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
    () => fillMessage(template, { name: shop.name, sender, hook, link: shop.preview_url }),
    [template, shop.name, sender, hook, shop.preview_url],
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
      {!sender.trim() && template.includes("{sender}") && (
        <p className="note">Add your name so the message doesn&rsquo;t say &lt;nama kamu&gt;.</p>
      )}
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

function MockupLine({ shop, online, label = "Mockup:" }: { shop: Shop; online: OnlineState | null; label?: string }) {
  return (
    <div className="actions-row">
      <span>{label}</span>
      <a href={shop.preview_url} target="_blank" rel="noreferrer">{shop.preview_url}</a>
      <OnlineBadge state={online} />
    </div>
  );
}

const when = (iso: string | undefined) => !iso ? "" : new Date(iso).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" });

function OwnerPanel({ shop, listing, files, online, act, busy }: {
  shop: Shop;
  listing: Listing | null;
  files: ShopFiles;
  online: OnlineState | null;
  act: Act;
  busy: boolean;
}) {
  const now = useNow();
  const { phase, waited = 0 } = ownerPhase(shop, now);
  const left = (days: number) => formatDuration(Math.max(0, daysToMs(days) - waited));

  const timeline = (
    <ul className="timeline">
      <li>Preview sent {when(shop.outreach_sent_at)}</li>
      {shop.followup_sent_at && <li>Follow-up sent {when(shop.followup_sent_at)}</li>}
      {shop.owner_stage_at && shop.owner_stage && <li>{STAGE_NOTE[shop.owner_stage]} {when(shop.owner_stage_at)}</li>}
      {shop.link_sent_at && <li>Link sent {when(shop.link_sent_at)}</li>}
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
    const photo = files.screenshots.includes(OUTREACH_PHOTO) ? OUTREACH_PHOTO
      : files.screenshots.includes(FALLBACK_PHOTO) ? FALLBACK_PHOTO : null;
    return (
      <>
        <p className="waiting due"><strong>No answer for {formatDuration(waited)}.</strong> Time for the follow-up.</p>
        {timeline}
        {photo && <MediaBlock slug={shop.slug} media={{ kind: "image", file: photo, download: `${shop.slug}-preview.png` }} />}
        {photo !== OUTREACH_PHOTO && (
          <CopyBlock label="The sharp phone screenshot isn't made yet. Run in a terminal:"
            text={`node scripts/outreach-media.mjs ${shop.slug}`} />
        )}
        <MessageComposer shop={shop} listing={listing}
          template={shop.link_sent_at ? LINK_FOLLOWUP_TEMPLATE : FOLLOWUP_TEMPLATE}
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
          so it stops showing up as waiting. Its site then gets archived (the brief is kept), and you
          can still reopen it if they reply later.
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

  if (phase === "link_due") {
    return (
      <>
        <DealStepper stage="prospect" />
        {timeline}
        <MockupLine shop={shop} online={online} />
        {online && !online.online && (
          <p className="note">The mockup isn&rsquo;t online right now. Check Coolify before sending the link.</p>
        )}
        <MessageComposer shop={shop} listing={listing} template={LINK_TEMPLATE}
          actionLabel="Mark link as sent" busy={busy} onAction={() => act({ owner: "link_sent" })} />
        <div className="actions-row">
          <button className="btn stop" disabled={busy} onClick={() => act({ status: "rejected" })}>Owner declined</button>
        </div>
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
        {phase === "prospect" && shop.link_sent_at && (
          <button className="btn quiet" disabled={busy} onClick={() => act({ owner: "link_unsent" })}>Link not sent after all</button>
        )}
        <button className="btn stop" disabled={busy} onClick={() => act({ status: "rejected" })}>Owner declined</button>
      </div>
    </>
  );
}

const STAGE_NOTE: Record<string, string> = {
  prospect: "Replied", hot: "Became a hot prospect", do: "Ordered",
  no_answer: "Closed as no answer",
};

const OWNER_TITLES: Record<string, string> = {
  waiting: "Waiting for the owner's reply",
  followup_due: "Send the follow-up",
  waiting_followup: "Waiting for a reply to the follow-up",
  no_answer_due: "No reply to the follow-up",
  no_answer: "No answer",
  link_due: "Owner replied: send the link",
  prospect: "Prospect",
  hot: "Hot prospect",
};

function NextPanel({ shop, listing, outreach, files, online, reload }: {
  shop: Shop;
  listing: Listing | null;
  outreach: Outreach | null;
  files: ShopFiles;
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
          <MockupLine shop={shop} online={online} label="Mockup, for you to check (don't send the link yet):" />
          {files.screenshots.includes(OUTREACH_VIDEO) ? (
            <MediaBlock slug={shop.slug} media={{ kind: "video", file: OUTREACH_VIDEO, download: `${shop.slug}-preview.mp4` }} />
          ) : (
            <CopyBlock label="No preview video yet. Run in a terminal (about a minute):"
              text={`node scripts/outreach-media.mjs ${shop.slug}`} />
          )}
          {!outreach && (
            <CopyBlock label="No personalized line yet, so the message skips it. To add one, run in Claude Code:"
              text={`/shop-landing outreach ${shop.slug}`} />
          )}
          <MessageComposer shop={shop} listing={listing} template={OUTREACH_TEMPLATE} hook={outreach?.hook}
            actionLabel="Mark as sent" busy={busy} onAction={() => act({ outreach_sent: true })} />
        </>
      )}

      {action.kind === "owner" && (
        <OwnerPanel shop={shop} listing={listing} files={files} online={online} act={act} busy={busy} />
      )}

      {action.kind === "done" && (
        <>
          <DealStepper stage="do" />
          <p>They ordered. Next: turn the mockup into the real site.</p>
          <div className="actions-row">
            <button className="btn quiet" disabled={busy} onClick={() => act({ owner: "hot" })}>Undo: back to hot prospect</button>
          </div>
        </>
      )}

      {isOwnerClosed(shop) ? (
        <>
          {shop.archived_at && <p className="meta" style={{ margin: 0 }}>Archived {when(shop.archived_at)}.</p>}
          <div className="actions-row">
            <button className="btn" disabled={busy} onClick={() => act({ owner: "reopen" })}>Owner replied after all</button>
          </div>
          <p className="meta" style={{ margin: 0 }}>
            {shop.archived_at
              ? "Moves the shop back and sends it to Claude to rebuild from the kept brief. Then publish it and send the link."
              : shop.link_sent_at ? "Moves it back to the deal." : "Moves it back to the deal, ready for you to send the link."}
          </p>
        </>
      ) : action.kind === "rejected" && (
        <div className="actions-row">
          <button className="btn" disabled={busy} onClick={() => act({ status: "candidate" })}>Move back to review</button>
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
  const { shop, listing, outreach, files } = data;
  const step = currentStep(shop);
  const shot = (name: string) => shotUrl(slug, name);
  const hasShots = files.screenshots.includes("1440-fold.png");

  return (
    <>
      <Link href="/" className="back">Dashboard</Link>
      <div className="shop-head">
        <h1>{shop.name}</h1>
        <span className="status-pill">{
          isOwnerClosed(shop) ? `${shop.declined_at ? "Owner declined" : "No answer"}${shop.archived_at ? ", archived" : ""}`
          : shop.status === "built" && shop.owner_stage ? OWNER_TITLES[ownerPhase(shop).phase ?? shop.owner_stage]
          : shop.status === "built" && shop.outreach_sent_at ? "Preview sent"
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
        <NextPanel shop={shop} listing={listing} outreach={outreach} files={files} online={online} reload={reload} />
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
