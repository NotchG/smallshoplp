"use client";
import { useState } from "react";

// A block of text with a Copy button: Claude Code commands, terminal commands, messages.
export default function CopyBlock({ label, text, multiline = false }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for browsers that block the clipboard API.
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); ta.remove();
    }
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
