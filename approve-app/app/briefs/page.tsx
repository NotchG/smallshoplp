import { redirect } from "next/navigation";

// The brief list moved into Production; the editor stays at /briefs/<slug>.
export default function BriefsRedirect() {
  redirect("/production/briefs");
}
