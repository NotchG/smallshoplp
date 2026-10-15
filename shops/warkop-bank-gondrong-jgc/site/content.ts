// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Source notes in comments: (listing), (hours), (review n), (photos), [MOCKUP].

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Warkop Bank Gondrong JGC", // (listing)
  nameLines: ["Warkop", "Bank", "Gondrong"] as const,
  namePlate: "JGC",
  kicker: "Warung kopi · JGC, Cakung", // (listing type and address)
  address:
    "Jl. Srikaya, Perumahan Jakarta Garden City, RT.007/RW.04, Cakung Timur, Cakung, Jakarta Timur 13910", // (listing, cleaned in brief)
  addressLines: [
    "Jl. Srikaya, Perumahan Jakarta Garden City",
    "RT.007/RW.04, Cakung Timur, Cakung",
    "Jakarta Timur 13910",
  ],
  addressShort: "Jl. Srikaya, Jakarta Garden City, Cakung",
  phoneDisplay: "0812-1248-2907", // (listing)
  phoneHref: "tel:+6281212482907",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Warkop%20Bank%20Gondrong%20JGC&destination_place_id=ChIJQXT1Ct2LaS4RBb7oxc0tZXU",
  mapsHref: "https://maps.google.com/?cid=8459217836897254917", // (listing googleMapsUri)
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Warkop%20Bank%20Gondrong%20JGC%2C%20Jl.%20Srikaya%2C%20Jakarta%20Garden%20City&z=17&output=embed",
  whatsappHref: { href: "https://wa.me/6281212482907", mockup: true }, // [MOCKUP] takes WhatsApp?
  hours: { label: "Setiap hari", open: "05.30", close: "24.00" }, // (hours)
  rating: { value: "4,6", count: 90 }, // (listing)
};

export const actions = {
  directions: "Petunjuk Arah",
  call: "Telepon",
  callWithNumber: `Telepon ${shop.phoneDisplay}`,
  whatsapp: "Chat WhatsApp",
  openMaps: "Buka di Google Maps",
  menu: "Lihat menu",
};

export const hero = {
  sub: {
    text: "Terasnya warga JGC, dari kopi subuh sampai kopi tengah malam.",
    mockup: true,
  } as Item, // [MOCKUP] personality line
  // The hanging sign. SSR shows "open"; the client swaps to "closed" 00.00–05.30 Asia/Jakarta.
  sign: {
    open: { word: "BUKA", time: `${shop.hours.open}–${shop.hours.close}`, days: "tiap hari" },
    closed: { word: "TUTUP", time: shop.hours.open, days: "buka lagi" },
  },
  photo: {
    src: "/photos/owner-1-hero.jpg",
    width: 1080,
    height: 1720,
    alt: "Gerobak merah Warkop Bank Gondrong digantungi renceng kopi dan minuman sachet",
  },
};

export type Tone = "arang" | "kuning" | "merah" | "hijau";
export type Art = "kopi-hitam" | "es-kopi-susu" | "indomie-telur" | "photo-sachet";
export type MenuItem = {
  name: string;
  price?: string;
  note?: string;
  art?: Art;
  mockup?: boolean; // the whole item is a guess
  priceMockup?: boolean; // the item is real, the price is an example
};
export type Strip = { id: string; label: string; tone: Tone; items: MenuItem[] };

export const menu = {
  id: "menu",
  heading: { text: "Ngopi dulu, urusan belakangan.", mockup: true } as Item, // [MOCKUP] brief tone line
  // (review 5) kopi pahit; (photos) the cart's sachets; (review 4) lots of drinks, friendly prices
  lead: "Kopi pahit jadi teman setia para pelanggan. Gerobaknya digantungi renceng kopi sachet, kopi susu, cokelat dan minuman malt. Pilihan minumnya banyak, harganya bersahabat buat dompet.",
  priceNote: { text: "Harga di bawah masih contoh.", mockup: true } as Item,
  strips: [
    {
      id: "kopi",
      label: "Kopi",
      tone: "arang",
      items: [
        { name: "Kopi hitam", price: "Rp 5rb", priceMockup: true, note: "kopi pahit, teman nongkrong", art: "kopi-hitam" }, // (review 5) + [MOCKUP] price
        { name: "Kopi tubruk", mockup: true }, // [MOCKUP]
      ],
    },
    {
      id: "es",
      label: "Es",
      tone: "kuning",
      items: [
        { name: "Es kopi susu", price: "Rp 7rb", priceMockup: true, art: "es-kopi-susu" }, // (photos) + [MOCKUP] price
        { name: "Es teh manis", mockup: true }, // [MOCKUP]
      ],
    },
    {
      id: "gerobak",
      label: "Di gerobak",
      tone: "merah",
      items: [
        { name: "Kopi sachet", art: "photo-sachet" }, // (photos)
        { name: "Kopi susu" }, // (photos)
        { name: "Cokelat" }, // (photos)
        { name: "Minuman malt" }, // (photos)
        { name: "Teh tarik", mockup: true }, // [MOCKUP]
        { name: "Susu jahe", mockup: true }, // [MOCKUP]
      ],
    },
    {
      id: "makan",
      label: "Makan",
      tone: "hijau",
      items: [
        { name: "Indomie telur", note: "rebus atau goreng", price: "Rp 12rb", art: "indomie-telur", mockup: true }, // [MOCKUP]
        { name: "Roti bakar", mockup: true }, // [MOCKUP]
        { name: "Gorengan", mockup: true }, // [MOCKUP]
      ],
    },
  ] satisfies Strip[],
  sachetPhoto: {
    src: "/photos/owner-1-sachet.jpg",
    width: 800,
    height: 598,
    alt: "Renceng kopi, susu, cokelat dan minuman sachet yang digantung di gerobak",
  },
};

export const place = {
  id: "tempat",
  heading: "Di bawah pohon mangga",
  // (reviews 2, 3, 4; photos)
  lead: "Teduh dan adem, kursi plastik tinggal tarik. Tempat yang pas buat duduk lama tanpa diburu-buru.",
  photo: {
    src: "/photos/owner-3-malam.jpg",
    width: 1000,
    height: 1246,
    alt: "Suasana malam di warkop, di bawah pohon mangga",
    caption: "Malam di bawah pohon mangga, di samping gerobak.",
  },
  spots: [
    { title: "Di luar", text: "Meja dan kursi plastik di bawah rindang pohon mangga." }, // (reviews 2, 4; photos)
    { title: "Ruang dalam", text: "Dinding berwallpaper motif, meja merah, dan sebuah speaker." }, // (photos)
    { title: "Lesehan", text: "Gelar tikar warna-warni, duduk santai di lantai." }, // (photos)
  ],
};

export const day = {
  id: "jam",
  heading: "Dari subuh sampai tengah malam",
  sub: `Buka ${shop.hours.label.toLowerCase()}, ${shop.hours.open}–${shop.hours.close}.`, // (hours)
  stops: [
    { time: "05.30", text: "Kopi pertama sebelum berangkat kerja.", mockup: true }, // [MOCKUP]
    { time: "Siang", text: "Ngaso di bawah pohon mangga yang adem, ditemani es kopi susu." }, // (reviews 2, 4; photos)
    { time: "24.00", text: "Ngobrol sama teman sampai tengah malam, baru pulang.", mockup: true }, // [MOCKUP]
  ],
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const reviews = {
  id: "ulasan",
  heading: "Kata mereka",
  rating: `${shop.rating.value} dari ${shop.rating.count} ulasan di Google`,
  note: "Diringkas dari ulasan pelanggan di Google, bukan kutipan langsung.",
  items: [
    { text: "Duduknya di bawah rindang pohon mangga, jadi teduh dan sejuk.", sources: [2, 4] },
    { text: "Cocok buat nongkrong lama tanpa buru-buru. Pedagang keliling pun sering ikut mampir.", sources: [3] },
    { text: "Kru yang gondrong ini ramah dan hobi melucu.", sources: [2, 3] },
    { text: "Pilihan minumannya banyak, dan harganya bersahabat buat dompet.", sources: [4] },
  ],
};

export const visit = {
  id: "lokasi",
  heading: "Kunjungi kami",
  hoursLine: `${shop.hours.label} · ${shop.hours.open}–${shop.hours.close}`,
  mapTitle: "Peta lokasi Warkop Bank Gondrong JGC",
};

export const contact = {
  id: "kontak",
  heading: { text: "Mampir, ya.", mockup: true } as Item, // [MOCKUP]
  body: { text: "Telepon dulu atau langsung datang aja. Kopi pahitnya sudah siap.", mockup: true } as Item, // [MOCKUP]
};

export const footer = {
  source: "Info dari Google Maps",
};

export const meta = {
  title: "Warkop Bank Gondrong JGC · Warung kopi di Jakarta Garden City",
  description:
    "Warung kopi di Jl. Srikaya, Jakarta Garden City, Cakung. Buka setiap hari 05.30–24.00. Kopi pahit, es kopi susu, teduh di bawah pohon mangga.",
};

export const banner =
  "Draf tampilan untuk Warkop Bank Gondrong JGC. Belum situs resmi, sebagian isi masih contoh.";
