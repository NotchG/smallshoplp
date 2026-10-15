# Design brief: <Shop name>

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
One sentence: what this site feels like and why it fits this shop specifically.
One sentence: the signature moment (see motion-rules.md).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | |
| impeccable | |

## 3. Palette (4–6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|

## 4. Type
Family (max 2), loaded with `next/font`. Fill in the starter's variables in `globals.css`:

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | | hero name or headline only |
| `--step-head` | | section headings |
| `--step-lead` | | statements, h3 |
| `--step-body` | | running text, list items |
| `--step-small` | | captions, labels |

Rules: each step at least 1.25× the one below it. Nothing outranks its own section heading
except the hero. Line height at least 1.05 for anything that can wrap, 1.5 for body text.
Display may go to 0.9 only when it's guaranteed to be one line.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | ~1100–1280px |
| Page margins phone / desktop (`--gutter`) | |
| Section padding phone / desktop (`--section-y`) | 48–80px / 80–120px |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.

## 6. Products on the page
For food and product shops, at least 3 actual products are shown, not just named: the
owner's own photos (see "Owner-provided assets" in brief.md) or flat illustrations of the
specific items. A picture of the place doesn't count. Name which products and how they appear.

## 7. Sections
For each section: purpose, content, and two wireframes.
```
<Section name>: phone (390)       <Section name>: desktop (1440)
+----------------+                +------------------------------------+
|                |                |                                    |
+----------------+                +------------------------------------+
```

## 8. Motion
The signature moment (what, where, timing, reduced-motion version), then the few
supporting reveals. Within motion-rules.md. Motion tokens for `lib/motion.ts` if they differ
from the starter.

## 9. What makes it this shop
Two or three specific choices that wouldn't appear on another shop's site.

## 10. Avoid
The generic patterns this design must not fall into, and the specific ways this concept could go wrong.

## Self-check (planner ticks before finishing)
- [ ] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [ ] Max content width set; no detail pinned far from what it describes
- [ ] Every section has a desktop wireframe that uses the width on purpose
- [ ] At least 3 products shown (food and product shops)
- [ ] Within motion-rules.md
- [ ] Brief is decisions, not essays (2–4 pages)
