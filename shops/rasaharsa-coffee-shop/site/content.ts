// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: listing / hours / reviews N / photos (see shops/rasaharsa-coffee-shop/brief.md).

export type Flagged = { text: string; mockup?: boolean };
export type Action = { label: string; href: string; mockup?: boolean };
export type Serve = "Panas" | "Es";

// Every WhatsApp link points at the listing's mobile number. [MOCKUP]: not confirmed it takes WhatsApp.
const wa = "https://wa.me/628118651002";

export const meta = {
  title: "Rasaharsa · coffee & eatery di Pulo Gadung, Jakarta Timur",
  description:
    "Kedai kopi dan makan di Jl. Sunan Sedayu, Rawamangun. Buka setiap hari 08.00–22.30, Jumat dan Sabtu sampai 23.30.",
};

export const banner = "Ini draf tampilan untuk Rasaharsa";

export const shop = {
  name: "Rasaharsa", // sign reads "RASAHARSA coffee & eatery" (photos)
  tagline: "coffee & eatery", // photos
  logoMockup: true, // the two-bean mark is our redraw of the sign, not the shop's file
  line: { text: "Kopi yang diceritakan, makanan yang bikin betah.", mockup: true } as Flagged,
  address: "Jl. Sunan Sedayu No.15, Jati, Pulo Gadung, Jakarta Timur 13220", // listing
  area: "Di sisi Rawamangun", // reviews 4
  addressShort: "Jl. Sunan Sedayu No.15, Pulo Gadung", // listing
  phone: "0811-8651-002", // listing
  telHref: "tel:+628118651002",
  waHref: { href: wa, mockup: true },
  mapsHref: "https://maps.google.com/?cid=7247874278361093807", // listing, tracking param dropped
  mapEmbedSrc:
    "https://www.google.com/maps?q=Rasaharsa%20Coffee%20Shop%2C%20Jl.%20Sunan%20Sedayu%20No.15%2C%20Pulo%20Gadung%2C%20Jakarta%20Timur&output=embed",
  rating: { value: "4,7", count: 356 }, // listing
};

// Opening hours (hours). JS day index: 0 = Minggu … 6 = Sabtu. 24h "HH:MM", Asia/Jakarta.
export type Period = { open: string; close: string };
export const hours = {
  periods: {
    0: { open: "08:00", close: "22:30" },
    1: { open: "08:00", close: "22:30" },
    2: { open: "08:00", close: "22:30" },
    3: { open: "08:00", close: "22:30" },
    4: { open: "08:00", close: "22:30" },
    5: { open: "08:00", close: "23:30" },
    6: { open: "08:00", close: "23:30" },
  } as Record<number, Period>,
  rows: [
    { label: "Senin–Kamis", days: [1, 2, 3, 4], time: "08.00–22.30" },
    { label: "Jumat–Sabtu", days: [5, 6], time: "08.00–23.30" },
    { label: "Minggu", days: [0], time: "08.00–22.30" },
  ],
  // Shown before the page knows the time (server render, JS off).
  fallback: { state: "Buka setiap hari 08.00–22.30", detail: "Jumat & Sabtu sampai 23.30" },
  todayLabel: "Hari ini",
};

export const actions = {
  directions: { label: "Petunjuk Arah", href: shop.mapsHref } as Action,
  whatsapp: { label: "WhatsApp", href: wa, mockup: true } as Action,
  call: { label: `Telepon ${shop.phone}`, href: shop.telHref } as Action,
};

export const kopiKami = {
  heading: "Kopi kami",
  lead: { text: "Duduk dulu, kopinya biar kami yang jelaskan.", mockup: true } as Flagged,
  body: [
    "Barista kami senang bercerita tentang karakter setiap kopi yang kamu pesan.", // reviews 1
    "Di rak bar ada sifon, moka pot, French press, dan teko tembaga ala Turki.", // photos
  ],
  aside: {
    label: "Seduh manual hari ini",
    text: "Single Origin dengan V60 atau sifon. Barista akan menceritakan bijinya.",
    mockup: true,
  },
  photo: {
    src: "/img/latte.jpg",
    src720: "/img/latte-720.jpg",
    width: 1100,
    height: 880,
    alt: "Secangkir latte dengan latte art di cangkir hitam, di atas meja kayu",
    caption: "Latte art di cangkir hitam kami.", // owner-2.jpg, cropped to the cup
  },
  // Names and hot/iced as on the menu board (photos). Prices are examples.
  drinks: [
    {
      id: "kopi-rasaharsa",
      name: "Kopi Rasaharsa",
      note: "Kopi khas rumah, disajikan dingin.",
      serve: ["Es"] as Serve[],
      price: { text: "Rp 28rb", mockup: true } as Flagged,
      label: "Ilustrasi Kopi Rasaharsa: kopi susu dingin dengan es dalam gelas plastik bening bertempel logo",
    },
    {
      id: "kopi-susu-gula-aren",
      name: "Kopi Susu Gula Aren",
      note: "Kopi susu dengan manis gula aren.",
      serve: ["Panas", "Es"] as Serve[],
      price: { text: "Rp 25rb", mockup: true } as Flagged,
      label: "Ilustrasi Kopi Susu Gula Aren: gelas tinggi berisi gula aren, susu, espresso, dan es",
    },
    {
      id: "vietnam-drip",
      name: "Vietnam Drip",
      note: "Diseduh tetes demi tetes.",
      serve: ["Panas"] as Serve[],
      label: "Ilustrasi Vietnam Drip: saringan phin di atas gelas pendek berisi susu kental dan kopi",
    },
    {
      id: "affogato",
      name: "Affogato",
      note: "Es krim disiram espresso.",
      serve: [] as Serve[],
      label: "Ilustrasi Affogato: satu sendok es krim di gelas kecil, disiram espresso",
    },
  ],
};

export type BoardItem = { name: string; serve?: Serve[]; price?: Flagged };
export type BoardGroup = { title?: string; items: BoardItem[]; note?: string };
export type Board = { title: string; groups: BoardGroup[] };

// The bar's menu boards, spelled as the shop spells them (photos). Only the example prices.
export const menu = {
  heading: "Menu andalan",
  sub: "Dari papan menu di atas bar kami.",
  boards: [
    {
      title: "Kopi",
      groups: [
        {
          items: [
            { name: "Kopi Rasaharsa", serve: ["Es"], price: { text: "Rp 28rb", mockup: true } },
            { name: "Kopi Susu Gula Aren", serve: ["Panas", "Es"], price: { text: "Rp 25rb", mockup: true } },
            { name: "Vietnam Drip", serve: ["Panas"] },
            { name: "Single Origin", serve: ["Panas"] },
            { name: "Affogato" },
            { name: "Americano" },
            { name: "Caffe Latte" },
            { name: "Cappucino" },
            { name: "Caffe Mocha" },
            { name: "White Choco Mocha" },
            { name: "Hot Nut Latte" },
            { name: "Caramel Latte" },
            { name: "Vanilla Latte" },
          ],
        },
      ],
    },
    {
      title: "Mocktail",
      groups: [
        {
          items: [
            { name: "Apple Virgin Mojito", price: { text: "Rp 34rb", mockup: true } },
            { name: "Strawberry Mojito" },
            { name: "Mango Mojito" },
            { name: "Kiwi Mojito" },
            { name: "Virgin Mojito" },
            { name: "Raspberry Lemonade" },
          ],
        },
        {
          title: "Tea/Teh",
          items: [
            { name: "Iced Tea" },
            { name: "Iced Lychee Tea" },
            { name: "Iced Lemon Tea" },
            { name: "Iced Apple Tea" },
            { name: "Ice Strawberry Tea" },
            { name: "Hot Tea/Teh Panas" },
          ],
        },
      ],
    },
    {
      title: "Over Classic Ice",
      groups: [
        {
          items: [
            { name: "Iced Virgin Taro" },
            { name: "Iced Chocolate" },
            { name: "Iced Green Tea Latte" },
            { name: "Iced Red Velvet" },
          ],
        },
        { title: "Frozty", items: [], note: "Minuman blended, ada pilihan kopi dan non-kopi." },
      ],
    },
  ] as Board[],
};

export const food = {
  heading: "Bukan cuma kopi",
  // sign says "coffee & eatery" (photos); food praised, guests return (reviews 2, 5)
  lead: "Namanya juga coffee & eatery. Makanannya juga yang bikin tamu kami datang lagi.",
  groups: [
    {
      title: "Makan",
      mockup: true,
      items: [
        { name: "Nasi Goreng Rasaharsa", price: { text: "Rp 35rb", mockup: true } as Flagged },
        { name: "Mie Goreng" },
        { name: "Chicken Rice Bowl" },
      ],
    },
    {
      title: "Camilan",
      mockup: true,
      items: [{ name: "Kentang Goreng" }, { name: "Pisang Goreng" }, { name: "Roti Bakar" }],
    },
  ] as { title: string; mockup: boolean; items: { name: string; price?: Flagged }[] }[],
  plate: {
    alt: "Ilustrasi sepiring Nasi Goreng Rasaharsa dengan telur mata sapi, irisan timun, dan kerupuk",
    caption: "Nasi Goreng Rasaharsa (ilustrasi)",
    mockup: true,
  },
};

export const place = {
  heading: "Tempatnya",
  lead: "Sebuah rumah yang dijadikan kedai. Nyaman, seperti di rumah sendiri.", // reviews 2, 4
  panes: [
    {
      label: "Untuk kerja",
      text: "Suasananya hangat dan nyaman untuk kerja dari kafe, dari pagi sampai malam.", // reviews 2; hours
    },
    {
      label: "Di luar",
      text: "Ada tempat duduk di luar, dan udara di dalam mengalir dengan baik.", // reviews 3
    },
    {
      label: "Bareng keluarga",
      text: "Pas untuk datang bersama teman dan keluarga.", // reviews 5
    },
    {
      label: "Untuk acara",
      text: "Ada ruangan untuk acara pribadi.", // reviews 3
      action: {
        label: "Pesan ruangan lewat WhatsApp",
        href: `${wa}?text=${encodeURIComponent("Halo Rasaharsa, saya mau tanya soal ruangan untuk acara.")}`,
        mockup: true,
      } as Action,
    },
  ] as { label: string; text: string; action?: Action }[],
};

// Paraphrased themes only. No quotes, no names, no stars.
export const reviews = {
  heading: "Kata mereka",
  sub: `Dirangkum dari ulasan Google · rating ${shop.rating.value} dari ${shop.rating.count} ulasan.`,
  themes: [
    "Baristanya menjelaskan karakter kopi yang kamu pesan.", // reviews 1
    "Pelayanannya cepat, pelayannya ramah.", // reviews 1, 2, 5
    "Suasananya seperti di rumah, cocok untuk kerja dari kafe.", // reviews 2
    "Makanannya enak, sampai ada yang sering kembali bersama teman dan keluarga.", // reviews 2, 5
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  mapTitle: "Peta lokasi Rasaharsa di Google Maps",
  hoursTitle: "Jam buka",
};

export const contact = {
  heading: "Hubungi kami",
  line: {
    text: "Mau tanya menu, pesan ruangan, atau memastikan kami buka? Kabari saja.",
    mockup: true,
  } as Flagged,
};

export const footer = {
  name: "Rasaharsa · coffee & eatery",
  draft: "Draf tampilan, belum resmi.",
  skip: "Langsung ke isi",
};
