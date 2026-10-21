// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia, "kamu" register [MOCKUP].

export type Item = { text: string; mockup?: boolean };

// ---------------------------------------------------------------- shop (listing)
export const shop = {
  name: "Teman Kita Cafe & Resto",
  displayName: "Teman Kita",
  subline: "Cafe & Resto",
  type: "Kafe dan resto Indonesia",
  address: {
    full: "Jl. Kramat Asem No.06, RT.2/RW.6, Utan Kayu Selatan, Matraman, Jakarta Timur 13120",
    street: "Jl. Kramat Asem No.06",
    area: "Utan Kayu Selatan, Matraman, Jakarta Timur 13120",
    short: "Jl. Kramat Asem No.06, Utan Kayu Selatan",
  },
  phone: "0878-8070-4666",
  tel: "+6287880704666",
  // [MOCKUP] The number is a mobile; assumed to take WhatsApp.
  whatsapp: { number: "6287880704666", mockup: true },
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Teman+Kita+Cafe+%26+Resto&destination_place_id=ChIJExQ7NI_0aS4R5FlBnGjqEjU",
  mapEmbed:
    "https://www.google.com/maps?q=Teman+Kita+Cafe+%26+Resto,+Jl.+Kramat+Asem+No.06,+Utan+Kayu+Selatan,+Matraman,+Jakarta+Timur&output=embed",
  rating: 4.5,
  ratingCount: 785,
};

export const meta = {
  title: "Teman Kita Cafe & Resto · Utan Kayu Selatan, Matraman",
  description:
    "Kafe dan resto santai dua lantai di Jl. Kramat Asem, Utan Kayu Selatan. Kopi, camilan dan makanan Indonesia. Buka setiap hari.",
  banner:
    "Draf mockup untuk Teman Kita Cafe & Resto. Beberapa detail masih contoh sampai dikonfirmasi pemilik.",
};

// ---------------------------------------------------------------- hours (listing)
// Index = JS weekday (0 = Minggu … 6 = Sabtu).
export const hours = {
  days: [
    { name: "Minggu", open: "10.00", close: "22.00" },
    { name: "Senin", open: "10.00", close: "22.00" },
    { name: "Selasa", open: "10.00", close: "22.00" },
    { name: "Rabu", open: "10.00", close: "22.00" },
    { name: "Kamis", open: "10.00", close: "22.00" },
    { name: "Jumat", open: "12.30", close: "22.00" },
    { name: "Sabtu", open: "10.00", close: "22.00" },
  ],
  rows: [
    { label: "Senin–Kamis", days: [1, 2, 3, 4], time: "10.00–22.00" },
    { label: "Jumat", days: [5], time: "12.30–22.00", note: "buka mulai 12.30", friday: true },
    { label: "Sabtu–Minggu", days: [6, 0], time: "10.00–22.00" },
  ],
  noJs: "Buka setiap hari 10.00–22.00, Jumat mulai 12.30",
  footer: "Buka setiap hari 10.00–22.00 · Jumat mulai 12.30",
};

// ---------------------------------------------------------------- WhatsApp
export const waMessages = {
  hero: "Halo Teman Kita, mau tanya…",
  events: "Halo Teman Kita, mau tanya ketersediaan tempat untuk acara tanggal …",
  menu: "Halo Teman Kita, mau tanya menu dan harga terbaru…",
};

export function waLink(text: string) {
  return `https://wa.me/${shop.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export const actions = {
  whatsapp: "WhatsApp",
  directions: "Petunjuk Arah",
  call: "Telepon",
};

// ---------------------------------------------------------------- 1. hero
export const hero = {
  line: { text: "Tempat nongkrong santai di Utan Kayu Selatan" } as Item,
  todayLabel: "Hari ini",
  windowCaption: "Lantai 2 · semi-outdoor",
  windowAlt:
    "Lantai 2 Teman Kita: area semi-outdoor dengan kursi besi merah dan mint, meja kayu, kipas angin dan mural jalanan",
};

// ---------------------------------------------------------------- 2. floors
export type Floor = {
  key: "atas" | "bawah";
  label: string;
  title: string;
  body: string;
  illustrationLabel: string;
  mockup?: boolean;
};

export const floors = {
  heading: "Dua lantai, dua suasana",
  intro: "Ngopi di bawah, santai semi-outdoor di atas.",
  items: [
    {
      key: "atas",
      label: "Lantai 2 · Atas",
      title: "Semi-outdoor, berkipas angin",
      body:
        "Di bawah atap rangka besi, ada kipas angin di langit-langit dan mural jalanan warna-warni di dinding. Kursi besi merah, mint dan abu-abu mengelilingi meja kayu. Pas buat datang ramean.",
      illustrationLabel:
        "Ilustrasi lantai 2: atap rangka besi, dua kipas angin, mural deretan ruko berwarna, meja kayu dengan kursi besi merah, mint dan hitam",
    },
    {
      key: "bawah",
      label: "Lantai 1 · Bawah",
      title: "Indoor, dinding penuh coretan",
      body:
        "Dinding bata putih penuh gambar tangan dan kutipan soal kopi. Enak buat me-time, ngopi sendirian, atau sambil buka laptop sebentar.",
      illustrationLabel:
        "Ilustrasi lantai 1: dinding bata bergaris tinta, rak buku, lampu, jaket di gantungan, sofa dan meja kecil dengan secangkir kopi",
    },
  ] as Floor[],
};

// ---------------------------------------------------------------- 3. menu
export type Product = {
  name: string;
  price: string;
  note?: string;
  drawing?: "latte" | "pisang" | "roti" | "tahu";
  drawingLabel?: string;
  mockup?: boolean;
};

export const menu = {
  heading: "Menu andalan",
  intro:
    "Kopi, minuman segar, camilan teman ngopi, sampai makanan Indonesia yang bikin kenyang. Ada pilihan yang lebih sehat juga.",
  // Lead product: owner-2 photo. Name and price are [MOCKUP].
  lead: {
    name: "Es Jeruk Float",
    price: "Rp 25rb",
    note: "Jus jeruk segar, satu skop es krim vanila",
    alt: "Es jeruk float: jus jeruk dengan satu skop es krim vanila di gelas bertangkai, dikelilingi jeruk",
    mockup: true,
  } as Product & { alt: string },
  featured: [
    {
      name: "Charcoal Latte",
      price: "Rp 28rb",
      note: "Disukai pengunjung",
      drawing: "latte",
      drawingLabel: "Ilustrasi charcoal latte dalam cangkir di atas tatakan",
      mockup: true,
    },
    {
      name: "Pisang Goreng Susu Keju",
      price: "Rp 20rb",
      note: "Manisnya pas",
      drawing: "pisang",
      drawingLabel: "Ilustrasi pisang goreng susu keju di piring",
      mockup: true,
    },
    {
      name: "Roti Bakar Tebal",
      price: "Rp 22rb",
      note: "Cokelat-keju atau srikaya",
      drawing: "roti",
      drawingLabel: "Ilustrasi roti bakar tebal dipotong diagonal",
      mockup: true,
    },
    {
      name: "Tahu Goreng",
      price: "Rp 18rb",
      note: "Camilan buat berbagi",
      drawing: "tahu",
      drawingLabel: "Ilustrasi tahu goreng di piring beralas kertas dengan dua cabai rawit",
      mockup: true,
    },
  ] as Product[],
  // Example lists, all [MOCKUP]. `range` is a price range for the whole group.
  columns: [
    [
      {
        title: "Kopi",
        items: [
          { name: "Kopi Susu Gula Aren", price: "Rp 22rb", mockup: true },
          { name: "Charcoal Latte", price: "Rp 28rb", mockup: true },
          { name: "Americano", price: "Rp 20rb", mockup: true },
          { name: "Cappuccino", price: "Rp 25rb", mockup: true },
        ],
      },
      {
        title: "Non-kopi",
        items: [
          { name: "Es Jeruk Float", price: "Rp 25rb", mockup: true },
          { name: "Es Teh Manis", price: "Rp 10rb", mockup: true },
          { name: "Matcha Latte", price: "Rp 27rb", mockup: true },
        ],
      },
    ],
    [
      {
        title: "Makanan",
        range: { text: "Rp 22–40rb", mockup: true } as Item,
        items: [
          { name: "Nasi Goreng Teman Kita", mockup: true },
          { name: "Mie Goreng Jawa", mockup: true },
          { name: "Nasi Ayam Penyet", mockup: true },
          { name: "Indomie Telur Kornet", mockup: true },
        ],
      },
      {
        title: "Pilihan sehat",
        range: { text: "Rp 35–45rb", mockup: true } as Item,
        items: [
          { name: "Rice Bowl Ayam Panggang", mockup: true },
          { name: "Salad Bowl", mockup: true },
        ],
      },
    ],
    [
      {
        title: "Camilan",
        range: { text: "Rp 18–35rb", mockup: true } as Item,
        items: [
          { name: "Pisang Goreng Susu Keju", price: "Rp 20rb", mockup: true },
          { name: "Roti Bakar Tebal", price: "Rp 22rb", mockup: true },
          { name: "Tahu Goreng", price: "Rp 18rb", mockup: true },
          { name: "Kentang Goreng", mockup: true },
          { name: "Cireng", mockup: true },
          { name: "Mix Platter", mockup: true },
        ],
      },
    ],
  ] as MenuCategory[][],
  note: "Contoh menu dan harga, menunggu konfirmasi.",
  waLinkLabel: "Tanya menu terbaru via WhatsApp",
};

export type MenuCategory = {
  title: string;
  range?: Item;
  items: { name: string; price?: string; mockup?: boolean }[];
};

// ---------------------------------------------------------------- 4. praise
// Paraphrased from real reviews only. Never quoted, never attributed, no dates.
export const praise = {
  heading: "Kata mereka",
  rating: "4,5 dari 785 ulasan Google",
  note: "Dirangkum dari ulasan di Google",
  themes: [
    {
      theme: "Nyaman buat nongkrong",
      line: "Cocok buat kumpul bareng teman dan keluarga, atau sekadar me-time sendirian.",
    },
    {
      theme: "Pilihannya banyak",
      line: "Makanan, minuman, sampai camilan teman ngopi, banyak yang bisa dicoba.",
    },
    {
      theme: "Camilan dan kopinya enak",
      line: "Pisang gorengnya disebut nggak terlalu manis, dan charcoal latte-nya disukai.",
    },
    {
      theme: "Harga bersahabat",
      line: "Tempatnya bersih, dekorasinya disukai, dan harganya terjangkau.",
    },
  ],
};

// ---------------------------------------------------------------- 5. events
export const events = {
  heading: "Acara di Teman Kita",
  lead: "Teman Kita sering dipesan untuk acara pernikahan, dan jadi tempat kumpul buat reuni dan keluarga.",
  occasions: ["Pernikahan", "Reuni", "Kumpul keluarga", "Meetup kecil"],
  packages: {
    text: "Ada pilihan paket per orang atau sewa seluruh tempat. Detail dan harganya lewat WhatsApp.",
    mockup: true,
  } as Item,
  tip: "Mau datang ramean? Kabari dulu, kadang tempatnya dipakai acara.",
  button: "Tanya ketersediaan via WhatsApp",
};

// ---------------------------------------------------------------- 6. visit
export const visit = {
  heading: "Kunjungi kami",
  hint: "Letaknya di jalan perumahan, jadi ikuti petanya ya.",
  mapTitle: "Peta lokasi Teman Kita Cafe & Resto",
  mapLoading: "Peta Google Maps sedang dimuat…",
  hoursHeading: "Jam buka",
  todayTag: "hari ini",
};

// ---------------------------------------------------------------- 7. closing
export const closing = {
  heading: "Mampir aja, kita kan teman.",
  line: "Nongkrong bareng teman, kumpul keluarga, atau sekadar me-time.",
};
