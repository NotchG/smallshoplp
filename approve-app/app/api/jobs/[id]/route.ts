import { NextResponse } from "next/server";
import { readJob, readLog } from "@/lib/jobs";

export const dynamic = "force-dynamic";

// The job and its log from ?from=<byte offset>; poll with the returned `next`.
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = await readJob(id);
  if (!job) return NextResponse.json({ error: "No such job." }, { status: 404 });
  const from = Number(new URL(req.url).searchParams.get("from") || 0);
  const log = await readLog(id, Number.isFinite(from) ? from : 0);
  return NextResponse.json({ job, log: log.text, next: log.next });
}
