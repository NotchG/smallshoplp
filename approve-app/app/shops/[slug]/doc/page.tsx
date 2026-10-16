"use client";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function Doc() {
  const { slug } = useParams();
  const path = useSearchParams().get("path") || "";
  const [text, setText] = useState<string | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`/api/shops/${slug}/file?path=${encodeURIComponent(path)}`, { cache: "no-store" })
      .then(async (r) => (r.ok ? setText(await r.text()) : setError("Document not found.")))
      .catch(() => setError("Couldn't load the document."));
  }, [slug, path]);
  return (
    <>
      <Link href={`/shops/${slug}`} className="back">Back to shop</Link>
      <h1 style={{ marginBottom: 16 }}>{path.split("/").pop()}</h1>
      {error && <p className="error">{error}</p>}
      {text === null && !error && <p className="empty">Loading…</p>}
      {text !== null && <div className="doc-view">{text}</div>}
    </>
  );
}

export default function DocPage() {
  return <Suspense fallback={<p className="empty">Loading…</p>}><Doc /></Suspense>;
}
