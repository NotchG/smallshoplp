// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Language: Bahasa Indonesia, "kamu" register (mockup choice; the owner may prefer "Anda").

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Kaneki", // listing; as on the glassware and gate sign
  descriptor: "coffee shop", // listing type; a descriptor, never part of the name
  area: "Pondok Kelapa, Duren Sawit", // listing
  address: "Jl. Perumkar DKI, Pondok Kelapa, Duren Sawit, Jakarta Timur 13450", // listing
  addressShort: "Jl. Perumkar DKI, Pondok Kelapa", // listing
  phone: { display: "0852-1691-8752", href: "tel:+6285216918752" }, // listing
  whatsapp: { href: "https://wa.me/6285216918752", mockup: true }, // [MOCKUP] mobile number, assumed to take WhatsApp
  mapsUrl: "https://maps.google.com/?cid=3273226249840288763", // listing
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Kaneki&destination_place_id=ChIJX9CUizqNaS4R--M2k-7VbC0",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Kaneki,+Jl.+Perumkar+DKI,+Pondok+Kelapa,+Jakarta+Timur&output=embed",
  // hours (listing): every day 07:30–22:00
  hours: {
    open: "07:30",
    close: "22:00",
    range: "07.30–22.00",
    openLabel: "07.30",
    days: "Senin–Minggu",
    note: "Buka setiap hari",
  },
  rating: { value: "4,5", count: 646 }, // listing
  landmark: { text: "Patokan: menyusul dari pemilik", mockup: true } as Item,
};

export const meta = {
  title: "Kaneki · coffee shop di Pondok Kelapa, Jakarta Timur",
  description:
    "Kopi seduh manual, butter croissant, dan tempat tenang untuk kerja di Jl. Perumkar DKI, Pondok Kelapa. Buka setiap hari 07.30–22.00.",
  banner: "Draf mockup untuk Kaneki. Beberapa detail masih contoh sampai pemilik mengonfirmasi.",
};

export const ui = {
  skip: "Langsung ke konten",
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
  openInMaps: "Buka di Google Maps",
  readReviews: "Baca ulasan di Google",
};

export const hero = {
  line: { text: "Kopi seduh manual dan croissant hangat, dekat rumah.", mockup: true } as Item,
  todayLabel: "Buka hari ini",
  status: {
    fallback: "Buka setiap hari",
    open: "Sedang buka",
    closed: "Sudah tutup · buka lagi",
  },
  glassLabel: "Ilustrasi es kopi susu dalam gelas Kaneki",
  croissantLabel: "Ilustrasi butter croissant di atas piring",
};

export type Art = "kopiSusu" | "charcoal" | "matcha" | "peachTea" | "croissant" | "dimsum" | "fries";

export type Featured = { art: Art; name: Item; price: Item; note: Item; label: string };

export type MenuGroup = { title: string; items: { name: Item; price?: Item }[] };

export const menu = {
  heading: "Menu andalan",
  intro: { text: "Semua menu ada di sini, jadi bisa kamu baca dari meja.", mockup: true } as Item,
  featured: [
    {
      art: "kopiSusu",
      name: { text: "Es kopi susu", mockup: true }, // drink seen in photos; menu name assumed
      price: { text: "Rp 25rb", mockup: true },
      note: { text: "Disajikan di gelas Kaneki" }, // photos
      label: "Ilustrasi es kopi susu dalam gelas Kaneki",
    },
    {
      art: "charcoal",
      name: { text: "Charcoal latte", mockup: true }, // "charcoal" flavour from reviews 4; name assumed
      price: { text: "Rp 30rb", mockup: true },
      note: { text: "Rasa yang jarang ada, layak dicoba" }, // reviews 4
      label: "Ilustrasi charcoal latte dalam gelas Kaneki",
    },
    {
      art: "matcha",
      name: { text: "Matcha latte", mockup: true }, // matcha from reviews 1; name assumed
      price: { text: "Rp 30rb", mockup: true },
      note: { text: "Bikin penasaran untuk datang lagi" }, // reviews 1
      label: "Ilustrasi matcha latte dalam gelas Kaneki",
    },
    {
      art: "peachTea",
      name: { text: "Peach tea" }, // reviews 3
      price: { text: "Rp 22rb", mockup: true },
      note: { text: "Teh dingin rasa persik" }, // reviews 3 (descriptive)
      label: "Ilustrasi peach tea dalam gelas Kaneki",
    },
    {
      art: "croissant",
      name: { text: "Butter croissant" }, // reviews 1, 4
      price: { text: "Rp 25rb", mockup: true },
      note: { text: "Renyah di luar, lembut di dalam" }, // reviews 4
      label: "Ilustrasi butter croissant di atas piring",
    },
    {
      art: "dimsum",
      name: { text: "Dimsum mentai" }, // reviews 3
      price: { text: "Rp 30rb", mockup: true },
      note: { text: "Dimsum dengan saus mentai, menu khas" }, // reviews 3
      label: "Ilustrasi tiga dimsum dengan saus mentai",
    },
    {
      art: "fries",
      name: { text: "Truffle fries" }, // reviews 3
      price: { text: "Rp 28rb", mockup: true },
      note: { text: "Kentang goreng yang renyah" }, // reviews 3
      label: "Ilustrasi truffle fries dalam cup putih",
    },
  ] as Featured[],
  listHeading: "Daftar menu",
  examplePrices: "Harga contoh",
  noPrice: { text: "harga menyusul", mockup: true } as Item,
  groups: [
    {
      title: "Kopi",
      items: [
        { name: { text: "Es kopi susu", mockup: true }, price: { text: "Rp 25rb", mockup: true } },
        { name: { text: "Americano (house blend)" }, price: { text: "Rp 22rb", mockup: true } }, // reviews 2
        { name: { text: "Manual brew" }, price: { text: "Rp 30rb", mockup: true } }, // reviews 2
        { name: { text: "Charcoal latte", mockup: true }, price: { text: "Rp 30rb", mockup: true } },
      ],
    },
    {
      title: "Non-kopi",
      items: [
        { name: { text: "Matcha latte", mockup: true }, price: { text: "Rp 30rb", mockup: true } },
        { name: { text: "Peach tea" }, price: { text: "Rp 22rb", mockup: true } }, // reviews 3
        { name: { text: "Es teh jeruk", mockup: true } }, // iced tea with orange, photos; name assumed
      ],
    },
    {
      title: "Makanan",
      items: [
        { name: { text: "Butter croissant" }, price: { text: "Rp 25rb", mockup: true } }, // reviews 1, 4
        { name: { text: "Pain au chocolat", mockup: true } },
        { name: { text: "Almond croissant", mockup: true } },
        { name: { text: "Dimsum mentai" }, price: { text: "Rp 30rb", mockup: true } }, // reviews 3
        { name: { text: "Truffle fries" }, price: { text: "Rp 28rb", mockup: true } }, // reviews 3
      ],
    },
  ] as MenuGroup[],
};

export const manualBrew = {
  heading: "Seduh manual",
  lead: { text: "Pilihan seduh manualnya banyak." } as Item, // reviews 2
  body: [
    { text: "Tanyakan biji yang sedang ada di bar.", mockup: true },
    { text: "House blend-nya juga enak diminum sebagai americano." }, // reviews 2
    { text: "Kopinya kuat. Coba dulu tanpa gula." }, // reviews 4
  ] as Item[],
  beansHeading: "Contoh biji",
  beans: [
    { origin: { text: "Gayo, Aceh", mockup: true }, method: { text: "V60", mockup: true } },
    { origin: { text: "Kintamani, Bali", mockup: true }, method: { text: "V60", mockup: true } },
    { origin: { text: "Flores Bajawa, NTT", mockup: true }, method: { text: "V60", mockup: true } },
  ] as { origin: Item; method: Item }[],
  plantMilk: {
    title: "Susu nabati tersedia", // reviews 3
    text: { text: "Bisa untuk minuman susu, cocok kalau kamu intoleran laktosa." } as Item, // reviews 3
  },
};

export const suasana = {
  heading: "Suasana",
  lead: { text: "Kafe kecil yang tenang di tengah kompleks.", mockup: true } as Item, // small: reviews 5; calm: mockup
  caption: { text: "Ilustrasi · foto asli menyusul", mockup: true } as Item,
  inside: {
    title: "Di dalam",
    text: {
      text: "Dinding putih, meja bar kayu, lampu kertas bundar, dan bangku panjang di dekat jendela. Enak untuk kerja, buka sampai 22.00.",
    } as Item, // photos; reviews 3
    label: "Ilustrasi ruang dalam Kaneki: dinding putih, meja bar kayu, grinder, dan lampu kertas bundar",
  },
  outside: {
    title: "Di luar",
    text: {
      text: "Teras beton di bawah kanopi hijau, dengan pohon kecil dan meja bundar. Semua kursi di luar adalah area merokok.",
    } as Item, // photos; reviews 2
    label: "Ilustrasi teras Kaneki: kanopi hijau, lantai beton, pohon kecil, meja bundar dan stool",
  },
  facts: [
    { text: "Susu nabati tersedia" }, // reviews 3
    { text: "Area merokok di luar" }, // reviews 2
    { text: "Cocok untuk kerja" }, // reviews 3
  ] as Item[],
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  rating: `${shop.rating.value} dari ${shop.rating.count} ulasan Google`,
  intro: { text: "Yang paling sering disebut tamu, kami rangkum dari ulasan.", mockup: true } as Item,
  themes: [
    {
      title: "Kopinya kuat dan berasa",
      line: "Yang paling sering dipuji tamu, apalagi kalau diminum tanpa gula.", // reviews 1, 2, 4
    },
    {
      title: "Butter croissant",
      line: "Renyah di luar, lembut di dalam, dan wanginya seperti toko roti yang bagus.", // reviews 1, 4
    },
    {
      title: "Enak untuk kerja",
      line: "Ada tamu yang sudah tak terhitung kali datang ke sini untuk kerja.", // reviews 3
    },
    {
      title: "Dekat rumah",
      line: "Tetangga sekitar menyebutnya tempat tersembunyi yang ternyata ada di dekat rumah.", // reviews 1, 4
    },
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  mapTitle: "Peta lokasi Kaneki",
  mapWait: "Peta Google Maps",
  hoursLabel: "Jam buka",
};

export const contact = {
  heading: "Hubungi kami",
  line: {
    text: "Tanya menu atau biji yang sedang ada, lewat WhatsApp atau telepon.",
    mockup: true,
  } as Item,
  footerHours: "Setiap hari 07.30–22.00",
};
