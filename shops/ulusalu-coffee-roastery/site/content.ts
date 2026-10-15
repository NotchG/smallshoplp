// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: (listing), (hours), (review N), (photos), (owner photo), [MOCKUP].

export type Item = { text: string; mockup?: boolean };

export const meta = {
  title: "ULUSALU coffee and roastery · Kopi & makan di Jakarta Garden City",
  description:
    "Coffee shop dan roastery di Jakarta Garden City, Cakung. Aren Latte, Mushroom Cream Soup, nasi goreng dan pastry. Buka setiap hari mulai 07.00.",
  banner: "Draf: situs contoh untuk ULUSALU, belum resmi.",
  skip: "Langsung ke konten",
};

export const shop = {
  name: "ULUSALU coffee and roastery", // (listing)
  wordmark: "ULUSALU", // (listing) text stands in for the logo until the owner sends it
  sub: "coffee and roastery", // (listing)
  phone: "0812-8058-2016", // (listing)
  tel: "+6281280582016", // (listing)
  addressLines: [
    "Jl. Jakarta Garden City Boulevard Unit A1", // (listing)
    "Cakung Timur, Cakung, Jakarta Timur 13910", // (listing)
  ],
  area: "Di area food garden Jakarta Garden City.", // (review 1)
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=ULUSALU+coffee+and+roastery&destination_place_id=ChIJS1vi9VqLaS4RaFDBGn2cK1k",
  mapsUrl: "https://maps.google.com/?cid=6425401354507866216", // (listing)
  mapEmbed:
    "https://www.google.com/maps?q=ULUSALU+coffee+and+roastery,+Jakarta+Garden+City&output=embed",
  whatsapp: "https://wa.me/6281280582016", // [MOCKUP] that the number takes WhatsApp
};

export const nav = {
  links: [
    { href: "#favorit", label: "Favorit" },
    { href: "#menu", label: "Menu" },
    { href: "#kunjungi", label: "Kunjungi" },
  ],
};

export const actions = {
  directions: "Petunjuk Arah",
  call: "Telepon",
};

// (hours) Asia/Jakarta. jsDay follows Date.getDay(): 0 = Minggu.
export type DayHours = {
  day: string;
  short: string;
  jsDay: number;
  open: string;
  close: string;
  openMin: number;
  closeMin: number;
};
export const hours: DayHours[] = [
  { day: "Senin", short: "Sen", jsDay: 1, open: "07.00", close: "22.00", openMin: 420, closeMin: 1320 },
  { day: "Selasa", short: "Sel", jsDay: 2, open: "07.00", close: "22.00", openMin: 420, closeMin: 1320 },
  { day: "Rabu", short: "Rab", jsDay: 3, open: "07.00", close: "22.00", openMin: 420, closeMin: 1320 },
  { day: "Kamis", short: "Kam", jsDay: 4, open: "07.00", close: "22.00", openMin: 420, closeMin: 1320 },
  { day: "Jumat", short: "Jum", jsDay: 5, open: "07.00", close: "24.00", openMin: 420, closeMin: 1440 },
  { day: "Sabtu", short: "Sab", jsDay: 6, open: "07.00", close: "24.00", openMin: 420, closeMin: 1440 },
  { day: "Minggu", short: "Min", jsDay: 0, open: "07.00", close: "22.00", openMin: 420, closeMin: 1320 },
];
export const hoursSummary = [
  { days: "Senin–Kamis", time: "07.00–22.00" },
  { days: "Jumat–Sabtu", time: "07.00–24.00" },
  { days: "Minggu", time: "07.00–22.00" },
];
export const status = {
  open: "Buka sekarang",
  closed: "Sedang tutup",
  today: "Hari ini",
};

export const hero = {
  line: { text: "Kopi dari roaster kami, makan siang dari dapur kami.", mockup: true } as Item,
  caption:
    "Nasi goreng dengan telur ceplok, kerupuk, tomat dan selada, dan kopi panas di cangkir hitam ULUSALU.", // (owner photo)
  captionShort: "Nasi goreng dan kopi di cangkir ULUSALU.", // (owner photo)
  staticHours: "Buka setiap hari mulai 07.00", // (hours)
  photoAlt:
    "Nasi goreng dengan telur ceplok, kerupuk, tomat dan selada, dan kopi panas di cangkir hitam ULUSALU, di atas meja marmer",
};

export const roaster = {
  heading: "Dari roaster kami",
  fact: "Mesin sangrai drum kami berdiri di dekat jendela.", // (photos)
  claim: {
    text: "Biji yang kami sangrai di sana masuk ke espresso-mu, dan bisa kamu bawa pulang.",
    mockup: true,
  } as Item,
  beans: { name: "ULUSALU House Blend", size: "200 g", price: "mulai Rp 85rb", mockup: true },
  brew: { text: "Manual brew dengan roasting kami sendiri, misalnya Gayo atau Toraja.", mockup: true } as Item,
  illustrationLabel: "Ilustrasi",
  illustrationsMockup: true,
  roasterAlt: "Ilustrasi mesin sangrai drum ULUSALU",
  bagAlt: "Ilustrasi kantong biji kopi ULUSALU House Blend",
};

export type Illustration =
  | "arenLatte"
  | "kopiHitam"
  | "soup"
  | "nasiGoreng"
  | "chocoBanana"
  | "tiramisu"
  | "risoles"
  | "sosisSolo";

export type Favorite = { name: string; note: string; illustration: Illustration; mockup?: boolean };

export const favorites = {
  heading: "Favorit pelanggan",
  intro: "Yang disebut pelanggan di ulasan Google.",
  illustrationLabel: "Ilustrasi",
  illustrationsMockup: true, // the drawings stand in for real photos
  shelves: [
    {
      label: "Dari bar & dapur",
      items: [
        { name: "Aren Latte", note: "Latte gula aren yang disebut terbaik di area JGC.", illustration: "arenLatte" }, // (review 4)
        { name: "Kopi hitam dingin", note: "Kopi hitam dengan es batu.", illustration: "kopiHitam", mockup: true }, // (photos) name is [MOCKUP]
        {
          name: "Mushroom Cream Soup",
          note: "Dengan roti bawang putih. Ada pelanggan yang menyebutnya favorit tetap.",
          illustration: "soup",
        }, // (review 4, photos)
        { name: "Nasi Goreng", note: "Telur ceplok, kerupuk, tomat dan selada.", illustration: "nasiGoreng" }, // (owner photo)
      ] as Favorite[],
    },
    {
      label: "Dari etalase",
      items: [
        { name: "Choco Banana", note: "Pastry yang wajib dicoba, kata pelanggan.", illustration: "chocoBanana" }, // (review 2)
        { name: "Tiramisu", note: "Sering dipesan bersama Choco Banana.", illustration: "tiramisu" }, // (review 2)
        { name: "Risoles", note: "Kesukaan anak-anak.", illustration: "risoles" }, // (review 2)
        { name: "Sosis Solo", note: "Kesukaan anak-anak juga.", illustration: "sosisSolo" }, // (review 2)
      ] as Favorite[],
    },
  ],
};

export type MenuItem = { name: string; price?: Item; desc?: string; spicy?: boolean; mockup?: boolean };

export const menu = {
  heading: "Menu",
  note: { text: "Harga contoh untuk draf ini.", mockup: true } as Item,
  spicyLabel: "Pedas",
  categories: [
    {
      name: "Kopi & teh",
      items: [
        { name: "Aren Latte", price: { text: "Rp 28rb", mockup: true }, desc: "Latte dengan gula aren." }, // (review 4)
        { name: "Kopi hitam dingin", desc: "Dengan es batu.", mockup: true }, // (photos) name is [MOCKUP]
        { name: "Manual brew", desc: "Gayo atau Toraja, dari roasting kami.", mockup: true }, // [MOCKUP]
        { name: "Teh Twinings", desc: "Teh premium." }, // (review 1)
      ] as MenuItem[],
    },
    {
      name: "Makanan berat",
      items: [
        { name: "Nasi Goreng", price: { text: "Rp 40rb", mockup: true }, desc: "Telur ceplok, kerupuk, tomat, selada." }, // (owner photo)
        { name: "Mushroom Cream Soup", price: { text: "Rp 32rb", mockup: true }, desc: "Dengan roti bawang putih." }, // (review 4, photos)
        { name: "Spaghetti Aglio Olio", desc: "Dengan potongan cabai.", spicy: true }, // (review 1)
      ] as MenuItem[],
    },
    {
      name: "Pastry & camilan",
      items: [
        { name: "Choco Banana" }, // (review 2)
        { name: "Tiramisu" }, // (review 2)
        { name: "Risoles" }, // (review 2)
        { name: "Sosis Solo" }, // (review 2)
      ] as MenuItem[],
    },
  ],
};

export type Pane = { label: string; title: string; detail: Item };

export const stay = {
  heading: "Untuk keluarga & WFC",
  intro: "Ruang terang dengan jendela tinggi menghadap pepohonan.", // (photos)
  panes: [
    { label: "Pagi", title: "Buka mulai 07.00", detail: { text: "Setiap hari. Sarapan dulu sebelum kerja.", mockup: true } }, // (hours) + [MOCKUP] breakfast
    { label: "Kerja", title: "Colokan di beberapa meja", detail: { text: "Tenang, makanan dan kopinya enak, cocok untuk WFC." } }, // (reviews 1, 5)
    { label: "Keluarga", title: "Favorit anak-anak", detail: { text: "Anak-anak suka Risoles dan Sosis Solo." } }, // (review 2)
    { label: "Malam", title: "Sampai tengah malam", detail: { text: "Jumat dan Sabtu buka sampai 24.00." } }, // (hours)
  ] as Pane[],
};

// Paraphrased in Indonesian from real Google reviews. Never quoted, never attributed to a name.
export const reviews = {
  heading: "Kata mereka",
  rating: "4,7", // (listing)
  count: 91, // (listing)
  ratingLine: "4,7 di Google · 91 ulasan",
  label: "Diringkas dari ulasan Google.",
  items: [
    { topic: "Kopi", text: "Aren latte terbaik di area JGC, dan mushroom cream soup-nya jadi favorit tetap." }, // (review 4)
    {
      topic: "Keluarga",
      text: "Suasananya nyaman, makanannya enak dan terjangkau, pilihannya banyak: tempat favorit satu keluarga.",
    }, // (review 2)
    { topic: "WFC", text: "Cocok untuk WFC: suasananya enak, makanan dan kopinya juga enak." }, // (review 5)
    { topic: "Suasana", text: "Kafenya nyaman dan tenang, tanpa musik, dengan colokan di beberapa meja." }, // (review 1)
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  hoursHeading: "Jam buka",
  mapTitle: "Peta lokasi ULUSALU coffee and roastery",
  mapLink: "Buka di Google Maps",
};

export const contact = {
  heading: "Hubungi kami",
  line: { text: "Telepon dulu kalau mau tanya menu hari ini.", mockup: true } as Item,
  whatsappLabel: { text: "WhatsApp", mockup: true } as Item,
  whatsappNote: "termasuk pesan biji kopi",
  footerDraft: "Draf situs contoh. Detail bertanda masih menunggu konfirmasi pemilik.",
};
