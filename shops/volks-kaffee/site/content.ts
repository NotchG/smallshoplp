// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Register: casual "kamu" throughout [MOCKUP]; the owner may prefer "Anda".
// Name is always "Volks Kaffee", exactly as on the listing and the awning.

export type Item = { text: string; mockup?: boolean };

const fact = (text: string): Item => ({ text });
const mockup = (text: string): Item => ({ text, mockup: true });

export const banner =
  "Draf mockup untuk Volks Kaffee. Beberapa detail masih contoh sampai dikonfirmasi pemilik.";

export const meta = {
  title: "Volks Kaffee — Kopi sore sampai malam di Cipinang Jaya",
  description:
    "Kedai kopi di rumah B23, Blok AA Cipinang Jaya, Jatinegara. Buka Senin–Sabtu 15.30–23.00, Minggu tutup. Kopi racikan, Ice Choco Mint, Marshmallow Brownie, Smoked Beef Sandwich.",
};

// Listing facts (raw.json).
export const shop = {
  name: "Volks Kaffee",
  type: "Kedai kopi",
  address:
    "Jl. Cipinang Jaya Blok AA No. B23, Cipinang Besar Selatan, Jatinegara, Jakarta Timur 13410",
  addressLines: [
    "Jl. Cipinang Jaya Blok AA No. B23",
    "Cipinang Besar Selatan, Jatinegara",
    "Jakarta Timur 13410",
  ],
  houseNumber: "B23", // on the gate pillar (photos)
  phone: "0878-8864-2785",
  telHref: "tel:+6287888642785",
  // [MOCKUP] assumes the 0878 mobile number takes WhatsApp.
  wa: { href: "https://wa.me/6287888642785", mockup: true },
  mapsUrl:
    "https://maps.google.com/?cid=7994190304827646407&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Volks%20Kaffee%2C%20Jl.%20Cipinang%20Jaya%20Blok%20AA%20No.%20B23%2C%20Cipinang%20Besar%20Selatan%2C%20Jatinegara%2C%20Jakarta%20Timur%2013410&z=16&output=embed",
  rating: { value: "4,6", count: 501 },
  // 0 = Minggu ... 6 = Sabtu. Sunday closed (listing hours).
  hours: [
    { day: 1, open: "15.30", close: "23.00" },
    { day: 2, open: "15.30", close: "23.00" },
    { day: 3, open: "15.30", close: "23.00" },
    { day: 4, open: "15.30", close: "23.00" },
    { day: 5, open: "15.30", close: "23.00" },
    { day: 6, open: "15.30", close: "23.00" },
  ],
};

// Grouped rows for the hours table (same data as shop.hours).
export const hoursRows = [
  { label: "Senin–Sabtu", days: [1, 2, 3, 4, 5, 6], value: "15.30–23.00", closed: false },
  { label: "Minggu", days: [0], value: "Tutup", closed: true },
];

export const hero = {
  line: mockup("Kopi racikan sendiri, dari sore sampai malam, di Cipinang Jaya."),
  status: {
    open: "Buka hari ini 15.30–23.00",
    closed: "Hari ini tutup — buka lagi Senin 15.30",
    generic: "Senin–Sabtu 15.30–23.00",
  },
};

export const buttons = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
  mapsLink: "Buka di Google Maps",
};

export type ArtId = "iceChocoMint" | "kopi" | "brownie" | "sandwich";

export type Featured = { id: ArtId; name: Item; desc: Item; price: Item; artLabel: string };

export const menu = {
  title: "Menu andalan",
  // description + reviews 1, 5
  intro: fact(
    "Minuman kopi yang suka bereksperimen, camilan dan makanan ringan ala kafe, dengan harga yang tetap bersahabat.",
  ),
  featured: [
    {
      id: "iceChocoMint",
      name: fact("Ice Choco Mint"), // review 4
      desc: mockup("Cokelat pekat di dasar gelas, susu mint segar di atasnya, dan banyak es."),
      price: mockup("Rp 28rb"),
      artLabel: "Ilustrasi Ice Choco Mint: gelas tinggi berisi cokelat, susu mint, dan es batu",
    },
    {
      id: "kopi",
      name: mockup("Kopi racikan"), // label for the listing's "inventive coffee drinks"
      desc: fact("Minuman kopi kreatif, dan baristanya mau menyesuaikan racikan dengan seleramu."), // description, review 1
      price: mockup("Rp 20rb–32rb"),
      artLabel: "Ilustrasi secangkir kopi hitam dengan crema di atas piring kecil",
    },
    {
      id: "brownie",
      name: fact("Marshmallow Brownie"), // review 4
      desc: mockup("Brownies cokelat yang padat dengan marshmallow panggang di atasnya."),
      price: mockup("Rp 25rb"),
      artLabel: "Ilustrasi Marshmallow Brownie dengan tiga marshmallow panggang di atas piring bermotif bunga",
    },
    {
      id: "sandwich",
      name: fact("Smoked Beef Sandwich"), // photos
      desc: fact("Roti panggang isi smoked beef, selada, tomat, dan keju."), // photos
      price: mockup("Rp 35rb"),
      artLabel: "Ilustrasi Smoked Beef Sandwich, dua potong roti panggang di atas piring putih bermotif bunga",
    },
  ] satisfies Featured[],
  groups: [
    {
      title: "Kopi",
      note: mockup("Rp 20rb–32rb"),
      items: [
        mockup("Espresso"),
        mockup("Americano"),
        mockup("Cappuccino"),
        mockup("Caffe Latte"),
        mockup("Es Kopi Susu Gula Aren"),
        mockup("Kopi Tubruk"),
        mockup("V60 (manual brew)"),
      ],
    },
    {
      title: "Non-kopi",
      note: null,
      items: [
        fact("Ice Choco Mint"), // review 4
        mockup("Chocolate"),
        mockup("Matcha Latte"),
        mockup("Lychee Tea"),
      ],
    },
    {
      title: "Makanan",
      note: null,
      items: [
        fact("Smoked Beef Sandwich"), // photos
        fact("Marshmallow Brownie"), // review 4
        mockup("Kentang Goreng"),
        mockup("Roti Bakar"),
        mockup("Chicken Wings"),
        mockup("Pisang Goreng Keju"),
      ],
    },
  ],
  disclaimer: mockup("Daftar menu dan harga ini masih contoh, menunggu konfirmasi dari Volks Kaffee."),
};

// Review 1: baristas remember regulars, know their coffee, tune drinks to taste. No names.
export const barista = {
  title: "Kopi sesuai seleramu",
  lead: fact("Setelah beberapa kali mampir, baristanya sudah hafal pesananmu."),
  body: fact(
    "Mereka paham kopi dan senang diajak ngobrol soal biji dan cara seduhnya. Mau lebih manis, lebih pekat, atau lebih ringan? Bilang saja, racikannya disesuaikan.",
  ),
  slipLabel: "Pesanan",
  slip: [
    fact("Hafal pesanan langganan"),
    fact("Paham kopi, senang diajak ngobrol"),
    fact("Racikan disesuaikan seleramu"),
  ],
};

export const suasana = {
  title: "Suasana",
  intro: mockup(
    "Rasanya seperti nongkrong di teras rumah teman — yang kebetulan punya mesin espresso enak.",
  ),
  items: [
    {
      title: fact("Teras penuh tanaman"), // photos
      body: fact(
        "Teras rumah berdinding bata merah, tanaman di setiap sudut, dan kursi yang campur-campur: kursi lipat putih, kursi bambu, kursi besi.",
      ),
    },
    {
      title: fact("Musiknya pas"), // review 5
      body: fact(
        "Musik mengalun pelan di latar, enak buat ngobrol bareng teman atau santai sendirian.",
      ),
    },
    {
      title: mockup("Ada kucing"), // review 3; kept flagged until the owner confirms
      body: mockup("Kucing-kucing penghuni rumah suka ikut nongkrong. Siap-siap senyum sendiri."),
    },
  ],
  friezeLabel:
    "Ilustrasi teras Volks Kaffee di malam hari: tanaman dalam pot, kursi bambu, kursi lipat putih, kursi besi, lampu gantung, dan seekor kucing",
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise = {
  title: "Kata mereka",
  rating: `${shop.rating.value} dari ${shop.rating.count} ulasan di Google`,
  items: [
    fact("Baristanya ramah, paham kopi, dan cepat hafal pelanggan."), // review 1
    fact("Harganya bersahabat, pilihan kopi dan camilannya lumayan banyak."), // reviews 1, 5
    fact("Tempatnya nyaman, bikin betah duduk lama."), // review 3
    fact("Pas buat nongkrong bareng teman, atau berdua saja."), // reviews 1, 3, 4
  ],
  note: "Dirangkum dari ulasan pengunjung di Google.",
};

export const visit = {
  title: "Kunjungi kami",
  wayfinding: fact(
    "Cari pagar hijau dengan kanopi marun bertuliskan Volks Kaffee, dan nomor B23 di tiang bata sebelahnya.",
  ), // photos
  hoursCaption: "Jam buka",
  todayTag: "Hari ini",
  parking: mockup("Parkir motor langsung di depan pagar."),
  mapTitle: "Peta lokasi Volks Kaffee",
};

export const contact = {
  title: "Hubungi kami",
  line: fact("Mampir aja, nanti baristanya hafal pesananmu."), // tone line, review 1
  footer: `${shop.name} · Jl. Cipinang Jaya Blok AA No. B23, Jatinegara, Jakarta Timur · Senin–Sabtu 15.30–23.00, Minggu tutup`,
};
