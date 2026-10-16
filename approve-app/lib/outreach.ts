// Messages to shop owners, and the timing between them.
// Edit the wording here; {name}, {sender} and {link} are filled in per shop.

export const FOLLOW_UP_AFTER_DAYS = 3;     // no reply this long after the first message → follow up
export const NO_ANSWER_AFTER_DAYS = 3;     // no reply this long after the follow-up → close as no answer

export const OUTREACH_TEMPLATE = `Halo, {name}. Saya {sender}, pembuat website untuk usaha lokal.

Banyak calon pelanggan mengecek menu, jam buka, dan lokasi sebelum datang. Saya sudah menyiapkan contoh website untuk {name} yang menampilkan semua itu dalam satu halaman, lengkap dengan tombol WhatsApp dan petunjuk arah:

{link}

Ini masih draf: beberapa detail berupa perkiraan dan bisa disesuaikan. Melihatnya gratis dan tanpa kewajiban.

Jika berminat, balas pesan ini dan saya jelaskan langkah selanjutnya. Terima kasih.`;

export const FOLLOWUP_TEMPLATE = `Halo, {name}. Saya {sender}, yang mengirimkan contoh website untuk {name} beberapa hari lalu.

Kalau berkenan, saya bisa menyesuaikan contohnya dengan foto, menu, dan harga asli {name}, supaya terlihat seperti website yang siap dipakai. Melihat hasilnya tetap gratis dan tanpa kewajiban.

Contoh yang sekarang masih bisa dilihat di sini:

{link}

Cukup balas pesan ini jika tertarik. Terima kasih.`;

export interface MessageVars {
  name?: string;
  sender?: string;
  link?: string;
}

export function fillMessage(template: string, { name, sender, link }: MessageVars): string {
  return template
    .replaceAll("{name}", name || "<nama usaha>")
    .replaceAll("{sender}", sender?.trim() || "<nama kamu>")
    .replaceAll("{link}", link || "<link>");
}

export const outreachMessage = (vars: MessageVars) => fillMessage(OUTREACH_TEMPLATE, vars);
export const followupMessage = (vars: MessageVars) => fillMessage(FOLLOWUP_TEMPLATE, vars);

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
