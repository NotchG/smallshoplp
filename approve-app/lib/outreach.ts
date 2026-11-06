// Messages to shop owners, and the timing between them.
// Edit the wording here; {name}, {sender}, {hook} and {link} are filled in per shop.
// The first two messages carry no link: a link from an unknown number looks like a scam.
// The preview goes as media instead (the scroll video, then the phone screenshot), and the
// link follows once the owner replies.

export const FOLLOW_UP_AFTER_DAYS = 3;     // no reply this long after the first message → follow up
export const NO_ANSWER_AFTER_DAYS = 3;     // no reply this long after the follow-up → close as no answer

// Sent with outreach-scroll.mp4.
export const OUTREACH_TEMPLATE = `Halo, {name}. Saya {sender}, pembuat website untuk usaha lokal.

{hook}

Saya sudah menyiapkan contoh website untuk {name}. Videonya memperlihatkan tampilannya di HP, lengkap dengan tombol WhatsApp dan petunjuk arah.

Ini masih draf: beberapa detail berupa perkiraan dan bisa disesuaikan. Melihatnya gratis dan tanpa kewajiban.

Boleh saya kirimkan link-nya supaya bisa dibuka langsung?`;

// Sent with outreach-phone.png.
export const FOLLOWUP_TEMPLATE = `Halo, {name}. Saya {sender}, yang beberapa hari lalu mengirimkan video contoh website untuk {name}.

Kalau videonya belum sempat dibuka, ini tampilan halaman depannya. Contohnya bisa saya sesuaikan dengan foto dan informasi asli {name}, dan melihatnya tetap gratis tanpa kewajiban.

Kalau tertarik, cukup balas pesan ini dan saya kirimkan link-nya. Terima kasih.`;

// Follow-up for shops contacted before video-first outreach: their first message was the link.
export const LINK_FOLLOWUP_TEMPLATE = `Halo, {name}. Saya {sender}, yang mengirimkan contoh website untuk {name} beberapa hari lalu.

Kalau berkenan, saya bisa menyesuaikan contohnya dengan foto, menu, dan harga asli {name}, supaya terlihat seperti website yang siap dipakai. Melihat hasilnya tetap gratis dan tanpa kewajiban.

Contoh yang sekarang masih bisa dilihat di sini:

{link}

Cukup balas pesan ini jika tertarik. Terima kasih.`;

// Sent once the owner replies.
export const LINK_TEMPLATE = `Terima kasih, {name}. Ini link contoh website-nya:

{link}

Silakan dibuka di HP. Karena masih draf, beberapa detail berupa perkiraan. Kalau ada yang kurang pas, misalnya foto, menu, harga, atau jam buka, cukup balas pesan ini dan akan saya sesuaikan.`;

export interface MessageVars {
  name?: string;
  sender?: string;
  hook?: string;
  link?: string;
}

// A missing hook drops its line (and the blank line around it) instead of leaving a placeholder.
export function fillMessage(template: string, { name, sender, hook, link }: MessageVars): string {
  return template
    .replaceAll("{name}", name || "<nama usaha>")
    .replaceAll("{sender}", sender?.trim() || "<nama kamu>")
    .replaceAll("{hook}", hook?.trim() || "")
    .replaceAll("{link}", link || "<link>")
    .replace(/\n{3,}/g, "\n\n");
}

export const outreachMessage = (vars: MessageVars) => fillMessage(OUTREACH_TEMPLATE, vars);
export const followupMessage = (vars: MessageVars) => fillMessage(FOLLOWUP_TEMPLATE, vars);
export const linkMessage = (vars: MessageVars) => fillMessage(LINK_TEMPLATE, vars);

// Media files in shops/<slug>/screenshots/, made by scripts/outreach-media.mjs.
export const OUTREACH_VIDEO = "outreach-scroll.mp4";
export const OUTREACH_PHOTO = "outreach-phone.png";
export const FALLBACK_PHOTO = "390-fold.png"; // 1x, from the build's screenshot review

// wa.me link from a phone number in the listing. Indonesian numbers: 0811… → 62811…
export function whatsappLink(phone: string | undefined, text: string): string | null {
  if (!phone) return null;
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) digits = "62" + digits.slice(1);
  if (digits.length < 9) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

// --- Time helpers ---
const HOUR = 3600e3, DAY = 24 * HOUR;

export function msSince(iso: string | undefined, now: number = Date.now()): number {
  return iso ? Math.max(0, now - new Date(iso).getTime()) : 0;
}

// "2 days 5 hours", "5 hours", "less than an hour"
export function formatDuration(ms: number): string {
  const days = Math.floor(ms / DAY);
  const hours = Math.floor((ms % DAY) / HOUR);
  const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`;
  if (days > 0) return hours > 0 ? `${plural(days, "day")} ${plural(hours, "hour")}` : plural(days, "day");
  if (hours > 0) return plural(hours, "hour");
  return "less than an hour";
}

export const daysToMs = (d: number): number => d * DAY;
