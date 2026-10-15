// Day of the week in Asia/Jakarta (UTC+7, no DST). 0 = Minggu ... 6 = Sabtu.
export function jakartaDay(now: number = Date.now()): number {
  return new Date(now + 7 * 60 * 60 * 1000).getUTCDay();
}

// Runs in <head> before first paint: marks today's open state (Asia/Jakarta) and, if the
// visitor has no motion preference, turns on the hero's hidden start states.
export const prePaintScript = `(function(){try{var r=document.documentElement;var d=new Date(Date.now()+252e5).getUTCDay();r.setAttribute("data-open",d===0?"0":"1");if(window.matchMedia("(prefers-reduced-motion: no-preference)").matches){r.setAttribute("data-motion","on");}}catch(e){}})();`;
