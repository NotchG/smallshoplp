// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Language: Bahasa Indonesia, register "Anda" (mockup, see checklist).

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Marhaba!",
  fullName: "Marhaba! Coffee & Eatery",
  descriptor: "Coffee & Eatery",
  area: "Pondok Bambu, Duren Sawit",
  // listing
  address: "Jl. Pahlawan Revolusi No.55, Pondok Bambu, Duren Sawit, Jakarta Timur 13430",
  addressShort: "Jl. Pahlawan Revolusi No.55, Pondok Bambu, Jakarta Timur",
  // reviews 2
  landmark: "Di sebelah restoran mi.",
  // listing
  phone: "0813-9938-5352",
  phoneHref: "tel:+6281399385352",
  // mockup: the number is a mobile number; WhatsApp unconfirmed
  whatsapp: { href: "https://wa.me/6281399385352", mockup: true },
  // raw.json googleMapsUri
  mapsUrl:
    "https://maps.google.com/?cid=5061035478688835622&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Marhaba!%20Coffee%20and%20Eatery%2C%20Jl.%20Pahlawan%20Revolusi%20No.55%2C%20Pondok%20Bambu&output=embed",
  // listing
  rating: { value: "4,6", count: 569 },
  // reviews 2, 5 (never "parkir luas")
  parking: "Tersedia parkir untuk mobil dan motor.",
};

export const meta = {
  title: "Marhaba! Coffee & Eatery · Pondok Bambu, Jakarta Timur",
  description:
    "Kafe dan restoran keluarga dengan taman, mushala, dan ruang ber-AC di Jl. Pahlawan Revolusi No.55, Pondok Bambu. Buka setiap hari mulai 08.00.",
};

export const banner =
  "Draf mockup untuk Marhaba! Coffee & Eatery. Beberapa detail masih contoh sampai Anda konfirmasi.";

export const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#lokasi", label: "Lokasi" },
];

// raw.json regularOpeningHours. weekdays: 0 = Minggu ... 6 = Sabtu.
export type HoursRow = { days: string; open: string; close: string; weekdays: number[] };
export const hours = {
  rows: [
    { days: "Senin–Kamis", open: "08.00", close: "21.00", weekdays: [1, 2, 3, 4] },
    { days: "Jumat–Minggu", open: "08.00", close: "23.00", weekdays: [5, 6, 0] },
  ] as HoursRow[],
  everyDay: "Buka setiap hari",
  fallbackToday: "Buka setiap hari, mulai 08.00",
  todayPrefix: "Buka hari ini",
  todayTag: "hari ini",
};

export const hero = {
  // photos: the window lettering
  lettering: "MARHABA!",
  tagline: "duduk enak, makan enak",
  // listing
  descriptor: "Coffee & Eatery · Pondok Bambu, Duren Sawit",
  line: { text: "Kopi, makanan rumahan, dan taman yang teduh untuk keluarga.", mockup: true } as Item,
  // hours, set on the glass door like a café decal
  doorDecal: ["BUKA", "SETIAP", "HARI"],
  sceneLabel:
    "Ilustrasi: ruang makan Marhaba! di balik kaca, dengan lampu lampion kertas, meja kayu, dan tanaman. Bukan foto.",
};

export const cta = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: `Telepon ${shop.phone}`,
};

export type DishId = "mie" | "salad" | "ummali" | "kurma" | "cappuccino";
export type Dish = { id: DishId; name: Item; desc: Item; price: Item; label: string };

export const menu = {
  heading: "Menu andalan",
  intro: { text: "Pilihan yang sering disebut tamu dalam ulasan.", mockup: true } as Item,
  priceNote: { text: "Harga contoh, menunggu konfirmasi.", mockup: true } as Item,
  caption: "Ilustrasi, bukan foto menu.",
  dishes: [
    {
      id: "mie",
      name: { text: "Mie Kari Ayam", mockup: true }, // dish from photos; name unconfirmed
      desc: { text: "Mi kuah kari dengan ayam, tahu goreng, telur rebus, bawang goreng, dan kerupuk." },
      price: { text: "Rp 38rb", mockup: true },
      label: "Ilustrasi: semangkuk mi kari dengan ayam, tahu goreng, telur rebus, dan kerupuk di mangkuk hitam",
    },
    {
      id: "salad",
      name: { text: "Caesar Salad" }, // reviews 1, 4
      desc: { text: "Salad yang sering dipuji tamu, cocok ditemani kopi." },
      price: { text: "Rp 40rb", mockup: true },
      label: "Ilustrasi: Caesar Salad dengan selada romaine, crouton, dan serutan keju di mangkuk putih",
    },
    {
      id: "ummali",
      name: { text: "Umm Ali" }, // reviews 4
      desc: { text: "Pencuci mulut favorit tamu." },
      price: { text: "Rp 35rb", mockup: true },
      label: "Ilustrasi: Umm Ali di pinggan putih, permukaan keemasan dengan pistachio, almond, dan kismis",
    },
    {
      id: "kurma",
      name: { text: "Kopi Susu Kurma" }, // reviews 1
      desc: { text: "Espresso dan susu, dimaniskan kurma. Cenderung manis." },
      price: { text: "Rp 30rb", mockup: true },
      label: "Ilustrasi: segelas kopi susu kurma dilihat dari atas, dengan dua butir kurma di sampingnya",
    },
    {
      id: "cappuccino",
      name: { text: "Cappuccino" }, // reviews 2
      desc: { text: "Espresso dengan busa susu yang lembut.", mockup: true },
      price: { text: "Rp 28rb", mockup: true },
      label: "Ilustrasi: secangkir cappuccino dengan busa susu di atas tatakan putih",
    },
  ] as Dish[],
  extrasHeading: "Juga ada (contoh)",
  extras: {
    food: {
      label: "Makanan",
      items: [
        { text: "Nasi Kebuli Kambing", mockup: true },
        { text: "Nasi Goreng Kambing", mockup: true },
        { text: "Roti Maryam dengan kuah kari", mockup: true },
        { text: "Chicken Wings", mockup: true },
        { text: "French Fries", mockup: true },
      ] as Item[],
    },
    drinks: {
      label: "Minuman",
      items: [
        { text: "Es Kopi Susu Gula Aren", mockup: true },
        { text: "Americano", mockup: true },
        { text: "Teh Tarik", mockup: true },
        { text: "Lemon Tea", mockup: true },
        { text: "Jus Alpukat", mockup: true },
      ] as Item[],
    },
  },
};

export type FacilityIcon = "mushala" | "ac" | "garden" | "kids" | "parking";
export const facilities = {
  heading: "Fasilitas",
  intro: { text: "Datang sekeluarga? Ini yang ada di sini.", mockup: true } as Item,
  rows: [
    // reviews 1
    { icon: "mushala", name: { text: "Mushala" }, detail: { text: "Tempat wudhu untuk perempuan terpisah." } },
    // reviews 2; photos
    { icon: "ac", name: { text: "Ruang ber-AC" }, detail: { text: "Ruang kaca di dalam, cukup luas." } },
    // reviews 2; photos
    {
      icon: "garden",
      name: { text: "Taman semi-outdoor" },
      detail: { text: "Duduk di rumput, di bawah pohon dan lampu taman." },
    },
    // reviews 2 (described as new in early 2025; confirm still there)
    { icon: "kids", name: { text: "Area bermain anak" }, detail: { text: "Sudut bermain untuk si kecil." } },
    // reviews 2, 5
    { icon: "parking", name: { text: "Parkir" }, detail: { text: shop.parking } },
  ] as { icon: FacilityIcon; name: Item; detail: Item }[],
};

export const ambience = {
  heading: "Suasana",
  // facts from reviews 1, 2; photos. Copy written for the mockup.
  statement: {
    text: "Sengaja tanpa musik latar. Pilih duduk di taman, di bawah pohon besar dan lampu-lampu dekat air mancur, atau di ruang kaca ber-AC.",
    mockup: true,
  } as Item,
  caption: { text: "Ilustrasi, bukan foto. Foto asli menyusul.", mockup: true } as Item,
  sceneLabel:
    "Ilustrasi: taman Marhaba! dengan rumput, pohon besar, air mancur di kolam persegi, meja-meja hitam, payung, dan paviliun kaca berwarna hijau zaitun. Bukan foto.",
};

// Paraphrased from real reviews only. Never invented, never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  rating: `${shop.rating.value} dari ${shop.rating.count} ulasan di Google`,
  note: "Dirangkum dari ulasan di Google, bukan kutipan langsung.",
  themes: [
    { title: "Suasananya nyaman", text: "Tamu menyebut tempatnya nyaman dan teduh." }, // reviews 1, 2, 3
    { title: "Pelayanannya ramah", text: "Staf ramah, pesanan tidak lama datang." }, // reviews 1, 5
    { title: "Salad, kopi, dan Umm Ali", text: "Yang disebut tamu sebagai favorit." }, // reviews 1, 4
    { title: "Nyaman untuk keluarga", text: "Ada mushala, ruang AC, dan area bermain anak." }, // reviews 1, 2
    {
      title: "Terus berbenah",
      text: "Tamu langganan melihat menunya makin baik, dan alat makan sekali pakai sudah tidak dipakai.",
    }, // reviews 3
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  mapTitle: "Peta lokasi Marhaba!",
  mapFallback: "Buka peta di Google Maps",
};

export const contact = {
  heading: "Hubungi kami",
  reservation: {
    text: "Mau datang rombongan atau untuk acara keluarga? Tanyakan lewat WhatsApp.",
    mockup: true,
  } as Item,
  lateNote: "Jumat–Minggu buka sampai 23.00.", // hours
};

export const footer = {
  line: `${shop.fullName} · ${shop.addressShort}`,
  draft: "Situs ini masih draf untuk ditinjau pemilik.",
};
