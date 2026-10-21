// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia. Register "kamu" is itself a mockup choice (owner may prefer "Anda").

export type Item = { text: string; mockup?: boolean };
export type Link = { url: string; mockup?: boolean };

export const shop = {
  name: "D'rooftop & Garage Brew House", // listing
  shortName: "D’rooftop & Garage", // brief: hero and nav
  type: "Kedai kopi", // listing: coffee_shop
  address: "Jl. K No. 18, Cipinang Muara, Jatinegara, Jakarta Timur 13420", // listing
  addressLines: ["Jl. K No. 18", "Cipinang Muara, Jatinegara", "Jakarta Timur 13420"], // listing
  phone: "0813-1431-7421", // listing (also chalked on the shop's board)
  tel: "tel:+6281314317421",
  // [MOCKUP] WhatsApp on the listing's mobile number is not confirmed by the owner.
  whatsapp: {
    url: "https://wa.me/6281314317421?text=Halo%20D%27rooftop%20%26%20Garage%2C%20saya%20mau%20tanya",
    mockup: true,
  } as Link,
  mapsUrl: "https://maps.google.com/?cid=3281679446780875282", // listing googleMapsUri
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=D%27rooftop%20%26%20Garage%20Brew%20House&destination_place_id=ChIJDxlKE4XzaS4REhIT3BHeii0",
  embedUrl:
    "https://www.google.com/maps?q=D%27rooftop+%26+Garage+Brew+House,+Jl.+K+No.18,+Cipinang+Muara,+Jakarta+Timur&output=embed",
  hours: [{ days: "Senin–Minggu", time: "15.00–23.30" }], // hours: every day 15:00–23:30
  hoursNote: "buka setiap hari",
  rating: { value: "4,8", count: 226 }, // listing
};

export const meta = {
  title: "D'rooftop & Garage Brew House · Kedai kopi di Cipinang Muara",
  description:
    "Kedai kopi dengan Garage dan Rooftop di Jl. K No. 18, Cipinang Muara, Jakarta Timur. Buka setiap hari 15.00–23.30.",
  banner:
    "Draf mockup untuk D'rooftop & Garage Brew House. Beberapa detail masih contoh sampai pemilik mengonfirmasi.",
};

export const nav = {
  links: [
    { href: "#dua-lantai", label: "Dua lantai" },
    { href: "#menu", label: "Menu" },
    { href: "#rombongan", label: "Rombongan" },
    { href: "#lokasi", label: "Lokasi" },
  ],
  phoneLink: { href: "#lokasi", label: "Lokasi" },
};

export const hero = {
  kicker: "Kedai kopi", // the small "kedai kopi" above the name on the painted wall sign (photos)
  nameLines: ["D’rooftop", "& Garage"],
  line: "Tersembunyi di gang kecil Cipinang Muara.", // reviews 1, 3, 5 (hidden gem); listing; photos (alley)
  today: "Buka hari ini 15.00–23.30", // hours: same every day
  photoAlt:
    "Rooftop D'rooftop & Garage: rumput sintetis dan deretan meja lesehan kayu di atas tikar",
  rooftopSign: "Rooftop", // the green "ROOFTOP ↑" sign (photos)
  ctaDirections: "Petunjuk Arah",
  ctaWhatsapp: "WhatsApp",
};

export const floors = {
  heading: "Dua lantai, dua suasana",
  lead: { text: "Ngopi santai di garasi, lanjut ngobrol sampai malam di rooftop.", mockup: true } as Item,
  garage: {
    plate: "Garage",
    title: "Garasi penuh mural",
    // photos: rattan chairs, polka-dot cushions, murals, hand-painted sign
    body: "Kursi rotan bundar dengan bantal polkadot, mural warna-⁠warni di dinding, dan papan nama yang dilukis tangan.",
    suits: { text: "Cocok buat ngopi sore, nugas, atau ngobrol berdua.", mockup: true } as Item,
    sceneLabel: "Ilustrasi: kursi rotan bundar dengan bantal polkadot dan tanaman dalam pot",
  },
  rooftop: {
    plate: "Rooftop",
    title: "Langit terbuka, lampu gantung",
    // photos: artificial turf, lesehan tables on mats, relaxed chairs, string lights, potted trees
    body: "Rumput sintetis, meja kayu lesehan di atas tikar, kursi santai, lampu gantung, dan pohon dalam pot.",
    suits: { text: "Cocok buat rombongan, lesehan sambil ngobrol berjam-⁠jam.", mockup: true } as Item,
    sceneLabel: "Ilustrasi: lampu gantung di atas rumput dan meja lesehan di atas tikar",
  },
};

export type MenuItem = {
  name: string;
  price: string;
  line: string;
  mockup: true;
  art: "es-kopi-aren" | "kopi-tubruk" | "v60" | "pisang-goreng";
  artLabel: string;
};

export const menu = {
  heading: "Menu andalan",
  slogan: "Kopi adalah inspirasi hati", // painted on the rooftop mural (photos)
  praiseLine: "Pengunjung bilang kopinya enak.", // reviews 2, 4
  note: { text: "Contoh menu & harga, menu asli menyusul.", mockup: true } as Item,
  feature: {
    name: "Kopi Susu Garage", // [MOCKUP] name
    price: "Rp 15rb", // [MOCKUP] price
    line: "Kopi hitam di atas susu manis.", // owner-2.jpg
    mockup: true,
    photo: "/photos/owner-2.jpg",
    photoAlt:
      "Kopi berlapis di gelas bening: kopi hitam di atas susu manis, dengan toples biji kopi di belakang",
  },
  drinks: [
    {
      name: "Es Kopi Susu Gula Aren",
      price: "Rp 18rb",
      line: "Dingin, manisnya dari gula aren.",
      mockup: true,
      art: "es-kopi-aren",
      artLabel: "Ilustrasi es kopi susu gula aren dalam gelas tinggi",
    },
    {
      name: "Kopi Tubruk Lampung",
      price: "Rp 10rb",
      line: "Tubruk klasik, ampasnya mengendap di bawah.",
      mockup: true,
      art: "kopi-tubruk",
      artLabel: "Ilustrasi kopi tubruk di gelas bening dan toples biji kopi",
    },
    {
      name: "V60",
      price: "Rp 22rb",
      line: "Seduh manual, dibuat saat kamu pesan.",
      mockup: true,
      art: "v60",
      artLabel: "Ilustrasi dripper V60 di atas server kaca",
    },
  ] as MenuItem[],
  nonCoffee: {
    title: "Non-kopi",
    items: ["Teh Tarik", "Coklat", "Matcha Latte"],
    price: "Rp 15–20rb",
    mockup: true,
  },
  snacks: {
    title: "Teman ngopi",
    items: ["Pisang Goreng", "Kentang Goreng", "Roti Bakar", "Indomie Telor"],
    price: "Rp 12–20rb",
    line: "Buat dimakan rame-⁠rame.",
    mockup: true,
    art: "pisang-goreng" as const,
    artLabel: "Ilustrasi pisang goreng di atas piring",
  },
};

export const groups = {
  heading: ["Datang", "rame-rame"],
  lead: "Rooftop bisa dipesan buat rombongan.", // photos: a group booking on the chalkboard
  occasions: [
    { text: "Buka bersama", mockup: true },
    { text: "Ulang tahun & kumpul teman", mockup: true },
    { text: "Kumpul komunitas", mockup: true },
  ] as Item[],
  lesehan: {
    text: "Duduk lesehan di atas tikar, ngobrol berjam-⁠jam tanpa diburu waktu.",
    mockup: true,
  } as Item,
  cta: "Chat WhatsApp",
  board: [
    { text: "Reservasi hari ini", tone: "tembok", size: "body" },
    { text: "Rombonganmu?", tone: "kuning", size: "lead" },
    { text: "Rooftop · Lesehan", tone: "tembok", size: "body" },
    { text: "Chat 0813-1431-7421", tone: "kuning", size: "body" },
  ] as const,
  boardMockup: true,
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  themes: [
    // review 1
    { title: "Nyaman, kayak di rumah sendiri", detail: "Suasananya bikin betah, serasa rumah kedua." },
    // reviews 1, 2, 4
    { title: "Staf dan timnya ramah", detail: "Ramah dan sigap membantu, kata beberapa pengunjung." },
    // review 1
    { title: "Harga ramah di kantong", detail: "Ada yang bilang harganya sangat terjangkau." },
    // reviews 1, 3, 5
    { title: "Hidden gem-nya Cipinang", detail: "Tempatnya nyempil, tapi disebut yang terbaik di sekitar Cipinang." },
  ],
  ratingLine: `${shop.rating.value} dari ${shop.rating.count} ulasan Google`,
  mapsLink: "Lihat di Google Maps",
  note: "Ringkasan ulasan, bukan kutipan.",
};

export const visit = {
  heading: "Kunjungi kami",
  hoursLine: { days: "Senin–Minggu", time: "15.00–23.30" },
  ramadan: { text: "Jam buka bisa berubah selama Ramadan.", mockup: true } as Item,
  parking: "Parkir motor di gang depan.", // photos: motorbikes parked along the alley
  stepsTitle: "Cara ke sini",
  steps: [
    { text: "Ikuti Petunjuk Arah sampai Jl. K No. 18, Cipinang Muara." },
    { text: "Cari gang dengan mural merah bertuliskan “Welcome”.", mockup: true },
    { text: "Masuk gang: Garage di bawah, ikuti papan “Rooftop” untuk naik.", mockup: true },
  ] as Item[],
  mapTitle: "Peta lokasi D'rooftop & Garage",
  mapFallback: "Buka peta di Google Maps",
};

export const contact = {
  heading: "Hubungi kami",
  lead: {
    text: "Mau pesan tempat buat rombongan, atau bingung cari jalan? Chat aja.",
    mockup: true,
  } as Item,
  call: "Telepon",
};

export const footer = {
  draft: "Draf mockup, belum dipublikasikan.",
  links: { whatsapp: "WhatsApp", directions: "Petunjuk Arah" },
};
