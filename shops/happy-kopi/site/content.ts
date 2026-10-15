// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Language: Bahasa Indonesia. Menu names and the cup slogan stay exactly as the shop writes them.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Happy Kopi",
  slogan: "keep smile and be happy", // printed on the cup (owner-3, owner-4)
  type: "Coffee shop",
  address: {
    full: "Ruko Cleon Park No. 37, Jl. Jakarta Garden City Boulevard, Cakung Timur, Cakung, Jakarta Timur 13910",
    lines: [
      "Ruko Cleon Park No. 37",
      "Jl. Jakarta Garden City Boulevard",
      "Cakung Timur, Cakung, Jakarta Timur 13910",
    ],
    short: "Ruko Cleon Park No. 37, JGC, Cakung",
  },
  phone: { display: "0813-9972-8000", href: "tel:+6281399728000" },
  mapsUrl: "https://maps.google.com/?cid=9174931522804306470",
  mapEmbed:
    "https://maps.google.com/maps?q=Happy%20Kopi%20Ruko%20Cleon%20Park%20No.37%20Jakarta%20Garden%20City&output=embed",
  rating: "4,9",
  ratingCount: 28,
};

// Day numbers follow Date.getDay(): 0 = Minggu ... 6 = Sabtu. "Today" is computed in Asia/Jakarta.
export const hours = {
  openDays: [1, 2, 3, 4, 5, 6],
  open: "08.00",
  close: "21.00",
  rows: [
    { label: "Senin–Sabtu", days: [1, 2, 3, 4, 5, 6], time: "08.00–21.00" },
    { label: "Minggu", days: [0], time: "Tutup" },
  ],
  summary: "Senin–Sabtu 08.00–21.00 · Minggu tutup",
  todayOpen: "Buka hari ini 08.00–21.00",
  todayClosed: "Hari ini tutup · buka lagi Senin 08.00",
  todayLabel: "hari ini",
};

export const meta = {
  title: "Happy Kopi · Kopi dan makan di Ruko Cleon Park, JGC",
  description:
    "Happy Kopi, tempat ngopi dan makan yang nyaman di Ruko Cleon Park No. 37, Jakarta Garden City, Cakung. Buka Senin–Sabtu 08.00–21.00.",
};

export const banner = {
  text: "Draf: contoh situs untuk Happy Kopi, belum resmi.",
  show: "Tandai bagian contoh",
  hide: "Sembunyikan tanda",
};

export const actions = {
  directions: { label: "Petunjuk Arah", href: shop.mapsUrl },
  call: { label: "Telepon", href: shop.phone.href },
  whatsapp: { label: "WhatsApp", href: "https://wa.me/6281399728000", mockup: true },
  grab: { label: "Pesan di GrabFood", href: "https://food.grab.com/id/id/", mockup: true },
};

export const hero = {
  intro: { text: "Tempat ngopi dan makan yang nyaman di Ruko Cleon Park, JGC.", mockup: true } as Item,
  photo: {
    src: "/photos/owner-3.jpg",
    width: 960,
    height: 1280,
    alt: "Es kopi susu di gelas bertuliskan HAPPY KOPI, keep smile and be happy, dipegang di depan dinding hijau sage",
  },
};

export type Drink = {
  name: string;
  desc: Item;
  price?: Item;
  visual: "photo" | "coaster";
  coaster?: "kopi-susu" | "butterscotch" | "matcha";
  mockup?: boolean; // the whole item is a guess
};

export const drinks = {
  title: "Minuman favorit",
  intro: { text: "Es atau panas, ada yang pas buat nemenin kerja dan ngobrol.", mockup: true } as Item,
  photo: {
    src: "/photos/owner-4.jpg",
    width: 1200,
    height: 900,
    alt: "Empat es kopi susu di gelas Happy Kopi di atas nampan kayu",
    caption: "Es kopi susu di gelas Happy Kopi",
  },
  latteThumb: { src: "/photos/owner-7-sm.jpg", width: 320, height: 320 },
  artMockup: true, // coaster drawings are placeholders until the owner sends photos
  items: [
    {
      name: "Kopi susu gula\u00A0aren", // keep "gula aren" together on narrow screens
      desc: { text: "Es kopi susu dengan manis gula aren. Teman kerja dari pagi.", mockup: true },
      price: { text: "mulai Rp 20rb", mockup: true },
      visual: "coaster",
      coaster: "kopi-susu",
      mockup: true,
    },
    {
      name: "Butterscotch",
      desc: { text: "Manisnya pas, kata pelanggan." },
      price: { text: "mulai Rp 25rb", mockup: true },
      visual: "coaster",
      coaster: "butterscotch",
    },
    {
      name: "Matcha latte",
      desc: { text: "Matcha dan susu yang lembut, segar diminum siang hari.", mockup: true },
      price: { text: "mulai Rp 25rb", mockup: true },
      visual: "coaster",
      coaster: "matcha",
    },
    {
      name: "Latte panas",
      desc: { text: "Dengan latte art, disajikan di cangkir keramik bertepi cokelat." },
      visual: "photo",
    },
  ] as Drink[],
};

export type MenuItem = { name: string; desc?: string; price: string; mockup?: boolean };
export type MenuGroup = {
  title: "Nasi" | "Platter" | "Cemilan" | "Gorengan";
  art: "chicken-rice" | "mini-platter" | "bana-nagih" | "gorengan";
  artLabel: string;
  artMockup: boolean;
  items: MenuItem[];
  inline?: boolean; // render items as one run of names (the gorengan list on the board)
};

// From the menu board (a customer's photo, date unknown). Flagged for the owner to confirm.
export const menu = {
  title: "Makan sekalian",
  intro: { text: "Lapar di tengah kerja? Ada nasi, platter, dan cemilan. Gak perlu pindah tempat.", mockup: true } as Item,
  note: "Harga dari papan menu, dapat berubah.",
  photo: {
    src: "/photos/owner-2.jpg",
    width: 1000,
    height: 1000,
    alt: "Roti panggang dengan olesan manis di piring hijau muda bertepi cokelat, di samping segelas es latte",
    caption: "Roti panggang dan es latte, di piring hijau kami",
  },
  groups: [
    {
      title: "Nasi",
      art: "chicken-rice",
      artLabel: "Ilustrasi Happy Chicken Rice",
      artMockup: true,
      items: [
        { name: "Happy Chicken Rice", desc: "Nasi Hainan, ayam rebus", price: "Rp 35rb" },
        { name: "Karage Egg Mayo Rice / Karage Kare Rice", price: "Rp 48rb" },
        { name: "Katsu Kare Rice / Katsu Egg Mayo Rice", price: "Rp 55rb" },
      ],
    },
    {
      title: "Platter",
      art: "mini-platter",
      artLabel: "Ilustrasi Happy Mini Platter",
      artMockup: true,
      items: [
        { name: "Happy Mini Platter", desc: "Sosis sapi, kentang goreng", price: "Rp 30rb" },
        {
          name: "Happy Platter A, B, C",
          desc: "Campuran kentang, kentang waffle, pangsit, sosis, dan sayap ayam",
          price: "Rp 38rb–50rb",
        },
      ],
    },
    {
      title: "Cemilan",
      art: "bana-nagih",
      artLabel: "Ilustrasi Bana-Nagih",
      artMockup: true,
      items: [
        { name: "Bana-Nagih", desc: "Pisang goreng coklat keju", price: "Rp 20rb" },
        { name: "Potato Croquette Mozarella", price: "Rp 20rb" },
        { name: "Lumpia Udang (4 pcs)", price: "Rp 20rb" },
        { name: "Chicken Popcorn", price: "Rp 20rb" },
        { name: "Toast", desc: "Pilihan topping, termasuk tiramisu dan keju", price: "Rp 25rb", mockup: true },
        { name: "Chicken wings, pangsit mini, sosis sapi, french fries", price: "Rp 15rb–25rb" },
      ],
    },
    {
      title: "Gorengan",
      art: "gorengan",
      artLabel: "Ilustrasi gorengan: bakwan dan tempe",
      artMockup: true,
      inline: true,
      items: [
        { name: "Ketan", price: "" },
        { name: "pisang goreng", price: "" },
        { name: "bakwan jagung", price: "" },
        { name: "bakwan sayur", price: "" },
        { name: "martabak telor", price: "" },
        { name: "tempe goreng / mendoan", price: "Rp 4rb–8rb" },
      ],
    },
  ] as MenuGroup[],
};

export const room = {
  title: "Nyaman buat kerja dan ngobrol",
  intro: {
    text: "Sofa panjang hijau, meja kayu terang, dan pintu melengkung. Duduk lama pun betah.",
    mockup: true,
  } as Item,
  points: [
    { text: "Ruangannya adem dan nyaman" },
    { text: "Pelayanannya ramah" },
    { text: "Cocok buat kerja dari kafe" },
    { text: "Wi-Fi dan colokan", mockup: true },
  ] as Item[],
  photo: {
    src: "/photos/owner-5.jpg",
    width: 1200,
    height: 900,
    alt: "Ruang duduk Happy Kopi: dinding krem, sofa panjang hijau, meja kayu terang, pintu melengkung, dan jendela setengah lingkaran",
    caption: "Ruang duduk Happy Kopi",
  },
};

// Paraphrased from real Google reviews. Never quoted, never attributed, no dates.
export const reviews = {
  title: "Kata mereka",
  rating: `${shop.rating} dari ${shop.ratingCount} ulasan Google`,
  note: "Diringkas dari ulasan Google.",
  items: [
    "Tempatnya nyaman dan adem, pelayanannya ramah banget, dan butterscotch-nya pas.",
    "Salah satu tempat paling nyaman.",
    "Enak buat kerja dari kafe.",
    "Enak buat makan: pelayanannya baik, rasanya juga enak.",
  ],
};

export const visit = {
  title: "Kunjungi kami",
  sign: "Cari papan “KANTIN SARI RASA | HAPPY KOPI” di No. 37.",
  hoursTitle: "Jam buka",
  mapLink: "Buka di Google Maps",
  mapTitle: "Peta lokasi Happy Kopi",
  mapLoading: "Peta Google Maps, Ruko Cleon Park No. 37",
  photo: {
    src: "/photos/owner-6.jpg",
    width: 750,
    height: 1000,
    alt: "Depan ruko No. 37 dengan papan KANTIN SARI RASA | HAPPY KOPI dan bangku kayu, di antara pepohonan",
  },
};

export const contact = {
  title: "Hubungi kami",
  line: { text: "Mau tanya menu atau pesan dulu? Telepon atau chat saja.", mockup: true } as Item,
  phoneLabel: "Nomor telepon",
};

export const footer = {
  draft: "Situs draf untuk ditinjau pemilik.",
};
