// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia ("kamu" register is itself [MOCKUP]).

export type Item = { text: string; mockup?: boolean };
export type Link = { label: string; href: string; mockup?: boolean };

// ---------------------------------------------------------------- shop facts (listing)
export const shop = {
  name: "Kyō Coffee Roaster",
  type: "Kafe",
  address:
    "Jl. Wirajasa / Jl. Raya Jatiwaringin No. 1, Cipinang Melayu, Makasar, Jakarta Timur 13620",
  addressShort: "Jl. Wirajasa / Jl. Raya Jatiwaringin No. 1, Jakarta Timur",
  phone: "0812-1284-4322",
  tel: "tel:+6281212844322",
  // [MOCKUP] the listing does not say this number takes WhatsApp.
  whatsapp: { href: "https://wa.me/6281212844322", mockup: true },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Ky%C5%8D+Coffee+Roaster&destination_place_id=ChIJr8K9asvzaS4R19qBYn2g1i4",
  mapsUrl: "https://maps.google.com/?cid=3375061431144798935",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Ky%C5%8D+Coffee+Roaster,+Jl.+Raya+Jatiwaringin+No.1,+Jakarta+Timur&output=embed",
  hours: [
    { days: "Senin–Kamis", time: "07.00–21.00" },
    { days: "Jumat–Minggu", time: "07.00–22.00" },
  ],
  openTime: "07.00",
  // Indexed 0 = Minggu … 6 = Sabtu, from raw.json regularOpeningHours.periods.
  closeByWeekday: ["22.00", "21.00", "21.00", "21.00", "21.00", "22.00", "22.00"],
  rating: { value: "4,6", count: "1.328" },
};

export const meta = {
  title: "Kyō Coffee Roaster · Kafe di Jatiwaringin, Jakarta Timur",
  description:
    "Kafe bergaya Jepang di Jl. Raya Jatiwaringin, Jakarta Timur. Manual brew, Marbled Cold Brew, pecan tart. Buka setiap hari mulai 07.00.",
};

// Project rule: every mockup shows this. The "kamu" register is [MOCKUP].
export const banner: Item = {
  text: "Draf mockup untuk Kyō Coffee Roaster. Beberapa detail masih contoh sampai kamu konfirmasi.",
  mockup: true,
};

// ---------------------------------------------------------------- header
export const header = {
  mark: "kyō",
  homeLabel: "Kyō Coffee Roaster, ke atas",
  nav: [
    { label: "Menu", href: "#menu", phone: true },
    { label: "Ruang", href: "#ruang", phone: false },
    { label: "Lokasi", href: "#lokasi", phone: true },
  ],
};

// ---------------------------------------------------------------- hero
export const hero = {
  nameLines: ["Kyō Coffee", "Roaster"],
  line: { text: "Kopinya serius. Ruangnya tenang. Kamu tinggal duduk.", mockup: true } as Item,
  hoursPrefix: "Buka hari ini",
  // Static HTML before JS works out today's closing time (Asia/Jakarta).
  hoursFallback: "Buka setiap hari mulai 07.00",
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  cupCaption: "Marbled Cold Brew",
  cupLabel: "Ilustrasi Marbled Cold Brew dalam gelas bening bertuliskan kyō",
  cupPrint: "kyō",
};

// ---------------------------------------------------------------- Dari bar kami
export type MenuPanel = {
  id: string;
  name: Item;
  price?: Item;
  desc?: Item;
  items?: Item[];
  featured?: boolean;
};

export const menu = {
  heading: "Dari bar kami",
  intro: {
    text: "Manual brew, minuman berbasis susu, dan racikan rumah dengan rasa yang tidak biasa.",
  } as Item,
  panels: [
    {
      id: "marbled",
      featured: true,
      name: { text: "Marbled Cold Brew" },
      price: { text: "Rp 38rb", mockup: true },
      desc: { text: "Kuat dan khas, sama sekali tidak encer. Di antara kopi hitam dan latte." },
    },
    {
      id: "manual",
      name: { text: "Manual brew" },
      price: { text: "dari Rp 35rb", mockup: true },
      desc: {
        text: "Single origin Indonesia yang bergantian, misalnya Gayo, Kerinci, Flores Bajawa.",
        mockup: true,
      },
    },
    {
      id: "susu",
      name: { text: "Berbasis susu" },
      price: { text: "dari Rp 30rb", mockup: true },
      desc: { text: "Kopi susu dan pilihan susu lainnya, juga racikan rumah dengan rasa unik." },
    },
    {
      id: "jepang",
      name: { text: "Ala Jepang", mockup: true },
      items: [
        { text: "Matcha latte", mockup: true },
        { text: "Hojicha latte", mockup: true },
      ],
    },
  ] as MenuPanel[],
  dripperLabel: "Ilustrasi dripper kerucut di atas server kaca berisi kopi",
};

// ---------------------------------------------------------------- Teman ngopi
export type Bake = { id: "pecan" | "apel" | "bun"; name: Item; desc: Item; label: string };

export const bakes = {
  heading: "Teman ngopi",
  intro: [
    { text: "Dari etalase kaca di samping bar. Pecan tart dan pie-nya dipuji di ulasan." },
    { text: "Buka sejak 07.00, jadi kopi dan roti sebelum berangkat juga bisa.", mockup: true },
    { text: "Tart dan pastry mulai Rp 25rb.", mockup: true },
  ] as Item[],
  products: [
    {
      id: "pecan",
      name: { text: "Pecan tart" },
      desc: { text: "Disebut enak dan direkomendasikan di ulasan Google." },
      label: "Ilustrasi pecan tart utuh di atas piring keramik berbintik",
    },
    {
      id: "apel",
      name: { text: "Tart apel", mockup: true },
      desc: { text: "Irisan apel karamel di atas piring keramik buatan tangan." },
      label: "Ilustrasi potongan tart apel karamel di atas piring keramik",
    },
    {
      id: "bun",
      name: { text: "Bun & roti etalase" },
      desc: {
        text: "Bun lembut berglasir, roti keemasan, roti cokelat, dan kue di bawah tudung kaca.",
      },
      label: "Ilustrasi nampan kayu berisi bun berglasir dan roti keemasan",
    },
  ] as Bake[],
};

// ---------------------------------------------------------------- Ruang di Kyō
export const space = {
  heading: "Ruang di Kyō",
  body: {
    text: "Terinspirasi taman batu dan ornamen kuil Jepang. Di dalam: panel kayu, lantai beton, jendela tinggi ke arah hijau. Di luar: taman yang lampunya menyala saat gelap. Musiknya menenangkan; enak untuk ngobrol, belajar, atau sekadar santai.",
  } as Item,
  day: {
    caption: "Siang · ruang dalam",
    label: "Ilustrasi ruang dalam Kyō: dinding panel kayu, meja bar beton, jendela ke arah hijau",
  },
  night: {
    caption: "Malam · taman",
    label: "Ilustrasi taman Kyō di malam hari: batu, semak, dan tiga lampu menyala",
  },
  note: { text: "Ilustrasi sementara, nanti diganti foto Kyō.", mockup: true } as Item,
};

// ---------------------------------------------------------------- Kata mereka
// Paraphrased from real Google reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  rating: `${shop.rating.value} dari ${shop.rating.count} ulasan Google`,
  note: "Diringkas dari ulasan Google, bukan kutipan langsung.",
  themes: [
    {
      label: "Marbled Cold Brew",
      text: "Pas untuk pencinta kopi hitam yang merasa latte terlalu ringan; sepadan dengan harganya.",
    },
    {
      label: "Kopinya",
      text: "Istimewa, dengan banyak pilihan manual brew, minuman susu, dan racikan dengan rasa unik.",
    },
    {
      label: "Suasananya",
      text: "Indoor-outdoor yang tenang dan nyaman; taman berlampu di malam hari, ruang dalam bergaya Jepang yang bersih.",
    },
    {
      label: "Pelayanannya",
      text: "Staf yang ramah dan musik yang menenangkan. Pie dan pecan tart-nya juga dipuji.",
    },
  ],
};

// ---------------------------------------------------------------- Kunjungi kami
export const visit = {
  heading: "Kunjungi kami",
  hoursLabel: "Jam buka",
  everyday: "Buka setiap hari.",
  parking: "Parkir di pinggir jalan terbatas.",
  directions: "Petunjuk Arah",
  mapTitle: "Peta lokasi Kyō Coffee Roaster",
  mapLink: "Buka di Google Maps",
  mapLoading: "Peta Google Maps",
};

// ---------------------------------------------------------------- Hubungi kami + footer
export const contact = {
  heading: "Hubungi kami",
  whatsapp: { label: "WhatsApp", mockup: true },
  call: "Telepon",
  directions: "Petunjuk Arah",
  gardenLabel: "Ilustrasi taman Kyō setelah gelap: batu, semak, dan enam lampu taman menyala",
};

export const footer = {
  line: [shop.name, shop.addressShort, "Buka setiap hari mulai 07.00"],
};
