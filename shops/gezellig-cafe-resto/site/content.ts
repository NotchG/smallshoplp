// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Dutch words are wrapped in _underscores_ and render as Delft italics with lang="nl".
// Never in this file: reviewer names, quoted review text, the word for the coffee's flavour
// (pending the owner's answer), an Instagram handle.

export type Item = { text: string; mockup?: boolean };

export type DishArtKey = "koftaJoppie" | "uitsmijter" | "garangAsem" | "pisangGoreng";

export type Dish = {
  name: Item; // exact shop spelling
  price?: Item; // every price is an example until the owner confirms
  desc?: Item;
  art?: DishArtKey; // illustrated dishes only
};

export const shop = {
  name: "Gezellig Cafe & Resto",
  shortName: "Gezellig",
  type: "Kafe & restoran",
  address: "Jl. Pemuda No.74, Jati, Pulo Gadung, Jakarta Timur 13220",
  addressShort: "Jl. Pemuda No.74 · Pulo Gadung, Jakarta Timur",
  phone: "0851-5515-9411",
  tel: "tel:+6285155159411",
  whatsapp: { url: "https://wa.me/6285155159411", mockup: true },
  mapsUrl: "https://maps.google.com/?cid=12244289444784729651",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Gezellig+Cafe+%26+Resto&destination_place_id=ChIJ15yoLQD1aS4RM251g2B07Kk",
  mapEmbed:
    "https://www.google.com/maps?q=Gezellig+Cafe+%26+Resto,+Jl.+Pemuda+No.74,+Pulo+Gadung,+Jakarta+Timur&output=embed",
  hours: [{ days: "Senin–Minggu", time: "09.00–23.00" }],
  hoursNote: "Buka setiap hari",
  todayLine: "Buka hari ini · 09.00–23.00",
  rating: { value: "4,7", count: 361 },
  priceLevel: "Harga sedang",
};

export const meta = {
  title: "Gezellig Cafe & Resto · Hidangan Belanda & Nusantara di Jl. Pemuda, Jakarta Timur",
  description:
    "Kafe dan restoran bergaya rumah Belanda di Jl. Pemuda No.74, Pulo Gadung. Buka setiap hari 09.00–23.00.",
};

export const banner =
  "Draf mockup untuk Gezellig Cafe & Resto. Beberapa detail masih contoh sampai Anda konfirmasi.";

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  chat: "Chat WhatsApp",
  call: "Telepon",
};

export const hero = {
  name: "Gezellig",
  sub: "Cafe & Resto",
  tagline: { text: "Hidangan Belanda & Nusantara dalam suasana rumah tua yang hangat", mockup: true } as Item,
  windowLabel: "Ilustrasi jendela Gezellig di malam hari, lampu gantung menyala",
};

export const intro = {
  heading: "Apa itu gezellig?",
  meaning: {
    text: "_Gezellig_ adalah kata Belanda untuk rasa hangat, nyaman, dan kebersamaan: perasaan saat duduk lama bersama orang tersayang.",
    mockup: true,
  } as Item,
  house: {
    text: "Begitu masuk, ruangannya terasa seperti rumah tua. Ada lampu gantung yang cantik, ornamen khas Belanda, lukisan di dinding, bunga tulip, sampai kincir angin mini. Bersih, nyaman, dan enak untuk mengobrol lama.",
  } as Item,
  closing: { text: "Duduk santai, pesan _uitsmijter_, dan biarkan sore berjalan pelan.", mockup: true } as Item,
};

export const menu = {
  heading: "Menu andalan",
  intro: {
    text: "Masakan Belanda dan hidangan Nusantara di satu meja.",
  } as Item,
  indische: {
    text: "Dapur bergaya Indische, tempat resep rumahan Belanda bertemu bumbu Jawa.",
    mockup: true,
  } as Item,
  belanda: {
    label: "Dari Belanda",
    featured: [
      {
        name: { text: "Gezellig Kofta Joppie" },
        price: { text: "Rp 58rb", mockup: true },
        desc: { text: "Daging sapi goreng bersaus, dengan nasi, salad, acar, dan bawang." },
        art: "koftaJoppie",
      },
      {
        name: { text: "Uitsmijter" },
        price: { text: "Rp 55rb", mockup: true },
        desc: {
          text: "Sarapan besar ala Belanda: telur ceplok, roti, smoked beef, jamur champignon, dan sayur, ditumis mentega. Bisa pedas.",
        },
        art: "uitsmijter",
      },
    ] as Dish[],
    list: [
      {
        name: { text: "Bitterballen", mockup: true },
        price: { text: "Rp 35rb", mockup: true },
        desc: { text: "Bola ragout sapi goreng yang renyah, camilan khas kafe Belanda.", mockup: true },
      },
      {
        name: { text: "Poffertjes", mockup: true },
        price: { text: "Rp 32rb", mockup: true },
        desc: { text: "Pancake mini Belanda dengan mentega dan gula halus.", mockup: true },
      },
    ] as Dish[],
  },
  nusantara: {
    label: "Dari Nusantara",
    featured: [
      {
        name: { text: "Garang Asem" },
        price: { text: "Rp 52rb", mockup: true },
        desc: { text: "Hidangan Jawa berkuah asam pedas, yang menurut tamu terasa autentik." },
        art: "garangAsem",
      },
      {
        name: { text: "Pisang Goreng" },
        price: { text: "Rp 25rb", mockup: true },
        desc: { text: "Pisang goreng hangat, teman minum sore." },
        art: "pisangGoreng",
      },
    ] as Dish[],
    list: [
      {
        name: { text: "Bistik Jawa", mockup: true },
        desc: { text: "Daging sapi dengan kuah kecap manis dan sayuran.", mockup: true },
      },
      {
        name: { text: "Nasi Goreng Gezellig", mockup: true },
        desc: { text: "Nasi goreng spesial rumah, dengan telur ceplok.", mockup: true },
      },
    ] as Dish[],
  },
  more: {
    label: "Juga di menu",
    items: [
      {
        name: { text: "Spaghetti Arrabbiata" },
        price: { text: "Rp 48rb", mockup: true },
        desc: { text: "Spageti dengan saus tomat pedas." },
      },
    ] as Dish[],
  },
  drinks: {
    label: "Minuman",
    items: [
      {
        name: { text: "Koffie Gezellig", mockup: true },
        price: { text: "Rp 32rb", mockup: true },
        desc: { text: "Kopi racikan rumah, tanpa alkohol.", mockup: true },
      },
      {
        name: { text: "Strawberry Mojito (non-alkohol)", mockup: true },
        price: { text: "Rp 30rb", mockup: true },
      },
      {
        name: { text: "Es Teh Manis", mockup: true },
        price: { text: "Rp 15rb", mockup: true },
      },
    ] as Dish[],
  },
  caption: {
    text: "Ilustrasi dan harga masih contoh. Foto hidangan dan harga asli menyusul dari Gezellig.",
    mockup: true,
  } as Item,
  priceLevel: "Harga sedang",
};

export const zones = {
  heading: "Suasana",
  lead: {
    text: "Rumah tua bergaya Belanda, dengan ruang dalam yang tenang dan teras untuk yang ingin bersantai di luar.",
  } as Item,
  frameLabel: { text: "Foto dari pemilik: ruang lampu gantung", mockup: true } as Item,
  items: [
    {
      label: "Ruang dalam",
      title: { text: "Bebas asap rokok" } as Item,
      body: { text: "Lampu gantung, ornamen Belanda, dan lukisan di dinding." } as Item,
    },
    {
      label: "Teras luar",
      title: { text: "Area merokok" } as Item,
      body: { text: "Sebagian terbuka, sebagian beratap." } as Item,
    },
    {
      label: "Live music",
      title: { text: "Jumat & Sabtu malam", mockup: true } as Item,
      body: { text: "Musik live menemani makan malam Anda." } as Item,
    },
    {
      label: "Parkir",
      title: { text: "Parkiran luas" } as Item,
      body: { text: "Mudah untuk yang datang bermobil bersama keluarga." } as Item,
    },
  ],
};

export const celebrate = {
  heading: "Rayakan di sini",
  lead: { text: "Rayakan momen spesial Anda di rumah bergaya Belanda di Jl. Pemuda.", mockup: true } as Item,
  occasions: [
    {
      title: "Ulang tahun & makan malam romantis",
      body: "Suasananya estetik dan intim, pas untuk merayakan berdua.",
    },
    {
      title: "Reuni teman lama",
      body: "Tempat yang nyaman untuk mengobrol lama dan bertukar cerita.",
    },
    {
      title: "Kumpul keluarga & teman",
      body: "Menu Belanda dan Nusantara, jadi semua orang menemukan favoritnya.",
    },
  ],
  card: {
    word: "Gereserveerd",
    gloss: "Bahasa Belanda untuk “sudah dipesan”.",
    copy: {
      text: "Pesan meja atau acara kecil, seperti ulang tahun dan arisan, lewat WhatsApp.",
      mockup: true,
    } as Item,
    cta: "Pesan via WhatsApp",
  },
};

// Paraphrased from real reviews only. Never invented, never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  ratingLine: `${shop.rating.value} dari ${shop.rating.count} ulasan di Google`,
  note: "Ringkasan dari ulasan tamu di Google, bukan kutipan.",
  themes: [
    {
      title: "Rumah bergaya Belanda yang hangat",
      detail:
        "Tamu menyukai lampu gantung, ornamen Belanda, tulip, dan kincir angin mininya. Rasanya seperti makan di rumah tua.",
    },
    {
      title: "Masakan enak, Belanda maupun Nusantara",
      detail: "Dari Kofta Joppie dan uitsmijter sampai garang asem, rasanya dipuji tamu.",
    },
    {
      title: "Pelayanan ramah dan cepat",
      detail: "Banyak yang menyebut stafnya ramah, sigap, dan penuh perhatian.",
    },
    {
      title: "Berkesan, dan sepadan harganya",
      detail: "Pilihan tamu untuk merayakan momen spesial, dengan harga yang wajar untuk kualitasnya.",
    },
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  addressLabel: "Alamat",
  hoursLabel: "Jam buka",
  parkingLabel: "Parkir",
  parking: "Parkiran luas, cukup untuk mobil rombongan.",
  mapTitle: "Peta lokasi Gezellig Cafe & Resto",
  mapLoading: "Memuat peta…",
  mapFallback: "Peta tidak muncul? Buka di Google Maps",
};

export const contact = {
  heading: "Hubungi kami",
  phoneLabel: "Telepon & WhatsApp",
  coaster: "Gezellig",
  footerNote: "Draf mockup, belum dipublikasikan.",
};
