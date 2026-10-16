// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia.

export type Item = { text: string; mockup?: boolean };
export type Link = Item & { href: string };

// ---------------------------------------------------------------- shop (listing, raw.json)
export const shop = {
  name: "Rumah Mantan Cafe & Nostalgia", // listing
  shortName: "Rumah Mantan",
  type: "Kafe", // listing type: cafe
  address: "Jl. Pinang Raya No. 10, Rawamangun, Pulo Gadung, Jakarta Timur 13220",
  addressLines: ["Jl. Pinang Raya No. 10", "Rawamangun, Pulo Gadung", "Jakarta Timur 13220"],
  phone: "0812-9884-0096",
  phoneHref: "tel:+6281298840096",
  // [MOCKUP] that the listing number takes WhatsApp.
  whatsapp: { text: "WhatsApp", href: "https://wa.me/6281298840096", mockup: true } as Link,
  // Seen only on a window sticker in an old customer photo. Unconfirmed.
  instagram: {
    text: "@rumahmantancafe_jkt",
    href: "https://www.instagram.com/rumahmantancafe_jkt/",
    mockup: true,
  } as Link,
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Rumah+Mantan+Cafe+%26+Nostalgia&destination_place_id=ChIJ9S3rlpX0aS4RxL8wl8-ILCA",
  mapsUrl:
    "https://maps.google.com/?cid=2318378333365125060&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Rumah+Mantan+Cafe+%26+Nostalgia,+Jl.+Pinang+Raya+No.10,+Rawamangun,+Jakarta+Timur&output=embed",
  // regularOpeningHours: Sun–Fri 11:30–21:30, Sat 14:30–21:30. No closed day.
  hours: [
    { days: "Minggu–Jumat", time: "11.30–21.30" },
    { days: "Sabtu", time: "14.30–21.30", later: true },
  ],
  // 0 = Minggu … 6 = Sabtu (same numbering as the Places API periods).
  hoursByDay: [
    "11.30–21.30",
    "11.30–21.30",
    "11.30–21.30",
    "11.30–21.30",
    "11.30–21.30",
    "11.30–21.30",
    "14.30–21.30",
  ],
  rating: { value: "4,3", count: 708 }, // listing
};

export const meta = {
  title: "Rumah Mantan Cafe & Nostalgia · Rawamangun, Jakarta Timur",
  description:
    "Kafe nongkrong di Jl. Pinang Raya No. 10, Rawamangun. Buka setiap hari 11.30–21.30, Sabtu 14.30–21.30.",
  banner:
    "Draf mockup untuk Rumah Mantan Cafe & Nostalgia. Beberapa detail masih contoh dan perlu dikonfirmasi pemilik.",
};

// ---------------------------------------------------------------- 1. hero
export const hero = {
  // The entrance mural reads "Selamat DATANG di Rumah Mantan" (owner-1.jpg).
  greeting: { before: "Selamat", ribbon: "Datang", after: "di" },
  title: { lines: ["Rumah", "Mantan"], sub: "Cafe & Nostalgia" },
  // The striped wall sign (photos). Its third word is unreadable; "Pernah" is our guess.
  signWords: [
    { text: "Kamu" },
    { text: "Aku" },
    { text: "Pernah", mockup: true },
    { text: "Sayang" },
  ] as Item[],
  signSentence: "Kamu, aku, pernah sayang.",
  hours: {
    everyDay: "Buka setiap hari",
    today: "Buka hari ini",
    saturdayNote: "Sabtu buka lebih sore, 14.30",
    weekdayNote: "Minggu–Jumat 11.30–21.30",
  },
  directions: "Petunjuk Arah",
};

// ---------------------------------------------------------------- 2. the wall of signs
export const wall = {
  heading: "Dindingnya penuh kode",
  // editorialSummary, rephrased into full words.
  description: {
    text: "Tempat nongkrong yang lucu, unik, dan kreatif, dengan camilan, makanan, dan minuman yang nggak biasa.",
  } as Item,
  body: {
    text: "Di sini, mantan bukan buat ditangisi, tapi buat diketawain bareng teman. Dindingnya penuh papan soal cinta, kopi, dan masa lalu. Baca satu-satu sambil nunggu pesanan.",
    mockup: true,
  } as Item,
  // Real sign wordings (photos), house number from the listing.
  signs: {
    kopi: { title: "Kopi", sub: "Ketika Otak Perlu Inspirasi" },
    stress: "Stress free zone",
    number: "10",
  },
  photo: {
    src: "/owner-1.jpg",
    width: 1600,
    height: 900,
    alt: "Pintu masuk Rumah Mantan di malam hari: mural Selamat Datang di Rumah Mantan bergambar rumah kuning, meja kasir dari papan kayu, dan dua kursi kawat putih.",
    caption: "Pintu masuk di Jl. Pinang Raya No. 10, lengkap dengan muralnya.",
  },
};

// ---------------------------------------------------------------- 3. menu
export type Dish = {
  name: Item;
  desc: string;
  art: "latte" | "nasi" | "carbonara" | "hotdog";
  artMockup?: boolean; // the drawing's details are a guess
};

export const menu = {
  heading: "Menu andalan",
  // editorialSummary (unusual snacks, food and drinks) + reviews 1, 4, 5 (cheap).
  intro:
    "Camilan, makanan, dan minuman yang sedikit beda dari biasanya, dengan harga yang tetap ramah di kantong.",
  priceLine: [
    { text: "Kopi mulai Rp 15rb", mockup: true },
    { text: "Camilan mulai Rp 15rb", mockup: true },
    { text: "Makanan mulai Rp 25rb", mockup: true },
  ] as Item[],
  illustrationLabel: "Ilustrasi",
  // Reviews 3, 4 praise the latte's taste; photo-3 shows the rooster saucer.
  featured: {
    name: { text: "Kopi latte" },
    desc: "Gelas bening di atas lepek motif ayam jago. Yang dipuji pelanggan justru rasanya, bukan cuma gambar di busanya.",
    art: "latte",
  } as Dish,
  dishes: [
    {
      // review 1
      name: { text: "Nasi goreng spesial mantan" },
      desc: "Membawa nama rumah ini, dan jadi pilihan pelanggan saat lapar beneran.",
      art: "nasi",
      artMockup: true,
    },
    {
      // review 5
      name: { text: "Carbonara" },
      desc: "Ada pelanggan yang khusus menyarankan ini: rasanya melebihi ekspektasi.",
      art: "carbonara",
    },
    {
      // owner-2.jpg; real menu name unknown
      name: { text: "Hot dog roti hitam", mockup: true },
      desc: "Roti hitam, sosis panjang, saus keju, dan mayones, disajikan di atas papan kayu.",
      art: "hotdog",
    },
  ] as Dish[],
  hotdogPhoto: {
    src: "/owner-2.jpg",
    width: 480,
    height: 346,
    alt: "Hot dog roti hitam dengan sosis panjang, saus keju dan mayones, di atas papan kayu.",
  },
  lists: [
    {
      heading: "Camilan",
      items: [
        { text: "Kentang goreng", mockup: true },
        { text: "Pisang goreng", mockup: true },
        { text: "Roti Bakar Balikan", mockup: true },
        { text: "Indomie", mockup: true },
      ] as Item[],
    },
    {
      heading: "Minuman",
      items: [
        { text: "Es teh manis", mockup: true },
        { text: "Kopi tubruk", mockup: true },
        { text: "Es Kopi Susu Gagal Move On", mockup: true },
      ] as Item[],
    },
  ],
};

// ---------------------------------------------------------------- 4. seating
export type Space = { title: string; body: string; art: "teras" | "kaca" | "merokok" };

export const spaces = {
  heading: "Pojok favorit",
  intro: { text: "Datang rame-rame? Ada tempatnya.", mockup: true } as Item, // review 4, wording ours
  items: [
    {
      title: "Teras depan",
      body: "Meja kayu palet berkaki besi dan bangku kayu pinus, langsung di depan rumah.",
      art: "teras",
    },
    {
      title: "Ruang kaca",
      body: "Ruangan berdinding kaca dengan rangka besi hitam dan bantal duduk oranye.",
      art: "kaca",
    },
    {
      title: "Area merokok",
      body: "Ada area khusus merokok, jadi yang mau ngebul punya pojoknya sendiri.",
      art: "merokok",
    },
  ] as Space[],
  smokingSign: "Smoking area",
};

// ---------------------------------------------------------------- 5. reviews
// Paraphrased from real reviews only. Never invented, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  ratingLine: `${shop.rating.value} dari ${shop.rating.count} ulasan Google`,
  label: "Rangkuman dari ulasan Google, bukan kutipan",
  notes: [
    { text: "Harganya ramah di kantong, untuk makanan maupun minuman." }, // reviews 1, 4, 5
    { text: "Latte-nya dipuji karena rasanya, bukan cuma karena gambar di busanya." }, // reviews 3, 4
    { text: "Sejak direnovasi, tempatnya jadi jauh lebih nyaman." }, // reviews 4, 5
    { text: "Pas buat nongkrong rame-rame bareng teman." }, // review 4
  ] as Item[],
};

// ---------------------------------------------------------------- 6. visit
export const visit = {
  heading: "Mampir ke rumah mantan",
  lead: { text: "Kali ini dijamin nggak canggung.", mockup: true } as Item,
  everyDay: "Buka setiap hari",
  laterLabel: "lebih sore",
  mapTitle: "Peta lokasi Rumah Mantan Cafe & Nostalgia",
  mapFallback: "Buka di Google Maps",
  mapLoading: "Memuat peta Google…",
};

// ---------------------------------------------------------------- 7. contact
export const contact = {
  heading: "Kabarin dulu",
  sub: "Mau tanya dulu sebelum datang? Telepon, WhatsApp, atau DM Instagram.",
  plaques: [
    { label: "Telepon", value: shop.phone, href: shop.phoneHref },
    {
      label: "WhatsApp",
      value: `Chat ${shop.phone}`,
      href: shop.whatsapp.href,
      mockup: true,
      external: true,
    },
    {
      label: "Instagram",
      value: shop.instagram.text,
      href: shop.instagram.href,
      mockup: true,
      external: true,
    },
  ] as { label: string; value: string; href: string; mockup?: boolean; external?: boolean }[],
};
