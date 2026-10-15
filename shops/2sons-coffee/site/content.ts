// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Copy is Bahasa Indonesia (lang="id"). Headings are lowercase, matching the 2sons wordmark.

export type Item = { text: string; mockup?: boolean };

export type ArtId = "espresso" | "v60" | "beefCheeseMelt" | "eggToast";

export type Visual =
  | { kind: "photo"; src: string; alt: string; position: string; width: number; height: number }
  | { kind: "art"; id: ArtId; label: string };

export type Product = {
  name: Item;
  note: Item;
  extra?: Item;
  price?: Item;
  visual: Visual;
  mockup?: boolean; // the whole product is a [MOCKUP]
};

export type Photo = {
  src: string;
  alt: string;
  caption?: Item;
  position: string;
  width: number;
  height: number;
};

// Owner photos are 1600x2133 originals, resized to 1200x1600 in public/photos/.
const PHOTO_W = 1200;
const PHOTO_H = 1600;

// ---------------------------------------------------------------- shop facts (listing)
export const shop = {
  name: "2Sons Coffee",
  type: "Coffee shop",
  address:
    "Ruko New East, Jl. Jakarta Garden City Boulevard No. 60, Cakung Timur, Cakung, Jakarta 13910",
  addressLines: [
    "Ruko New East,",
    "Jl. Jakarta Garden City Boulevard No.\u00a060,",
    "Cakung Timur, Cakung,",
    "Jakarta 13910",
  ],
  addressShort: "Ruko New East No.\u00a060, Jl. Jakarta Garden City Boulevard, Cakung",
  phone: "0815-9133-886",
  phoneHref: "tel:+628159133886",
  whatsappHref: { text: "https://wa.me/628159133886", mockup: true } as Item,
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=2Sons%20Coffee&destination_place_id=ChIJ64BTIiuLaS4RyamBPUhs6QI",
  mapsUrl:
    "https://maps.google.com/?cid=209817915174791625&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  mapEmbedSrc:
    "https://www.google.com/maps?q=2Sons+Coffee,+Jl.+Jakarta+Garden+City+Boulevard+No.+60,+Cakung,+Jakarta&output=embed",
  hours: {
    days: "Setiap hari",
    time: "07.00–21.00",
    open: 7,
    close: 21,
    tz: "Asia/Jakarta",
  },
  rating: { value: "5,0", count: 35 },
};

export const meta = {
  title: "2Sons Coffee · Specialty coffee di JGC Boulevard",
  description:
    "Specialty coffee, makanan, dan ruang yang santai di Ruko New East, JGC Boulevard, Cakung. Buka setiap hari 07.00–21.00.",
};

export const banner =
  "Draf mockup untuk 2Sons Coffee. Beberapa detail masih contoh sampai kamu konfirmasi.";

export const labels = {
  skip: "Langsung ke isi",
  directions: "Petunjuk Arah",
  call: "Telepon",
  whatsapp: { text: "WhatsApp", mockup: true } as Item,
  mapFallback: "Buka di Google Maps",
};

// ---------------------------------------------------------------- 1. hero
export const hero = {
  wordmark: "2sons",
  wordmarkSub: "coffee",
  line: { text: "Specialty coffee di JGC Boulevard. Santai, dan kopinya dibuat dengan bener." } as Item,
  status: {
    noJs: "Buka setiap hari",
    open: "Buka sekarang · sampai 21.00",
    closed: "Sedang tutup · buka lagi 07.00",
  },
  photo: {
    src: "/photos/owner-1.jpg",
    alt: "Bagian depan 2Sons Coffee di Ruko New East: papan nama abu-abu melengkung, pintu kaca, kursi tinggi terakota dan hijau sage di teras.",
    position: "50% 46%",
    width: PHOTO_W,
    height: PHOTO_H,
  } as Photo,
};

// ---------------------------------------------------------------- 2. kopinya bener.
export const coffee = {
  heading: "kopinya bener.",
  lead: { text: "Specialty coffee, diseduh serius tanpa bikin suasana kaku." } as Item,
  products: [
    {
      name: { text: "Si biru, dalam kaleng 2sons." },
      note: { text: "Kalengnya juga bisa dibawa pulang.", mockup: true },
      visual: {
        kind: "photo",
        src: "/photos/owner-2.jpg",
        alt: "Minuman biru keabu-abuan dalam kaleng bening berlogo 2sons coffee, di depan rak menyala dengan figur beruang kuning.",
        position: "50% 62%",
        width: PHOTO_W,
        height: PHOTO_H,
      },
    },
    {
      name: { text: "Minuman espresso" },
      note: { text: "Kopi yang dipuji di hampir semua ulasan." },
      price: { text: "mulai Rp 25rb", mockup: true },
      visual: { kind: "art", id: "espresso", label: "Gambar garis es kopi dalam gelas lurus berisi es batu" },
    },
    {
      name: { text: "Manual brew (V60)", mockup: true },
      note: { text: "Biji Indonesia atau biji tamu, bergantian.", mockup: true },
      price: { text: "mulai Rp 35rb", mockup: true },
      visual: { kind: "art", id: "v60", label: "Gambar garis dripper V60 di atas server kaca" },
      mockup: true,
    },
  ] as Product[],
};

// ---------------------------------------------------------------- 3. bukan cuma kopi.
export const food = {
  heading: "bukan cuma kopi.",
  lead: { text: "Pilihan makannya banyak, bukan cuma camilan teman ngopi." } as Item,
  products: [
    {
      name: { text: "Beef cheese melt sandwich" },
      note: { text: "Sandwich yang dipuji di ulasan Google." },
      price: { text: "Sandwich & makanan berat mulai Rp 45rb", mockup: true },
      visual: {
        kind: "art",
        id: "beefCheeseMelt",
        label: "Gambar garis dua potong sandwich panggang berisi daging sapi dan keju meleleh",
      },
    },
    {
      name: { text: "Roti telur & keju", mockup: true },
      note: { text: "Sarapan dari jam 07.00, teman kopi susu pagi.", mockup: true },
      visual: { kind: "art", id: "eggToast", label: "Gambar garis roti tebal dengan telur ceplok dan keju meleleh" },
      mockup: true,
    },
  ] as Product[],
};

// ---------------------------------------------------------------- 4. betah lama di sini.
export const room = {
  heading: "betah lama di sini.",
  lead: [
    { text: "Pagi jam tujuh buat kopi bawa pulang, sore panjang buat laptop atau mahjong.", mockup: true },
    { text: "Rak, piringan hitam, dan karya seninya ikut bikin betah.", mockup: true },
  ] as Item[],
  reasonsLabel: "Kenapa orang betah",
  reasons: [
    { text: "Staf yang ramah dan sigap membantu" },
    { text: "Toilet bersih" },
    { text: "Enak buat kerja, alias WFC" },
    { text: "Main mahjong bareng teman" },
    { text: "Santai buat nongkrong" },
    { text: "Wi-Fi dan colokan di meja", mockup: true },
  ] as Item[],
  photos: [
    {
      src: "/photos/owner-4.jpg",
      alt: "Ruang duduk dengan kursi navy dan hijau sage, meja bundar krem, cermin bulat dan papan bergambar dua orang di meja.",
      caption: { text: "Kursi navy dan hijau sage, meja bundar, dan papan bergambar di dinding." },
      position: "40% 55%",
      width: PHOTO_W,
      height: PHOTO_H,
    },
    {
      src: "/photos/owner-3.jpg",
      alt: "Rak putih menyala berisi piringan hitam, buku, kantong biji kopi, turntable dan figur beruang.",
      caption: { text: "Rak menyala: piringan hitam, buku, turntable, figur beruang." },
      position: "70% 40%",
      width: PHOTO_W,
      height: PHOTO_H,
    },
    {
      src: "/photos/owner-5.jpg",
      alt: "Meja kayu panjang dengan kursi wishbone, rangkaian daun kering dan lukisan abstrak biru.",
      caption: { text: "Meja kayu panjang untuk datang bareng-bareng." },
      position: "50% 70%",
      width: PHOTO_W,
      height: PHOTO_H,
    },
  ] as Photo[],
};

// ---------------------------------------------------------------- 5. kata mereka.
// Paraphrased from real Google reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "kata mereka.",
  rating: `${shop.rating.value} di Google, dari ${shop.rating.count} ulasan`,
  themes: [
    { text: "Kopinya enak, dan dibuat dengan benar." },
    { text: "Stafnya ramah dan sigap membantu." },
    { text: "Suasananya santai, enak buat WFC atau sekadar nongkrong." },
    { text: "Pilihan makannya banyak, dan sandwich beef cheese melt-nya dapat pujian." },
    { text: "Toiletnya bersih, dan itu disebut penting." },
    { text: "Ada yang datang untuk main mahjong bareng teman." },
  ] as Item[],
};

// ---------------------------------------------------------------- 6. kunjungi kami.
export const visit = {
  heading: "kunjungi kami.",
  hoursLabel: shop.hours.days,
  hoursTime: shop.hours.time,
  mapTitle: "Peta lokasi 2Sons Coffee",
};

// ---------------------------------------------------------------- 7. hubungi kami.
export const contact = {
  heading: "hubungi kami.",
  line: { text: "Telepon atau WhatsApp untuk tanya meja dan pesanan.", mockup: true } as Item,
};

export const footer = {
  parts: [
    "2Sons Coffee",
    "Ruko New East No. 60, JGC Boulevard",
    `${shop.hours.days} ${shop.hours.time}`,
    "Draf mockup",
  ],
};
