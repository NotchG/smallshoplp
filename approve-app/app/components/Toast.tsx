"use client";
import { createContext, useCallback, useContext, useRef, useState } from "react";

interface ToastState { text: string; undo?: () => void; error?: boolean }
type Show = (text: string, opts?: { undo?: () => void; error?: boolean }) => void;

const ToastContext = createContext<Show>(() => {});
export const useToast = () => useContext(ToastContext);

// One toast at a time, bottom centre, with an optional Undo.
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ToastState | null>(null);
  const [on, setOn] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = useCallback<Show>((text, opts) => {
    setState({ text, ...opts });
    setOn(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOn(false), opts?.error ? 6000 : 4500);
  }, []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div className={`toast ${on ? "on" : ""} ${state?.error ? "err" : ""}`} role="status" aria-live="polite">
        <span>{state?.text}</span>
        {state?.undo && (
          <button type="button" onClick={() => { setOn(false); state.undo?.(); }}>Undo</button>
        )}
      </div>
    </ToastContext.Provider>
  );
}
