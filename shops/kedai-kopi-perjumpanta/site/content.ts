// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia. Menu names are spelled exactly as the shop's banner.

export type Item = { text: string; mockup?: boolean };

export const banner =
  "Draf tampilan untuk Kedai Kopi Perjumpanta. Belum situs resmi, sebagian isi masih contoh.";

export const meta = {
  title: "Kedai Kopi Perjumpanta · Kedai kopi Karo di Cawang, Jakarta Timur",
  description:
    "Kedai kopi Karo di Cawang, Kramat Jati. Buka 24 jam setiap hari. Bandrek Susu, Lontong Medan, dan tempat berkumpul orang Karo di Jakarta.",
};

export const shop = {
  name: "Kedai Kopi Perjumpanta", // listing
  nameTop: "Kedai Kopi",
  wordmark: "Perjumpanta",
  address: "No. 4, RT.4/RW.9, Cawang, Kramat Jati, Jakarta Timur 13630", // listing
  addressShort: "Cawang, Kramat Jati, Jakarta Timur", // listing
  landmark: { text: "Dekat Gedung ASABRI, Cawang.", mockup: true } as Item, // photos, unconfirmed
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Kedai%20Kopi%20Perjumpanta&destination_place_id=ChIJZSTqEP7yaS4RncIGbHkVay0",
  mapsHref: "https://maps.google.com/?cid=3272733165462405789", // listing googleMapsUri
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Kedai%20Kopi%20Perjumpanta%2C%20Cawang%2C%20Kramat%20Jati%2C%20Jakarta%20Timur&z=17&output=embed",
  // The listing has no phone. Links render only once `number` is filled (format 62812...).
  whatsapp: { number: "", display: "nomor menyusul", mockup: true },
  phone: { number: "", display: "nomor menyusul", mockup: true },
  hours: { headline: "Buka 24 jam", days: "Senin–Minggu" }, // hours: open 24 hours, every day
  rating: { value: "4,5", count: 721 }, // listing
};

export const hero = {
  greeting: { text: "Mejuah-juah!", mockup: true } as Item,
  sub: { text: "Kedai kopi Karo di Cawang, tempat kita berjumpa.", mockup: true } as Item,
  directionsLabel: "Petunjuk Arah",
  whatsappLabel: "WhatsApp",
  menuLabel: "Lihat menu",
  tableLabel: "Segelas Bandrek Susu di atas tatakan hijau",
};

export const rasa = {
  heading: "Rasa kampung halaman",
  lead: { text: "Rindu kampung? Duduk dulu, pesan bandrek, kita cerita.", mockup: true } as Item,
  body: [
    // reviews 1, 3, 4
    {
      text: "Kebanyakan yang datang orang Karo dari Sumatera Utara, juga saudara-saudara Batak. Banyak yang bilang, duduk di sini rasanya seperti pulang ke rumah.",
    },
    { text: "Siapa pun boleh mampir.", mockup: true },
  ] as Item[],
  items: [
    {
      title: "Ngumpul dan ngobrol",
      text: "Orang datang untuk berkumpul, bertemu teman, dan ngobrol panjang.", // reviews 3, 5
    },
    {
      title: "Masakan Karo",
      text: "Bukan cuma kopi. Di sini juga tempat makan masakan tradisional Karo.", // review 5
    },
    {
      title: "Malam yang ramai",
      text: "Kalau sedang ramai, meja berjajar sampai ke pinggir jalan yang rindang.", // photos
    },
    {
      title: "Kabar kampung dan nobar",
      text: "Dengar kabar dari kampung, ketemu kerabat, dan nonton bola bareng di TV.",
      mockup: true,
    },
  ] as { title: string; text: string; mockup?: boolean }[],
  slots: [
    { label: "Foto depan kedai", caption: "Foto dari pemilik menyusul", mockup: true },
    { label: "Foto malam yang ramai", caption: "Foto dari pemilik menyusul", mockup: true },
  ],
};

export type MenuItem = {
  name: string;
  price?: Item; // example prices are all mockup
  extra?: Item; // e.g. "pakai telur Rp 15rb"
  mockup?: boolean; // whole line is a guess (not on the shop's banner)
};

export type MenuGroup = { id: string; label: string; items: MenuItem[]; note?: Item };

export const sedia = {
  heading: "SEDIA", // the shop's own banner (photos)
  lead: { text: "Belum pernah coba bandrek? Mulai dari Bandrek Susu.", mockup: true } as Item,
  priceNote: { text: "Harga masih contoh.", mockup: true } as Item,
  groups: [
    {
      id: "minum",
      label: "Minum",
      items: [
        // On the banner (photos): name is real, price is an example.
        { name: "Bandrek Susu", price: { text: "Rp 12rb", mockup: true } },
        { name: "Bandrek Susu Telor", price: { text: "Rp 15rb", mockup: true } },
        { name: "Fanta Susu", price: { text: "Rp 12rb", mockup: true } },
        { name: "Sprite Susu", price: { text: "Rp 12rb", mockup: true } },
        { name: "Badak", price: { text: "Rp 10rb", mockup: true } },
        // Not on the banner: whole line is a guess.
        { name: "Kopi Hitam", price: { text: "Rp 8rb", mockup: true }, mockup: true },
        { name: "Kopi Susu", price: { text: "Rp 12rb", mockup: true }, mockup: true },
        { name: "Teh Manis", price: { text: "Rp 6rb", mockup: true }, mockup: true },
        { name: "Teh Susu", price: { text: "Rp 10rb", mockup: true }, mockup: true },
      ],
      note: { text: "Kopinya dari Sumatera Utara.", mockup: true },
    },
    {
      id: "makan",
      label: "Makan",
      items: [
        { name: "Lontong Medan", price: { text: "Rp 18rb", mockup: true } }, // review 2
        {
          name: "Indomie Rebus",
          price: { text: "Rp 12rb", mockup: true },
          extra: { text: "pakai telur Rp 15rb", mockup: true },
        },
        {
          name: "Indomie Goreng",
          price: { text: "Rp 12rb", mockup: true },
          extra: { text: "pakai telur Rp 15rb", mockup: true },
        },
        { name: "Bubur Kacang Hijo", price: { text: "Rp 8rb", mockup: true } },
        { name: "Cimpa", price: { text: "Rp 5rb/potong", mockup: true }, mockup: true },
      ],
      note: { text: "Masakan Karo lainnya: daftar menyusul.", mockup: true },
    },
  ] as MenuGroup[],
  table: [
    { name: "Bandrek Susu", art: "bandrek", price: { text: "Rp 12rb", mockup: true } },
    {
      name: "Lontong Medan",
      art: "lontong",
      price: { text: "Rp 18rb", mockup: true },
      note: { text: "Enak, kata pelanggan" }, // review 2, paraphrased
    },
    { name: "Indomie Rebus", art: "indomie", price: { text: "Rp 12rb", mockup: true } },
    { name: "Bubur Kacang Hijo", art: "bubur", price: { text: "Rp 8rb", mockup: true } },
  ] as {
    name: string;
    art: "bandrek" | "lontong" | "indomie" | "bubur";
    price: Item;
    note?: Item;
  }[],
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const reviews = {
  heading: "Kata mereka",
  ratingSuffix: "dari 721 ulasan di Google",
  note: "Diringkas dari ulasan Google, bukan kutipan langsung.",
  items: [
    {
      text: "Buat orang Karo, duduk di sini rasanya seperti di rumah sendiri.",
      sources: [1, 4],
    },
    {
      text: "Tempat nongkrong orang Batak dan Karo, yang bikin ingat kampung halaman.",
      sources: [3, 5],
    },
    {
      text: "Lontong Medan di sini enak, bandreknya juga lumayan.",
      sources: [2],
    },
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  hoursLine: "Buka 24 jam, Senin–Minggu", // hours
  nearby: {
    text: "Dekat kantor-kantor di Cawang: mampir sepulang kerja, atau tengah malam.",
    mockup: true,
  } as Item,
  mapsLinkLabel: "Buka di Google Maps",
  mapTitle: "Peta lokasi Kedai Kopi Perjumpanta",
  mapFallbackNote: "Peta dari Google Maps", // shown under the map until it loads
};

export const contact = {
  heading: "Hubungi kami",
  lead: {
    text: "Rumah kedua orang Karo di Jakarta. Buka 24 jam, kapan pun kamu mau mampir.",
    mockup: true,
  } as Item,
  placeholderLabel: "WhatsApp dan telepon",
};

export const footer = {
  source: "Info dari Google Maps",
};

// One switch removes both uis stripe bands (hero seam and footer). [MOCKUP]
export const uisBand = { enabled: true, mockup: true };
