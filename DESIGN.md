---
name: smallshoplp leads
description: A dark operator console where each lead's own mockup fills the screen, and state reads by shape as well as colour.
colors:
  void: "#0a0a0b"
  bg: "#121316"
  panel: "#16171b"
  slate: "#1b1d22"
  raised: "#22252c"
  mist: "#2c313b"
  hairline: "#1d1f24"
  fog: "#7d8592"
  muted: "#a0a7b2"
  text-soft: "#d7dbe0"
  text: "#eef0f2"
  sand: "#c7b9a6"
  white: "#ffffff"
  white-hover: "#e4e6e9"
  wa: "#25d366"
  wa-ink: "#04210f"
  amber: "#f2b24a"
  coral: "#ff6b5e"
typography:
  display:
    fontFamily: 'Antonio, "Arial Narrow", sans-serif'
    fontSize: "48px"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "0.005em"
  headline:
    fontFamily: 'Antonio, "Arial Narrow", sans-serif'
    fontSize: "44px"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "0.005em"
  figure:
    fontFamily: 'Antonio, "Arial Narrow", sans-serif'
    fontSize: "56px"
    fontWeight: 500
    lineHeight: 1
  title:
    fontFamily: 'Antonio, "Arial Narrow", sans-serif'
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1
  title-column:
    fontFamily: 'Antonio, "Arial Narrow", sans-serif'
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.01em"
  brand:
    fontFamily: 'Antonio, "Arial Narrow", sans-serif'
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
  body:
    fontFamily: '"Schibsted Grotesk", system-ui, sans-serif'
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
  message:
    fontFamily: '"Schibsted Grotesk", system-ui, sans-serif'
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: '"Schibsted Grotesk", system-ui, sans-serif'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45
  small:
    fontFamily: '"Schibsted Grotesk", system-ui, sans-serif'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.45
  chip:
    fontFamily: '"Schibsted Grotesk", system-ui, sans-serif'
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.45
  count:
    fontFamily: '"Schibsted Grotesk", system-ui, sans-serif'
    fontSize: "12px"
    fontWeight: 500
    fontFeature: '"tnum" 1'
  label:
    fontFamily: '"Schibsted Grotesk", system-ui, sans-serif'
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.14em"
  button:
    fontFamily: '"Schibsted Grotesk", system-ui, sans-serif'
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.1em"
  caption:
    fontFamily: '"Schibsted Grotesk", system-ui, sans-serif'
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.08em"
  mono:
    fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  hair: "2px"
  sm: "4px"
  thumb: "5px"
  control: "6px"
  r: "8px"
  column: "10px"
  panel: "12px"
  sheet: "14px"
  frame: "22px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  gutter: "28px"
  gutter-phone: "16px"
  nav: "232px"
  side: "384px"
  tabbar: "64px"
components:
  button:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "36px"
  button-hover:
    backgroundColor: "{colors.slate}"
  button-small:
    padding: "0 10px"
    height: "30px"
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.void}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "36px"
  button-primary-hover:
    backgroundColor: "{colors.white-hover}"
  button-whatsapp:
    backgroundColor: "{colors.wa}"
    textColor: "{colors.wa-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "36px"
  button-stop:
    backgroundColor: "transparent"
    textColor: "{colors.coral}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "36px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.meta}"
    padding: "0 4px"
  input:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "36px"
  segment:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.thumb}"
    padding: "0 12px"
    height: "30px"
  segment-active:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.white}"
  nav:
    backgroundColor: "{colors.void}"
    width: "{spacing.nav}"
    padding: "20px 14px 16px"
  nav-item:
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "8px 10px"
  nav-item-hover:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.text}"
  nav-item-active:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.white}"
  nav-count-due:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.void}"
    typography: "{typography.count}"
    rounded: "{rounded.column}"
    padding: "0 7px"
  tab-bar:
    backgroundColor: "{colors.void}"
    height: "{spacing.tabbar}"
  tab-bar-item:
    textColor: "{colors.fog}"
  tab-bar-item-active:
    textColor: "{colors.white}"
  chip-open:
    textColor: "{colors.muted}"
    typography: "{typography.chip}"
  chip-done:
    textColor: "{colors.muted}"
    typography: "{typography.chip}"
  chip-due:
    textColor: "{colors.amber}"
    typography: "{typography.chip}"
  chip-overdue:
    textColor: "{colors.coral}"
    typography: "{typography.chip}"
  chip-active:
    textColor: "{colors.white}"
    typography: "{typography.chip}"
  chip-closed:
    textColor: "{colors.fog}"
    typography: "{typography.chip}"
  chip-production:
    textColor: "{colors.sand}"
    typography: "{typography.chip}"
  rail-action:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    size: "56px"
  rail-action-main:
    backgroundColor: "{colors.white}"
    textColor: "{colors.void}"
  rail-action-whatsapp:
    backgroundColor: "{colors.wa}"
    textColor: "{colors.wa-ink}"
  rail-action-stop:
    textColor: "{colors.coral}"
  phone-frame:
    backgroundColor: "{colors.slate}"
    rounded: "{rounded.frame}"
  lead-card:
    backgroundColor: "{colors.slate}"
    rounded: "{rounded.r}"
    padding: "8px"
  pipeline-column:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.column}"
    width: "236px"
  panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
    padding: "18px 20px"
  message:
    backgroundColor: "{colors.slate}"
    textColor: "#dfe2e6"
    typography: "{typography.message}"
    rounded: "{rounded.r}"
    padding: "14px"
  toast:
    backgroundColor: "{colors.white}"
    textColor: "{colors.void}"
    rounded: "{rounded.r}"
    padding: "10px 14px"
  toast-error:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.void}"
---

# Design System: smallshoplp leads

## Overview

**Creative North Star: "The Lead Is the Screen"**

The console is dark because of how it is used: one operator, beside WhatsApp Desktop, working through leads whose best asset is their own mockup site. The shell is a stack of near-black slates that recede, so on Today the brightest, most colourful thing on screen is the shop's scroll video, standing full height in a phone frame, with its actions stacked on a rail beside it. Every other screen is a dense, ordinary console: a side nav with counts, a board, a table with a drawer, a metrics page. They share the same small set of controls and chips.

Colour carries meaning, never decoration. White is the go voice and the active state. Sand is the one warm neutral, used for the wordmark, production stages and secondary data. Green, amber and coral each mean exactly one thing, and every state is coded twice, by chip shape and by colour. Type is a two-face system: Antonio, a tall condensed face in capitals, for shop names, screen titles and big figures, and Schibsted Grotesk for everything else, with tracked capitals on buttons and labels. The first screen rejects the CRM default of KPI tiles over a kanban of text cards.

Depth comes from tone, not shadow; only the phone frame and the toast lift. Motion is short and quiet: 120 to 150ms colour fades on hover, and one expo-out curve for the slide that leaves after an action, the drawer, the bottom sheet and the toast, all switched off under reduced motion.

**Key Characteristics:**
- Dark by use: void-to-mist slate shell, colour reserved for the lead's own media and for signals.
- One lead at a time on Today: full-height phone frame, near-solid caption scrim, action rail, message column.
- White is primary and active; green only on WhatsApp send; amber due; coral overdue or declined.
- State is double-coded: outline circle, filled circle, rotated square, strikethrough.
- Condensed capitals for names and titles, a clean grotesk for the rest, tracked capitals on controls.
- Outlined controls, lucide line icons at a 1.5 stroke, 1px borders, tonal surfaces, almost no shadow.

## Colors

A cool near-black slate ramp with one warm neutral and three signal colours, each bound to a single meaning.

### Primary
- **Signal White** (#ffffff): the primary action and the active state. Primary buttons, the rail's main action (Sent, Approve, Close), the active nav item's text, the pressed segment, the focus ring, checkbox accent, the toast, and the lead data series on Metrics (previews, contacted).
- **Pressed White** (#e4e6e9): the primary button's hover fill. It is a literal in the stylesheet, not a custom property.

### Secondary
- **WhatsApp Green** (#25d366): the WhatsApp send action only, the rail's WhatsApp glyph and the Open in WhatsApp button. Its ink is **Deep Green Ink** (#04210f), 8.6:1 on the green.
- **Due Amber** (#f2b24a): due. Due chips and timeline dots, the Today count in the nav (a pill with void ink), the why chip on a due lead, the border of a due waiting note.
- **Overdue Coral** (#ff6b5e): overdue or declined. The overdue chip, the why chip on an overdue lead, the Declined rail action and decline buttons (coral text over a coral border at 40%). Error text and the error toast share it.

### Neutral
- **Void Black** (#0a0a0b): the deepest layer. Side nav, phone tab bar, the caption scrim, the job log, ink on white and amber, the theme colour.
- **Night Console** (#121316): page background, sticky table heads and decision bars.
- **Panel Slate** (#16171b): metric panels, pipeline columns, the lead page's next-step panel, the brief preview.
- **Slate Well** (#1b1d22): cards, inputs, the message box, code wells, hover fills, the selected table row, the phone frame before media loads.
- **Raised Slate** (#22252c): the active nav item, the pressed segment, the sticky bulk-action bar, thumbnail placeholders.
- **Mist Line** (#2c313b): every 1px outline and divider on controls, cards, tables and chips; the scrollbar thumb.
- **Hairline** (#1d1f24): structural dividers under the screen header and beside the side column, drawer and tab bar. A literal in the stylesheet, not a custom property.
- **Fog Grey** (#7d8592): labels, table heads, counts in segments, placeholders, the closed state, inactive tabs. It holds 5.0:1 on the page background.
- **Muted Steel** (#a0a7b2): secondary text, sub-lines, hints, inactive nav items, rail captions.
- **Soft Paper** (#d7dbe0): reading copy laid on dark media, the caption facts, the brief slide's paragraph, the job log. A literal, not a custom property.
- **Cool Paper** (#eef0f2): primary text.
- **Warm Sand** (#c7b9a6): the one warm neutral. "shop" in the wordmark, production chips, the follow-up data series, the rating star, the attachment icon, the brief slide heading, text selection, the drop-target outline, and highlighted `[MOCKUP]` marks (sand at 18 to 20%).

### Named Rules
**The One Green Rule.** WhatsApp green appears only on WhatsApp send actions. It never marks success, done, online or a chart series.

**The White Is Go Rule.** White is the primary and active colour. No coloured brand accent competes with it.

**The Signal Rule.** Amber means due; coral means overdue or declined. Neither is used as decoration, emphasis or a chart colour.

## Typography

**Display Font:** Antonio (with Arial Narrow, sans-serif), weights 500 and 600, self-hosted through next/font.
**Body Font:** Schibsted Grotesk (with system-ui, sans-serif), variable weight.
**Label/Mono Font:** ui-monospace, SF Mono, Menlo, for copyable commands, the brief editor and the job log.

**Character:** A tall, condensed, all-caps display face that reads like a poster or a shelf label, paired with a plain, slightly warm grotesk that keeps a dense console legible at 12 to 14px.

### Hierarchy
- **Display** (Antonio 500, 48px, 0.92, uppercase, balanced wrap): the shop name on the Today caption, 34px on phone. The drawer's shop name speaks in the same voice at 34px/0.95.
- **Headline** (Antonio 500, 44px, 0.9, uppercase): screen titles at the left of the header row, with the muted sub-line beside them on the baseline; 34px on phone. Document pages (lead page, brief editor) set the shop name at 40px/0.95.
- **Figure** (Antonio 500, 56px, 1): funnel numbers on Metrics, 40px on phone.
- **Title** (Antonio 500, 28px, 1, uppercase): section titles on document pages and in the brief preview. **Column title** (Antonio 500, 20px, 1, 0.01em): pipeline column heads, set vertically in collapsed columns.
- **Brand** (Antonio 600, 26px, 1, uppercase): the wordmark, with "shop" in sand.
- **Body** (Schibsted Grotesk 400, 14px, 1.45): all interface text. Names in lists and cards run at 600.
- **Message** (400, 13.5px, 1.6): the WhatsApp draft and the brief editor. The brief slide's paragraph runs 15px/1.55. Prose measures stay between 60 and 70ch.
- **Meta** (400, 13px) and **Small** (400, 12px): hints, sub-lines and caption facts; secondary lines in cards, rows and legends.
- **Chip** (500, 12px): stage chips. **Count** (500, 12px, tabular): nav counts.
- **Label** (600, 11px, 0.14em, uppercase, fog): the heading of a side-column or panel section, nav group names, table heads (0.12em).
- **Button** (600, 12px, 0.1em, uppercase): every outlined and filled button. Quiet text buttons drop the capitals (13px, 500, underlined).
- **Caption** (600, 11px, 0.08em, uppercase): rail captions under the glyphs and the badge on a frame with no video.

### Named Rules
**The Bare Number Rule.** Tabular figures apply only to bare numbers: nav counts, segment counts, column counts, bar values, the feed position. Ratings, review counts with commas and dates stay proportional, because Schibsted Grotesk widens punctuation under tnum.

**The Condensed Name Rule.** Antonio is for shop names, screen titles, column heads and big figures, always in capitals. Buttons, labels and body copy are Schibsted Grotesk.

**The No Kicker Rule.** No kickers or eyebrow labels above headings. The 11px tracked label is itself the heading of a side or panel section; it never sits stacked above a display title.

## Layout

The shell is a two-column grid: a 232px side nav and a fluid main area that scrolls on its own. Full-height screens (Today, Pipeline, Leads, Metrics, Production) open with a header row: the headline, a muted sub-line baseline-aligned beside it, and tools pushed right, padded 22px 28px 16px over a hairline. The body below is padded 20px 28px 28px. Document pages (lead page, brief editor, commands) sit in a 1120px column padded 24px 28px 64px.

Today is a fluid feed plus a 384px side column. The feed snaps one slide per screen height. Each slide centres a 390:844 phone frame (up to 820px tall) with the action rail 22px to its right, aligned to the frame's bottom. The slide's backdrop is the lead's own still, blurred 56px at 22% opacity. The side column stacks the message, actions, Up next and the keyboard hint at 16px gaps.

Pipeline is a horizontal board of 236px columns at 14px gaps. Empty columns collapse to 48px strips with a vertical title, and a right-edge fade shows when more columns sit off screen. Leads is a sticky-headed table that opens a 380px drawer beside it. Metrics is a 1.4fr/1fr grid of panels at 20px gaps. Published is a shelf of phone thumbnails, auto-fill from 132px at 18px gaps.

Spacing runs on even steps from 4px: 4, 8, 12, 16 and 20 do most of the work, with 6, 10, 14, 18 and 22 in between for tight component interiors, and 28px as the screen gutter.

At 760px and below, everything becomes one column with 16px gutters. Headlines drop to 34px, pipeline columns take 78vw, panel grids stack, secondary table columns hide, and candidate rows reflow into two-line cards.

### Named Rules
**The Phone Feed Rule.** On phone, Today is a full-bleed feed: the frame loses its radius and shadow and fills the screen, the rail floats over the video at the right, the message moves into a bottom sheet opened from the rail, and a 64px tab bar replaces the side nav.

## Elevation & Depth

The system is flat and tonal. Depth is a lightness step (void, bg, panel, slate, raised) plus 1px mist or hairline borders, never a stack of shadows. Two things lift: the phone frame, as the one physical object on Today, and the toast, as the one transient layer. Translucency is used sparingly where text sits on live media: the why chip on the caption and the phone rail glyphs take a 6px backdrop blur, and phone rail captions carry a small black text shadow (0 1px 3px).

### Shadow Vocabulary
- **Frame lift** (`box-shadow: 0 30px 60px -20px #000c, 0 0 0 1px #ffffff14`): the phone frame on desktop Today and in the Leads drawer. The inner hairline edge keeps the frame's outline when the video is dark.
- **Toast lift** (`box-shadow: 0 12px 30px -8px #000`): the bottom-centre toast.

### Named Rules
**The Flat Console Rule.** Cards, panels, columns, inputs and the nav cast no shadow. Only the phone frame and the toast lift.

**The Scrim Rule.** The Today caption sits on a near-solid scrim that ends just above the shop name: void, solid to 55%, 80% at 75%, then clear. Name, facts and the why chip always read on solid void, whatever the video shows.

## Shapes

Corners are gently rounded and nest: 6px on controls, 8px on cards, wells, the message and the toast, 10px on pipeline columns, 12px on panels, 14px on the top of the phone bottom sheet, and 22px on the phone frame. The segmented control is concentric: 7px outside, 2px padding, 5px pressed segments. Small tags and key caps use 4px, bar tracks and highlight marks 2px. Circles are reserved for the rail's 56px action glyphs (48px on phone), stage markers, timeline dots and step marks.

Borders are 1px mist. A dashed border means something not yet real, or made by Claude: empty states, Show more, the drop target (a 1.5px dashed sand outline), and the Claude and prompt tags. Thumbnails keep the 390:844 phone ratio at every size, from 26px in a table row to the full shelf.

### Named Rules
**The Shape Carries State Rule.** State shows through chip shape as well as colour: an outline circle for open, a filled circle for done, a rotated square for overdue, strikethrough for closed. Colour reinforces the shape; it never stands alone.

**The Line Icon Rule.** Icons are lucide line icons at a 1.5 stroke: 18px by default, 22px on the rail, 13px beside a rating. No unicode glyphs as icons.

## Components

### Buttons
Outlined, tracked and quiet until one of them is the move.
- **Shape:** gently rounded (6px), at least 36px tall, 0 14px padding, an 8px gap to a leading icon. Small buttons are 30px tall with 0 10px padding and 11px labels.
- **Default:** transparent with a 1px mist border, a Cool Paper label in 12px tracked capitals (600, 0.1em).
- **Primary:** Signal White fill and border with void ink, for the one main action on a surface (Approve, Send back, Find shops, the drawer's next step). Hover fills Pressed White.
- **WhatsApp:** green fill with deep green ink. Only for opening WhatsApp with the message.
- **Stop:** coral label over a coral border at 40%, for Declined, Reject and similar.
- **Hover / Focus:** default buttons take a fog border and a slate fill over 150ms. Focus is a 2px white outline at a 2px offset, everywhere. Disabled is 40% opacity.
- **Quiet:** borderless underlined text in muted, 13px, no capitals, for Cancel and the attachment link.

### Chips
- **Style:** stage chips are text, not pills: 12px at 500 with an 8px marker drawn in currentColor at a 1.5px stroke, 6px from the label.
- **State:** open is an outline circle, done a filled circle, overdue a filled square turned 45°, closed is fog with strikethrough. Colour: muted for sales stages in flight, white for prospects and orders, amber for due, coral for overdue, sand for production stages.
- **Tags:** small 4px-radius outlined tags in muted (status, who, kind); dashed when the step belongs to Claude.

### Cards / Containers
- **Corner Style:** 8px on cards and wells, 10px on pipeline columns, 12px on panels.
- **Background:** cards on slate inside panel-coloured columns; panels on the page background.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** lead cards carry a transparent 1px border that turns mist on hover; a dragged card drops to 40% opacity. Wells (message, code) use a 1px mist border.
- **Internal Padding:** 8px on lead cards (a 52px phone thumbnail beside the name), 14px in the message, 18px 20px in panels.

### Inputs / Fields
- **Style:** 36px tall, slate fill, 1px mist border, 6px radius, 0 12px padding, fog placeholder. Selects are the same field with a small two-triangle chevron at the right. Textareas grow with their content and keep the same fill and border.
- **Focus:** the global 2px white outline at a 2px offset.
- **Segmented filter:** a 1px mist outline around 30px segments in muted 13px text; the pressed segment takes raised fill and white text. A count follows each label in fog.

### Navigation
- **Side nav:** void column, 232px, with the brand at the top, two groups (Sales, Production) under 11px tracked labels, and Commands and prompts at the foot. Items are 8px 10px rows with an 18px lucide icon, muted text at 500 and a count on the right in tabular figures. Hover fills slate and lifts the text; the current page fills raised with white text. The Today count is an amber pill with void ink.
- **Phone:** the side nav is gone and a 64px void tab bar sits at the bottom, five tabs (Today, Pipeline, Leads, Metrics, Production), each an icon over an 11px capital label in fog; the current tab is white.

### Today Feed Slide (signature)
One lead fills the screen. The phone frame holds the lead's own scroll video (or its phone screenshot, flagged by a small capital badge), at 22px radius with the frame lift. The caption scrim carries the shop name in Antonio at 48px, a line of facts in Soft Paper (type, area, rating from reviews), and the why chip: an icon and one sentence on white at 10%, blurred, in coral when overdue and amber when due. After an action the slide fades and rises 40px over 220ms on the expo-out curve, and the next lead snaps in.

### Action Rail (signature)
A vertical stack of 56px circles, 18px apart, each with a 22px icon and a tracked capital caption under it. Glyphs are outlined in mist; hover fills slate with a fog border, press scales to 0.94. The main action is a white disc with void icon, WhatsApp a green disc with deep green ink, Declined a coral icon. On phone the discs are 48px on blurred void at 60%, floating over the video bottom right, with a Message disc on top that opens the bottom sheet.

### Message Column
The side column on Today: an 11px label heading (what to do), an attachment link, the editable message in a slate well (13.5px/1.6) that grows to fit, then Copy message and Open in WhatsApp side by side. Below it, Up next lists five leads as a phone thumbnail with name and task. On phone the column becomes a bottom sheet above the tab bar, up to 64vh tall with a 14px top radius, sliding up over 250ms.

### Toast
One at a time, bottom centre, white with void ink, 8px radius, with an underlined bold Undo when the action can be reversed. It rises 20px into place over 200ms; errors turn it coral and hold it longer.

### Metrics Marks
Bars are flat with 2px corners: previews and contacted in white, follow-ups in sand, earlier stages in fog and sand at 30%. Funnel steps are Antonio figures separated by 1px mist rules, each with its rate in fog below.

## Do's and Don'ts

### Do:
- **Do** use white (#ffffff) with void ink for primary actions and the active state; everything else is outlined in mist (1px) with 12px tracked capitals.
- **Do** reserve WhatsApp green (#25d366, ink #04210f) for the WhatsApp send action.
- **Do** mark amber (#f2b24a) for due and coral (#ff6b5e) for overdue or declined, and nothing else.
- **Do** code every state by shape and colour: outline circle open, filled circle done, rotated square overdue, strikethrough closed.
- **Do** apply tabular figures only to bare numbers.
- **Do** draw icons with lucide at a 1.5 stroke (18px default, 22px on the rail).
- **Do** step surfaces by tone (bg #121316, panel #16171b, slate #1b1d22, raised #22252c) and separate them with 1px borders.
- **Do** keep the Today caption on the near-solid void scrim that ends just above the shop name.
- **Do** switch Today to the full-bleed feed, bottom-sheet message and 64px tab bar at 760px and below.
- **Do** keep transitions between 120 and 250ms, move things (slide, drawer, sheet, toast) on cubic-bezier(.16, 1, .3, 1), and turn transitions off under reduced motion.

### Don't:
- **Don't** use green for success, online status, confirmation or charts.
- **Don't** use amber or coral as decoration, emphasis or a data colour.
- **Don't** tell states apart by colour alone.
- **Don't** put kickers or eyebrow labels above headings.
- **Don't** use unicode glyphs as icons.
- **Don't** set tabular figures on ratings, comma-grouped counts or dates.
- **Don't** add shadows to cards, panels, columns or inputs.
- **Don't** set buttons, labels or body copy in Antonio.
