"use client";
import { useEffect, useState } from "react";
import CopyBlock from "../components/CopyBlock";
import { useShops } from "../useShops";
import { DOC_SECTIONS, fill } from "@/lib/docs";

const KIND = { claude: "Claude Code", terminal: "Terminal", prompt: "Prompt for Claude Code" };

export default function Docs() {
  const { shops } = useShops();
  const [slug, setSlug] = useState("");
  const [area, setArea] = useState("");

  useEffect(() => {
    try { setArea(localStorage.getItem("docs_area") || ""); } catch {}
  }, []);
  function changeArea(v: string) {
    setArea(v);
    try { localStorage.setItem("docs_area", v); } catch {}
  }

  return (
    <>
      <h1>Docs</h1>
      <p className="lede">
        Every command for this project. Claude Code commands go into Claude Code, opened in the
        <code> smallshoplp</code> folder; terminal commands run in a terminal at the same folder.
        Pick a shop and an area to fill them in.
      </p>

      <div className="doc-pickers">
        <div className="field">
          <label htmlFor="doc-slug">Shop</label>
          <select id="doc-slug" value={slug} onChange={(e) => setSlug(e.target.value)}>
            <option value="">&lt;slug&gt;</option>
            {(shops || []).map((s) => <option key={s.slug} value={s.slug}>{s.name} ({s.slug})</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="doc-area">Area</label>
          <input id="doc-area" value={area} onChange={(e) => changeArea(e.target.value)} placeholder="e.g. Kemang, Jakarta" />
        </div>
      </div>

      <nav className="doc-toc" aria-label="Sections">
        {DOC_SECTIONS.map((s) => <a key={s.id} href={`#${s.id}`}>{s.title}</a>)}
      </nav>

      {DOC_SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="doc-section" aria-labelledby={`${section.id}-t`}>
          <h2 id={`${section.id}-t`}>{section.title}</h2>
          {section.intro && <p className="doc-intro">{section.intro}</p>}
          <div className="doc-items">
            {section.items.map((item) => (
              <div key={item.label} className="doc-item">
                <p className="copy-label">{item.label} <span className={`kind ${item.kind}`}>{KIND[item.kind]}</span></p>
                <CopyBlock text={fill(item.text, { slug, area })} multiline={item.kind === "prompt"} />
              </div>
            ))}
          </div>
        </section>
      ))}

      <p className="empty-line" style={{ marginTop: 40 }}>
        Commands without a shop name act on every shop at the step they expect. Add a slug to act on one.
        Message wording and follow-up timings live in <code>approve-app/lib/outreach.ts</code>; this page&rsquo;s
        content in <code>approve-app/lib/docs.ts</code>.
      </p>
    </>
  );
}
