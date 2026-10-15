// WhatsApp message to a shop owner once their mockup is online ("Fokus manfaat" draft).
// Edit the wording here; {name}, {sender} and {link} are filled in per shop.
export const OUTREACH_TEMPLATE = `Halo, {name}. Saya {sender}, pembuat website untuk usaha lokal.

Banyak calon pelanggan mengecek menu, jam buka, dan lokasi sebelum datang. Saya sudah menyiapkan contoh website untuk {name} yang menampilkan semua itu dalam satu halaman, lengkap dengan tombol WhatsApp dan petunjuk arah:

{link}

Ini masih draf: beberapa detail berupa perkiraan dan bisa disesuaikan. Melihatnya gratis dan tanpa kewajiban.

Jika berminat, balas pesan ini dan saya jelaskan langkah selanjutnya. Terima kasih.`;

export function outreachMessage({ name, sender, link }) {
  return OUTREACH_TEMPLATE
    .replaceAll("{name}", name || "<nama usaha>")
    .replaceAll("{sender}", sender?.trim() || "<nama kamu>")
    .replaceAll("{link}", link || "<link>");
}

// wa.me link from a phone number in the listing. Indonesian numbers: 0811… → 62811…
export function whatsappLink(phone, text) {
  if (!phone) return null;
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) digits = "62" + digits.slice(1);
  if (digits.length < 9) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
