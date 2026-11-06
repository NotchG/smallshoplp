// smallshoplp LMS mockup. Every screen renders from data.js, a snapshot of data/shops.json.
// Actions are simulated: they move a lead to its next stage in memory, so all screens stay in step.
(() => {
  const { leads, generatedAt } = window.LMS;
  const SENDER = "Fidel";
  const DAILY_SENDS = 5; // previews per day, to keep the WhatsApp number in good standing
  const GEN = new Date(generatedAt);

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ic = (n) => `<i data-lucide="${n}"></i>`;
  const icons = () => window.lucide?.createIcons({ attrs: { "stroke-width": 1.5 } });
  const shot = (l, f) => `../../shops/${l.slug}/screenshots/${f}`;
  const still = (l) => (l.media.phone ? shot(l, "outreach-phone.png") : l.media.fold ? shot(l, "390-fold.png") : "");
  const num = (n) => (n == null ? "–" : n.toLocaleString("en-US"));
  const day = (iso) => (iso ? new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "–");

  // ---------- Stages ----------
  const override = {}; // slug → stage, from actions taken in this mockup
  const stageOf = (l) => override[l.slug] ?? l.stage;
  const STAGE = {
    candidate: ["Candidate", "prod"], approved: ["Approved", "prod done"], brief_ready: ["Brief to review", "due"],
    brief_rework: ["Brief sent back", "prod"], brief_approved: ["Ready to build", "prod done"], planned: ["Building", "prod done"],
    to_publish: ["To publish", "prod done"], ready: ["Ready to send", ""], waiting: ["Preview sent", "done"],
    followup_due: ["Follow-up due", "over"], waiting_followup: ["Followed up", "done"], no_answer_due: ["No reply", "due"],
    link_due: ["Replied: send link", "due"], prospect: ["Prospect", "ok"], hot: ["Hot prospect", "ok done"], do: ["Ordered", "ok done"],
    no_answer: ["No answer", "closed"], declined: ["Declined", "closed"], rejected: ["Rejected", "closed"],
  };
  const chip = (st) => `<span class="chip ${STAGE[st]?.[1] ?? ""}">${STAGE[st]?.[0] ?? st}</span>`;
  const NEXT = {
    candidate: "Approve or reject", brief_ready: "Review brief", brief_rework: "Claude revises", approved: "Claude writes brief",
    brief_approved: "Claude builds", planned: "Claude builds", to_publish: "Publish", ready: "Send preview", waiting: "Wait",
    followup_due: "Follow up", waiting_followup: "Wait", no_answer_due: "Close as no answer", link_due: "Send link",
    prospect: "Talk price", hot: "Close the deal", do: "Build the real site", no_answer: "Archive", declined: "Archive", rejected: "–",
  };
  const SALES = new Set(["ready", "waiting", "followup_due", "waiting_followup", "no_answer_due", "link_due", "prospect", "hot", "do", "no_answer", "declined"]);

  // ---------- Messages (approve-app/lib/outreach.ts) ----------
  const T = {
    send: "Halo, {name}. Saya {sender}, pembuat website untuk usaha lokal.\n\n{hook}\n\nSaya sudah menyiapkan contoh website untuk {name}. Videonya memperlihatkan tampilannya di HP, lengkap dengan tombol WhatsApp dan petunjuk arah.\n\nIni masih draf: beberapa detail berupa perkiraan dan bisa disesuaikan. Melihatnya gratis dan tanpa kewajiban.\n\nBoleh saya kirimkan link-nya supaya bisa dibuka langsung?",
    followup: "Halo, {name}. Saya {sender}, yang beberapa hari lalu mengirimkan video contoh website untuk {name}.\n\nKalau videonya belum sempat dibuka, ini tampilan halaman depannya. Contohnya bisa saya sesuaikan dengan foto dan informasi asli {name}, dan melihatnya tetap gratis tanpa kewajiban.\n\nKalau tertarik, cukup balas pesan ini dan saya kirimkan link-nya. Terima kasih.",
    followupLink: "Halo, {name}. Saya {sender}, yang mengirimkan contoh website untuk {name} beberapa hari lalu.\n\nKalau berkenan, saya bisa menyesuaikan contohnya dengan foto, menu, dan harga asli {name}, supaya terlihat seperti website yang siap dipakai. Melihat hasilnya tetap gratis dan tanpa kewajiban.\n\nContoh yang sekarang masih bisa dilihat di sini:\n\n{link}\n\nCukup balas pesan ini jika tertarik. Terima kasih.",
    link: "Terima kasih, {name}. Ini link contoh website-nya:\n\n{link}\n\nSilakan dibuka di HP. Karena masih draf, beberapa detail berupa perkiraan. Kalau ada yang kurang pas, misalnya foto, menu, harga, atau jam buka, cukup balas pesan ini dan akan saya sesuaikan.",
  };
  const fill = (key, l) => esc(T[key]).replaceAll("{name}", esc(l.name)).replaceAll("{sender}", `<mark>${SENDER}</mark>`)
    .replaceAll("{hook}", l.hook ? `<mark>${esc(l.hook)}</mark>` : "").replaceAll("{link}", esc(l.preview)).replace(/\n{3,}/g, "\n\n");

  // ---------- Today ----------
  // Each action: what it is, why it's due, its media, its message, and the rail.
  // Rail entries: [style, icon, label, effect]; effect is the stage it moves the lead to, or "skip".
  const ACT = {
    followup: { title: "Send the follow-up", why: (l) => `Preview sent ${l.sentDays} days ago, no reply`, cls: "over", media: "photo",
      msg: (l) => (l.linkDays != null ? "followupLink" : "followup"), attach: "Phone screenshot of the hero",
      rail: [["wa", "external-link", "WhatsApp", "open"], ["", "copy", "Image", "copy"], ["main", "check", "Sent", "waiting_followup"], ["", "message-circle", "Replied", "link_due"], ["", "chevron-down", "Skip", "skip"]] },
    link: { title: "Send the link", why: (l) => `Replied ${l.stageDays ?? 0} days ago`, cls: "due", media: "photo", msg: () => "link",
      rail: [["wa", "external-link", "WhatsApp", "open"], ["main", "check", "Link sent", "prospect"], ["stop", "x", "Declined", "declined"], ["", "chevron-down", "Skip", "skip"]] },
    close: { title: "Close as no answer", why: (l) => `Followed up ${l.followDays} days ago, no reply`, cls: "due", media: "photo", msg: null,
      rail: [["", "message-circle", "Replied", "link_due"], ["main", "archive", "Close", "no_answer"], ["stop", "x", "Declined", "declined"], ["", "chevron-down", "Skip", "skip"]] },
    brief: { title: "Review the brief", why: (l) => `${l.brief?.mockups ?? 0} [MOCKUP] lines to check`, cls: "due", media: "doc", msg: null,
      rail: [["", "file-text", "Open", "open"], ["main", "check", "Approve", "brief_approved"], ["", "undo-2", "Send back", "brief_rework"], ["", "chevron-down", "Skip", "skip"]] },
    send: { title: "Send the preview", why: (l) => (l.hook ? "Video and personal line ready" : "Video ready, no personal line yet"), cls: "", media: "video",
      msg: () => "send", attach: "Scroll video of their mockup",
      rail: [["wa", "external-link", "WhatsApp", "open"], ["", "download", "Video", "download"], ["main", "check", "Sent", "waiting"], ["", "chevron-down", "Skip", "skip"]] },
  };
  const DONE_TEXT = { waiting: "Preview marked as sent", waiting_followup: "Follow-up marked as sent", link_due: "Owner replied: send the link next",
    no_answer: "Closed as no answer, queued for archive", declined: "Marked as declined, queued for archive", prospect: "Link sent: now a prospect",
    brief_approved: "Brief approved: Claude builds it next", brief_rework: "Brief sent back to Claude" };

  let sentToday = 0;
  let todayFilter = "all";
  let current = 0;
  const history = [];

  function queue() {
    const at = (st, action, sort) => leads.filter((l) => stageOf(l) === st).sort(sort || (() => 0)).map((l) => ({ l, action }));
    const ready = leads.filter((l) => stageOf(l) === "ready").sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
    return [
      ...at("followup_due", "followup", (a, b) => b.sentDays - a.sentDays),
      ...at("link_due", "link"),
      ...at("no_answer_due", "close", (a, b) => b.followDays - a.followDays),
      ...at("brief_ready", "brief"),
      ...ready.slice(0, Math.max(0, DAILY_SENDS - sentToday)).map((l) => ({ l, action: "send" })),
    ];
  }
  const FILTERS = [["all", "All"], ["followup", "Follow-ups"], ["link", "Links"], ["close", "To close"], ["brief", "Briefs"], ["send", "Previews"]];
  const visible = () => queue().filter((q) => todayFilter === "all" || q.action === todayFilter);

  function media(q) {
    const { l, action } = q;
    const a = ACT[action];
    if (a.media === "doc") {
      return `<div class="doc"><h4>Brief · ${esc(l.type)}</h4><p>${esc(l.brief?.personality)}</p><ol>${(l.brief?.sections || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ol></div>`;
    }
    if (a.media === "video" && l.media.video) {
      return `<video src="${shot(l, "outreach-scroll.mp4")}" poster="${still(l)}" muted loop playsinline preload="metadata" aria-label="Scroll video of the ${esc(l.name)} mockup"></video>`;
    }
    const img = still(l);
    return (img ? `<img src="${img}" alt="${esc(l.name)} mockup on a phone" loading="lazy">` : "")
      + (a.media === "video" ? `<span class="badge-novid">Video not made yet · screenshot shown</span>` : "");
  }

  function slide(q, i) {
    const { l, action } = q;
    const a = ACT[action];
    const facts = [l.type, l.area, l.rating ? `★ ${l.rating} · ${num(l.reviews)} reviews` : ""].filter(Boolean);
    return `<article class="slide" data-i="${i}" aria-label="${esc(l.name)}: ${a.title}">
      <div class="frame">${media(q)}
        <div class="scrim"><h3>${esc(l.name)}</h3><div class="facts">${facts.map((f) => `<span>${esc(f)}</span>`).join("")}</div>
          <span class="why ${a.cls}">${ic(a.cls === "over" ? "clock" : action === "send" ? "send" : "calendar")}${esc(a.why(l))}</span></div>
      </div>
      <div class="rail">${a.msg ? `<button type="button" class="only-sm" data-sheet><span class="g">${ic("message-square-text")}</span>Message</button>` : ""}${a.rail.map(([cls, icon, label, effect]) => `<button type="button" class="${cls}" data-effect="${effect}" data-i="${i}"><span class="g">${ic(icon)}</span>${label}</button>`).join("")}</div>
    </article>`;
  }

  function sidePanel(q, list, i) {
    if (!q) return `<h2>All clear</h2><p class="note">Nothing else is due today.</p>`;
    const { l, action } = q;
    const a = ACT[action];
    let body = "";
    if (a.msg) {
      body = `<h2>${a.title}</h2>
        ${a.attach ? `<div class="attach">${ic(action === "send" ? "play" : "image")}${a.attach}${action === "send" && !l.media.video ? " (not made yet)" : ""}</div>` : ""}
        <div class="msg">${fill(a.msg(l), l)}</div>
        <div class="acts"><button class="btn small" data-copy>${ic("copy")}Copy message</button><button class="btn small wa" data-effect="open" data-i="${i}">${ic("external-link")}Open in WhatsApp</button></div>`;
    } else if (action === "close") {
      body = `<h2>${a.title}</h2><p class="note" style="margin:0 0 12px">No reply ${l.followDays} days after the follow-up. Closing marks it <em>No answer</em> and queues the archive: its site and Coolify app are deleted; the brief, listing and photos are kept.</p>
        <ul class="timeline"><li class="done">Preview sent<time>${l.sentDays} days ago</time></li><li class="done">Follow-up sent<time>${l.followDays} days ago</time></li><li class="due">No reply since</li></ul>`;
    } else if (action === "brief") {
      body = `<h2>${a.title}</h2><p class="note" style="margin:0 0 12px">Claude wrote this brief from the Maps listing. Check the ${l.brief?.mockups} lines tagged [MOCKUP], then approve or send it back with a note.</p>
        <div class="acts"><button class="btn small" data-effect="open" data-i="${i}">${ic("file-text")}Open the brief</button></div>`;
    }
    const upcoming = list.slice(i + 1, i + 6);
    return `${body}
      <div><h2>Up next</h2><div class="next">${upcoming.length ? upcoming.map((u, k) => `<button type="button" data-go="${i + 1 + k}">
        <span class="thumb" style="background-image:url('${still(u.l)}')"></span><span><strong>${esc(u.l.name)}</strong><small>${ACT[u.action].title}</small></span></button>`).join("") : `<p class="note">That's the last one today.</p>`}</div></div>
      <p class="kbd"><kbd>J</kbd> <kbd>K</kbd> move · <kbd>E</kbd> main action</p>`;
  }

  function renderToday() {
    const list = visible();
    const all = queue();
    const counts = Object.fromEntries(FILTERS.map(([k]) => [k, k === "all" ? all.length : all.filter((q) => q.action === k).length]));
    const ready = leads.filter((l) => stageOf(l) === "ready").length;
    current = Math.min(current, Math.max(0, list.length - 1));
    $("#today").innerHTML = `
      <header class="head"><h1>Today</h1><p class="sub">${all.length} due · ${Math.max(0, DAILY_SENDS - sentToday)} of ${ready} previews to send today</p>
        <div class="tools"><button class="btn sheet-toggle" data-sheet>${ic("message-square-text")}Message</button></div></header>
      <div class="today"><div class="feed-wrap">
        <div class="feed-top"><div class="seg" role="group" aria-label="Show">${FILTERS.filter(([k]) => k === "all" || counts[k]).map(([k, label]) => `<button type="button" data-filter="${k}" aria-pressed="${todayFilter === k}">${label}<span class="c">${counts[k]}</span></button>`).join("")}</div>
          <span class="count" id="pos">${list.length ? current + 1 : 0} of ${list.length}</span></div>
        <div class="feed" tabindex="0" aria-label="Due leads, one at a time">${list.map(slide).join("")}
          <section class="end"><div>${ic("circle-check")}<h3>Done for today</h3><p>${ready - Math.max(0, DAILY_SENDS - sentToday)} more previews are ready for tomorrow.</p></div></section></div>
      </div><aside class="side" id="side">${sidePanel(list[current], list, current)}</aside></div>`;
    icons();
    const feed = $(".feed", $("#today"));
    if (current) feed.scrollTop = current * feed.clientHeight;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        const v = $("video", e.target);
        if (e.isIntersecting) {
          current = +e.target.dataset.i;
          $("#pos").textContent = `${current + 1} of ${list.length}`;
          $("#side").innerHTML = sidePanel(list[current], list, current);
          icons();
          v?.play().catch(() => {});
          $(`.slide[data-i="${current + 1}"] video`)?.setAttribute("preload", "auto");
        } else v?.pause();
      }
    }, { root: feed, threshold: 0.6 });
    $$(".slide", feed).forEach((s) => io.observe(s));
  }

  function act(i, effect) {
    const list = visible();
    const q = list[i];
    if (!q) return;
    const feed = $(".feed");
    if (effect === "skip") return feed.scrollTo({ top: (i + 1) * feed.clientHeight, behavior: "smooth" });
    if (effect === "open") return toast(q.action === "brief" ? "Opens the brief editor" : "Opens WhatsApp with this message filled in");
    if (effect === "copy") return toast("Image copied: paste it into the chat");
    if (effect === "download") return q.l.media.video ? (location.href = shot(q.l, "outreach-scroll.mp4")) : toast("No video yet: run node scripts/outreach-media.mjs " + q.l.slug);
    const slideEl = $(`.slide[data-i="${i}"]`);
    slideEl?.classList.add("leaving");
    setTimeout(() => {
      history.push({ slug: q.l.slug, prev: override[q.l.slug], sent: effect === "waiting" });
      override[q.l.slug] = effect;
      if (effect === "waiting") sentToday++;
      current = i;
      renderAll();
      toast(`${q.l.name}: ${DONE_TEXT[effect] ?? "done"}`, true);
    }, 220);
  }

  // ---------- Pipeline ----------
  const SALES_COLS = [["ready", "Ready to send"], ["waiting", "Preview sent"], ["followup_due", "Follow-up due"], ["waiting_followup", "Followed up"],
    ["no_answer_due", "No reply"], ["link_due", "Send link"], ["prospect", "Prospect"], ["hot", "Hot"], ["do", "Ordered"], ["closed", "Closed"]];
  const PROD_COLS = [["candidate", "Candidates"], ["approved", "Approved"], ["brief_ready", "Brief to review"], ["brief_rework", "Sent back"],
    ["brief_approved", "Ready to build"], ["planned", "Building"], ["to_publish", "To publish"]];
  const EMPTY = {
    waiting: ["Nothing in flight", "Previews you send today wait here 3 days for a reply."], waiting_followup: ["No follow-ups waiting", "Follow-ups wait here 3 days before closing."],
    link_due: ["No replies yet", "When an owner answers, drag them here: the link message opens."], prospect: ["No prospects yet", "Leads move here once the link is sent."],
    hot: ["Nothing hot yet", "Drag here when you're discussing price."], do: ["No orders yet", "Ordered sites land here."],
    approved: ["Nothing approved", "Approve candidates and Claude writes their briefs."], brief_rework: ["Nothing sent back", "Briefs you send back wait here for Claude."],
    brief_approved: ["Nothing to build", "Approved briefs wait here for /shop-landing build."], planned: ["Nothing building", "Shops being planned and built."],
    to_publish: ["Nothing to publish", "Built sites wait here for /shop-landing publish."],
  };
  let side = "sales";
  let boardArea = "";
  const expanded = new Set();
  const colOf = (l) => { const st = stageOf(l); return st === "no_answer" || st === "declined" ? "closed" : st; };

  function card(l) {
    const st = stageOf(l);
    const meta = st === "candidate" ? `★ ${l.rating ?? "–"} · ${num(l.reviews)} reviews` : l.followDays != null ? `Followed up ${l.followDays} d ago` : l.sentDays != null ? `Sent ${l.sentDays} d ago` : `${num(l.reviews)} reviews`;
    const img = still(l);
    return `<button type="button" class="card ${img ? "" : "text"}" draggable="true" data-slug="${l.slug}">${img ? `<span class="thumb" style="background-image:url('${img}')"></span>` : ""}
      <span><strong>${esc(l.name)}</strong><small>${esc(l.area)} · ${meta}</small>${st === "closed" || st === "no_answer" || st === "declined" ? chip(st) : l.hasWebsite ? `<span class="chip">Has a website</span>` : ""}</span></button>`;
  }

  function renderPipeline() {
    const cols = side === "sales" ? SALES_COLS : PROD_COLS;
    const pool = leads.filter((l) => !boardArea || l.area === boardArea);
    const areas = [...new Set(leads.map((l) => l.area))].sort();
    $("#pipeline").innerHTML = `
      <header class="head"><h1>Pipeline</h1><p class="sub">Drag a lead to move it. Every move is recorded like the buttons on its page.</p>
        <div class="tools"><div class="seg" role="group" aria-label="Pipeline half"><button type="button" data-side="sales" aria-pressed="${side === "sales"}">Sales</button><button type="button" data-side="production" aria-pressed="${side === "production"}">Production</button></div>
        <select class="field" data-area aria-label="Area"><option value="">All areas</option>${areas.map((a) => `<option ${a === boardArea ? "selected" : ""}>${esc(a)}</option>`).join("")}</select></div></header>
      <div class="body"><div class="board">${cols.map(([key, label]) => {
        const items = pool.filter((l) => colOf(l) === key).sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
        const shown = expanded.has(key) ? items : items.slice(0, 10);
        const [et, ed] = EMPTY[key] || ["Empty", ""];
        return `<section class="col" data-col="${key}"><header><b>${label}</b><span>${items.length}</span></header><div class="list">
          ${items.length ? shown.map(card).join("") : `<p class="empty"><strong>${et}</strong>${ed}</p>`}
          ${items.length > shown.length ? `<button type="button" class="more" data-more="${key}">Show ${items.length - shown.length} more</button>` : ""}</div></section>`;
      }).join("")}</div></div>`;
    icons();
  }

  // ---------- Leads ----------
  let leadQuery = "", leadStage = "sales", leadArea = "", sortKey = "next", sortDir = 1, openSlug = "";
  const ORDER = ["followup_due", "link_due", "no_answer_due", "brief_ready", "ready", "waiting", "waiting_followup", "prospect", "hot", "do", "candidate", "approved", "brief_rework", "brief_approved", "planned", "to_publish", "no_answer", "declined", "rejected"];
  const SORTS = {
    name: (l) => l.name.toLowerCase(), area: (l) => l.area, rating: (l) => -(l.reviews || 0), next: (l) => ORDER.indexOf(stageOf(l)), touch: (l) => -(new Date(l.touched).getTime() || 0),
  };
  function leadRows() {
    const q = leadQuery.toLowerCase();
    return leads.filter((l) => (leadStage === "all" || (leadStage === "sales" ? SALES.has(stageOf(l)) : leadStage === "production" ? !SALES.has(stageOf(l)) : stageOf(l) === leadStage))
      && (!leadArea || l.area === leadArea) && (!q || `${l.name} ${l.type} ${l.area}`.toLowerCase().includes(q)))
      .sort((a, b) => { const x = SORTS[sortKey](a), y = SORTS[sortKey](b); return (x < y ? -1 : x > y ? 1 : 0) * sortDir; });
  }
  function drawer(l) {
    if (!l) return "";
    const st = stageOf(l);
    const vid = l.media.video ? `<video src="${shot(l, "outreach-scroll.mp4")}" poster="${still(l)}" muted loop playsinline autoplay></video>` : still(l) ? `<img src="${still(l)}" alt="">` : `<div class="doc"><h4>${esc(l.type)}</h4><p>${esc(l.why)}</p></div>`;
    const steps = [
      ["Found on Maps", true, ""], ["Brief approved", !["candidate", "approved", "brief_ready", "brief_rework"].includes(st), ""],
      ["Site built and published", !!l.preview, ""], ["Preview sent", l.sentDays != null || ["waiting", "waiting_followup"].includes(st), l.sentDays != null ? `${l.sentDays} d ago` : ""],
      ["Follow-up sent", l.followDays != null, l.followDays != null ? `${l.followDays} d ago` : ""], ["Owner replied", ["link_due", "prospect", "hot", "do", "declined"].includes(st), l.declinedDays != null ? `${l.declinedDays} d ago` : ""],
      // Shops contacted before video-first outreach got the link in their first message.
      ["Link sent", l.linkDays != null || ["prospect", "hot", "do"].includes(st), l.linkDays != null ? `${l.linkDays} d ago` : ""], ["Ordered", st === "do", ""],
    ];
    return `<div class="frame">${vid}</div><h3>${esc(l.name)}</h3><p class="sub" style="margin:0 0 8px;color:var(--muted)">${esc(l.type)} · ${esc(l.area)} · ★ ${l.rating ?? "–"} (${num(l.reviews)})</p>${chip(st)}
      <ul class="timeline">${steps.map(([t, done, when]) => `<li class="${done ? "done" : ""}">${t}<time>${when}</time></li>`).join("")}</ul>
      <div class="acts">${l.preview ? `<a class="btn small" href="${esc(l.preview)}" target="_blank" rel="noreferrer">${ic("external-link")}Mockup</a>` : ""}<button class="btn small primary" data-gotoday>${esc(NEXT[st])}</button></div>`;
  }
  function renderLeads() {
    const rows = leadRows();
    const areas = [...new Set(leads.map((l) => l.area))].sort();
    const th = (key, label, cls = "") => `<th class="${cls}"><button type="button" data-sort="${key}" ${sortKey === key ? `aria-sort="${sortDir > 0 ? "ascending" : "descending"}"` : ""}>${label}${sortKey === key ? ic("arrow-up-down") : ""}</button></th>`;
    const open = leads.find((l) => l.slug === openSlug);
    $("#leads").innerHTML = `
      <header class="head"><h1>Leads</h1><p class="sub">Every shop, from Maps listing to order.</p></header>
      <div class="body" style="overflow:hidden;display:flex;flex-direction:column">
        <div class="filters"><input class="field" type="search" placeholder="Search shops, types, areas" value="${esc(leadQuery)}" data-q aria-label="Search">
          <select class="field" data-stage aria-label="Stage"><option value="sales" ${leadStage === "sales" ? "selected" : ""}>Sales stages</option><option value="production" ${leadStage === "production" ? "selected" : ""}>Production stages</option><option value="all" ${leadStage === "all" ? "selected" : ""}>Every stage</option>
            ${ORDER.filter((s) => leads.some((l) => stageOf(l) === s)).map((s) => `<option value="${s}" ${leadStage === s ? "selected" : ""}>${STAGE[s][0]}</option>`).join("")}</select>
          <select class="field" data-larea aria-label="Area"><option value="">All areas</option>${areas.map((a) => `<option ${a === leadArea ? "selected" : ""}>${esc(a)}</option>`).join("")}</select>
          <span class="total">${rows.length} shops</span></div>
        <div class="leads-layout ${open ? "open" : ""}" style="flex:1;min-height:0">
          <div class="table-wrap"><table><thead><tr><th></th>${th("name", "Shop")}${th("area", "Area", "hide-sm")}${th("rating", "Reviews", "hide-sm")}<th>Stage</th>${th("touch", "Last touch", "hide-sm")}${th("next", "Next step")}</tr></thead>
            <tbody>${rows.length ? rows.map((l) => `<tr data-slug="${l.slug}" aria-selected="${l.slug === openSlug}"><td><span class="thumb" style="background-image:url('${still(l)}')"></span></td>
              <td><strong>${esc(l.name)}</strong><small>${esc(l.type)}</small></td><td class="hide-sm">${esc(l.area)}</td>
              <td class="rating hide-sm">★ ${l.rating ?? "–"} <small>${num(l.reviews)}</small></td><td>${chip(stageOf(l))}</td><td class="hide-sm">${day(l.touched)}</td><td>${esc(NEXT[stageOf(l)])}</td></tr>`).join("")
              : `<tr><td colspan="7"><p class="empty"><strong>No shops match</strong>Clear the search or pick another stage.</p></td></tr>`}</tbody></table></div>
          <aside class="drawer" aria-label="Lead details">${drawer(open)}</aside></div></div>`;
    icons();
  }

  // ---------- Metrics ----------
  function renderMetrics() {
    const contacted = leads.filter((l) => l.sentDays != null);
    const followed = contacted.filter((l) => l.followDays != null);
    const replied = leads.filter((l) => ["link_due", "prospect", "hot", "do", "declined"].includes(stageOf(l)));
    const prospects = leads.filter((l) => ["prospect", "hot", "do"].includes(stageOf(l)));
    const ordered = leads.filter((l) => stageOf(l) === "do");
    const pct = (a, b) => (b ? `${Math.round((a / b) * 100)}%` : "–");
    const steps = [["Contacted", contacted.length, ""], ["Followed up", followed.length, pct(followed.length, contacted.length)], ["Replied", replied.length, pct(replied.length, contacted.length)], ["Prospects", prospects.length, pct(prospects.length, contacted.length)], ["Ordered", ordered.length, pct(ordered.length, contacted.length)]];
    const replyDays = leads.filter((l) => l.declinedDays != null && l.sentDays != null).map((l) => l.sentDays - l.declinedDays);

    // Outreach per week, last 6 weeks (Monday starts)
    const monday = new Date(GEN); monday.setHours(0, 0, 0, 0); monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
    const weeks = Array.from({ length: 6 }, (_, k) => { const s = new Date(monday); s.setDate(s.getDate() - 7 * (5 - k)); return { s, sent: 0, fu: 0 }; });
    const bucket = (iso) => weeks.findLast((w) => new Date(iso) >= w.s);
    leads.forEach((l) => { if (l.sentAt && bucket(l.sentAt)) bucket(l.sentAt).sent++; if (l.followAt && bucket(l.followAt)) bucket(l.followAt).fu++; });
    const maxW = Math.max(1, ...weeks.map((w) => w.sent + w.fu));
    const lastSend = Math.min(...leads.filter((l) => l.followDays != null || l.sentDays != null).map((l) => Math.min(l.followDays ?? 1e9, l.sentDays ?? 1e9)));
    const W = 560, H = 200, bw = 46, gap = (W - 6 * bw) / 6;
    const chart = `<svg class="chart" viewBox="0 -24 ${W} ${H + 54}" width="100%" role="img" aria-label="Previews and follow-ups sent per week">
      ${weeks.map((w, k) => { const x = gap / 2 + k * (bw + gap); const hs = (w.sent / maxW) * H, hf = (w.fu / maxW) * H;
        return `<rect x="${x}" y="${H - hs}" width="${bw}" height="${hs}" fill="#fff" rx="2"/><rect x="${x}" y="${H - hs - hf}" width="${bw}" height="${hf}" fill="var(--sand)" rx="2"/>
        ${w.sent + w.fu ? `<text x="${x + bw / 2}" y="${H - hs - hf - 6}" text-anchor="middle" style="fill:var(--text)">${w.sent + w.fu}</text>` : `<line x1="${x}" x2="${x + bw}" y1="${H}" y2="${H}" stroke="var(--mist)" stroke-width="2"/>`}
        <text x="${x + bw / 2}" y="${H + 20}" text-anchor="middle">${w.s.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</text>`; }).join("")}</svg>`;

    // By area: where the pipeline sits
    const segs = [["Candidates", (s) => s === "candidate", "#c7b9a64d"], ["Ready", (s) => !SALES.has(s) && s !== "candidate" || s === "ready", "var(--fog)"], ["Contacted", (s) => SALES.has(s) && s !== "ready", "#fff"]];
    const byArea = Object.entries(leads.reduce((m, l) => ((m[l.area] ||= []).push(l), m), {})).sort((a, b) => b[1].length - a[1].length).slice(0, 9);
    const maxA = Math.max(...byArea.map(([, ls]) => ls.length));
    const types = Object.entries(leads.filter((l) => l.preview).reduce((m, l) => ((m[l.type] = (m[l.type] || 0) + 1), m), {})).sort((a, b) => b[1] - a[1]).slice(0, 7);
    const maxT = Math.max(...types.map(([, n]) => n));

    $("#metrics").innerHTML = `
      <header class="head"><h1>Metrics</h1><p class="sub">From ${contacted.length} shops contacted since ${day(contacted.map((l) => l.sentAt).sort()[0])}.</p></header>
      <div class="body"><div class="grid2">
        <section class="panel wide"><h2>Outreach funnel</h2><div class="funnel">${steps.map(([label, n, rate]) => `<div class="step"><b>${n}</b><span>${label}</span><span class="rate">${rate ? `${rate} of contacted` : "&nbsp;"}</span></div>`).join("")}</div>
          <p class="note">${replied.length ? `${replied.length} replied so far${replied.some((l) => stageOf(l) === "declined") ? `, ${replied.filter((l) => stageOf(l) === "declined").length} of them to decline` : ""}. ` : "No replies yet. "}${replyDays.length ? `Replies came after ${replyDays.join(", ")} days.` : ""} These were all sent with the link in the first message; video-first previews start with the next send.</p></section>
        <section class="panel"><h2>Sent per week</h2>${chart}<div class="legend"><span><i style="background:#fff"></i>Previews</span><span><i style="background:var(--sand)"></i>Follow-ups</span></div>
          <p class="note">Nothing sent in ${lastSend} days, with ${leads.filter((l) => stageOf(l) === "ready").length} previews ready.</p></section>
        <section class="panel"><h2>Where the leads are</h2>${byArea.map(([a, ls]) => `<div class="bar-row"><span>${esc(a)}</span><span class="track" style="width:${(ls.length / maxA) * 100}%">${segs.map(([, f, c]) => { const n = ls.filter((l) => f(stageOf(l))).length; return n ? `<i style="flex:${n};background:${c}"></i>` : ""; }).join("")}</span><b>${ls.length}</b></div>`).join("")}
          <div class="legend">${segs.map(([n, , c]) => `<span><i style="background:${c}"></i>${n}</span>`).join("")}</div></section>
        <section class="panel wide"><h2>Published mockups by category</h2>${types.map(([t, n]) => `<div class="bar-row"><span>${esc(t)}</span><span class="track" style="width:${(n / maxT) * 100}%"><i style="flex:1;background:#fff"></i></span><b>${n}</b></div>`).join("")}</section>
      </div></div>`;
    icons();
  }

  // ---------- Production ----------
  let prodTab = "candidates";
  const TABS = [["candidates", "Candidates", (l) => stageOf(l) === "candidate"], ["briefs", "Briefs", (l) => ["brief_ready", "brief_rework"].includes(stageOf(l))],
    ["build", "Build queue", (l) => ["approved", "brief_approved", "planned", "to_publish"].includes(stageOf(l))], ["published", "Published", (l) => !!l.preview]];
  function renderProduction() {
    const [, , filter] = TABS.find(([k]) => k === prodTab);
    const items = leads.filter(filter).sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
    let body = "";
    if (prodTab === "candidates") {
      body = `<table><thead><tr><th>Shop</th><th class="hide-sm">Area</th><th>Reviews</th><th class="hide-sm">Why</th><th></th></tr></thead><tbody>${items.map((l) => `<tr data-slug="${l.slug}">
        <td><strong>${esc(l.name)}</strong><small>${esc(l.type)}${l.hasWebsite ? " · has a website" : ""}</small></td><td class="hide-sm">${esc(l.area)}</td><td class="rating">★ ${l.rating ?? "–"} <small>${num(l.reviews)}</small></td>
        <td class="hide-sm" style="color:var(--muted)">${esc(l.why)}</td><td style="text-align:right;white-space:nowrap"><button class="btn small" data-move="rejected" data-slug="${l.slug}">Reject</button> <button class="btn small primary" data-move="approved" data-slug="${l.slug}">Approve</button></td></tr>`).join("")}</tbody></table>`;
    } else if (prodTab === "briefs") {
      body = items.length ? `<div style="display:grid;gap:14px;max-width:820px">${items.map((l) => `<section class="panel"><h2>${esc(l.type)} · ${esc(l.area)}</h2><h3 style="font:500 32px/.95 var(--display);text-transform:uppercase;margin:0 0 8px">${esc(l.name)}</h3>
        <p style="color:#d7dbe0;margin:0 0 12px">${esc(l.brief?.personality)}</p>${chip(stageOf(l))}<span class="chip" style="margin-left:12px">${l.brief?.mockups ?? 0} [MOCKUP] lines</span>
        <div class="acts"><button class="btn small">${ic("file-text")}Open brief</button><button class="btn small" data-move="brief_rework" data-slug="${l.slug}">Send back</button><button class="btn small primary" data-move="brief_approved" data-slug="${l.slug}">Approve</button></div></section>`).join("")}</div>`
        : `<p class="empty"><strong>No briefs waiting</strong>Approved candidates get a brief from Claude: run /shop-landing brief.</p>`;
    } else if (prodTab === "build") {
      const cmds = [["Write briefs for approved shops (local: uses the Places key)", "/shop-landing brief"], ["Plan and build approved briefs", "/shop-landing build"], ["Publish built sites to Coolify (local)", "/shop-landing publish"], ["Make preview videos and lines", "node scripts/outreach-media.mjs --all"]];
      body = `${items.length ? `<div class="shelf">${items.map((l) => `<figure><figcaption>${esc(l.name)}<small>${STAGE[stageOf(l)][0]}</small></figcaption></figure>`).join("")}</div>` : `<p class="empty" style="max-width:560px"><strong>Nothing waiting on Claude</strong>Approve candidates or briefs and they queue here, with the command to run.</p>`}
        <section class="panel" style="max-width:720px;margin-top:20px"><h2>Commands</h2>${cmds.map(([label, c]) => `<p style="margin:12px 0 0;color:var(--muted);font-size:13px">${label}</p><div class="cmd"><code>${c}</code><button class="btn small" data-copytext="${esc(c)}">${ic("copy")}Copy</button></div>`).join("")}</section>`;
    } else {
      body = `<div class="shelf">${items.map((l) => `<figure><span class="thumb" style="background-image:url('${still(l)}')"></span><figcaption>${esc(l.name)}<small>${STAGE[stageOf(l)][0]}</small></figcaption></figure>`).join("")}</div>`;
    }
    $("#production").innerHTML = `
      <header class="head"><h1>Production</h1><p class="sub">From Maps listing to a published mockup. Claude does the work; you approve.</p>
        <div class="tools"><div class="seg" role="tablist">${TABS.map(([k, label, f]) => `<button type="button" role="tab" data-tab="${k}" aria-pressed="${prodTab === k}">${label}<span class="c">${leads.filter(f).length}</span></button>`).join("")}</div></div></header>
      <div class="body">${body}</div>`;
    icons();
  }

  // ---------- Shell ----------
  function counts() {
    const set = (k, v) => $$(`[data-count="${k}"]`).forEach((el) => { el.textContent = v || ""; el.hidden = !v; });
    set("today", queue().length);
    set("leads", leads.filter((l) => SALES.has(stageOf(l))).length);
    TABS.forEach(([k, , f]) => set(k, leads.filter(f).length));
  }
  const RENDER = { today: renderToday, pipeline: renderPipeline, leads: renderLeads, metrics: renderMetrics, production: renderProduction };
  function route() {
    const [screen = "today", tab] = location.hash.slice(1).split("/");
    if (screen === "production" && tab) prodTab = tab;
    $$(".screen").forEach((s) => s.classList.toggle("on", s.id === screen));
    $$("[data-screen]").forEach((a) => a.toggleAttribute("aria-current", false));
    $$(`[data-screen="${screen}"]`).forEach((a) => { if (screen !== "production" || !a.dataset.tab || a.dataset.tab === prodTab) a.setAttribute("aria-current", "page"); });
    (RENDER[screen] || renderToday)();
    counts();
  }
  function renderAll() { route(); }

  let toastTimer;
  function toast(text, undo = false) {
    const t = $(".toast");
    $("span", t).textContent = text;
    $("button", t).hidden = !undo;
    t.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("on"), 4000);
  }

  // ---------- Events ----------
  document.addEventListener("click", (e) => {
    const el = e.target.closest("button, a, tr[data-slug]");
    if (!el) return;
    const d = el.dataset;
    if (el.matches(".toast button")) {
      const h = history.pop();
      if (h) { if (h.prev === undefined) delete override[h.slug]; else override[h.slug] = h.prev; if (h.sent) sentToday--; renderAll(); }
      return $(".toast").classList.remove("on");
    }
    if (d.effect) return act(+d.i, d.effect);
    if (d.go) { const feed = $(".feed"); return feed.scrollTo({ top: +d.go * feed.clientHeight, behavior: "smooth" }); }
    if (d.filter) { todayFilter = d.filter; current = 0; return renderToday(); }
    if (d.sheet !== undefined) return $("#side").classList.toggle("open");
    if (d.copy !== undefined) return toast("Message copied");
    if (d.copytext) return toast(`Copied: ${d.copytext}`);
    if (d.side) { side = d.side; return renderPipeline(); }
    if (d.more) { expanded.add(d.more); return renderPipeline(); }
    if (d.sort) { sortDir = sortKey === d.sort ? -sortDir : 1; sortKey = d.sort; return renderLeads(); }
    if (d.tab && el.closest("#production")) { location.hash = `production/${d.tab}`; return; }
    if (d.move) { history.push({ slug: d.slug, prev: override[d.slug] }); override[d.slug] = d.move; renderAll(); return toast(`${leads.find((l) => l.slug === d.slug).name}: ${STAGE[d.move][0]}`, true); }
    if (d.gotoday !== undefined) { location.hash = "today"; return; }
    if (el.matches("#leads tr[data-slug]")) { openSlug = openSlug === d.slug ? "" : d.slug; return renderLeads(); }
  });
  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-q]")) { leadQuery = e.target.value; renderLeads(); const f = $("[data-q]"); f.focus(); f.setSelectionRange(f.value.length, f.value.length); }
  });
  document.addEventListener("change", (e) => {
    if (e.target.matches("[data-area]")) { boardArea = e.target.value; renderPipeline(); }
    if (e.target.matches("[data-stage]")) { leadStage = e.target.value; renderLeads(); }
    if (e.target.matches("[data-larea]")) { leadArea = e.target.value; renderLeads(); }
  });
  document.addEventListener("keydown", (e) => {
    if (!$("#today").classList.contains("on") || e.target.matches("input, select, textarea")) return;
    const feed = $(".feed");
    const go = (i) => feed.scrollTo({ top: i * feed.clientHeight, behavior: "smooth" });
    if (e.key === "j" || e.key === "ArrowDown") { e.preventDefault(); go(current + 1); }
    if (e.key === "k" || e.key === "ArrowUp") { e.preventDefault(); go(Math.max(0, current - 1)); }
    if (e.key === "e") { const main = $(`.slide[data-i="${current}"] .rail .main`); main && act(current, main.dataset.effect); }
  });
  // Drag a pipeline card onto a column to move it.
  document.addEventListener("dragstart", (e) => { const c = e.target.closest?.(".card"); if (!c) return; c.classList.add("dragging"); e.dataTransfer.setData("text/plain", c.dataset.slug); });
  document.addEventListener("dragend", (e) => { e.target.closest?.(".card")?.classList.remove("dragging"); $$(".col.drop").forEach((c) => c.classList.remove("drop")); });
  document.addEventListener("dragover", (e) => { const col = e.target.closest(".col"); if (!col) return; e.preventDefault(); $$(".col.drop").forEach((c) => c !== col && c.classList.remove("drop")); col.classList.add("drop"); });
  document.addEventListener("drop", (e) => {
    const col = e.target.closest(".col"); if (!col) return;
    e.preventDefault();
    const slug = e.dataTransfer.getData("text/plain");
    const to = col.dataset.col === "closed" ? "no_answer" : col.dataset.col;
    history.push({ slug, prev: override[slug] }); override[slug] = to; renderAll();
    toast(`${leads.find((l) => l.slug === slug).name} moved to ${STAGE[to][0]}`, true);
  });

  $("#snapshot").textContent = `Snapshot of shops.json, ${GEN.toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}`;
  window.addEventListener("hashchange", route);
  route();
})();
