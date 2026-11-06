import { redirect } from "next/navigation";

// Candidates moved into Production.
export default function CandidatesRedirect() {
  redirect("/production/candidates");
}
