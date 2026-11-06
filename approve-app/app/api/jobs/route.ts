import { NextResponse } from "next/server";
import { createJob, listJobs, validateJob } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ jobs: await listJobs() });
}

// { kind, slugs? } or, for discover, { kind: "discover", area, types?, count? }
export async function POST(req: Request) {
  const checked = validateJob(await req.json().catch(() => null));
  if (typeof checked === "string") return NextResponse.json({ error: checked }, { status: 400 });
  return NextResponse.json({ job: await createJob(checked.kind, checked.args) }, { status: 201 });
}
