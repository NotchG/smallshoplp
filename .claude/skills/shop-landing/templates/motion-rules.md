# Motion house rules

These apply to every shop. A shop's design brief can tune them, not drop them.

1. **Motion has a job.** It orients (where am I), focuses (look here), or responds (you did
   that). Decoration on its own isn't a job.
2. **One signature moment per site,** usually the hero. Everything else is quiet.
3. **Reveals are for sections, not elements.** A section fades up once, a small distance
   (about 20 px), 0.5–0.8 s, ease-out. No staggering every word, card and icon.
4. **Responses are fast.** Hover and press feedback 150–250 ms, ease-out, usually plain CSS.
   Interactive motion must be interruptible.
5. **Lenis stays gentle.** Never hijack scroll, never snap sections, native scrolling on touch.
6. **Transform and opacity only.** Never animate width, height, top/left or anything that
   moves layout. Don't scale from 0; start near the final size.
7. **React Bits: two components at most.** One may be in the hero. Text effects run once,
   on the headline only, never on body copy. No cursor trails, particle fields or background
   noise unless the shop brief's personality genuinely calls for it.
8. **Nothing waits on animation.** No preloaders, no content hidden until JS runs longer than
   the hero sequence, all text readable with JS off.
9. **Reduced motion means none.** Lenis off, GSAP skipped (content at final state), React Bits
   in a static form.
10. **Clean up.** Use `useGSAP` with a scope so animations and ScrollTriggers die with their component.
