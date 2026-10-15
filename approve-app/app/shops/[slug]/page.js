"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import Stepper from "../../components/Stepper";
import CopyBlock from "../../components/CopyBlock";
import OnlineBadge, { useOnline } from "../../components/OnlineBadge";
import { announceChange } from "../../useShops";
import { currentStep, nextAction } from "@/lib/pipeline";
import { outreachMessage, whatsappLink } from "@/lib/outreach";
import { LABELS } from "@/lib/statuses";

const DOC_NAMES = {
  "design-brief.md": "Design brief", "prd.md": "PRD", "trd.md": "TRD",
  "implementation-plan.md": "Implementation plan",
};

function useShop(slug) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const load = useCallback(async () => {
    const res = await fetch(`/api/shops/${slug}`, { cache: "no-store" });
    const json = await res.json();
    if (!res.ok) setError(json.error); else { setData(json); setError(""); }
  }, [slug]);
  useEffect(() => {
    load();
    window.addEventListener("focus", load);
    return () => window.removeEventListener("focus", load);
  }, [load]);
  return { data, error, reload: load };
}

async function patch(slug, body) {
  const res = await fetch(`/api/shops/${slug}`, {
    method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error);
  announceChange();
  return json;
}

function SendPanel({ shop, listing, online, act, busy }) {
  const [sender, setSender] = useState("");
  const [edited, setEdited] = useState(null); // null = follow the template
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try { setSender(localStorage.getItem("sender_name") || ""); } catch {}
  }, []);
  function changeSender(v) {
    setSender(v);
    try { localStorage.setItem("sender_name", v); } catch {}
  }

  const generated = useMemo(
    () => outreachMessage({ name: shop.name, sender, link: shop.preview_url }),
    [shop.name, sender, shop.preview_url],
  );
  const text = edited ?? generated;
  const wa = whatsappLink(listing?.phone, text);

  async function copy() {
    try { await navigator.clipboard.writeText(text); } catch {}
    setCopied(true); setTimeout(() => setCopied(false), 1600);
  }

  return (
    <>
      <div className="actions-row">
        <span>Mockup:</span>
        <a href={shop.preview_url} target="_blank" rel="noreferrer">{shop.preview_url}</a>
        <OnlineBadge state={online} />
      </div>
      {online && !online.online && (
        <p className="note">Wait until the mockup is online before sending. Coolify may still be building it.</p>
      )}
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
        <button className="btn go" disabled={busy} onClick={() => act({ outreach_sent: true })}>
          Mark as sent
        </button>
      </div>
      {wa && (
        <p className="meta" style={{ margin: 0 }}>
          Opens a chat with {listing.phone}. If it&rsquo;s a landline, WhatsApp won&rsquo;t find it; send it from the shop&rsquo;s Instagram or another channel instead.
        </p>
      )}
    </>
  );
}

function NextPanel({ shop, listing, online, reload }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const action = nextAction(shop);

  async function act(body) {
    setBusy(true); setErr("");
    try { await patch(shop.slug, body); await reload(); }
    catch (e) { setErr(e.message); }
    finally { setBusy(false); }
  }

  return (
    <section className="next" aria-labelledby="next-title">
      <p className="panel-title" style={{ margin: 0 }}>NEXT STEP</p>
      <h2 id="next-title">{action.title}</h2>
      {action.text && <p>{action.text}</p>}

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

      {action.kind === "send" && <SendPanel shop={shop} listing={listing} online={online} act={act} busy={busy} />}

      {action.kind === "owner" && (
        <>
          <p className="meta" style={{ margin: 0 }}>
            Sent {new Date(shop.outreach_sent_at).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}.
          </p>
          <div className="actions-row">
            <button className="btn go" disabled={busy} onClick={() => act({ status: "owner_approved" })}>Owner wants it</button>
            <button className="btn stop" disabled={busy} onClick={() => act({ status: "rejected" })}>Owner declined</button>
            <button className="btn quiet" disabled={busy} onClick={() => act({ outreach_sent: false })}>Not sent after all</button>
          </div>
        </>
      )}

      {action.kind === "done" && (
        <div className="actions-row">
          <button className="btn quiet" disabled={busy} onClick={() => act({ status: "built" })}>Undo owner approval</button>
        </div>
      )}

      {action.kind === "rejected" && (
        <div className="actions-row">
          {shop.declined_at ? (
            <button className="btn" disabled={busy} onClick={() => act({ status: "built" })}>Owner changed their mind: back to built</button>
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
  const { slug } = useParams();
  const { data, error, reload } = useShop(slug);
  const online = useOnline(slug, !!data?.shop?.preview_url);

  if (error) return <><Link href="/" className="back">Dashboard</Link><p className="error">{error}</p></>;
  if (!data) return <p className="empty">Loading…</p>;
  const { shop, listing, files } = data;
  const step = currentStep(shop);
  const shot = (name) => `/api/shops/${slug}/file?path=screenshots/${name}`;
  const hasShots = files.screenshots.includes("1440-fold.png");

  return (
    <>
      <Link href="/" className="back">Dashboard</Link>
      <div className="shop-head">
        <h1>{shop.name}</h1>
        <span className="status-pill">{shop.declined_at && shop.status === "rejected" ? "Owner declined" : LABELS[shop.status]}</span>
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
