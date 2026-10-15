// The 8 steps every shop goes through, which one it's on, and what moves it forward.
// Shared by the server and the browser.

export const STEPS = [
  { key: "found",    title: "Found",          who: "you",    about: "Claude found this shop. Approve it to write a brief, or reject it." },
  { key: "brief",    title: "Brief",          who: "claude", about: "Claude fetches the listing, reviews and photos, and writes the shop brief." },
  { key: "review",   title: "Review brief",   who: "you",    about: "Check the brief, edit the highlighted [MOCKUP] lines, approve or send back." },
  { key: "plan",     title: "Plan",           who: "claude", about: "Claude writes the PRD, TRD, design brief and implementation plan." },
  { key: "build",    title: "Build",          who: "claude", about: "Claude builds the Next.js mockup and reviews it in screenshots." },
  { key: "publish",  title: "Publish",        who: "claude", about: "Push the site to GitHub and create its Coolify app, so it goes online." },
  { key: "send",     title: "Send to owner",  who: "you",    about: "Send the owner the mockup link on WhatsApp." },
  { key: "decision", title: "Owner decision", who: "you",    about: "Record whether the owner wants the site." },
];

// Index of the current step. STEPS.length means finished; -1 means rejected.
export function currentStep(shop) {
  switch (shop.status) {
    case "rejected": return -1;
    case "candidate": return 0;
    case "approved":
    case "brief_rework": return 1;
    case "brief_ready": return 2;
    case "brief_approved": return 3;
    case "planned": return 4;
    case "built":
      if (!shop.coolify_uuid) return 5;
      if (!shop.outreach_sent_at) return 6;
      return 7;
    case "owner_approved": return STEPS.length;
    default: return 0;
  }
}

// What to do next, for the panel at the bottom of a shop's page.
// kind: "decide" (buttons here), "brief" (link to brief editor), "claude" (copy commands),
//       "send" (outreach message), "owner" (owner decision), "done", "rejected"
export function nextAction(shop) {
  const slug = shop.slug;
  const step = currentStep(shop);
  if (step === -1) return { kind: "rejected", title: "Rejected", text: "This shop was rejected. Move it back to review if you change your mind." };
  if (step >= STEPS.length) return { kind: "done", title: "Owner approved", text: "The owner wants the site. Next: turn the mockup into the real site." };

  switch (STEPS[step].key) {
    case "found":
      return { kind: "decide", title: "Approve or reject this shop", text: STEPS[0].about };
    case "brief":
      return {
        kind: "claude",
        title: shop.status === "brief_rework" ? "Claude revises the brief" : "Claude writes the brief",
        text: shop.status === "brief_rework"
          ? `You sent the brief back with: "${shop.brief_note}". Run this in Claude Code (needs the Places key, so run it locally):`
          : "Run this in Claude Code. It calls the Places API, so run it locally, not in a cloud session.",
        commands: [{ label: "Claude Code", text: `/shop-landing brief ${slug}` }],
      };
    case "review":
      return { kind: "brief", title: "Review the brief", text: STEPS[2].about };
    case "plan":
      return {
        kind: "claude",
        title: "Claude plans and builds the site",
        text: "Plans first, then builds, in one run. Works locally or in a cloud session (push first). Add \"plan only\" to read the docs before anything is built.",
        commands: [
          { label: "Plan and build", text: `/shop-landing build ${slug}` },
          { label: "Plan only", text: `/shop-landing build ${slug}, plan only` },
        ],
      };
    case "build":
      return {
        kind: "claude",
        title: "Claude builds the site",
        text: "The plan is ready (see the docs below). Run this to build and review the site.",
        commands: [{ label: "Claude Code", text: `/shop-landing build ${slug}` }],
      };
    case "publish":
      return {
        kind: "claude",
        title: "Publish to Coolify",
        text: "Coolify builds from GitHub, so push the site first, then create its app. Run the publish step locally, since it talks to your Coolify.",
        commands: [
          { label: "Terminal: push the site", text: `git add shops/${slug} data/shops.json && git commit -m "Add ${slug} mockup" && git push` },
          { label: "Claude Code", text: `/shop-landing publish ${slug}` },
          { label: "Or terminal", text: `./scripts/coolify-publish.sh ${slug}` },
        ],
      };
    case "send":
      return { kind: "send", title: "Send the mockup to the owner", text: STEPS[6].about };
    case "decision":
      return { kind: "owner", title: "Waiting for the owner", text: STEPS[7].about };
  }
}

// Commands that move every shop in a group at once, for the home page.
export const BATCH = {
  brief: "/shop-landing brief",
  build: "/shop-landing build",
  publish: "/shop-landing publish",
};
