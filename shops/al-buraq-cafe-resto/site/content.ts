// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Facts without `mockup` come from the Google Maps listing (raw.json) or the reviews.

export type Item = { text: string; mockup?: boolean };

// ---------------------------------------------------------------- shop facts (listing)
export const shop = {
  name: "Al Buraq Cafe & Resto",
  // The name always breaks into these two lines in the hero.
  nameLines: ["Al Buraq", "Cafe & Resto"] as const,
  type: "Kafe & resto",
  address: "Jl. Raya Condet No.37, Batu Ampar, Kramat Jati, Jakarta Timur 13530",
  addressShort: "Jl. Raya Condet No.37, Kramat Jati",
  street: "Jl. Raya Condet No.37",
  phoneDisplay: "0856-7855-946",
  phoneHref: "tel:+628567855946",
  mapsUrl: "https://maps.google.com/?cid=9067756861493324694",
  mapEmbed:
    "https://www.google.com/maps?q=Al%20Buraq%20Cafe%20%26%20Resto%2C%20Jl.%20Raya%20Condet%20No.37%2C%20Jakarta%20Timur&output=embed",
  hours: [{ days: "Senin–Minggu", time: "15.00–24.00" }],
  openEveryDay: "Buka setiap hari",
  // Same hours every day (listing), so "today" is always true.
  hoursToday: "Buka hari ini 15.00–24.00",
  rating: "4,3 dari 465 ulasan di Google",
};

// ---------------------------------------------------------------- WhatsApp
// [MOCKUP] The 0856 number is a mobile number and is assumed to take WhatsApp.
export const whatsapp = {
  number: "628567855946",
  mockup: true,
  ask: { text: "Halo Al Buraq, saya mau tanya meja untuk malam ini.", mockup: true } as Item,
  group: { text: "Halo Al Buraq, saya mau pesan meja untuk rombongan.", mockup: true } as Item,
};

export function waLink(text: string) {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(text)}`;
}

// ---------------------------------------------------------------- banner + meta
export const banner =
  "Draf tampilan untuk Al Buraq Cafe & Resto. Beberapa detail masih contoh sampai Anda konfirmasi.";

export const metadata = {
  title: "Al Buraq Cafe & Resto · Kafe & resto di Jalan Raya Condet",
  description:
    "Kafe dan resto bernuansa Timur Tengah di Jl. Raya Condet No.37, Kramat Jati, Jakarta Timur. Buka setiap hari 15.00–24.00.",
};

export const skipLink = "Langsung ke konten";

// ---------------------------------------------------------------- hero
export const hero = {
  line: { text: "Lentera, sofa merah, dan teh hangat di Jalan Raya Condet", mockup: true } as Item,
  directions: "Petunjuk Arah",
  directionsSr: ", buka Google Maps",
  whatsappLabel: "WhatsApp",
  whatsappSr: ", buka WhatsApp",
};

// ---------------------------------------------------------------- Suasana
export const suasana = {
  heading: "Suasana",
  // [MOCKUP] greeting and line
  lead: { text: "Ahlan wa sahlan! Duduk santai, pesan teh, ngobrol sampai malam.", mockup: true } as Item,
  facts: [
    { text: "Lentera kaca warna-warni di langit-langit" }, // photos
    { text: "Sofa beludru merah dan dinding berceruk lengkung" }, // photos
    { text: "Nyaman untuk duduk lama" }, // reviews 1, 2
    { text: "Bisa isi daya ponsel, asal bawa charger sendiri" }, // review 1
  ] as Item[],
};

// ---------------------------------------------------------------- Menu andalan
export type Dish = { id: "platter" | "flatbread" | "tea"; label: Item; alt: string };
export type MenuGroup = { name: string; price: Item; items: Item[] };

export const menu = {
  heading: "Menu andalan",
  intro: { text: "Camilan, roti, dan minuman dingin untuk menemani obrolan panjang.", mockup: true } as Item,
  // The dishes are real (photos); the names are ours until the owner confirms them.
  dishes: [
    {
      id: "flatbread",
      label: { text: "Roti panggang & daging saus tomat", mockup: true },
      alt: "Ilustrasi roti panggang dengan semangkuk daging dan kentang goreng dalam saus tomat",
    },
    {
      id: "tea",
      label: { text: "Es teh lemon mint", mockup: true },
      alt: "Ilustrasi segelas es teh dengan irisan lemon dan daun mint, dilihat dari atas",
    },
    {
      id: "platter",
      label: { text: "Piring gorengan", mockup: true },
      alt: "Ilustrasi piring gorengan: risoles, sambosa, saus mayones dan sambal di atas selada",
    },
  ] as Dish[],
  groups: [
    {
      name: "Nasi",
      price: { text: "Rp 45rb–75rb", mockup: true },
      items: [
        { text: "Nasi Kebuli Kambing", mockup: true },
        { text: "Nasi Mandi Ayam", mockup: true },
        { text: "Nasi Briyani", mockup: true },
        { text: "Salted Egg Chicken" }, // review 3
      ],
    },
    {
      name: "Roti & camilan",
      price: { text: "Rp 25rb–40rb", mockup: true },
      items: [
        { text: "Roti Maryam kari kambing", mockup: true },
        { text: "Sambosa", mockup: true },
        { text: "Hummus dengan roti", mockup: true },
      ],
    },
    {
      name: "Minuman",
      price: { text: "Rp 10rb–25rb", mockup: true },
      items: [
        { text: "Teh Susu Arab", mockup: true },
        { text: "Kopi Arab", mockup: true },
        { text: "Es Lemon Tea Mint", mockup: true },
        { text: "Jus Alpukat", mockup: true },
      ],
    },
  ] as MenuGroup[],
  priceNote: { text: "Harga masih contoh.", mockup: true } as Item,
  // reviews 1, 2. Hidden until the human reviewer and the owner approve (tobacco promotion is restricted).
  shisha: { text: "Tersedia shisha (khusus 18+)", show: false },
};

// ---------------------------------------------------------------- Datang ramai-ramai [MOCKUP section]
export const group = {
  heading: { text: "Datang ramai-ramai?", mockup: true } as Item,
  lead: { text: "Meja panjang kami siap.", mockup: true } as Item,
  body: {
    text: "Buka bersama, arisan, atau kumpul kantor: rombongan duduk di ruang kedua, dari selepas Maghrib sampai tutup.",
    mockup: true,
  } as Item,
  package: { text: "Paket rombongan untuk 5–10 orang, mulai Rp 350rb", mockup: true } as Item,
  orderAhead: { text: "Pesan sehari sebelumnya lewat WhatsApp", mockup: true } as Item,
  button: "Pesan via WhatsApp",
  buttonSr: ", buka WhatsApp",
  // The tray and jug are real (photo-1); the names are ours.
  tableAlt:
    "Ilustrasi meja panjang rombongan dengan taplak abu-abu, nampan nasi, teko es teh dan gelas, dilihat dari atas",
  labels: {
    tray: { text: "Nampan nasi rombongan", mockup: true } as Item,
    jug: { text: "Teko es teh", mockup: true } as Item,
  },
};

// ---------------------------------------------------------------- Kata mereka
// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  note: "Dirangkum dari ulasan Google.",
  items: [
    { text: "Pelayannya ramah, mau membantu, dan cepat melayani.", source: "Dari 2 ulasan Google" }, // reviews 1, 5
    { text: "Tempatnya nyaman, betah duduk lama.", source: "Dari 2 ulasan Google" }, // reviews 1, 2
    { text: "Harganya bersahabat, jadi pelanggan suka balik lagi.", source: "Dari 2 ulasan Google" }, // reviews 1, 2
  ],
};

// ---------------------------------------------------------------- Kunjungi kami
export const visit = {
  heading: "Kunjungi kami",
  mapTitle: "Peta lokasi Al Buraq Cafe & Resto",
  phoneLabel: "Telepon",
};

// ---------------------------------------------------------------- Hubungi kami (closing)
export const close = {
  heading: { text: "Sampai ketemu malam ini", mockup: true } as Item,
  rows: {
    whatsapp: "WhatsApp",
    call: "Telepon",
    directions: "Petunjuk Arah",
  },
  footerDraft: "Situs draf",
};
