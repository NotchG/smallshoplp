"use client";
import { useState } from "react";
import { copyText } from "@/lib/actions";

// A block of text with a Copy button: Claude Code commands, terminal commands, messages.
export default function CopyBlock({ label, text, multiline = false }: { label?: string; text: string; multiline?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!(await copyText(text))) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="copy">
      {label && <p className="copy-label">{label}</p>}
      <div className="copy-row">
        <pre className={multiline ? "copy-text multi" : "copy-text"}>{text}</pre>
        <button className="btn copy-btn" onClick={copy} aria-live="polite">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
