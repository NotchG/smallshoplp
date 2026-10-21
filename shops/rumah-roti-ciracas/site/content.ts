// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Copy is Bahasa Indonesia, word for word from docs/prd.md.

export type Item = { text: string; mockup?: boolean };
export type Photo = { src: string; alt: string; width: number; height: number };
export type Product = { id: string; name: Item; price?: Item; desc: Item; photo: Photo };

export const shop = {
  name: "Rumah Roti Ciracas",
  type: "Toko roti",
  address: "Jl. Masjid Al-Ishlah No. 20, Susukan, Ciracas, Jakarta Timur 13750",
  addressShort: "Jl. Masjid Al-Ishlah No. 20, Susukan, Ciracas",
  phoneDisplay: "0838-9818-8891",
  tel: "tel:+6283898188891",
  wa: "https://wa.me/6283898188891",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Rumah%20Roti%20Ciracas&destination_place_id=ChIJTagUebjtaS4RcqTIjCibZpM",
  mapsUrl: "https://maps.google.com/?cid=10621347369662850162",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Rumah%20Roti%20Ciracas%2C%20Jl.%20Masjid%20Al-Ishlah%20No.%2020%2C%20Susukan%2C%20Ciracas%2C%20Jakarta%20Timur&output=embed",
  hours: [
    { days: "Senin–Sabtu", time: "08.10–19.10" },
    { days: "Minggu", time: "Tutup" },
  ],
  rating: { value: "4,9", count: 736 },
};

/** WhatsApp link, optionally with a prefilled message. */
export function waLink(message?: Item) {
  return message ? `${shop.wa}?text=${encodeURIComponent(message.text)}` : shop.wa;
}

export const meta = {
  title: "Rumah Roti Ciracas, toko roti di Susukan, Ciracas",
  description:
    "Roti lembut, roti bentuk lucu, roti buaya dan kue ulang tahun pesanan. Senin–Sabtu 08.10–19.10.",
};

export const banner =
  "Draf mockup untuk Rumah Roti Ciracas. Beberapa detail masih contoh sampai dikonfirmasi pemilik.";

export const skipLink = "Langsung ke konten";

// Hours as listed on Google (hours). The :10 times are shown exactly as listed.
export const hoursText = {
  summary: "Senin–Sabtu 08.10–19.10 · Minggu tutup",
  openToday: "Buka hari ini 08.10–19.10",
  closedToday: "Hari ini tutup · Buka lagi Senin 08.10",
  todayTag: "hari ini",
};

// The shop's own logo sticker, as printed on its cakes and bread bags (photos).
export const sticker = {
  script: "Rumah Roti",
  place: "CIRACAS",
  number: "0838 9818 8891",
  label: "Chat WhatsApp Rumah Roti Ciracas, 0838-9818-8891",
};

export const actions = {
  wa: "WhatsApp",
  directions: "Petunjuk Arah",
  call: "Telepon",
};

export const hero = {
  line: { text: "Roti lembut dan kue pesanan, dipanggang setiap hari di Ciracas.", mockup: true } as Item,
  photo: {
    src: "/img/kura-kura.jpg",
    alt: "Roti kura-kura dengan cangkang hijau dan wajah cokelat di atas loyang",
    width: 1400,
    height: 1051,
  } as Photo,
  photoLabel: { text: "Roti Kura-Kura", mockup: true } as Item,
};

export const etalase = {
  heading: "Etalase kami",
  lead: { text: "Roti sehari-hari dengan harga bersahabat." } as Item,
  products: [
    {
      id: "garlic-cheese",
      name: { text: "Roti Garlic Cheese", mockup: true },
      price: { text: "Rp 10rb", mockup: true },
      desc: {
        text: "Roti bulat dipotong enam, isi krim keju, olesan mentega bawang putih dan peterseli.",
      },
      photo: {
        src: "/img/garlic-cheese.jpg",
        alt: "Roti garlic cheese bulat yang dipotong enam, berisi krim keju dan bertabur peterseli, di atas loyang",
        width: 800,
        height: 600,
      },
    },
    {
      id: "pizza",
      name: { text: "Roti Pizza", mockup: true },
      price: { text: "Rp 45rb per loyang", mockup: true },
      desc: { text: "Satu loyang dengan sosis, keju, saus tomat dan mayones." },
      photo: {
        src: "/img/pizza.jpg",
        alt: "Satu loyang roti pizza dengan sosis, keju, saus tomat dan mayones di dalam oven",
        width: 800,
        height: 600,
      },
    },
    {
      id: "muffin-tawar",
      name: { text: "Muffin & Roti Tawar", mockup: true },
      desc: { text: "Muffin dalam cup cokelat dan roti tawar tinggi." },
      photo: {
        src: "/img/muffin-tawar.jpg",
        alt: "Deretan muffin dalam cup kertas cokelat dan dua roti tawar tinggi di atas loyang",
        width: 800,
        height: 600,
      },
    },
  ] as Product[],
  // "Juga ada Roti Krim ... dan roti manis harian Rp 3rb–8rb." Split so only the mockup parts are flagged.
  also: [
    { text: "Juga ada " },
    { text: "Roti Krim", mockup: true },
    { text: " dengan taburan crumble dan isian krim, dan roti manis harian " },
    { text: "Rp 3rb–8rb", mockup: true },
    { text: "." },
  ] as Item[],
};

export const rotiBuaya = {
  heading: "Roti buaya untuk hari bahagia",
  body: {
    text: "Roti buaya sepasang, dibungkus plastik bening dengan pita merah muda, untuk seserahan pernikahan dan lamaran. Ada juga roti buaya kecil bertabur meses cokelat.",
  } as Item,
  labelPair: { text: "Roti Buaya (sepasang)", mockup: true } as Item,
  labelSmall: { text: "Roti buaya kecil" } as Item,
  preorder: { text: "Mulai Rp 150rb sepasang · pesan 2–3 hari sebelumnya lewat WhatsApp.", mockup: true } as Item,
  button: { text: "Pesan roti buaya", mockup: true } as Item,
  waMessage: {
    text: "Halo Rumah Roti Ciracas, saya mau pesan roti buaya sepasang. Untuk tanggal berapa saja bisa?",
    mockup: true,
  } as Item,
  photo: {
    src: "/img/roti-buaya.jpg",
    alt: "Dua pasang roti buaya besar dibungkus plastik bening dengan pita merah muda, di atas loyang berisi roti buaya kecil bertabur meses cokelat",
    width: 910,
    height: 569,
  } as Photo,
};

export const kue = {
  heading: "Kue ulang tahun",
  body: { text: "Dihias sesuai pesanan: cokelat, stroberi, krim, sampai topper ucapan." } as Item,
  preorder: { text: "Mulai Rp 150rb · pesan 2–3 hari sebelumnya lewat WhatsApp.", mockup: true } as Item,
  button: { text: "Pesan kue ulang tahun", mockup: true } as Item,
  waMessage: {
    text: "Halo Rumah Roti Ciracas, saya mau pesan kue ulang tahun. Bisa dibantu?",
    mockup: true,
  } as Item,
  stroberi: {
    photo: {
      src: "/img/kue-stroberi.jpg",
      alt: "Kue ulang tahun merah muda dengan lelehan cokelat putih, krim dan stroberi segar di atas marmer putih",
      width: 1200,
      height: 1200,
    } as Photo,
    caption: "Kue stroberi dengan lelehan cokelat putih, krim dan stroberi segar",
  },
  cokelat: {
    photo: {
      src: "/img/kue-cokelat.jpg",
      alt: "Kue cokelat dengan serutan cokelat putih, ceri merah dan topper Happy Birthday",
      width: 1000,
      height: 500,
    } as Photo,
    caption: "Kue cokelat dengan serutan cokelat putih dan ceri",
  },
};

// Paraphrased from the five Google reviews. Never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  rating: `${shop.rating.value} dari ${shop.rating.count} ulasan di Google`,
  note: "Diringkas dari ulasan Google.",
  items: [
    { text: "Rotinya berkualitas, pelayanannya ramah, dan sangat sepadan dengan harganya." },
    { text: "Tampilannya cantik seperti foto makanan di Instagram, dan rasanya sama enaknya." },
    { text: "Teksturnya bikin jatuh hati." },
    { text: "Rasanya enak, rotinya juara." },
  ] as Item[],
};

export const visit = {
  heading: "Kunjungi kami",
  mapTitle: "Peta lokasi Rumah Roti Ciracas",
  mapLink: "Buka di Google Maps",
  mapLoading: "Peta dari Google Maps",
  hoursCaption: "Jam buka",
  photo: {
    src: "/img/tampak-depan.jpg",
    alt: "Tampak depan toko dengan papan nama Rumah Roti Ciracas, tenda bergaris, etalase kaca dan tangga putar hitam",
    width: 628,
    height: 410,
  } as Photo,
  caption: "Tampak depan toko",
};

export const contact = {
  heading: "Hubungi kami",
  lead: { text: "Mau pesan roti buaya atau kue ulang tahun? Chat kami aja.", mockup: true } as Item,
  waButton: `WhatsApp ${shop.phoneDisplay}`,
};

export const footer = {
  script: "Rumah Roti",
  note: "Situs ini masih draf (mockup) dan belum dipublikasikan.",
};
