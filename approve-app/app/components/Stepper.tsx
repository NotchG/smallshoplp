import { Check } from "lucide-react";
import { STEPS } from "@/lib/pipeline";

// All 8 steps, with the current one highlighted. current: index, STEPS.length = done, -1 = rejected.
export default function Stepper({ current }: { current: number }) {
  return (
    <ol className="stepper" aria-label="Pipeline steps">
      {STEPS.map((s, i) => {
        const state = current === -1 ? "upcoming" : i < current ? "done" : i === current ? "current" : "upcoming";
        return (
          <li key={s.key} className={`step ${state}`} aria-current={state === "current" ? "step" : undefined}>
            <span className="step-mark" aria-hidden="true">{state === "done" ? <Check size={14} strokeWidth={2} /> : i + 1}</span>
            <span className="step-body">
              <span className="step-title">
                {s.title}
                <span className={`who ${s.who}`}>{s.who === "you" ? "You" : "Claude Code"}</span>
              </span>
              {state === "current" && <span className="step-about">{s.about}</span>}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
