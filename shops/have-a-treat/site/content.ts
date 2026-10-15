// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia. Menu names and the shop's English mottos stay as the shop writes them.

export type Item = { text: string; mockup?: boolean };

export type TreatArt =
  | "tiramisu"
  | "cheesecake"
  | "frenchToast"
  | "cakeOfDay"
  | "cappuccino"
  | "matcha"
  | "hpPotion"
  | "wings";

export type Treat = {
  id: string;
  name: string;
  note: string;
  source: string;
  art: TreatArt;
  /** Indonesian description of the drawing, for screen readers. */
  artLabel: string;
  mockup?: boolean;
};

export type PriceLine = { text: string; mockup: true };

/** x, y: the point on the food the label points at, in % of the photo. side: where the chip sits. */
export type PlateLabel = {
  text: string;
  x: number;
  y: number;
  side: "top" | "bottom" | "left" | "right";
  /** leader length in px (default 16, keep ≤ 24) */
  len?: number;
};

export type Paraphrase = { text: string; source: string };

export const shop = {
  name: "Have A Treat",
  type: "Kafe dessert & brunch",
  address: "Ruko The Boulevard No. 30, Jakarta Garden City, Cakung Timur, Cakung, Jakarta Timur 13910",
  addressShort: "Ruko The Boulevard No. 30, Jakarta Garden City",
  addressFooter: "Ruko The Boulevard No. 30, JGC",
  phone: "0812-8434-6371",
  tel: "tel:+6281284346371",
  whatsapp: "https://wa.me/6281284346371",
  instagram: "https://www.instagram.com/haveatreat_/",
  instagramHandle: "@haveatreat_",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Have+A+Treat&destination_place_id=ChIJj7x9wQGLaS4Rai6OpBSAXQ8",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Have+A+Treat,+Ruko+The+Boulevard+No.+30,+Jakarta+Garden+City&output=embed",
  days: "Setiap hari",
  hours: "10.00–22.00",
  rating: "4,8",
  reviewCount: 183,
};

export const meta = {
  title: "Have A Treat · Kafe dessert & brunch di Jakarta Garden City",
  description:
    "Tiramisu, cheesecake lemon, french toast, cappuccino, dan sarapan di Ruko The Boulevard No. 30, JGC. Buka setiap hari 10.00–22.00.",
  banner: "Draf mockup, belum situs resmi Have A Treat.",
};

export const hero = {
  // Shown lowercase via CSS, like the shop's logo. Two lines: "have a / treat".
  nameLines: ["Have A", "Treat"],
  line: {
    text: "Mampir sebentar buat sepotong kue dan secangkir kopi, eh, jadi sejam.",
    mockup: true,
  } as Item,
  motto: "It's all good", // wire script on their wall (photos)
  board: {
    lines: ["Buka hari ini", shop.hours],
    label: `Buka hari ini, ${shop.hours}`,
  },
  ctaDirections: "Petunjuk Arah",
  ctaInstagram: "Lihat Instagram",
  photo: {
    src: "/photos/owner-1.jpg",
    alt: "Rak kayu melengkung berisi buku, radio, dan papan huruf bertuliskan Better days are coming, dengan ruang makan berlampu hangat di belakangnya.",
  },
};

export const sweets = {
  heading: "Yang manis-manis",
  intro: { text: "Hadiah kecil buat diri sendiri, langsung dari etalase.", mockup: true } as Item,
  price: { text: "Kue mulai Rp 35rb", mockup: true } as PriceLine,
  items: [
    {
      id: "tiramisu",
      name: "Tiramisu",
      note: "Manisnya pas, pahit cokelatnya seimbang dengan krim kocok, disajikan cantik.",
      source: "reviews 1, 2",
      art: "tiramisu",
      artLabel: "Ilustrasi sepotong tiramisu berlapis dengan krim kocok di atasnya",
    },
    {
      id: "cheesecake",
      name: "Cheesecake lemon",
      note: "Lembut, dengan sedikit rasa lemon.",
      source: "review 3",
      art: "cheesecake",
      artLabel: "Ilustrasi sepotong cheesecake dengan irisan lemon",
    },
    {
      id: "french-toast",
      name: "French toast",
      note: "Ada pengunjung yang menyebutnya yang terbaik.",
      source: "review 3",
      art: "frenchToast",
      artLabel: "Ilustrasi dua potong french toast bertabur gula",
    },
    {
      id: "kue-hari-ini",
      name: "Kue hari ini",
      note: "Berganti-ganti di etalase, misalnya kue cokelat atau tart buah.",
      source: "[MOCKUP]",
      art: "cakeOfDay",
      artLabel: "Ilustrasi kue cokelat di bawah tudung kaca, di atas tatakan kayu",
      mockup: true,
    },
  ] as Treat[],
};

export const breakfast = {
  heading: "Sarapan & makan",
  price: { text: "Sarapan & makan mulai Rp 60rb", mockup: true } as PriceLine,
  plate: {
    name: "Omelette breakfast",
    components:
      "Omelet jamur, sosis, bacon, kentang tumis bawang, dan tomat panggang isi bayam & keju.",
    source: "review 1, owner-2",
    photo: {
      src: "/photos/owner-2.jpg",
      alt: "Omelette breakfast dilihat dari atas: omelet jamur, sosis, bacon, kentang tumis bawang, dan tomat panggang isi bayam dan keju.",
    },
    labels: [
      { text: "bacon", x: 31, y: 28, side: "top", len: 24 },
      { text: "tomat panggang\nisi bayam & keju", x: 50, y: 31, side: "top", len: 14 },
      { text: "kentang tumis\nbawang", x: 74, y: 28, side: "top", len: 24 },
      { text: "sosis", x: 18, y: 51, side: "left" },
      { text: "omelet jamur", x: 55, y: 73, side: "bottom" },
    ] as PlateLabel[],
  },
  allDay: { text: "Sarapan tersedia sepanjang hari, mulai jam 10.00.", mockup: true } as Item,
  wings: {
    id: "chicken-wings",
    name: "Chicken wings",
    note: "Kata seorang pengunjung, makanannya sama enaknya dengan minumannya. Yang dia titip: chicken wings.",
    source: "review 5",
    art: "wings",
    artLabel: "Ilustrasi semangkuk chicken wings dilihat dari atas",
  } as Treat,
};

export const drinks = {
  heading: "Kopi & minuman",
  intro: { text: "Teman setia sepotong kue.", mockup: true } as Item,
  price: { text: "Kopi mulai Rp 30rb", mockup: true } as PriceLine,
  items: [
    {
      id: "cappuccino",
      name: "Cappuccino",
      note: "Ada yang menyebutnya cappuccino terbaik di kota.",
      source: "review 5",
      art: "cappuccino",
      artLabel: "Ilustrasi secangkir cappuccino di atas tatakan",
    },
    {
      id: "matcha-latte",
      name: "Matcha latte",
      note: "Tidak terasa artifisial, tidak terlalu manis.",
      source: "review 2",
      art: "matcha",
      artLabel: "Ilustrasi segelas matcha latte dengan lapisan susu",
    },
    {
      id: "hp-potion",
      name: "HP Potion",
      note: "Minuman peach yang segar.",
      source: "review 1",
      art: "hpPotion",
      artLabel: "Ilustrasi gelas tinggi berisi minuman peach bergelembung",
    },
  ] as Treat[],
};

export const room = {
  heading: "Sudut favorit",
  paragraph: {
    text: "Tidak terlalu besar, hangat, dan nyaman. Dinding krem, jendela dan rak kayu melengkung penuh buku, lampu-lampu yang menggantung dari pot tanaman, bantal bergelombang hitam-putih, dan motto kecil di dinding.",
    mockup: true, // wording is ours; the facts come from reviews 1, 3, 4 and the photos
  } as Item,
  forHeading: "Cocok buat",
  forList: [
    "kencan berdua",
    "nongkrong bareng teman",
    "makan bareng keluarga kecil",
    "menyelesaikan sedikit kerjaan",
  ], // reviews 2, 4
};

// Paraphrased from real reviews only. Never invented, never quoted, never attributed to a name.
export const reviews = {
  heading: "Kata mereka",
  rating: `${shop.rating} dari ${shop.reviewCount} ulasan di Google`,
  note: "Ulasan Google, diparafrasekan.",
  items: [
    {
      text: "Tiramisu dengan manis yang pas dan pahit cokelat yang seimbang, ditemani matcha latte yang tidak terasa artifisial.",
      source: "review 2",
    },
    {
      text: "Ada yang menyebutnya kafe paling estetik di Jakarta, dengan cheesecake lembut beraroma lemon dan french toast yang katanya juara.",
      source: "review 3",
    },
    {
      text: "Cappuccino yang disebut terbaik di kota, dan ternyata makanannya sama enaknya dengan minumannya.",
      source: "review 5",
    },
    {
      text: "Tempat yang nyaman dan cantik buat kencan, kumpul bareng teman, atau makan bareng keluarga kecil.",
      source: "review 4",
    },
  ] as Paraphrase[],
};

export const visit = {
  heading: "Kunjungi kami",
  address: shop.address,
  days: shop.days,
  hours: shop.hours,
  cta: "Petunjuk Arah",
  mapTitle: "Peta lokasi Have A Treat",
  mapPlaceholder: "Peta Google Maps",
};

export const contact = {
  heading: "Hubungi kami",
  rows: [
    { id: "phone", label: `Telepon ${shop.phone}`, href: shop.tel },
    { id: "instagram", label: `Instagram ${shop.instagramHandle}`, href: shop.instagram },
    {
      id: "whatsapp",
      label: "WhatsApp: pesan & reservasi meja",
      href: shop.whatsapp,
      mockup: true,
    },
  ] as { id: string; label: string; href: string; mockup?: boolean }[],
  board: {
    lines: ["Better days", "are coming"],
    label: "Better days are coming",
  },
};

export const footer = {
  text: `${shop.name} · ${shop.addressFooter} · Situs ini masih draf.`,
};
