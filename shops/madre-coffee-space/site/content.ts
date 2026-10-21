// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources: listing / hours = raw.json, reviews n = paraphrased Google reviews, photos = owner photos.

export type Item = { text: string; mockup?: boolean };
export type Dish = { name: string; price?: Item; desc: string; note?: string; mockup?: boolean }; // mockup: the dish itself is a guess
export type Tag = {
  label: string;
  x: number; // % of the cropped image: the tag's anchor point
  y: number; // % of the cropped image: the tag's top edge
  align?: "left" | "center" | "right";
  phone?: boolean; // false = hidden below 640px
};
export type Photo = { src: string; alt: string; w: number; h: number; tags?: Tag[]; caption?: string };
export type Hours = { day: string; dow: number; open: string; close: string }[];

// ---------------------------------------------------------------- shop facts (listing)
export const shop = {
  name: "Madre Coffee Space",
  shortName: "Madre",
  address: "Jl. Gongseng Raya No. 1, Cijantung, Jakarta Timur 13770",
  addressShort: "Jl. Gongseng Raya No. 1, Cijantung",
  phone: "0851-2110-2047",
  phoneHref: "tel:+6285121102047",
  // [MOCKUP] the listing number is a mobile number; we assume it takes WhatsApp.
  whatsapp: { text: "https://wa.me/6285121102047", mockup: true } as Item,
  mapsUrl: "https://maps.google.com/?cid=6959099905698540056",
  mapEmbed:
    "https://www.google.com/maps?q=Madre%20Coffee%20Space%2C%20Jl.%20Gongseng%20Raya%20No.1%2C%20Cijantung&output=embed",
  rating: "4,7",
  ratingCount: "519",
};

// Open every day (hours). dow: 0 = Minggu, matching JavaScript's getDay().
export const hours: Hours = [
  { day: "Senin", dow: 1, open: "08.00", close: "22.00" },
  { day: "Selasa", dow: 2, open: "08.00", close: "22.00" },
  { day: "Rabu", dow: 3, open: "08.00", close: "22.00" },
  { day: "Kamis", dow: 4, open: "08.00", close: "22.00" },
  { day: "Jumat", dow: 5, open: "08.00", close: "23.00" },
  { day: "Sabtu", dow: 6, open: "08.00", close: "23.00" },
  { day: "Minggu", dow: 0, open: "08.00", close: "22.00" },
];

export const meta = {
  title: "Madre Coffee Space · Kafe keluarga di Cijantung",
  description:
    "Makan enak, kopi racikan, dan ruang main si kecil di Cijantung, Jakarta Timur. Buka setiap hari 08.00–22.00, Jumat–Sabtu sampai 23.00.",
};

export const banner =
  "Draf mockup untuk Madre Coffee Space. Beberapa detail masih contoh sampai Anda konfirmasi.";

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
};

export const todayHours = {
  prefix: "Buka hari ini",
  fallback: "Buka setiap hari 08.00–22.00, Jumat–Sabtu sampai 23.00",
};

// ---------------------------------------------------------------- 1 Hero (mustard)
export const hero = {
  nameLines: ["Madre", "Coffee Space"],
  lead: { text: "Makan enak, kopi racikan, dan ruang main si kecil di Cijantung." } as Item,
  photo: {
    src: "/photos/hero-spread.jpg",
    w: 986,
    h: 1600,
    alt: "Enam piring menu utama Madre di atas meja mustard, dilihat dari atas, disajikan dengan sendok emas dan saus dalam mangkuk kecil.",
    tags: [
      { label: "Steak saus jamur", x: 51, y: 8, align: "left" },
      { label: "Daging & sambal segar", x: 98, y: 23, align: "right", phone: false },
      { label: "Ayam Afrika", x: 23, y: 58, align: "left" },
      { label: "Cordon Bleu", x: 98, y: 77.5, align: "right" },
    ],
  } as Photo,
};

// ---------------------------------------------------------------- 2 Menu andalan (paper)
export const menu = {
  heading: "Menu andalan",
  intro:
    "Menu Indonesia dan Barat dari dapur kami. Ini empat piring yang disebut tamu dalam ulasan mereka.",
  dishes: [
    {
      name: "Ayam Afrika",
      price: { text: "Rp 58rb", mockup: true },
      desc: "Paha ayam panggang di atas nasi kebuli yang rempahnya terasa, dengan pisang goreng dan tiga saus: hijau, putih, dan sambal merah.",
      note: "Favorit lama tamu setia.",
    },
    {
      name: "Beef Dabu-Dabu",
      price: { text: "Rp 68rb", mockup: true },
      desc: "Daging sapi beraroma asap, disajikan dengan mashed potato.",
    },
    {
      name: "Gyudon Andaliman",
      price: { text: "Rp 52rb", mockup: true },
      desc: "Rice bowl daging sapi dengan merica andaliman.",
    },
    {
      name: "Cordon Bleu",
      price: { text: "Rp 55rb", mockup: true },
      desc: "Dengan mashed potato, salad, dan saus krim jamur.",
    },
  ] as Dish[],
  plate: {
    src: "/photos/ayam-afrika.jpg",
    w: 576,
    h: 576,
    alt: "Sepiring Ayam Afrika dari atas: paha ayam panggang, nasi kebuli, tiga potong pisang goreng, dan tiga saus dalam mangkuk kecil.",
    caption: "Ayam Afrika: nasi kebuli, pisang goreng, tiga saus.",
  } as Photo,
  alsoHeading: "Juga dari dapur kami",
  also: [
    "Steak saus jamur dengan telur dan buncis",
    "Daging iris dengan sambal bawang, tomat, dan cabai segar",
    "Rice bowl daging dengan cabai dan daun bawang",
    "Hidangan panggang bertopping mayo",
  ],
  breakfast: {
    text: "Sarapan mulai pukul 08.00: croissant dan piring telur, Rp 35rb–50rb.",
    mockup: true,
  } as Item,
};

// ---------------------------------------------------------------- 3 Camilan & manis (mustard)
export const camilan = {
  heading: "Camilan & manis",
  lead: "Buat teman ngobrol, atau dibagi ramai-ramai di meja.",
  extra: "Ada juga pastry dan dessert.",
  items: [
    {
      photo: {
        src: "/photos/camilan.jpg",
        w: 1000,
        h: 1500,
        alt: "Camilan di atas nampan oval emas berlatar mustard: mac & cheese balls, spring roll, ayam krispi, onion rings, dan dumpling goreng dengan saus cocolan.",
        caption:
          "Mac & cheese balls, spring roll, ayam krispi, onion rings, dan dumpling goreng, lengkap dengan saus cocolan.",
      } as Photo,
      price: { text: "Rp 25rb–35rb", mockup: true } as Item,
    },
    {
      photo: {
        src: "/photos/churros.jpg",
        w: 1000,
        h: 1500,
        alt: "Tiga churros bertabur gula di nampan oval dengan saus cokelat dan garpu emas.",
        caption: "Churros bertabur gula dengan saus cokelat.",
      } as Photo,
      price: { text: "Rp 28rb", mockup: true } as Item,
    },
  ],
};

// ---------------------------------------------------------------- 4 Minuman (cobalt)
export const minuman = {
  heading: "Minuman",
  lead: "Kopinya bisa diracik sesuai seleramu. Tinggal bilang ke barista kami.",
  kopiHeading: "Kopi",
  kopi: [
    // [MOCKUP] likely coffee basics; Black Basil is real (review 1).
    { name: "Kopi susu gula aren", price: { text: "Rp 25rb", mockup: true }, desc: "", mockup: true },
    { name: "Caffe latte", price: { text: "Rp 32rb", mockup: true }, desc: "", mockup: true },
    { name: "Cappuccino", price: { text: "Rp 32rb", mockup: true }, desc: "", mockup: true },
    {
      name: "Black Basil",
      price: { text: "Rp 38rb", mockup: true },
      desc: "Espresso dengan sirup stroberi dan jus anggur. Suka lebih kuat? Minta tambah espresso.",
    },
  ] as Dish[],
  mocktailHeading: "Mocktail & teh",
  mocktail:
    "Lemonade telang, teh leci, teh peach-jeruk, soda kiwi-lemon, dan racikan selasih-pandan.",
  mocktailPrice: { text: "Rp 30rb–35rb", mockup: true } as Item,
  mocktailExtra: "Juga teh dan minuman berbasis susu.",
  photo: {
    src: "/photos/minuman.jpg",
    w: 1000,
    h: 1500,
    alt: "Lima mocktail dingin dalam gelas bergaris di atas latar biru kobalt dengan asap es kering.",
    tags: [
      { label: "Soda kiwi-lemon", x: 30, y: 33, align: "center" },
      { label: "Teh peach-jeruk", x: 72, y: 30.5, align: "center" },
      { label: "Selasih pandan", x: 19, y: 72, align: "center", phone: false },
      { label: "Lemonade telang", x: 50, y: 72, align: "center" },
      { label: "Teh leci", x: 83, y: 72, align: "center", phone: false },
    ],
  } as Photo,
  pink: {
    src: "/photos/mocktail-pink.jpg",
    w: 1000,
    h: 1500,
    alt: "Mocktail pink dengan es batu dan setangkai thyme di atas tatakan marmer, berlatar biru kobalt.",
    caption: "Mocktail pink dengan daun thyme.",
  } as Photo,
};

// ---------------------------------------------------------------- 5 Ramah anak (paper)
export const anak = {
  heading: "Ramah anak",
  lead: "Makan enak buat ayah dan bunda, ruang main seru buat si kecil.",
  body: "Ruang mainnya punya ruangan sendiri, dengan kolam bola, perosotan, dan loteng kecil. Kursi makan bayi juga ada.",
  menuHeading: "Menu anak",
  menu: [
    { text: "Chicken nugget dan kentang goreng", mockup: true },
    { text: "Spaghetti bolognese mini", mockup: true },
    { text: "Nasi chicken katsu", mockup: true },
  ] as Item[],
  menuPrice: { text: "Sekitar Rp 30rb–40rb", mockup: true } as Item,
  photo: {
    src: "/photos/ruang-main.jpg",
    w: 1330,
    h: 887,
    alt: "Ruang main anak di Madre: kolam bola dari kayu, perosotan, tangga ke loteng berjendela lengkung, jendela bulat, dan kursi makan bayi putih.",
    tags: [
      { label: "Loteng", x: 80, y: 6, align: "center" },
      { label: "Kursi makan bayi", x: 22, y: 45, align: "left" },
      { label: "Perosotan", x: 72, y: 48, align: "left" },
      { label: "Kolam bola", x: 52, y: 83, align: "center" },
    ],
  } as Photo,
};

// ---------------------------------------------------------------- 6 Ruang kami (cognac)
export const ruang = {
  heading: "Ruang kami",
  lead: "Dinding putih, kayu jati, sofa kulit panjang, dan lukisan penuh warna.",
  body: "Pas untuk makan bareng teman, nongkrong, atau kerja dari kafe.",
  madre: {
    text: "Madre artinya “ibu” dalam bahasa Spanyol. Pas untuk tempat makan keluarga.",
    mockup: true,
  } as Item,
  photo: {
    src: "/photos/ruang-kami.jpg",
    w: 1600,
    h: 1067,
    alt: "Ruang makan Madre: dinding putih, lampu sorot hitam, sofa kulit panjang warna cognac, meja batu putih, kursi kayu, meja bundar berukir, dan lukisan abstrak penuh warna.",
  } as Photo,
};

// ---------------------------------------------------------------- 7 Kata mereka (cognac)
// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  rating: `${shop.rating} dari ${shop.ratingCount} ulasan Google`,
  link: "Lihat ulasan di Google Maps",
  themes: [
    {
      title: "Makanan yang konsisten",
      text: "Rempah nasi kebulinya terasa, daging Beef Dabu-Dabu-nya beraroma asap, dan rasanya selalu pas.",
    },
    {
      title: "Pelayanan yang hangat",
      text: "Tamu memuji pelayanannya, sama seperti makanan dan kopinya.",
    },
    { title: "Anak-anak betah", text: "Ruang main dan menu anaknya dinilai juara." },
    {
      title: "Kopi sesuai selera",
      text: "Barista mau menambah espresso sampai rasanya pas di lidahmu.",
    },
  ],
};

// ---------------------------------------------------------------- 8 Kunjungi kami (paper)
export const kunjungi = {
  heading: "Kunjungi kami",
  everyDay: "Buka setiap hari",
  today: "hari ini",
  mapTitle: "Peta lokasi Madre Coffee Space",
};

// ---------------------------------------------------------------- 9 Hubungi kami (cobalt)
export const hubungi = {
  heading: "Hubungi kami",
  lead: {
    text: "Mau pesan meja, atau merayakan ulang tahun dan kumpul keluarga di Madre? Chat kami di WhatsApp.",
    mockup: true,
  } as Item,
  rows: [
    { label: "WhatsApp", value: shop.phone, href: shop.whatsapp.text, mockup: true },
    { label: "Telepon", value: shop.phone, href: shop.phoneHref },
    { label: "Petunjuk Arah", value: shop.addressShort, href: shop.mapsUrl },
  ],
  footer: `${shop.name} · ${shop.address}`,
};
