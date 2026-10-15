"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { announceChange } from "../../useShops";
import { MOCKUP_TAG, countMockups, LABELS } from "@/lib/statuses";

function Preview({ text }) {
  const lines = text.split("\n");
  return (
    <div className="preview" aria-label="Brief preview">
      {lines.map((raw, i) => {
        const mock = raw.includes(MOCKUP_TAG);
        let kind = "p";
        let body = raw;
        if (raw.startsWith("# ")) { kind = "h2"; body = raw.slice(2); }
        else if (raw.startsWith("## ")) { kind = "h3"; body = raw.slice(3); }
        else if (/^\s*[-*] /.test(raw)) { kind = "li"; body = raw.replace(/^\s*[-*] /, ""); }
        if (!body.trim()) return <div key={i} style={{ height: 8 }} />;
        const content = mock ? <mark>{body}</mark> : body;
        if (kind === "h2") return <h2 key={i}>{content}</h2>;
        if (kind === "h3") return <h3 key={i}>{content}</h3>;
        return <p key={i} className={kind === "li" ? "li" : undefined}>{content}</p>;
      })}
    </div>
  );
}

export default function BriefReview() {
  const { slug } = useParams();
  const [shop, setShop] = useState(null);
  const [saved, setSaved] = useState("");
  const [text, setText] = useState("");
  const [loadError, setLoadError] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [showRework, setShowRework] = useState(false);
  const [note, setNote] = useState("");
  const [flash, setFlash] = useState("");

  async function load() {
    const res = await fetch(`/api/briefs/${slug}`, { cache: "no-store" });
    const data = await res.json();
    if (!res.ok) { setLoadError(data.error); return; }
    setShop(data.shop);
    setSaved(data.brief ?? "");
    setText(data.brief ?? "");
  }
  useEffect(() => { load(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [slug]);

  const dirty = text !== saved;
  const editable = shop && ["brief_ready", "brief_rework"].includes(shop.status);
  const mocks = countMockups(text);

  useEffect(() => {
    const warn = (e) => { if (dirty) { e.preventDefault(); e.returnValue = ""; } };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  async function save() {
    const res = await fetch(`/api/briefs/${slug}`, {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ brief: text }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    setSaved(text);
  }

  async function setStatus(status, extra = {}) {
    const res = await fetch(`/api/shops/${slug}`, {
      method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status, ...extra }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    setShop(data.shop);
    announceChange();
  }

  async function run(fn, done) {
    setBusy(true); setError(""); setFlash("");
    try { await fn(); if (done) setFlash(done); }
    catch (err) { setError(err.message); }
    finally { setBusy(false); }
  }

  if (loadError) return <><Link href="/briefs" className="back">Back to briefs</Link><p className="error">{loadError}</p></>;
  if (!shop) return <p className="empty">Loading…</p>;

  return (
    <>
      <Link href={`/shops/${slug}`} className="back">Back to {shop.name}</Link>
      <h1>{shop.name}</h1>
      <p className="lede">{[shop.type, shop.address].filter(Boolean).join(", ")}</p>

      {shop.status === "brief_rework" && shop.brief_note && (
        <p className="note">Sent back with: {shop.brief_note}. Run <code>/shop-landing brief</code> to have Claude revise it.</p>
      )}

      {!saved && <p className="empty">This shop has no brief yet.</p>}

      {saved !== "" && (
        <>
          <div className="review">
            <div>
              <p className="pane-label">{editable ? "Edit" : "Brief (locked)"}</p>
              <textarea className="editor" value={text} readOnly={!editable}
                onChange={(e) => setText(e.target.value)} spellCheck aria-label="Brief markdown" />
            </div>
            <div>
              <p className="pane-label">
                Preview, {mocks === 0 ? "all details from the listing" : `${mocks} mockup detail${mocks > 1 ? "s" : ""} highlighted`}
              </p>
              <Preview text={text} />
            </div>
          </div>

          {error && <p className="error" role="alert">{error}</p>}

          <div className="decide">
            <span className="status" aria-live="polite">
              {flash || `${LABELS[shop.status]}${dirty ? ", unsaved changes" : ""}`}
            </span>
            {editable && (
              <>
                <button className="btn" disabled={busy || !dirty} onClick={() => run(save, "Changes saved")}>
                  Save changes
                </button>
                {shop.status === "brief_ready" && (
                  <>
                    <button className="btn stop" disabled={busy} onClick={() => setShowRework((v) => !v)}>
                      Send back to Claude
                    </button>
                    <button className="btn go" disabled={busy}
                      onClick={() => run(async () => { if (dirty) await save(); await setStatus("brief_approved"); }, "Brief approved")}>
                      Approve brief
                    </button>
                  </>
                )}
              </>
            )}
            {shop.status === "brief_approved" && (
              <button className="btn quiet" disabled={busy}
                onClick={() => run(() => setStatus("brief_ready"), "Moved back to review")}>
                Unlock and edit again
              </button>
            )}
          </div>

          {showRework && shop.status === "brief_ready" && (
            <div className="rework">
              <label htmlFor="note" className="pane-label">What should Claude change?</label>
              <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)}
                placeholder="e.g. They're a bakery-café, add the coffee. Tone should be more playful." />
              <div>
                <button className="btn stop" disabled={busy || !note.trim()}
                  onClick={() => run(async () => { if (dirty) await save(); await setStatus("brief_rework", { note }); setShowRework(false); }, "Sent back to Claude")}>
                  Send back with this note
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
