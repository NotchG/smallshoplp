// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief (or is section copy written for the
// mockup). Every one is listed in ../owner-checklist.md.
// Sources: raw.json (listing, hours, reviews), photos/ (owner photos), brief.md.

export type Mockable = { text: string; mockup?: boolean };

export const shop = {
  name: "Waltie’s Rooftop Café", // listing
  short: "Waltie’s",
  sub: "Rooftop Café",
  type: "Kafe rooftop", // listing: cafe, coffee shop
  address: "Arion Mall, Jl. Paus No.1, Rawamangun, Pulo Gadung, Jakarta Timur 13220", // listing + owner photos
  addressShort: "Arion Mall, Rawamangun", // listing
  phone: "0813-1473-5996", // listing
  tel: "tel:+6281314735996",
  whatsapp: { href: "https://wa.me/6281314735996", mockup: true }, // [MOCKUP] the number takes WhatsApp
  maps: "https://maps.google.com/?cid=17211920335788201948", // raw.json googleMapsUri
  mapEmbed:
    "https://www.google.com/maps?q=Waltie%27s+Rooftop+Caf%C3%A9,+Arion+Mall,+Rawamangun&output=embed",
  instagram: { handle: "@walties_rooftop", href: "https://instagram.com/walties_rooftop" }, // owner photos
  rating: { value: "4,6", count: 432, source: "Google" }, // listing
};

export const banner =
  "Draf mockup Waltie’s Rooftop Café, belum resmi. Detail bertanda masih contoh sampai dikonfirmasi pemilik.";

export const meta = {
  title: "Waltie’s Rooftop Café · Rooftop santai di Rawamangun",
  // Facts only: listing type, address, hours, review 4 (Indonesian and Western menu, coffee).
  description:
    "Kafe rooftop di Arion Mall, Rawamangun, Jakarta Timur. Buka setiap hari 09.00–22.30. Menu Indonesia dan barat, kopi, teras terbuka dan ruang ber-AC.",
};

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  whatsappLong: "Chat di WhatsApp",
};

export const hero = {
  tagline: { text: "Rooftop santai di Rawamangun", mockup: true } as Mockable,
  hoursToday: "Buka hari ini 09.00–22.30", // hours: same every day
  image: {
    src: "/photos/owner-3.jpg",
    width: 1170,
    height: 530,
    alt: "Teras rooftop Waltie’s di malam hari, lampu gantung di pohon dan gedung kota di belakang",
  },
};

export type Visual = "photo" | "soto" | "platter" | "kopi" | "cookies";

export type Dish = {
  name: string;
  nameMockup?: boolean;
  desc: string;
  descMockup?: boolean;
  price: string;
  priceMockup: true;
  visual: Visual;
};

export type MenuItem = { name: string; price?: string; mockup: true };

export const menu = {
  title: "Menu andalan",
  // Paraphrase of review 4 (Indonesian favourites to Western classics).
  intro: { text: "Dari Soto Betawi sampai spaghetti, satu meja bisa pesan selera masing-masing.", mockup: true } as Mockable,
  bolvano: {
    name: "Bolvano", // owner-2.jpg
    desc: "Pisang, yogurt, saus buah naga dan stroberi dalam mangkuk hitam.", // owner-2.jpg
    price: "Rp 30rb",
    priceMockup: true,
    visual: "photo",
    image: {
      src: "/photos/owner-2.jpg",
      width: 1080,
      height: 1350,
      alt: "Bolvano: pisang, yogurt, saus buah naga dan stroberi dalam mangkuk hitam",
    },
  },
  featured: [
    {
      name: "Soto Betawi", // review 1
      desc: "Kuah santan gurih, daging sapi, tomat dan jeruk limau.",
      descMockup: true,
      price: "Rp 35rb",
      priceMockup: true,
      visual: "soto",
    },
    {
      name: "Platter Waltie’s",
      nameMockup: true,
      desc: "Kentang goreng, pangsit goreng, fish cake iris dan saus sambal manis.", // customer photo (reference)
      price: "Rp 35rb",
      priceMockup: true,
      visual: "platter",
    },
    {
      name: "Es Kopi Susu Gula Aren",
      nameMockup: true,
      desc: "Espresso, susu segar dan gula aren di atas es.",
      descMockup: true,
      price: "Rp 24rb",
      priceMockup: true,
      visual: "kopi",
    },
    {
      name: "Cookies & Cream Blend",
      nameMockup: true,
      desc: "Ice blend dengan satu scoop es krim, remahan cookies dan wafer stick.", // customer photo (reference)
      price: "Rp 28rb",
      priceMockup: true,
      visual: "cookies",
    },
  ] as Dish[],
  // [MOCKUP] category lists and the three prices the brief gives for them.
  categories: [
    {
      label: "Indonesia",
      items: [
        { name: "Nasi Goreng Waltie’s", price: "Rp 32rb", mockup: true },
        { name: "Mie Goreng Jawa", mockup: true },
        { name: "Ayam Penyet", mockup: true },
        { name: "Nasi Ayam Sambal Matah", mockup: true },
      ],
    },
    {
      label: "Barat",
      items: [
        { name: "Spaghetti Carbonara", price: "Rp 38rb", mockup: true },
        { name: "Spaghetti Aglio Olio", mockup: true },
        { name: "Chicken Steak", price: "Rp 45rb", mockup: true },
        { name: "Fish & Chips", mockup: true },
      ],
    },
    {
      label: "Camilan",
      items: [
        { name: "Kentang Goreng", mockup: true },
        { name: "Pangsit Goreng", mockup: true },
        { name: "Pisang Goreng Keju", mockup: true },
      ],
    },
    {
      label: "Kopi",
      items: [
        { name: "Caramel Latte", mockup: true },
        { name: "Cappuccino", mockup: true },
        { name: "Americano", mockup: true },
      ],
    },
    {
      label: "Non-kopi",
      items: [
        { name: "Matcha Latte", mockup: true },
        { name: "Red Velvet", mockup: true },
        { name: "Lychee Tea", mockup: true },
      ],
    },
  ] as { label: string; items: MenuItem[] }[],
  note: {
    text: "Nama menu dan harga masih contoh. Harga lengkap menyusul dari menu asli Waltie’s.",
    mockup: true,
  } as Mockable,
};

export const rooms = {
  title: "Dua suasana",
  lead: { text: "Naik ke atas, duduk santai, biar lampu-lampu kota yang menemani.", mockup: true } as Mockable,
  items: [
    {
      title: "Teras rooftop",
      text: "Teras terbuka dengan meja bermotif tegel, kursi kayu, deretan tanaman dan lampu gantung.", // owner-1, owner-3
      image: {
        src: "/photos/owner-1.jpg",
        width: 1080,
        height: 1350,
        alt: "Meja bermotif tegel dan kursi kayu di teras rooftop, dikelilingi tanaman dan lampu gantung",
      },
      chips: [
        { text: "Udara terbuka" },
        { text: "Paling cantik setelah gelap", mockup: true },
      ] as Mockable[],
    },
    {
      title: "Ruang dalam ber-AC",
      text: "Kursi empuk, meja kayu, lampu hangat di dinding dan poster warna-warni.", // owner-4
      image: {
        src: "/photos/owner-4.jpg",
        width: 1080,
        height: 1080,
        alt: "Ruang dalam ber-AC dengan kursi abu-abu, meja kayu dan tanda Free Wifi Area",
      },
      chips: [{ text: "Ber-AC" }, { text: "Wi-Fi gratis" }] as Mockable[], // owner-4: AC unit, "Free Wifi Area" sign
    },
  ],
};

export const stay = {
  title: "Betah berjam-jam",
  lead: { text: "Mau nongkrong sejam atau sampai tutup, tempatnya selalu ada.", mockup: true } as Mockable,
  points: [
    { title: "Wi-Fi gratis", text: "Di ruang dalam, pas buat buka laptop sambil ngopi." }, // owner-4
    { title: "Teras atau ber-AC", text: "Pilih suasanamu: angin malam di teras, atau sejuk di dalam." }, // photos
    { title: "Buka sampai 22.30", text: "Setiap hari, Senin sampai Minggu." }, // hours
  ],
};

// Paraphrased themes from the Google reviews. No quotes, no names.
export const themes = {
  title: "Kata mereka",
  source: `Rangkuman dari ulasan Google · ${shop.rating.value} dari ${shop.rating.count} ulasan`,
  items: [
    {
      title: "Nyaman buat nongkrong lama",
      text: "Datang bareng teman atau sendirian, banyak yang betah duduk berjam-jam.", // reviews 1, 2, 4
    },
    {
      title: "Stafnya ramah",
      text: "Pelayanannya hangat dan sigap, dan stafnya senang kasih rekomendasi menu.", // reviews 1, 4, 5
    },
    {
      title: "Makanannya enak",
      text: "Dari Soto Betawi sampai menu barat sering dipuji, kopinya juga.", // reviews 1, 2, 4, 5
    },
    {
      title: "Harganya bersahabat",
      text: "Ada yang kaget karena tagihannya lebih murah dari dugaan.", // review 1
    },
  ],
};

export const visit = {
  title: "Kunjungi kami",
  addressLabel: "Alamat",
  access: { text: "Info lantai dan cara naik ke rooftop menyusul.", mockup: true } as Mockable,
  hoursLabel: "Jam buka",
  hoursNote: "buka setiap hari",
  // raw.json regularOpeningHours: 09:00–22:30 every day
  hours: [
    { day: "Senin", time: "09.00–22.30" },
    { day: "Selasa", time: "09.00–22.30" },
    { day: "Rabu", time: "09.00–22.30" },
    { day: "Kamis", time: "09.00–22.30" },
    { day: "Jumat", time: "09.00–22.30" },
    { day: "Sabtu", time: "09.00–22.30" },
    { day: "Minggu", time: "09.00–22.30" },
  ],
  mapTitle: "Peta lokasi Waltie’s Rooftop Café",
  mapFallback: "Peta Google Maps",
};

export const contact = {
  title: "Hubungi kami",
  lead: {
    text: "Mau pesan tempat buat rombongan atau ulang tahun? Chat kami di WhatsApp.",
    mockup: true,
  } as Mockable,
  phoneLabel: "Telepon",
  instagramLabel: "Instagram",
};

export const footer = {
  note: "Draf mockup. Menu, harga dan beberapa kalimat masih contoh.",
};
