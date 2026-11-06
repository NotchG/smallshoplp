"use client";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  Archive, Calendar, Check, ChevronDown, CircleCheck, Clock, Copy, Download, ExternalLink, FileText, Image as ImageIcon,
  MessageCircle, MessageSquareText, Play, Send, Share2, Undo2, X, type LucideIcon,
} from "lucide-react";
import { useLeads } from "./useLeads";
import { useToast } from "./components/Toast";
import { EFFECTS, copyText, patchShop, type Effect } from "@/lib/actions";
import {
  DAILY_SENDS, daysSince, sentTodayCount, shotUrl, stillOf, todayQueue, type Lead, type TodayAction,
} from "@/lib/leads";
import {
  FOLLOWUP_TEMPLATE, LINK_FOLLOWUP_TEMPLATE, LINK_TEMPLATE, OUTREACH_TEMPLATE, fillMessage, whatsappLink,
} from "@/lib/outreach";

// Rail entries: style, icon, label, and what the button does.
type RailDo = { effect: Effect } | { kind: "wa" | "media" | "skip" | "open" | "rework" };
type RailItem = [cls: string, icon: LucideIcon, label: string, does: RailDo];

const ACTIONS: Record<TodayAction, {
  title: string; why: (l: Lead) => string; cls: string; template?: (l: Lead) => string; rail: RailItem[];
}> = {
  followup: {
    title: "Send the follow-up", cls: "over",
    why: (l) => `Preview sent ${daysSince(l.outreach_sent_at)} days ago, no reply`,
    // Shops contacted before video-first outreach got the link in their first message.
    template: (l) => (l.link_sent_at ? LINK_FOLLOWUP_TEMPLATE : FOLLOWUP_TEMPLATE),
    rail: [["wa", ExternalLink, "WhatsApp", { kind: "wa" }], ["", ImageIcon, "Image", { kind: "media" }],
      ["main", Check, "Sent", { effect: "followup_sent" }], ["", MessageCircle, "Replied", { effect: "replied" }], ["", ChevronDown, "Skip", { kind: "skip" }]],
  },
  link: {
    title: "Send the link", cls: "due", why: (l) => `Replied ${daysSince(l.owner_stage_at) ?? 0} days ago`,
    template: () => LINK_TEMPLATE,
    rail: [["wa", ExternalLink, "WhatsApp", { kind: "wa" }], ["main", Check, "Link sent", { effect: "link_sent" }],
      ["stop", X, "Declined", { effect: "declined" }], ["", ChevronDown, "Skip", { kind: "skip" }]],
  },
  close: {
    title: "Close as no answer", cls: "due", why: (l) => `Followed up ${daysSince(l.followup_sent_at)} days ago, no reply`,
    rail: [["", MessageCircle, "Replied", { effect: "replied" }], ["main", Archive, "Close", { effect: "close" }],
      ["stop", X, "Declined", { effect: "declined" }], ["", ChevronDown, "Skip", { kind: "skip" }]],
  },
  brief: {
    title: "Review the brief", cls: "due", why: (l) => `${l.brief?.mockups ?? 0} [MOCKUP] lines to check`,
    rail: [["", FileText, "Open", { kind: "open" }], ["main", Check, "Approve", { effect: "approve_brief" }],
      ["", Undo2, "Send back", { kind: "rework" }], ["", ChevronDown, "Skip", { kind: "skip" }]],
  },
  send: {
    title: "Send the preview", cls: "", why: (l) => (l.hook ? "Video and personal line ready" : "Ready to send, no personal line yet"),
    template: () => OUTREACH_TEMPLATE,
    rail: [["wa", ExternalLink, "WhatsApp", { kind: "wa" }], ["", Download, "Video", { kind: "media" }],
      ["main", Check, "Sent", { effect: "sent" }], ["", ChevronDown, "Skip", { kind: "skip" }]],
  },
};
const FILTERS: [TodayAction | "all", string][] = [["all", "All"], ["followup", "Follow-ups"], ["link", "Links"], ["close", "To close"], ["brief", "Briefs"], ["send", "Previews"]];

function useSender() {
  const [sender, setSender] = useState("");
  useEffect(() => { try { setSender(localStorage.getItem("sender_name") || ""); } catch {} }, []);
  const save = (v: string) => { setSender(v); try { localStorage.setItem("sender_name", v); } catch {} };
  return [sender, save] as const;
}

function Media({ lead, action }: { lead: Lead; action: TodayAction }) {
  if (action === "brief") {
    return (
      <div className="brief-doc"><h4>Brief · {lead.type}</h4><p>{lead.brief?.personality}</p>
        <ol>{lead.brief?.sections.map((s) => <li key={s}>{s}</li>)}</ol></div>
    );
  }
  if (action === "send" && lead.media.video) {
    return <video src={shotUrl(lead.slug, "outreach-scroll.mp4")} poster={stillOf(lead)} muted loop playsInline preload="metadata" aria-label={`Scroll video of the ${lead.name} mockup`} />;
  }
  const still = stillOf(lead);
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {still && <img src={still} alt={`${lead.name} mockup on a phone`} loading="lazy" />}
      {action === "send" && <span className="novid">Video not made yet · screenshot shown</span>}
    </>
  );
}

export default function Today() {
  const { leads, error } = useLeads();
  const toast = useToast();
  const [filter, setFilter] = useState<TodayAction | "all">("all");
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState("");
  const [sheet, setSheet] = useState(false);
  const [rework, setRework] = useState<string | null>(null); // note being written for a brief
  const [sender, setSender] = useSender();
  const [edited, setEdited] = useState<Record<string, string>>({});
  const feed = useRef<HTMLDivElement>(null);

  const all = useMemo(() => (leads ? todayQueue(leads, sentTodayCount(leads)) : []), [leads]);
  const list = useMemo(() => all.filter((q) => filter === "all" || q.action === filter), [all, filter]);
  const ready = leads?.filter((l) => l.stage === "ready").length ?? 0;
  const sendsLeft = Math.max(0, DAILY_SENDS - (leads ? sentTodayCount(leads) : 0));
  const item = list[Math.min(current, list.length - 1)];

  // Which slide is on screen; play only its video.
  useEffect(() => {
    const root = feed.current;
    if (!root) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        const v = e.target.querySelector("video");
        if (e.isIntersecting) { setCurrent(Number((e.target as HTMLElement).dataset.i)); v?.play().catch(() => {}); }
        else v?.pause();
      }
    }, { root, threshold: 0.6 });
    root.querySelectorAll(".slide").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [list]);

  const go = useCallback((i: number) => feed.current?.scrollTo({ top: i * feed.current.clientHeight, behavior: "smooth" }), []);

  const message = (lead: Lead, action: TodayAction) => {
    const t = ACTIONS[action].template;
    if (!t) return "";
    return edited[`${lead.slug}:${action}`] ?? fillMessage(t(lead), { name: lead.name, sender, hook: lead.hook, link: lead.preview_url });
  };

  // Slide out, save, then the refetch drops the lead from the queue. Undo sends the inverse op.
  async function apply(lead: Lead, effect: Effect) {
    const move = EFFECTS[effect];
    setLeaving(lead.slug);
    try {
      await patchShop(lead.slug, move.body);
      const undo = "undo" in move ? move.undo : undefined;
      toast(`${lead.name}: ${move.label}`, {
        undo: undo ? () => patchShop(lead.slug, undo).catch((e) => toast(e.message, { error: true })) : undefined,
      });
    } catch (e) {
      toast(e instanceof Error ? e.message : String(e), { error: true });
    } finally {
      setLeaving("");
    }
  }

  async function sendBack(lead: Lead, note: string) {
    setLeaving(lead.slug);
    try {
      await patchShop(lead.slug, { status: "brief_rework", note });
      toast(`${lead.name}: brief sent back to Claude`);
      setRework(null);
    } catch (e) {
      toast(e instanceof Error ? e.message : String(e), { error: true });
    } finally {
      setLeaving("");
    }
  }

  async function media(lead: Lead, action: TodayAction) {
    if (action === "send" && lead.media.video) {
      const url = shotUrl(lead.slug, "outreach-scroll.mp4");
      // On a phone, share straight into WhatsApp; elsewhere, download it.
      try {
        const blob = await (await fetch(url)).blob();
        const file = new File([blob], `${lead.slug}-preview.mp4`, { type: "video/mp4" });
        if (navigator.canShare?.({ files: [file] })) { await navigator.share({ files: [file] }); return; }
      } catch { /* fall through to download */ }
      const a = document.createElement("a"); a.href = url; a.download = `${lead.slug}-preview.mp4`; a.click();
      return;
    }
    const still = stillOf(lead);
    if (!still) return toast("No screenshot for this shop yet.", { error: true });
    try {
      await navigator.clipboard.write([new ClipboardItem({ "image/png": fetch(still).then((r) => r.blob()) })]);
      toast("Image copied: paste it into the chat");
    } catch {
      const a = document.createElement("a"); a.href = still; a.download = `${lead.slug}-preview.png`; a.click();
    }
  }

  function run(i: number, does: RailDo) {
    const q = list[i];
    if (!q) return;
    if ("effect" in does) return apply(q.lead, does.effect);
    if (does.kind === "skip") return go(i + 1);
    if (does.kind === "media") return media(q.lead, q.action);
    if (does.kind === "rework") { setCurrent(i); setRework(""); setSheet(true); return; }
    if (does.kind === "wa") {
      const url = whatsappLink(q.lead.phone, message(q.lead, q.action));
      if (!url) return toast("No phone number in this shop's listing.", { error: true });
      window.open(url, "_blank", "noreferrer");
    }
  }

  // J/K to move, E for the main action
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest("input, textarea, select")) return;
      if (e.key === "j" || e.key === "ArrowDown") { e.preventDefault(); go(current + 1); }
      if (e.key === "k" || e.key === "ArrowUp") { e.preventDefault(); go(Math.max(0, current - 1)); }
      if (e.key === "e" && list[current]) {
        const main = ACTIONS[list[current].action].rail.find(([cls]) => cls === "main");
        if (main) run(current, main[3]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (error) return <p className="loading error">{error}</p>;
  if (!leads) return <p className="loading">Loading…</p>;
  const counts = Object.fromEntries(FILTERS.map(([k]) => [k, k === "all" ? all.length : all.filter((q) => q.action === k).length]));

  return (
    <section className="screen" aria-label="Today">
      <header className="head">
        <h1>Today</h1>
        <p className="sub">{all.length} due · {sendsLeft} of {ready} previews to send today</p>
      </header>
      <div className="today">
        <div className="feed-wrap">
          <div className="feed-top">
            <div className="seg" role="group" aria-label="Show">
              {FILTERS.filter(([k]) => k === "all" || counts[k]).map(([k, label]) => (
                <button key={k} type="button" aria-pressed={filter === k} onClick={() => { setFilter(k); setCurrent(0); feed.current?.scrollTo({ top: 0 }); }}>
                  {label}<span className="c">{counts[k]}</span>
                </button>
              ))}
            </div>
            <span className="pos">{list.length ? Math.min(current, list.length - 1) + 1 : 0} of {list.length}</span>
          </div>
          <div className="feed" ref={feed} tabIndex={0} aria-label="Due leads, one at a time">
            {list.map((q, i) => {
              const a = ACTIONS[q.action];
              const l = q.lead;
              const WhyIcon = a.cls === "over" ? Clock : q.action === "send" ? Send : Calendar;
              return (
                <article key={`${l.slug}:${q.action}`} className={`slide ${leaving === l.slug ? "leaving" : ""}`} data-i={i} aria-label={`${l.name}: ${a.title}`}
                  style={stillOf(l) ? ({ "--poster": `url('${stillOf(l)}')` } as React.CSSProperties) : undefined}>
                  <div className="frame">
                    <Media lead={l} action={q.action} />
                    <div className="scrim">
                      <h3>{l.name}</h3>
                      <div className="facts">{[l.type, l.area, l.rating ? `${l.rating} from ${(l.reviews ?? 0).toLocaleString("en-US")} reviews` : ""].filter(Boolean).map((f) => <span key={f}>{f}</span>)}</div>
                      <span className={`why ${a.cls}`}><WhyIcon />{a.why(l)}</span>
                    </div>
                  </div>
                  <div className="rail">
                    {a.template && (
                      <button type="button" className="only-sm" onClick={() => { setCurrent(i); setSheet((s) => !s); }}>
                        <span className="g"><MessageSquareText /></span>Message
                      </button>
                    )}
                    {a.rail.map(([cls, Icon, label, does]) => {
                      const Inner = <><span className="g">{does && "kind" in does && does.kind === "media" && q.action === "send" && !l.media.video ? <ImageIcon /> : <Icon />}</span>{label}</>;
                      return "kind" in does && does.kind === "open"
                        ? <Link key={label} href={`/briefs/${l.slug}`} className={cls}>{Inner}</Link>
                        : <button key={label} type="button" className={cls} disabled={leaving === l.slug} onClick={() => run(i, does)}>{Inner}</button>;
                    })}
                  </div>
                </article>
              );
            })}
            <section className="end">
              <div><CircleCheck size={28} /><h3>Done for today</h3>
                <p>{Math.max(0, ready - sendsLeft)} more previews are ready for the days ahead.</p></div>
            </section>
          </div>
        </div>

        <aside className={`side ${sheet ? "open" : ""}`} aria-label="Message and up next">
          {item ? <SidePanel key={`${item.lead.slug}:${item.action}`} lead={item.lead} action={item.action}
            text={message(item.lead, item.action)} sender={sender} setSender={setSender}
            onEdit={(v) => setEdited((e) => ({ ...e, [`${item.lead.slug}:${item.action}`]: v }))}
            onWa={() => run(list.indexOf(item), { kind: "wa" })} onMedia={() => media(item.lead, item.action)}
            rework={rework} setRework={setRework} onRework={(note) => sendBack(item.lead, note)}
            onCopy={async () => (await copyText(message(item.lead, item.action)) ? toast("Message copied") : toast("Couldn't copy; select the text instead", { error: true }))} />
            : <div><h2>All clear</h2><p className="hint">Nothing else is due today.</p></div>}
          <div>
            <h2>Up next</h2>
            <div className="upnext">
              {list.slice(current + 1, current + 6).map((u, k) => (
                <button key={`${u.lead.slug}:${u.action}`} type="button" onClick={() => go(current + 1 + k)}>
                  <span className="thumb" style={{ backgroundImage: stillOf(u.lead) ? `url('${stillOf(u.lead)}')` : undefined }} />
                  <span><strong>{u.lead.name}</strong><small>{ACTIONS[u.action].title}</small></span>
                </button>
              ))}
              {list.length <= current + 1 && <p className="hint">That&rsquo;s the last one today.</p>}
            </div>
          </div>
          <p className="kbd"><kbd>J</kbd> <kbd>K</kbd> move · <kbd>E</kbd> main action</p>
        </aside>
      </div>
    </section>
  );
}

function AutoTextarea({ value, onChange, label }: { value: string; onChange: (v: string) => void; label: string }) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight + 2}px`;
  }, [value]);
  return <textarea ref={ref} className="msg" value={value} onChange={(e) => onChange(e.target.value)} aria-label={label} />;
}

function SidePanel({ lead, action, text, sender, setSender, onEdit, onWa, onMedia, onCopy, rework, setRework, onRework }: {
  lead: Lead; action: TodayAction; text: string; sender: string; setSender: (v: string) => void;
  onEdit: (v: string) => void; onWa: () => void; onMedia: () => void; onCopy: () => void;
  rework: string | null; setRework: (v: string | null) => void; onRework: (note: string) => void;
}) {
  const a = ACTIONS[action];
  if (action === "close") {
    return (
      <div><h2>{a.title}</h2>
        <p className="hint">No reply {daysSince(lead.followup_sent_at)} days after the follow-up. Closing marks it <em>No answer</em> and queues the archive: its site and Coolify app get deleted; the brief, listing and photos are kept.</p>
        <ul className="timeline"><li className="done">Preview sent<time>{daysSince(lead.outreach_sent_at)} days ago</time></li>
          <li className="done">Follow-up sent<time>{daysSince(lead.followup_sent_at)} days ago</time></li><li className="due">No reply since</li></ul>
      </div>
    );
  }
  if (action === "brief") {
    return (
      <div><h2>{a.title}</h2>
        <p className="hint">Claude wrote this brief from the Maps listing. Check the {lead.brief?.mockups} lines tagged [MOCKUP], then approve it or send it back with a note.</p>
        {rework === null ? (
          <div className="acts" style={{ marginTop: 12 }}>
            <Link className="btn small" href={`/briefs/${lead.slug}`}><FileText />Open the brief</Link>
            <button type="button" className="btn small" onClick={() => setRework("")}><Undo2 />Send back</button>
          </div>
        ) : (
          <div className="rework-note" style={{ marginTop: 12 }}>
            <label className="label" htmlFor="rework">What should Claude change?</label>
            <textarea id="rework" className="input" value={rework} onChange={(e) => setRework(e.target.value)} autoFocus />
            <div className="acts"><button type="button" className="btn small primary" disabled={!rework.trim()} onClick={() => onRework(rework.trim())}>Send back</button>
              <button type="button" className="btn quiet" onClick={() => setRework(null)}>Cancel</button></div>
          </div>
        )}
      </div>
    );
  }
  const attach = action === "send" ? (lead.media.video ? "Scroll video of their mockup" : "Video not made yet")
    : action === "followup" ? "Phone screenshot of the hero" : null;
  return (
    <>
      <div><h2>{a.title}</h2>
        {attach && <button type="button" className="attach btn quiet" onClick={onMedia}>{action === "send" ? (lead.media.video ? <Play /> : <ImageIcon />) : <ImageIcon />}{attach}{action === "send" && lead.media.video && <Share2 size={14} />}</button>}
      </div>
      {!sender.trim() && a.template?.(lead).includes("{sender}") && (
        <div className="sender"><input className="input" placeholder="Your name for the message" onChange={(e) => setSender(e.target.value)} aria-label="Your name" /></div>
      )}
      <AutoTextarea value={text} onChange={onEdit} label={`Message to ${lead.name}`} />
      <div className="acts">
        <button type="button" className="btn small" onClick={onCopy}><Copy />Copy message</button>
        <button type="button" className="btn small wa" onClick={onWa}><ExternalLink />Open in WhatsApp</button>
      </div>
    </>
  );
}
