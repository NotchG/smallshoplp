// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Register: courteous "Anda" throughout ([MOCKUP]: the owner may prefer the casual "kamu").
// Not on the page until the owner answers: "Yes Cake & Bakery", the rooftop "Yes" sign,
// yescakeandbakery.com.

export type Item = { text: string; mockup?: boolean };
export type Link = { href: string; label: string; mockup?: boolean };

export const shop = {
  name: "LINDAYES", // listing
  nameSuffix: "Cake & Bakery", // listing
  fullName: "LINDAYES Cake & Bakery", // listing
  tagline: "patisserie & coffee", // shopfront sign (owner-1)
  type: "toko roti, kue dan kafe", // type + review 1
  heroLine: {
    text: "Sedikit suasana Paris di Jl. Raya Penggilingan. Duduk ngopi dengan sepotong kue, atau ambil roti untuk bekal pagi.",
    mockup: true,
  } as Item,
  address:
    "Jl. Raya Penggilingan No. 14, RT 08/RW 07, Penggilingan, Cakung, Jakarta Timur 13940", // listing
  addressLines: [
    "Jl. Raya Penggilingan No. 14, RT 08/RW 07",
    "Penggilingan, Cakung, Jakarta Timur 13940",
  ],
  addressShort: "Jl. Raya Penggilingan No. 14, Cakung", // listing
  phoneDisplay: "0818-0898-9381", // listing, also printed on the cake boxes
  phoneTel: "+6281808989381",
  whatsapp: { href: "https://wa.me/6281808989381", label: "WhatsApp", mockup: true } as Link,
  tokopedia: {
    href: "https://www.tokopedia.com/yescakeandbakery",
    label: "Belanja online di Tokopedia",
    mockup: true, // seen on the cake boxes; only if the owner says it is still active
  } as Link,
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=LINDAYES%20Cake%20%26%20Bakery&destination_place_id=ChIJm2PPcUKLaS4RKYaCqZquOp4",
  mapsUrl:
    "https://maps.google.com/?cid=11401617385933932073&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", // raw.json googleMapsUri
  mapsEmbed:
    "https://maps.google.com/maps?q=LINDAYES%20Cake%20%26%20Bakery%2C%20Jl.%20Raya%20Penggilingan%20No.14%2C%20Cakung&z=16&output=embed",
};

// Hours (listing): every day 06:00–21:00, no closed day.
export const hours = {
  open: "06.00",
  close: "21.00",
  label: "Setiap hari 06.00–21.00",
  heroLabel: "Buka setiap hari 06.00–21.00",
  openMin: 360,
  closeMin: 1260,
  tz: "Asia/Jakarta",
};

export const status = { open: "Sedang buka", closed: "Sedang tutup" };

export const banner =
  "Draf mockup untuk LINDAYES Cake & Bakery. Beberapa detail masih contoh sampai Anda konfirmasi.";

export const hero = {
  photo: {
    src: "/img/fasad-lindayes.jpg",
    width: 700,
    height: 358,
    alt: "Papan LINDAYES patisserie & coffee dan tenda oranye di depan toko, Jl. Raya Penggilingan",
  },
  caption: "Toko kami di Jl. Raya Penggilingan No. 14, Cakung", // listing, owner-1
  directions: "Petunjuk Arah",
};

export type CaseId = "kue" | "brownies" | "roti" | "kue-kering";
export type CaseItem = {
  id: CaseId;
  name: string;
  line: Item;
  price: Item;
  illoLabel: string;
};

export const etalase = {
  heading: "Etalase kami",
  intro: "Kue, brownies, roti dan kue kering, setiap hari dari jam enam pagi.", // description, hours
  items: [
    {
      id: "kue",
      name: "Kue",
      line: { text: "Kue potong, cupcake dan kue cokelat bulat dari etalase dingin." }, // photos
      price: { text: "Slice cake Rp 25rb", mockup: true },
      illoLabel: "Kue cokelat bulat dengan hiasan krim merah muda dan cupcake",
    },
    {
      id: "brownies",
      name: "Brownies",
      line: { text: "Brownies potong dan brownie bites, dipuji pelanggan bersama rotinya." }, // review 3, photos
      price: { text: "Rp 65rb per kotak", mockup: true },
      illoLabel: "Tumpukan brownies potong dan dua brownie bites",
    },
    {
      id: "roti",
      name: "Roti",
      line: { text: "Roti sobek, roti tawar, roti abon dan roti keju.", mockup: true },
      price: { text: "Mulai Rp 8rb", mockup: true },
      illoLabel: "Roti sobek enam bagian",
    },
    {
      id: "kue-kering",
      name: "Kue kering",
      line: {
        text: "Nastar, kastengel, putri salju dan lidah kucing dalam toples bulat.",
        mockup: true, // the round toples are from photos; the varieties are mockup
      },
      price: { text: "Rp 85rb per toples", mockup: true },
      illoLabel: "Toples bulat berisi nastar dengan label ketupat",
    },
  ] as CaseItem[],
};

export const ngopi = {
  heading: "Ngopi di LINDAYES",
  // review 1 (bakery became a bakery cafe) + photos (teal wall, ivy, bar stools by the cake case)
  statement:
    "Toko roti kami kini juga kafe. Duduklah di bangku tinggi dekat etalase kue, di bawah daun rambat dan dinding toska, dengan kopi dan sepotong kue.",
  drinksLabel: "Minuman",
  drinksFrom: { text: "Kopi mulai Rp 18rb", mockup: true } as Item,
  drinks: [
    { text: "Kopi susu gula aren", mockup: true },
    { text: "Americano", mockup: true },
    { text: "Cafe latte", mockup: true },
    { text: "Es teh", mockup: true },
  ] as Item[],
  illoLabel: "Secangkir kopi di atas tatakan dan sepotong kue berlapis",
};

export type GiftId = "menara" | "hampers" | "tas";
export const gifts = {
  heading: "Hampers & kue kering",
  line: {
    text: "Andalan untuk hadiah: toples Lebaran, hampers dan kue dalam kotak untuk dibawa bertamu.",
    mockup: true,
  } as Item,
  seasons: { text: "Pre-order musiman untuk Lebaran, Natal dan Imlek.", mockup: true } as Item,
  snacksLine: "Juga camilan kemasan seperti bagelen.", // photos
  cta: { label: "Pesan hampers", mockup: true }, // goes to WhatsApp (mockup)
  items: [
    {
      id: "menara",
      name: "Menara toples",
      line: "Toples kue kering bersusun, dibungkus plastik dan berlabel ketupat saat Lebaran.", // photos
      illoLabel: "Tiga toples kue kering bersusun dibungkus plastik dengan pita merah muda",
    },
    {
      id: "hampers",
      name: "Hampers",
      line: "Disusun dalam keranjang rotan dan anyaman.", // photos
      illoLabel: "Keranjang hampers rotan dengan pita merah muda",
    },
    {
      id: "tas",
      name: "Tas hadiah",
      line: "Tas jinjing putih untuk bingkisan yang lebih kecil.", // photos
      illoLabel: "Tas hadiah putih bertali",
    },
  ] as { id: GiftId; name: string; line: string; illoLabel: string }[],
};

export const acara = {
  heading: "Pesan untuk acara",
  line: "Kami melayani katering dan pesan antar.", // type: catering_service, food_delivery
  types: [
    { text: "Snack box untuk kantor dan arisan", mockup: true },
    { text: "Kue ulang tahun", mockup: true },
    { text: "Pesanan kantor", mockup: true },
  ] as Item[],
  cta: { label: "Pesan lewat WhatsApp", mockup: true },
  illoLabel: "Kotak kue putih LINDAYES dengan nomor 0818-0898-9381 tercetak di sisinya",
};

// Paraphrased from real reviews only. Never invented, never attributed to a name.
export const reviews = {
  heading: "Kata mereka",
  rating: "4,1", // listing
  count: 490, // listing
  ratingLine: "4,1 dari 490 ulasan Google",
  note: "Diringkas dari ulasan Google.",
  items: [
    { text: "Kue dan rotinya enak.", sources: [3, 5] },
    { text: "Ada yang paling suka brownies dan rotinya.", sources: [3] },
    { text: "Toko roti yang menyenangkan, kini juga jadi kafe.", sources: [1] },
    { text: "Pelayanannya baik.", sources: [2] }, // never the lead line (review 4, rating)
  ],
};

export const kunjungi = {
  heading: "Kunjungi kami",
  wayfinding: "Cari papan LINDAYES dan tenda oranye.", // owner-1
  mapTitle: "Peta lokasi LINDAYES Cake & Bakery di Jl. Raya Penggilingan, Cakung",
  mapLink: "Buka di Google Maps",
};

export const hubungi = {
  heading: "Hubungi kami",
  line: "Telepon kami untuk kue, hampers atau pesanan katering.",
  call: "Telepon",
  ratingSource: "Rating dan ulasan dari Google",
  draftNote: "Draf mockup, belum resmi.",
};

export const newTab = "(buka di tab baru)";

export const meta = {
  title: "LINDAYES Cake & Bakery · patisserie & coffee di Cakung",
  description:
    "Kue, brownies, roti, kue kering dan kopi di Jl. Raya Penggilingan No. 14, Cakung. Duduk ngopi dengan sepotong kue, atau ambil roti untuk bekal pagi. Buka setiap hari 06.00–21.00.",
};
