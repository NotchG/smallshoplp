import { Check } from "lucide-react";
import { DEAL_STAGES } from "@/lib/pipeline";

// Prospect → Hot prospect → DO. stage: "prospect" | "hot" | "do" | anything else (none reached).
export default function DealStepper({ stage }: { stage: string | null | undefined }) {
  const at = DEAL_STAGES.findIndex((s) => s.key === stage);
  return (
    <ol className="deal" aria-label="Deal stage">
      {DEAL_STAGES.map((s, i) => {
        const state = at === -1 ? "upcoming" : i < at ? "done" : i === at ? "current" : "upcoming";
        return (
          <li key={s.key} className={`deal-step ${state}`} aria-current={state === "current" ? "step" : undefined}>
            <span className="deal-mark" aria-hidden="true">{state === "done" ? <Check size={14} strokeWidth={2} /> : i + 1}</span>
            <span className="deal-text">
              <span className="deal-title">{s.title}</span>
              <span className="deal-about">{s.about}</span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}
