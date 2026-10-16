// Documentation tab content. {slug} and {area} are filled in from the pickers on the page.
// kind: "claude" = paste into Claude Code, "terminal" = run in a terminal at the project root,
//       "prompt" = a longer prompt for Claude Code; edit the parts in <angle brackets> first.

export type DocKind = "claude" | "terminal" | "prompt";
export interface DocItem {
  kind: DocKind;
  label: string;
  text: string;
}
export interface DocSection {
  id: string;
  title: string;
  intro?: string;
  items: DocItem[];
}

export const DOC_SECTIONS: DocSection[] = [
  {
    id: "loop",
    title: "The daily loop",
    intro: "Every shop moves through these in order. The dashboard's shop pages show the next one for each shop.",
    items: [
      { kind: "claude", label: "1. Find shops", text: "/shop-landing find 10 places that sell food in {area}" },
      { kind: "claude", label: "2. Write briefs for approved shops (run locally: uses the Places key)", text: "/shop-landing brief" },
      { kind: "claude", label: "3. Plan and build approved briefs (locally or in a cloud session)", text: "/shop-landing build" },
      { kind: "terminal", label: "4. Push the built sites", text: "git add shops data/shops.json && git commit -m \"Add mockups\" && git push" },
      { kind: "claude", label: "5. Publish to Coolify (run locally)", text: "/shop-landing publish" },
      { kind: "claude", label: "Where is everything, and what's next?", text: "/shop-landing status" },
    ],
  },
  {
    id: "find",
    title: "Find shops",
    intro: "Claude searches Google Places, filters out chains and thin listings, and adds the best ones as candidates for you to approve.",
    items: [
      { kind: "claude", label: "Any food in an area", text: "/shop-landing find 10 places that sell food in {area}" },
      { kind: "claude", label: "Specific kinds of shop", text: "/shop-landing find 10 bakeries and cafes in {area}" },
      { kind: "claude", label: "Stricter on chains", text: "/shop-landing find 10 places that sell food in {area}, skip any brand with more than one location in the city" },
      { kind: "claude", label: "Only shops with no website", text: "/shop-landing find 10 places that sell food in {area}, only shops without a website" },
      { kind: "terminal", label: "Raw search by hand (check the Places key works)", text: "./scripts/discover.sh \"restaurants in {area}\" restaurant 1" },
    ],
  },
  {
    id: "brief",
    title: "Briefs",
    intro: "Run these locally: they call the Places API. Review and approve briefs in the Briefs tab.",
    items: [
      { kind: "claude", label: "All approved shops", text: "/shop-landing brief" },
      { kind: "claude", label: "One shop", text: "/shop-landing brief {slug}" },
      { kind: "prompt", label: "Revise a brief yourself, with Claude", text: "Revise shops/{slug}/brief.md: <what to change>.\nKeep the template's structure and sources, and tag anything inferred as [MOCKUP].\nThen run ./scripts/set-status.sh {slug} brief_ready so I can review it again." },
      { kind: "terminal", label: "Re-fetch listing and photos (separates owner photos from customer photos)", text: "./scripts/fetch-details.sh \"$(jq -r --arg s {slug} '.shops[] | select(.slug == $s) | .place_id' data/shops.json)\" {slug}" },
    ],
  },
  {
    id: "build",
    title: "Plan and build",
    intro: "Each shop is planned (PRD, TRD, design brief, implementation plan), then built and reviewed in screenshots. Works locally or in a cloud session; in the cloud, push first.",
    items: [
      { kind: "claude", label: "All approved briefs", text: "/shop-landing build" },
      { kind: "claude", label: "Gentler on usage limits", text: "/shop-landing build, 2 at a time" },
      { kind: "claude", label: "One shop", text: "/shop-landing build {slug}" },
      { kind: "claude", label: "Plan only, to read the docs before building", text: "/shop-landing build {slug}, plan only" },
      { kind: "terminal", label: "Preview a site locally", text: "cd shops/{slug}/site && npm run dev" },
      { kind: "terminal", label: "Retake screenshots after a change", text: "cd shops/{slug}/site && npm run build && npm run shots" },
    ],
  },
  {
    id: "fix",
    title: "Fixing a site",
    intro: "Paste into Claude Code, after replacing the parts in <angle brackets>.",
    items: [
      { kind: "prompt", label: "Fix design problems", text: "Look at shops/{slug}/screenshots and the site in shops/{slug}/site at 1440px and 390px, then fix:\n1. <problem>\n2. <problem>\nKeep the design brief's concept, palette and fonts.\nRebuild, run npm run shots, and check the screenshots before finishing." },
      { kind: "prompt", label: "Change content", text: "In shops/{slug}/site/content.ts, <change: e.g. replace the menu with ... / fix the hours to ...>.\nKeep [MOCKUP] flags accurate, update shops/{slug}/owner-checklist.md if needed, rebuild and check the screenshots." },
      { kind: "prompt", label: "Owner sent real photos", text: "The owner of {slug} sent photos, saved in shops/{slug}/site/public/owner/.\nUse them in place of the photo placeholders where they fit, with good alt text.\nUpdate shops/{slug}/owner-checklist.md, rebuild, and check the screenshots." },
      { kind: "prompt", label: "Start over from the brief", text: "Delete shops/{slug}/docs, shops/{slug}/site, shops/{slug}/screenshots and shops/{slug}/owner-checklist.md,\nthen /shop-landing build {slug}" },
    ],
  },
  {
    id: "publish",
    title: "Publish to Coolify",
    intro: "Coolify builds from GitHub, so push first. Run locally: cloud sessions can't reach your Coolify. After the first publish, every push redeploys the shop automatically.",
    items: [
      { kind: "terminal", label: "Push one shop", text: "git add shops/{slug} data/shops.json && git commit -m \"Update {slug}\" && git push" },
      { kind: "claude", label: "Publish every built shop without an app", text: "/shop-landing publish" },
      { kind: "claude", label: "Publish one shop", text: "/shop-landing publish {slug}" },
      { kind: "terminal", label: "Check what would be created", text: "./scripts/coolify-publish.sh --dry-run {slug}" },
      { kind: "terminal", label: "Publish by hand", text: "./scripts/coolify-publish.sh {slug}" },
      { kind: "terminal", label: "Is the mockup reachable?", text: "curl -sI \"$(jq -r --arg s {slug} '.shops[] | select(.slug == $s) | .preview_url' data/shops.json)\" | head -1" },
    ],
  },
  {
    id: "owner",
    title: "After the owner says yes (DO)",
    intro: "Turn the mockup into the real site once the owner has answered the checklist.",
    items: [
      { kind: "prompt", label: "Mockup → real site", text: "{slug} has ordered. The owner's answers to shops/{slug}/owner-checklist.md:\n<answers>\nApply them to shops/{slug}/site: replace or remove every [MOCKUP] item accordingly,\nremove the mockup banner and the noindex setting, rebuild, and check the screenshots." },
    ],
  },
  {
    id: "maintenance",
    title: "Resets and maintenance",
    intro: "Run in a terminal at the project root.",
    items: [
      { kind: "terminal", label: "Start the dashboard", text: "cd approve-app && npm run dev" },
      { kind: "terminal", label: "Reset a shop to brief review (keeps the brief, deletes plan and site)", text: "rm -rf shops/{slug}/docs shops/{slug}/site shops/{slug}/screenshots shops/{slug}/owner-checklist.md && ./scripts/set-status.sh {slug} brief_ready" },
      { kind: "terminal", label: "Unlink a shop from Coolify (after deleting its app there)", text: "jq --arg s {slug} '(.shops[] | select(.slug == $s)) |= del(.coolify_uuid, .preview_url)' data/shops.json > /tmp/s.json && mv /tmp/s.json data/shops.json" },
      { kind: "terminal", label: "Update Next.js in every built site", text: "for d in shops/*/site; do (cd \"$d\" && npm install next@<version> --save-exact); done" },
      { kind: "terminal", label: "Check for vulnerabilities", text: "for d in approve-app templates/site-starter shops/*/site; do echo \"== $d\"; (cd \"$d\" && npm audit --omit=dev | tail -1); done" },
      { kind: "terminal", label: "Mockup says \"server not found\" on this Mac (flush DNS)", text: "sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud sessions",
    intro: "Use cloud sessions for planning and building, the heavy part. Briefs and publishing stay local: they need the Places key and your Coolify.",
    items: [
      { kind: "terminal", label: "Before starting: push approved briefs", text: "git add shops data/shops.json && git commit -m \"Approved briefs\" && git push" },
      { kind: "claude", label: "In the cloud session", text: "/shop-landing build, 2 at a time" },
      { kind: "terminal", label: "Afterwards: pull the results (merge Claude's branch first if it opened a PR)", text: "git pull" },
    ],
  },
];

export function fill(text: string, { slug, area }: { slug?: string; area?: string }): string {
  return text.replaceAll("{slug}", slug || "<slug>").replaceAll("{area}", area || "<area>");
}
