# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

One operator (the owner of this project) who finds small local shops in Jakarta, has Claude Code
build each one a mockup landing page, and pitches the shop owner over WhatsApp Business. They work
at a Mac with WhatsApp Desktop open beside the app, and sometimes check it on a phone. There is no
team, no lead assignment and no per-user view.

## Product Purpose

smallshoplp turns Google Maps listings into sales: discover shops, approve candidates, approve
briefs, have Claude plan and build a mockup site per shop, publish it to Coolify, then pitch the
owner and close the deal. The local app (`approve-app/`) is the operator's console for all of it.
Its rework turns it into a Lead Management System: a dashboard where the operator sees what is due
today, how the funnel converts, and where every lead stands. Success is fewer leads forgotten
between follow-ups and a clear read on which outreach converts.

## Positioning

Every lead arrives with a finished asset: the shop already has a built mockup site, a scroll
video and a personalized opening line before the first message. The pitch is "here is your site",
not "I could build you one". Leads come from public Maps listings, not inbound forms.

## Operating Context

- Data lives in `data/shops.json` (written by scripts and the app) and `shops/<slug>/` folders.
  The app runs locally only, with no login.
- Two halves of one pipeline, with equal weight in the app:
  - **Production:** candidate → approved → brief_ready / brief_rework → brief_approved → planned
    → built, plus publish to Coolify. Claude Code does the work; the app shows the command to copy.
  - **Sales:** preview sent (video, no link) → follow-up after 3 days (phone screenshot) → no
    answer after 3 more days, or the owner replies → link sent → Prospect → Hot prospect → DO
    (ordered). Declined and unanswered shops become rejected and get archived.
- Messages to owners are in Bahasa Indonesia. Sending happens by hand in WhatsApp (wa.me links,
  downloaded video, copied image). The app records what was sent.
- Typical volume: a few hundred shops in total, tens in active outreach at once.

## Capabilities and Constraints

- Wanted in the LMS: a Today queue (everything due now across both halves), funnel metrics
  (sent → replied → prospect → DO, reply rate, conversion, time to reply, by area or category)
  and a pipeline board (stage columns; moving a lead records the same events as today's buttons).
- Statuses that only the human may set: approved, rejected, brief_approved, owner_approved.
- Undecided: deal value and revenue tracking, notes, and an activity log (not requested in this round).
- The UI is in English; the owner messages are in Indonesian.

## Evidence on Hand

Real data in `data/shops.json`: about 140 shops (61 candidates, 74 built, 8 contacted, 1 declined
as of 2026-11-06), with listing facts (rating, review count, type, address), screenshots, preview
URLs and outreach timestamps. There are no deals or revenue figures yet, and none may be invented.

## Product Principles

- Nothing due may hide: whatever needs the operator today is on the first screen.
- The pipeline is one continuous line from Maps listing to ordered site; both halves read as stages
  of the same journey.
- Record facts, don't guess: every stage change is an event the operator made or a script wrote.
- Hand-offs to Claude Code are copyable commands, never hidden automation.
