---
version: 1
slug: "approve-app"
primary_target: "approve-app"
related_targets: []
---

# approve-app: Lead Management System

Scope: the whole local console (`approve-app/`), reworked into an LMS. Visitor mode: Operate.
Mockups come first (`design/lms-mockup/`); the Next.js rework follows once they are approved.

- Audience: one operator at a Mac with WhatsApp Desktop beside it, sometimes on a phone.
- Job: clear what is due today, see where every lead stands, read how outreach converts.
- Areas, with equal weight: Sales (Today, Pipeline, Leads, Metrics) and Production
  (Candidates, Briefs, Build queue, Published).
- Content: real `data/shops.json` and each shop's own outreach video and screenshots. No invented
  deals, replies or revenue: zero-reply states are shown as they are.
- Open: deal value, notes and an activity log are out of scope for this round.

## Direction contract

THESIS: The lead's own site is the interface. Today is a vertical feed where one lead's scroll
video fills the full height and its actions stack on a right rail; refuses the CRM default of
KPI tiles over a kanban of text cards.

OWN-WORLD: void-to-mist slate shell (#0a0a0b to #2a2f39), sand #c7b9a6 as the warm neutral,
white as the active state, WhatsApp green only on the send action, amber due, coral overdue or
declined. A tall condensed display face for shop names and screen titles, a clean sans for
everything else, thin 1.5px line icons, outlined controls with tracked labels.

STORY: The operator opens the app, sees the count due, works the feed one lead at a time (send,
nudge, close, link), then steps out to the board, table or metrics to see the whole line.

FIRST VIEWPORT: Left nav (Sales, Production) with counts; centre: the current lead's phone video at
full height with the bottom scrim caption (shop, area, rating, why due); right rail: the stacked
action glyphs; right column: the ready-to-send Indonesian message and Up next.

FORM: pop-culture-shelf-vertical-video-feed-surface (dealt challenger, chosen by the user over
the assigned direction); seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the
verdict, DESIGN.md, and every shipping raster carrying its provenance
