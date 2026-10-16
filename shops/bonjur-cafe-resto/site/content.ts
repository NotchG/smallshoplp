// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia. Dish names stay as the shop writes them.

export type Item = { text: string; mockup?: boolean };

export const meta = {
  title: "Bonjur Cafe & Resto · Pondok Kelapa, Jakarta Timur",
  description:
    "Kafe & resto keluarga di Komp. Billy Moon, Pondok Kelapa. Buka setiap hari mulai 07.00.",
  banner:
    "Draf mockup untuk Bonjur Cafe & Resto. Teks bergaris putus-putus masih contoh sampai Anda konfirmasi.",
  skip: "Langsung ke isi halaman",
};

// Facts from the Google listing (raw.json).
export const shop = {
  name: "Bonjur Cafe & Resto",
  short: "Bonjur",
  rest: "Cafe & Resto",
  type: "Kafe & restoran",
  address: {
    complex: "Komp. Billy Moon",
    street: "Janur 1 No. 8, Blok CF 1",
    area: "Pondok Kelapa, Duren Sawit, Jakarta Timur 13450",
  },
  shortAddress: "Komp. Billy Moon, Pondok Kelapa",
  phone: "0858-9139-6021",
  tel: "+6285891396021",
  mapsUrl: "https://maps.google.com/?cid=2395911994470289058",
  mapEmbed:
    "https://www.google.com/maps?q=Bonjur+Cafe+%26+Resto,+Komp.+Billy+Moon,+Pondok+Kelapa,+Jakarta+Timur&output=embed",
  mapTitle: "Peta lokasi Bonjur Cafe & Resto",
  whatsapp: { url: "https://wa.me/6285891396021", mockup: true },
};

// raw.json periods: every day opens 07:00; Mon–Fri close 22:00, Sat–Sun (day 6 and 0) close 23:00.
export const hours = {
  open: 7,
  closeWeekday: 22,
  closeWeekend: 23,
  tz: "Asia/Jakarta",
  rows: [
    { days: "Senin–Jumat", time: "07.00–22.00", late: false },
    { days: "Sabtu–Minggu", time: "07.00–23.00", late: true },
  ],
  lateTag: "lebih malam",
  // Static (no-JS) lines on the day bar; together they read "Setiap hari 07.00–22.00 · Sabtu–Minggu sampai 23.00".
  everyDay: "Setiap hari 07.00–22.00",
  weekendNote: "Sabtu–Minggu sampai 23.00",
  // Fixed Indonesian day names, Sunday first (Date.getDay order), not locale-dependent.
  dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
  status: {
    open: "Buka sekarang",
    openRest: (close: number) => `tutup ${close}.00`,
    before: "Belum buka",
    beforeRest: "buka jam 07.00",
    after: "Sudah tutup",
    afterRest: "besok buka jam 07.00",
  },
  today: (day: string, close: number) => `Hari ini ${day} · 07.00–${close}.00`,
};

export const actions = {
  directions: "Petunjuk Arah",
  call: "Telepon",
  whatsapp: "WhatsApp",
  menu: "Lihat menu",
};

export const hero = {
  greeting: { text: "Bonjur! Sarapan sudah siap dari jam 7.", mockup: true } as Item,
  place: "Komp. Billy Moon, Pondok Kelapa · Jakarta Timur",
  photo: {
    src: "/photos/owner-1.jpg",
    width: 1280,
    height: 720,
    alt: "Ruang makan Bonjur berdinding kaca, dengan dinding tanaman hijau, lampu kristal dan kursi kayu",
    caption: "Ruang makan berdinding kaca",
  },
};

export const dayParts = {
  title: "Dari pagi sampai malam",
  intro: "Buka setiap hari mulai jam 7 pagi.",
  pagi: {
    name: "Pagi",
    time: "mulai 07.00",
    title: { text: "Sarapan dulu sebelum berangkat", mockup: true } as Item,
    items: [
      { text: "Bubur ayam", mockup: true },
      { text: "Nasi uduk", mockup: true },
      { text: "Roti bakar", mockup: true },
      { text: "Kopi susu", mockup: true },
    ] as Item[],
  },
  siang: {
    name: "Siang",
    title: { text: "Makan siang bareng keluarga", mockup: true } as Item,
    body: { text: "Beef Teriyaki, kopi, dan makanan berat lainnya. Semua ada di satu tempat." } as Item,
  },
  malam: {
    name: "Malam",
    time: "sampai 22.00",
    weekend: "Sabtu–Minggu sampai 23.00",
    body: {
      text: "Lampu-lampu taman menyala di halaman rumput. Rooftop-nya terbuka dan berangin, paling cantik waktu malam.",
    } as Item,
  },
};

export type MenuCategory = {
  name: string;
  from: Item;
  desc?: Item;
  items: (Item & { strong?: boolean })[];
  art: "teriyaki" | "fries" | "kopi";
};

export const menu = {
  title: "Menu andalan",
  lead: { text: "Pilihan pertama: Beef Teriyaki, yang kata tamu enak banget." } as Item,
  featuredCaption: "Beef Teriyaki · ilustrasi",
  categories: [
    {
      name: "Makanan berat",
      from: { text: "mulai Rp 35rb", mockup: true },
      items: [
        { text: "Beef Teriyaki", strong: true },
        { text: "Chicken Katsu", mockup: true },
        { text: "Ayam Geprek", mockup: true },
        { text: "Nasi Goreng Bonjur", mockup: true },
      ],
      art: "teriyaki",
    },
    {
      name: "Camilan",
      from: { text: "mulai Rp 20rb", mockup: true },
      desc: { text: "Kentang goreng di keranjang kawat, onion rings, saus tomat dan mayo." },
      items: [
        { text: "French Fries", strong: true },
        { text: "Onion Rings", strong: true },
        { text: "Pisang Goreng", mockup: true },
        { text: "Cireng", mockup: true },
        { text: "Tahu Crispy", mockup: true },
      ],
      art: "fries",
    },
    {
      name: "Kopi & minuman",
      from: { text: "mulai Rp 22rb", mockup: true },
      desc: { text: "Mau ngopi atau makan berat, semuanya ada." },
      items: [
        { text: "Es Kopi Susu Gula Aren", mockup: true },
        { text: "Cappuccino", mockup: true },
        { text: "Teh Tarik", mockup: true },
        { text: "Jus Buah Segar", mockup: true },
      ],
      art: "kopi",
    },
  ] as MenuCategory[],
  note: { text: "Harga contoh, menunggu harga resmi dari Bonjur.", mockup: true } as Item,
};

export const art = {
  teriyaki: "Semangkuk Beef Teriyaki: nasi putih dengan irisan daging berbumbu teriyaki, wijen dan daun bawang (ilustrasi)",
  fries: "Kentang goreng di keranjang kawat, onion rings di piring putih, dan cangkir saus tomat dengan mayo (ilustrasi)",
  kopi: "Secangkir kopi di cangkir putih bergaris biru (ilustrasi)",
  bubur: "Semangkuk bubur ayam dengan suwiran ayam, cakwe, kerupuk dan daun bawang (ilustrasi)",
  exampleTag: "contoh",
};

export const spaces = {
  title: "Ruang di Bonjur",
  lead: { text: "Pilih sudut favoritmu.", mockup: true } as Item,
  photo: {
    src: "/photos/owner-2.jpg",
    width: 1280,
    height: 958,
    alt: "Teras depan Bonjur di bawah tenda bergaris merah dan biru, dengan pot-pot palem",
    caption: "Teras depan: tenda bergaris merah-biru, pot-pot palem dan paving bata.",
  },
  tiles: [
    {
      name: "Ruang kaca",
      text: { text: "Dinding kaca, dinding tanaman hijau, lampu kristal dan kursi kayu." } as Item,
      tone: "green",
    },
    {
      name: "Taman",
      text: { text: "Halaman rumput dengan lampu-lampu gantung." } as Item,
      tone: "tile",
    },
    {
      name: "Rooftop",
      text: { text: "Terbuka, tenang dan berangin. Paling cantik waktu malam." } as Item,
      tone: "ink",
    },
  ] as { name: string; text: Item; tone: "green" | "tile" | "ink" }[],
};

// Whole section is [MOCKUP]: the reviews naming these are ~5 years old.
// Set show: false if the owner says the rabbit area and fish pond are gone.
export const family = {
  show: true,
  mockup: true,
  title: "Seru untuk keluarga",
  lead: {
    text: "Ajak keluarga. Anak-anak bisa lihat kelinci dan ikan, orang tua parkir dengan tenang.",
    mockup: true,
  } as Item,
  items: [
    { icon: "rabbit", name: { text: "Area kelinci", mockup: true }, text: "Kelinci-kelinci di area mereka sendiri." },
    { icon: "fish", name: { text: "Kolam ikan", mockup: true }, text: "Kolam untuk melihat ikan berenang." },
    { icon: "car", name: { text: "Parkir luas" }, text: "Tempat parkir mobil yang lega." },
  ] as { icon: "rabbit" | "fish" | "car"; name: Item; text: string }[],
};

// Paraphrased from real Google reviews only. Never quoted, never attributed to a name.
export const praise = {
  title: "Kata mereka",
  rating: "4,4",
  count: 546,
  ratingLine: (rating: string, count: number) => `${rating} di Google · ${count} ulasan`,
  items: [
    { text: "Rooftop-nya terbuka, tenang dan berangin. Malam hari paling cantik." }, // review 1
    { text: "Tempatnya bersih, pelayanan dan fasilitasnya baik, parkirnya luas." }, // review 2
    { text: "Beef teriyaki-nya enak banget." }, // review 3
    { text: "Suasananya enak dan stafnya ramah." }, // review 5
  ] as Item[],
  note: "Diringkas dari ulasan Google, bukan kutipan langsung.",
};

export const visit = {
  title: "Kunjungi kami",
  parking: "Parkir luas.",
  hoursCaption: "Jam buka",
};

export const contact = {
  title: "Hubungi kami",
  lead: { text: "Mau pesan tempat untuk acara keluarga?", mockup: true } as Item,
  phoneLabel: "Nomor telepon",
};

export const footer = {
  draft: "Draf mockup · teks bergaris putus-putus masih contoh.",
};
