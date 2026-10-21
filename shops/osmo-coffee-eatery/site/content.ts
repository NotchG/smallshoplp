// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// One item can mix fact and mockup fields, so each field carries its own flag.

export type Item = { text: string; mockup?: boolean };
export type Dish = {
  name: Item;
  desc?: Item;
  price?: Item;
  img?: { src: string; alt: string };
};
export type Theme = { title: string; text: string };

const DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export const shop = {
  name: "OSMO Coffee & Eatery",
  shortName: "OSMO",
  type: "Kafe",
  // listing
  address: "Jl. Mpok Nori No.10 Blok F, Bambu Apus, Cipayung, Jakarta Timur 13890",
  addressShort: "Jl. Mpok Nori No.10, Bambu Apus, Cipayung",
  area: "Bambu Apus, Cipayung, Jakarta Timur",
  phone: "0811-1011-3993",
  tel: "+6281110113993",
  // [MOCKUP] that this mobile number takes WhatsApp
  waUrl: { text: "https://wa.me/6281110113993", mockup: true } as Item,
  mapsUrl: "https://maps.google.com/?cid=14689524655505368407",
  mapEmbedUrl:
    "https://www.google.com/maps?q=OSMO+Coffee+%26+Eatery,+Jl.+Mpok+Nori+No.10,+Bambu+Apus,+Cipayung&output=embed",
  // listing hours: every day 08:00–23:00
  hours: DAYS.map((day) => ({ day, open: "08.00", close: "23.00" })),
  openMin: 480,
  closeMin: 1380,
  openLabel: "08.00",
  closeLabel: "23.00",
  rating: "4,9",
  reviewCount: "3.033",
};

export const meta = {
  title: "OSMO Coffee & Eatery · Kafe di Bambu Apus, Cipayung",
  description:
    "Kopi dari jam 8 pagi, rice bowl, pasta, dan tempat kerja yang nyaman. Buka setiap hari 08.00–23.00 di Jl. Mpok Nori, Bambu Apus, Jakarta Timur.",
};

export const banner = {
  text: "Ini contoh tampilan, belum situs resmi OSMO Coffee & Eatery. Beberapa detail masih perlu dikonfirmasi.",
};

export const hero = {
  wordmark: "OSMO",
  sub: "Coffee & Eatery",
  pitch: { text: "Kopi, makan, kerja, dan nongkrong di Bambu Apus.", mockup: true } as Item,
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  img: {
    src: "/img/osmo-meja-1400.jpg",
    srcSet: "/img/osmo-meja-800.jpg 800w, /img/osmo-meja-1400.jpg 1400w",
    width: 1400,
    height: 1488,
    alt: "Tiga rice bowl OSMO di atas meja plester putih, dilihat dari atas: satu di nampan kayu beralas kertas bercetak logo OSMO, satu dipegang tangan, dengan tumbler hitam OSMO dan sulur daun di sampingnya",
  },
  day: {
    label: "Buka hari ini",
    // the bean marker is a stand-in for OSMO's logo
    beanMockup: true,
    nowPrefix: "Sekarang",
    open: "buka sampai 23.00",
    before: "buka jam 08.00",
    after: "sudah tutup, buka lagi besok 08.00",
  },
};

export const menu = {
  title: "Menu andalan",
  lead: "Rice bowl, pasta, French toast, dan camilan buat dibagi ramai-ramai.",
  bowls: [
    {
      name: { text: "Rice Bowl Chicken Salted Egg", mockup: true },
      price: { text: "Rp 45rb", mockup: true },
      desc: { text: "Ayam goreng dengan saus kuning creamy, sayur krispi, dan nasi." },
      img: {
        src: "/img/bowl-chicken.jpg",
        alt: "Rice bowl ayam goreng dengan saus kuning creamy dan sayur krispi, dilihat dari atas",
      },
    },
    {
      name: { text: "Rice Bowl Cumi Sambal", mockup: true },
      price: { text: "Rp 45rb", mockup: true },
      desc: { text: "Cumi bumbu sambal, telur dadar iris, sayur krispi.", mockup: true },
      img: {
        src: "/img/bowl-cumi.jpg",
        alt: "Rice bowl cumi berbumbu sambal dengan telur dadar iris dan sayur krispi, dilihat dari atas",
      },
    },
    {
      name: { text: "Rice Bowl Beef Sambal", mockup: true },
      price: { text: "Rp 45rb", mockup: true },
      desc: { text: "Daging bumbu sambal, telur dadar iris, sayur krispi.", mockup: true },
      img: {
        src: "/img/bowl-beef.jpg",
        alt: "Rice bowl daging berbumbu sambal dengan telur dadar iris dan sayur krispi, dilihat dari atas",
      },
    },
  ] as Dish[],
  moreTitle: "Juga dari dapur",
  more: [
    {
      name: { text: "Creamy Mushroom Pasta" },
      price: { text: "Rp 55rb", mockup: true },
      desc: { text: "Pasta jamur yang creamy." },
    },
    {
      name: { text: "French Toast" },
      price: { text: "Rp 42rb", mockup: true },
      desc: { text: "Ada dua: manis, atau gurih dengan daging sapi." },
    },
    {
      name: { text: "Toast es krim", mockup: true },
      desc: { text: "Roti tebal panggang dengan es krim, crumble, dan saus karamel." },
    },
    {
      name: { text: "Wings & fries" },
      price: { text: "Rp 48rb", mockup: true },
      desc: { text: "Dengan jamur enoki goreng krispi." },
    },
  ] as Dish[],
};

// Paraphrased from real Google reviews only. Never quoted, never attributed to a name.
export const praise = {
  title: "Kata mereka",
  rating: `${shop.rating} di Google, dari ${shop.reviewCount} ulasan`,
  lead: "Kata tamu, kafe senyaman ini jarang ada di Jakarta Timur.",
  themes: [
    { title: "Rasanya pas", text: "Bumbunya pas, tidak berlebihan, dan semua yang dicoba enak." },
    {
      title: "Cepat dan perhatian",
      text: "Makanan cepat datang. Staf mau menyesuaikan pesanan, menawarkan memotret, dan sigap merapikan meja.",
    },
    { title: "Enak buat kerja", text: "Luas, bersih, nyaman, ada Wi-Fi dan banyak colokan." },
    {
      title: "Kopi pagi dari jam 8",
      text: "Kopinya disebut salah satu yang terbaik di sekitar sini, pas dibawa sebelum ke kantor.",
    },
  ] as Theme[],
  note: "Dirangkum dari ulasan Google.",
};

export const bar = {
  title: "Dari bar kopi",
  lead: "Kopi pagi dari jam 8, bisa dibawa ke kantor.",
  coffeeTitle: "Kopi",
  coffee: [
    { name: { text: "Kopi Susu Aren", mockup: true }, price: { text: "Rp 28rb", mockup: true } },
    { name: { text: "Americano", mockup: true }, price: { text: "Rp 25rb", mockup: true } },
    { name: { text: "Cappuccino", mockup: true } },
    { name: { text: "Caffè Latte", mockup: true } },
    { name: { text: "Manual Brew (V60)", mockup: true } },
  ] as Dish[],
  nonCoffeeTitle: "Non-kopi",
  nonCoffee: [
    { name: { text: "Matcha Latte", mockup: true }, price: { text: "Rp 32rb", mockup: true } },
    { name: { text: "Lychee Tea", mockup: true } },
    { name: { text: "Chocolate", mockup: true } },
  ] as Dish[],
  breakfast: { text: "Sarapan dari jam 8: toast, French toast, dan kopi.", mockup: true } as Item,
  pastry: { text: "Di etalase: croissant dan pastry ala Danish." } as Item,
  canned: {
    title: "Canned series",
    desc: "Aren Latte dalam kaleng, buat dibawa pulang.",
    price: { text: "Rp 30rb", mockup: true } as Item,
    canLabel: "Aren Latte",
    // the can drawing is a stand-in until the owner sends a product photo
    canMockup: true,
  },
};

export const space = {
  title: "Kerja, nongkrong, nobar",
  lead: "Dua lantai: bar kopi di bawah, ruang beratap tinggi dan area outdoor di atas.",
  blocks: [
    { title: "Kerja", text: "Wi-Fi, banyak colokan, ruang yang luas dan bersih." },
    { title: "Nongkrong", text: "Area outdoor di lantai atas, paling enak sore hari." },
    { title: "Nobar", text: "Nonton bareng pertandingan besar, seperti saat Piala Dunia." },
  ] as Theme[],
  facilitiesLabel: "Fasilitas",
  facilities: [
    "Parkir depan & belakang",
    "Musholla",
    "Toilet bersih di lantai atas",
    "Wi-Fi",
    "Banyak colokan",
  ],
};

export const visit = {
  title: "Kunjungi kami",
  toll: { text: "Dekat gerbang tol, gampang mampir sebelum ke kantor." } as Item,
  route: { text: "Rute dari gerbang tol: menunggu info dari OSMO.", mockup: true } as Item,
  hoursCaption: "Jam buka",
  hoursNote: "Buka setiap hari",
  directions: "Petunjuk Arah",
  mapTitle: "Peta lokasi OSMO Coffee & Eatery",
  mapFallback: "Peta Google Maps",
};

export const contact = {
  title: "Hubungi kami",
  invite: {
    text: "Datang rombongan atau mau nobar? Kabari kami lewat WhatsApp.",
    mockup: true,
  } as Item,
  whatsappLabel: "WhatsApp",
  phoneLabel: "Telepon",
  instagramLabel: "Instagram",
  instagram: { text: "Menunggu akun dari OSMO", mockup: true } as Item,
};

export const footer = {
  line: `${shop.name} · ${shop.area}`,
  draft: "Ini contoh tampilan, belum situs resmi OSMO Coffee & Eatery.",
};
