// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia. Dish names stay exactly as printed on the shop's menu.

export type Item = { text: string; mockup?: boolean };

export type Hours = { days: string; time: string; dow: number[] };

export const shop = {
  name: "De 92 Degrees", // [MOCKUP] page name; listing says "92 Degrees Coffee & Resto"
  nameMockup: true,
  listingName: "92 Degrees Coffee & Resto",
  tagline: "Coffee, Food & Music", // from the shop's own logo
  type: "Kafe & resto",
  address:
    "Jl. Delima Raya No.6, RT.1/RW.5, Malaka Sari, Kec. Duren Sawit, Kota Jakarta Timur, DKI Jakarta 13460",
  addressShort: "Jl. Delima Raya No.6, Malaka Sari, Duren Sawit, Jakarta Timur 13460",
  addressLine: "Jl. Delima Raya No.6, Malaka Sari, Duren Sawit",
  phone: "0852-8556-0957",
  phoneHref: "tel:+6285285560957",
  whatsapp: {
    url: "https://wa.me/6285285560957?text=Halo%20De%2092%20Degrees%2C%20saya%20mau%20tanya%20reservasi.",
    mockup: true,
  },
  mapsUrl: "https://maps.google.com/?cid=15899200581667606145",
  mapEmbed:
    "https://maps.google.com/maps?q=92%20Degrees%20Coffee%20%26%20Resto%2C%20Jl.%20Delima%20Raya%20No.6%2C%20Malaka%20Sari%2C%20Duren%20Sawit&z=16&output=embed",
  instagram: "de92degrees",
  instagramUrl: "https://www.instagram.com/de92degrees/",
  hours: [
    { days: "Senin–Kamis", time: "09.00–22.00", dow: [1, 2, 3, 4] },
    { days: "Jumat–Sabtu", time: "09.00–23.00", dow: [5, 6] },
    { days: "Minggu", time: "09.00–22.00", dow: [0] },
  ] as Hours[],
  openDaily: "Buka setiap hari",
};

export const meta = {
  title: "De 92 Degrees · Coffee, Food & Music di Duren Sawit",
  description:
    "Kafe empat lantai di Jl. Delima Raya No.6, Malaka Sari, Duren Sawit. Buka setiap hari mulai 09.00.",
  banner: "Draf mockup untuk De 92 Degrees. Beberapa detail masih contoh sampai dikonfirmasi.",
  skip: "Langsung ke konten",
};

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "Chat WhatsApp",
  call: "Telepon",
};

export const hero = {
  sub: { text: "Coffee, food & music di Duren Sawit" } as Item,
  todayPrefix: "Buka hari ini",
  todayFallback: "Buka setiap hari mulai 09.00",
  photo: { src: "/photos/hero-interior.jpg", width: 1600, height: 1100 },
  photoAlt:
    "Interior De 92 Degrees: ceruk melengkung dengan cermin bulat dan lampu gantung kuningan, sofa hijau sage, kursi kayu walnut, dan meja panjang kayu dengan colokan di tiap kursi.",
};

export type Floor = {
  n: 2 | 3 | 4;
  name: string;
  tags: string[];
  text: string;
  link?: { href: string; label: string };
  illustration?: { caption: string; mockup: boolean };
};

export const floors = {
  heading: "Empat lantai, satu tempat",
  intro: "Mau kerja tanpa asap rokok? Naik ke lantai 2. Mau lihat sunset? Lantai 4.",
  liftLabel: "Lantai",
  rows: [
    {
      n: 2,
      name: "Lantai 2",
      tags: ["Bebas asap rokok"],
      text: "Satu lantai penuh tanpa asap rokok. Pas buat kerja dari kafe atau nongkrong santai.",
    },
    {
      n: 3,
      name: "Lantai 3",
      tags: ["Smoking indoor", "Ruang acara"],
      text: "Area merokok di dalam ruangan, jadi tetap adem walau siang hari. Di lantai ini juga ada ruang acara untuk sampai 100 orang.",
      link: { href: "#acara", label: "Info acara" },
    },
    {
      n: 4,
      name: "Lantai 4",
      tags: ["Area smoking", "Spot sunset"],
      text: "Area merokok dengan spot terbaik untuk menikmati sunset di sore hari.",
      illustration: {
        caption: "Ilustrasi, foto menyusul",
        mockup: true,
      },
    },
  ] as Floor[],
  facilities: ["Ada lift ke lantai 3 & 4", "Meja panjang dengan colokan di tiap kursi"],
};

export type Dish = {
  name: string;
  price: string;
  desc: string;
  spicy?: boolean;
  img: string;
  alt: string;
};

export const dishes = {
  heading: "Menu andalan",
  intro: "Dari nasi daun jeruk dengan lauk dan sambal, sampai fresh pasta. Harga dalam ribuan rupiah.",
  spicyLabel: "Pedas",
  groups: [
    {
      label: "Nasi & lauk",
      items: [
        {
          name: "Bebek Bangsawan",
          price: "55rb",
          desc: "Bebek goreng berbumbu harum dengan nasi daun jeruk, jukut urap, dan sambal matah.",
          img: "/photos/bebek-bangsawan.jpg",
          alt: "Bebek Bangsawan: bebek goreng, nasi daun jeruk, serundeng, sambal matah, dan sambal di piring batu.",
        },
        {
          name: "Dori Matah with Nasi Daun Jeruk",
          price: "65rb",
          spicy: true,
          desc: "Dori goreng renyah bertabur sambal matah, dengan nasi daun jeruk dan sayuran.",
          img: "/photos/dori-matah.jpg",
          alt: "Dori Matah: fillet dori goreng tepung dengan sambal matah di atas daun pisang, dengan salad dan lemon.",
        },
        {
          name: "Ayam Goreng Bawang",
          price: "45rb",
          desc: "Popcorn ayam renyah berbumbu bawang putih, dengan bawang utuh, daun kari, jukut urap, dan sambal terasi.",
          img: "/photos/ayam-goreng-bawang.jpg",
          alt: "Ayam Goreng Bawang: potongan ayam goreng dengan bawang putih utuh, daun kari, serundeng, dan nasi.",
        },
      ] as Dish[],
    },
    {
      label: "Pasta",
      items: [
        {
          name: "Smoked Beef Ham & Mushroom",
          price: "72rb",
          desc: "Fresh pasta creamy dengan smoked beef, pesto basil, dan jamur. Disajikan dengan cheese stick.",
          img: "/photos/smoked-beef-ham-mushroom.jpg",
          alt: "Smoked Beef Ham & Mushroom: fettuccine saus krim dengan jamur dan daun peterseli, cheese stick di atasnya.",
        },
        {
          name: "Beef Stroganoff",
          price: "72rb",
          desc: "Fettuccine dengan saus gravy creamy, irisan beef saikoro, dan jamur champignon. Dengan salad dan cheese stick.",
          img: "/photos/beef-stroganoff.jpg",
          alt: "Beef Stroganoff: fettuccine dengan potongan daging sapi, salad hijau, tomat ceri, dan cheese stick.",
        },
        {
          name: "Aglio e Olio with Prawns",
          price: "75rb",
          spicy: true,
          desc: "Fresh pasta dengan udang, brokoli, minyak zaitun, dan red pepper flakes. Disajikan dengan cheese stick.",
          img: "/photos/aglio-e-olio.jpg",
          alt: "Aglio e Olio with Prawns: spaghetti dengan udang, brokoli, dan irisan cabai, cheese stick di atasnya.",
        },
      ] as Dish[],
    },
  ],
};

export const klepon = {
  kicker: "Dessert",
  name: "Klepon Cake",
  price: "28rb",
  tagline: "modern yet traditional taste of klepon", // from the shop's own poster
  desc: "Bolu pandan dengan whipped cream, kelapa, dan saus gula merah. Rasa klepon dalam bentuk kue.",
  img: "/photos/klepon-cake.jpg",
  width: 1200,
  height: 675,
  alt: "Klepon Cake: potongan bolu pandan hijau dengan whipped cream, ceri, dan parutan kelapa, saus gula merah di piring batu abu-abu.",
};

export const menuNotes: Item[] = [
  { text: "Bisa sarapan juga, buka mulai 09.00" },
  { text: "Nasi Liwet set dengan sayur asem, empal & sambal 55rb", mockup: true },
  { text: "Harga belum termasuk pajak & service", mockup: true },
];

export type Drink = {
  name: string;
  price?: string;
  note?: string;
  tag?: string;
  mockup?: boolean; // the whole item is an example
  priceMockup?: boolean; // only the price is an example
};

export const drinks = {
  heading: "Kopi & minuman",
  intro: "Tamu memuji kopi signature kami, juga Vietnam Drip dan Pisang Caramel.",
  columns: [
    {
      label: "Kopi",
      items: [
        {
          name: "Es Kopi Susu 92°",
          price: "28rb",
          note: "Es kopi susu gula aren, kopi signature kami.",
          mockup: true,
        },
        { name: "Vietnam Drip", price: "28rb", tag: "Dipuji di ulasan", priceMockup: true },
        { name: "Americano · Cafe Latte · Cappuccino", price: "28–38rb", mockup: true },
      ] as Drink[],
    },
    {
      label: "Non-kopi",
      range: { text: "28–35rb", mockup: true } as Item,
      items: [
        { name: "Matcha Latte", mockup: true },
        { name: "Red Velvet", mockup: true },
        { name: "Lychee Tea", mockup: true },
      ] as Drink[],
    },
    {
      label: "Teman ngopi",
      items: [
        { name: "Pisang Caramel", price: "32rb", tag: "Dipuji di ulasan", priceMockup: true },
        { name: "Singkong Goreng · Tahu Cabe Garam · French Fries", price: "25–35rb", mockup: true },
      ] as Drink[],
    },
  ],
};

export const events = {
  kicker: "Lantai 3 & ruang VIP",
  heading: "Acara & reservasi",
  lead: "Meeting, seminar, bukber, atau kumpul komunitas. Ruang di lantai 3 bisa kamu pakai untuk acara sampai 100 orang.",
  cta: { text: "Tanya ketersediaan via WhatsApp", mockup: true } as Item,
  callPrefix: "atau telepon",
  blocks: [
    {
      title: "Ruang acara lantai 3",
      figure: "Sampai 100 orang",
      text: "Untuk meeting, seminar, bukber, dan acara komunitas.",
      extra: { text: "Paket mulai Rp 85rb/pax", mockup: true } as Item,
    },
    {
      title: "Ruang VIP",
      figure: "Minimum order Rp 1 juta",
      text: "Sudah termasuk live music.",
    },
  ] as { title: string; figure: string; text: string; extra?: Item }[],
};

// Paraphrased from real reviews only. Never invented, never quoted, never attributed to a name.
export const praise = {
  kicker: "Kata mereka di Google",
  rating: "4,8",
  count: "920",
  heading: "4,8 dari 920 ulasan",
  note: "Ringkasan dari ulasan tamu, bukan kutipan.",
  themes: [
    {
      title: "Luas dan nyaman",
      text: "Empat lantai dengan suasana enak, jadi selalu ada tempat buat nongkrong, kerja, atau kumpul keluarga.",
    },
    {
      title: "Bersih, sampai toiletnya",
      text: "Tamu menyebut tempatnya rapi dan bersih, termasuk toiletnya.",
    },
    {
      title: "Stafnya ramah dan sigap",
      text: "Minta tolong apa saja, staf langsung membantu dengan ramah.",
    },
    {
      title: "Kopinya juara, porsinya besar",
      text: "Kopi signature-nya dipuji, dan porsi makanannya disebut besar.",
    },
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  listingPrefix: "Di Google Maps:",
  todayTag: "Hari ini",
  instagramLabel: "Instagram",
  mapTitle: "Peta lokasi De 92 Degrees",
  hoursLabel: "Jam buka",
};

export const footer = {
  sign: "De 92 Degrees · Coffee, Food & Music",
};
