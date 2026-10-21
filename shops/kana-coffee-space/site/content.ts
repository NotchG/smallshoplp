// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief (or is draft copy written for the mockup).
// Every mockup item is listed in ../owner-checklist.md and renders with data-mockup.

export type Item = { text: string; mockup?: boolean };

// Facts from the Google listing (raw.json) unless marked.
export const shop = {
  name: "Kana Coffee & Space",
  shortName: "Kana",
  wordmark: "kana", // the logo's lowercase script, set in Mynerve until the logo file arrives
  caps: "COFFEE & SPACE",
  wordmarkMockup: true, // stand-in script, not the real logo file (owner-checklist)
  type: "Kafe",
  street: "Jl. BBKK, Pekayon",
  district: "Kec. Pasar Rebo, Jakarta Timur 13790",
  address: "Jl. BBKK, Pekayon, Kec. Pasar Rebo, Jakarta Timur 13790",
  hours: {
    days: "Senin–Minggu",
    time: "08.00–22.00",
    label: "Senin–Minggu 08.00–22.00",
    // Same hours every day (listing), so static "today" text is always correct.
    today: "Buka hari ini 08.00–22.00",
    everyDay: "Buka setiap hari",
  },
  // googleMapsUri from the listing, tracking parameter dropped.
  mapsUrl: "https://maps.google.com/?cid=967944324381019269",
  mapEmbed:
    "https://www.google.com/maps?q=KANA+Coffee+%26+Space,+Jl.+BBKK,+Pekayon,+Pasar+Rebo&output=embed",
};

// No phone on the listing. While number is null, every WhatsApp button links to #hubungi.
// Never put a made-up number here.
export const whatsapp = {
  number: null as string | null, // e.g. "6281234567890" once the owner gives it
  mockup: true,
  label: "WhatsApp",
  note: "Nomor WhatsApp menyusul",
};

export function whatsappHref(message?: string) {
  if (!whatsapp.number) return "#hubungi";
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${whatsapp.number}${text}`;
}

export const meta = {
  title: "Kana Coffee & Space · Kafe di Pasar Rebo, Jakarta Timur",
  description:
    "Kafe tenang di Jl. BBKK, Pasar Rebo. Ngopi, bekerja, dan berkumpul. Buka setiap hari 08.00–22.00.",
};

export const banner = "Ini draf situs untuk ditinjau pemilik";

export const hero = {
  line: { text: "Ngopi, bekerja, dan berkumpul di Pasar Rebo.", mockup: true } as Item,
  // Area name: the listing says Pekayon, one review says Kalisari (owner-checklist asks which).
  place: { text: "Jl. BBKK, Pekayon · Pasar Rebo", mockup: true } as Item,
  annotation: { text: "sedikit tersembunyi, ini jalannya", mockup: true } as Item,
  photo: {
    src: "/img/hero-room.webp",
    width: 1080,
    height: 1440,
    alt: "Ruang utama Kana: jendela kaca besar menghadap taman, meja panjang kayu di atas karpet merah, kursi rotan",
  },
};

export const actions = {
  directions: "Petunjuk Arah",
  directionsAria: "Petunjuk Arah (Google Maps, buka di tab baru)",
  menu: "Lihat menu",
};

// Section headings and lead lines are drafts written for the mockup.
export const sectionCopy = {
  menu: {
    heading: { text: "Menu andalan", mockup: true } as Item,
    lead: {
      text: "Empat menu baru dari poster kami, lalu hidangan yang paling sering dipuji tamu.",
      mockup: true,
    } as Item,
  },
  spaces: {
    heading: { text: "Satu tempat, banyak ruang", mockup: true } as Item,
    lead: {
      text: "Bukan cuma tempat ngopi. Ada ruang untuk bekerja, berkumpul, belanja, dan salat.",
      mockup: true,
    } as Item,
  },
  facilities: {
    heading: { text: "Fasilitas", mockup: true } as Item,
    lead: {
      text: "Hal-hal kecil yang sudah kami pikirkan, supaya kamu betah lebih lama.",
      mockup: true,
    } as Item,
  },
  reviews: {
    heading: { text: "Kata mereka", mockup: true } as Item,
    label: "Dirangkum dari ulasan Google",
  },
  visit: {
    heading: { text: "Kunjungi kami", mockup: true } as Item,
    lead: {
      text: "Kana sedikit masuk dari jalan utama. Begini cara menemukannya.",
      mockup: true,
    } as Item,
    stepsTitle: "Cara menemukan kami",
    hoursTitle: "Jam buka",
    mapTitle: "Peta lokasi Kana Coffee & Space",
  },
  closing: {
    heading: { text: "Sampai ketemu di Kana", mockup: true } as Item,
    line: {
      text: "Sedikit tersembunyi, tapi sekali datang, kamu pasti kembali.",
      mockup: true,
    } as Item,
  },
};

// ① to ④ in the poster's order (owner-3, "New Menu"). The numbers match the ones printed on the photos.
// Prices are from the poster (date unknown; owner-checklist asks whether they are current).
export type PosterItem = {
  n: number;
  name: string;
  price: string;
  detail: string;
  group: "Hidangan utama" | "Mocktail";
};

export const posterMenu: PosterItem[] = [
  {
    n: 1,
    name: "Nasi Goreng Teri Cabai Hijau",
    price: "Rp 35rb",
    detail: "Pilihan telur: mata sapi atau dadar",
    group: "Hidangan utama",
  },
  {
    n: 2,
    name: "Soto Betawi",
    price: "Rp 48rb",
    detail: "Disajikan dengan nasi",
    group: "Hidangan utama",
  },
  {
    n: 3,
    name: "Tropical Breeze",
    price: "Rp 30rb",
    detail: "Teh hitam rasa lemon-jeruk, sirup stroberi, selasih",
    group: "Mocktail",
  },
  {
    n: 4,
    name: "Paradise Punch",
    price: "Rp 32rb",
    detail: "Air kelapa rasa lemon-jeruk, sirup stroberi, nata de coco",
    group: "Mocktail",
  },
];

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  mockup?: boolean;
};

// Crops of the owner's own posters (owner-3, owner-2). Baked headlines stay out of frame.
export const menuPhotos: { nasgor: Photo; soto: Photo; range: Photo } = {
  nasgor: {
    src: "/img/menu-nasgor-teri.webp",
    width: 535,
    height: 610,
    alt: "Nasi Goreng Teri Cabai Hijau dengan telur mata sapi, kerupuk, dan acar",
    caption: "① Nasi Goreng Teri Cabai Hijau",
  },
  soto: {
    src: "/img/menu-soto-paradise.webp",
    width: 540,
    height: 708,
    alt: "Soto Betawi dengan nasi dan kerupuk, dan segelas Paradise Punch",
    caption: "② Soto Betawi dan ④ Paradise Punch",
  },
  range: {
    src: "/img/menu-asian-range.webp",
    width: 1241,
    height: 840,
    alt: "Empat piring nasi dan mi dari menu Main Course Asian, dengan kerupuk dan acar",
    // The "Our Signature" plate's name is a guess (owner-checklist).
    caption:
      "Main Course Asian: nasi dan mi, disajikan dengan kerupuk dan acar. Piring bertanda “Our Signature” adalah Nasi Goreng Kana.",
    mockup: true,
  },
};

export type MenuLine = { name: string; note?: string; price?: string; mockup?: boolean };

// Guests' favourites, named in reviews 1, 3 and 5. Notes paraphrase what guests said.
// Prices are example prices ([MOCKUP]) and only on the five the brief gives.
export const favourites: MenuLine[] = [
  { name: "Nasgor Kana", note: "Nasi goreng khas Kana, favorit para tamu" },
  { name: "Cappuccino", note: "Lembut, tidak terlalu asam, tidak terlalu pekat", price: "Rp 30rb", mockup: true },
  { name: "Cheesecake", note: "Ringan, tapi tetap kaya rasa", price: "Rp 35rb", mockup: true },
  { name: "Truffle Fries", price: "Rp 35rb", mockup: true },
  { name: "Truffle Carbonara Rice", price: "Rp 45rb", mockup: true },
  { name: "Cuanki", note: "Hangat, jadi favorit satu meja saat buka puasa", price: "Rp 30rb", mockup: true },
  { name: "Salad Kelapa Muda", note: "Direkomendasikan tamu untuk dipesan" },
];

// [MOCKUP] all of it: likely items, to be confirmed by the owner.
export const alsoOnMenu: { group: string; items: string[]; mockup: boolean }[] = [
  {
    group: "Kopi",
    items: ["Kopi Susu Kana", "Caffe Latte", "Americano", "Manual Brew", "Iced Shaken Espresso"],
    mockup: true,
  },
  { group: "Non-kopi", items: ["Matcha Latte", "Chocolate", "Teh Tarik"], mockup: true },
  {
    group: "Camilan",
    items: ["Chicken Popcorn, Onion Rings & Waffle Fries (platter)"],
    mockup: true,
  },
];

export const menuLabels = {
  favourites: "Favorit tamu",
  favouritesNote: "Disebut dalam ulasan",
  alsoOnMenu: "Juga di menu",
};

// Reviews 1, 3, 4 (and photos for the indoor room).
export type Feature = { name: string; text: string; note?: Item; mockup?: boolean };

export const spaces: Feature[] = [
  {
    name: "Ruang dalam ber-AC",
    text: "Jendela kaca dari lantai ke plafon, meja panjang dari kayu, dan kursi rotan.",
  },
  {
    name: "Area luar lantai 1",
    text: "Teras di lantai bawah, segar dan wangi bunga.",
  },
  {
    name: "Area luar lantai 2",
    text: "Area terbuka di atas. Di sini boleh merokok.",
  },
  {
    name: "Kolam ikan",
    text: "Ada kolam ikan yang bikin suasananya terasa lebih tenang.",
  },
  {
    name: "Motor di tengah kafe",
    text: "Dipajang di tengah ruangan, dan sudah jadi bagian dari wajah Kana.",
  },
  {
    name: "Toko abaya",
    text: "Lihat-lihat dan belanja abaya sambil nongkrong.",
    note: { text: "Toko bisa tutup lebih awal dari kafe.", mockup: true },
  },
];

// No owner photo shows these yet (reviews mention them). Placeholder for the owner.
export const spacesPhotoPlaceholder = {
  label: "Foto menyusul",
  text: "Pintu masuk, kolam ikan, motor yang dipajang, dan mushola.",
  mockup: true,
};

// Reviews 1, 2, 3, 4.
export const facilities: Feature[] = [
  {
    name: "Mushola dengan mukena",
    text: "Bersih, wangi, dan mukena sudah disiapkan. Tempat wudhu ada di luar mushola.",
  },
  {
    name: "Banyak colokan",
    text: "Mudah dapat colokan, jadi nyaman untuk kerja dari sini.",
  },
  {
    name: "Toilet bersih",
    text: "Bersih dan wangi, dengan kantong kecil untuk pembalut di tiap toilet.",
  },
  {
    name: "Parkir dijaga",
    text: "Diatur petugas keamanan. Muat banyak motor dan sekitar 4–6 mobil.",
  },
  {
    name: "Tenang, tanpa musik",
    text: "Tidak ada musik latar, jadi enak untuk ngobrol atau fokus kerja.",
  },
];

export const forEvents = {
  label: "Untuk acara",
  text: {
    text: "Arisan, buka bersama, atau kumpul keluarga? Tanyakan meja untuk rombongan lewat WhatsApp.",
    mockup: true,
  } as Item,
  button: "Tanya lewat WhatsApp",
};

// Paraphrased from real Google reviews. Never quoted, never attributed to a name.
// `sources` is for the owner checklist only and is not rendered.
export const reviewPoints: { title: string; text: string; sources: number[] }[] = [
  {
    title: "Tersembunyi, tapi layak dicari",
    text: "Tidak kelihatan dari jalan utama, tapi kesan pertamanya langsung kena, mulai dari pintu masuknya.",
    sources: [1, 5],
  },
  {
    title: "Nasi gorengnya paling dipuji",
    text: "Nasi Goreng Teri Cabai Hijau dan Nasgor Kana paling sering disebut sebagai favorit, dan rasanya konsisten dari kunjungan ke kunjungan.",
    sources: [1, 3, 4, 5],
  },
  {
    title: "Tenang untuk kerja dan ngobrol",
    text: "Tanpa musik latar dan banyak colokan. Suasananya pas: tidak terlalu ramai, tidak terlalu sepi.",
    sources: [1, 2, 4],
  },
  {
    title: "Bersih sampai ke toilet",
    text: "Ruangannya bersih dan wangi, toiletnya terawat, dan musholanya rapi dengan mukena yang sudah disiapkan.",
    sources: [1, 3],
  },
];

// [MOCKUP] the owner should give the real landmark.
export const visitSteps: Item[] = [
  { text: "Dari jalan utama, belok masuk ke Jl. BBKK.", mockup: true },
  { text: "Ikuti Jl. BBKK sampai kamu melihat Kana.", mockup: true },
];

export const footer = {
  draftNote: "Draf situs untuk ditinjau pemilik. Bagian yang masih contoh akan dikonfirmasi.",
};
