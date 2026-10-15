// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Copy: docs/prd.md "Copy deck". Facts: raw.json (listing, hours, reviews).

export type Item = { text: string; mockup?: boolean };

const placeId = "ChIJbVbSLwCLaS4RUJwfviY1mKQ"; // listing

export const shop = {
  name: "Publika Eat and Coffee", // listing
  type: "Kafe dan restoran", // listing types: cafe, restaurant
  address:
    "Jalan Jakarta Garden City Blok B2 No. 11, Cakung Timur, Cakung, Jakarta Timur 13910", // listing
  addressShort: "Jakarta Garden City Blok B2 No. 11, Cakung, Jakarta Timur", // listing
  phone: "", // not listed
  placeId,
  listingUrl:
    "https://maps.google.com/?cid=11860288059194973264&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", // raw.json googleMapsUri
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=Publika%20Eat%20and%20Coffee&destination_place_id=${placeId}`,
  embedUrl:
    "https://www.google.com/maps?q=Publika%20Eat%20and%20Coffee%2C%20Jakarta%20Garden%20City%20Blok%20B2%20No.%2011&output=embed",
  rating: "4,5", // listing
  ratingCount: "1.467", // listing
};

export const meta = {
  title: "Publika Eat and Coffee · Makan dan ngopi di Jakarta Garden City",
  description:
    "Kafe dan restoran di Jakarta Garden City, Cakung. Masakan Indonesia, kopi dan teh. Buka setiap hari, dari 07.00 di akhir pekan.",
  lang: "id",
};

export const banner = "Draf mockup, bukan situs resmi Publika Eat and Coffee.";

export const nav = {
  skip: "Langsung ke isi",
  label: "Navigasi utama",
  links: [
    { href: "#menu", label: "Menu", desktopOnly: false },
    { href: "#datang", label: "Datang untuk", desktopOnly: true },
    { href: "#lokasi", label: "Lokasi", desktopOnly: false },
  ],
};

// Hours from raw.json regularOpeningHours. Day numbers are JS weekdays (0 = Minggu), Asia/Jakarta.
export const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
export const hours = [
  { label: "Senin–Jumat", short: "Sen–Jum", days: [1, 2, 3, 4, 5], open: "09.00", close: "21.30" },
  { label: "Sabtu–Minggu", short: "Sab–Min", days: [6, 0], open: "07.00", close: "21.30" },
];
export const hoursText = {
  caption: "Jam buka",
  todayLabel: "Hari ini",
  // {day}, {open}, {close} are filled in on the visitor's device, in Asia/Jakarta time.
  todayLine: "Hari ini, {day}: {open}–{close}",
  fallback: "Sen–Jum 09.00–21.30 · Sab–Min 07.00–21.30",
  timeZone: "Asia/Jakarta",
};

export const hero = {
  title: "Makan dan ngopi di Jakarta Garden City",
  lead: "Buka setiap hari, dari 07.00 di akhir pekan.", // hours
  cta: "Petunjuk Arah",
  menuLink: "Lihat menu",
  caption: "Datang rombongan? Mejanya kami satukan.", // review 1
  planLabel: {
    text: "Ilustrasi denah dari atas: meja-meja kecil disatukan menjadi satu meja panjang, dengan nasi goreng, tiramisu, pisang goreng dan kopi di atasnya, di bawah lampu tembaga.",
    mockup: true,
  } as Item,
};

export type DishId = "nasi-goreng-wagyu" | "tuna-sambal-matah" | "kopi-teh" | "pisang-goreng-teh" | "tiramisu" | "banana-split";

export type MenuItem = {
  id: DishId;
  label: string;
  name: string;
  nameMockup?: boolean;
  note: string;
  source: string;
  price?: string;
  priceMockup?: boolean;
  illustration: string; // aria-label for the drawing
  mockup: true; // every dish picture is an illustration, not a photo
};

export const menu = {
  heading: "Menu andalan",
  intro: { text: "Hidangan utama mulai Rp 55rb, kopi mulai Rp 30rb.", mockup: true } as Item,
  items: [
    {
      id: "nasi-goreng-wagyu",
      label: "Makanan Indonesia",
      name: "Nasi Goreng Wagyu",
      nameMockup: true,
      note: "Nasi goreng dengan wagyu. Nasi dan dagingnya sama-sama dipuji.",
      source: "review 5",
      price: "Rp 85rb",
      priceMockup: true,
      illustration: "Ilustrasi nasi goreng dengan irisan wagyu dan kerupuk di piring hitam",
      mockup: true,
    },
    {
      id: "tuna-sambal-matah",
      label: "Makanan Indonesia",
      name: "Tuna Bakar Sambal Matah",
      nameMockup: true,
      note: "Tuna yang juicy, porsinya murah hati untuk harganya.",
      source: "review 4",
      illustration: "Ilustrasi irisan tuna bakar dengan sambal matah dan jeruk nipis di piring hitam",
      mockup: true,
    },
    {
      id: "kopi-teh",
      label: "Minuman",
      name: "Kopi & teh",
      note: "Banyak pilihan kopi dan teh.",
      source: "reviews 1, 5",
      price: "mulai Rp 30rb",
      priceMockup: true,
      illustration: "Ilustrasi secangkir kopi hitam dan segelas teh dengan es batu",
      mockup: true,
    },
    {
      id: "pisang-goreng-teh",
      label: "Camilan",
      name: "Pisang Goreng & Teh",
      note: "Pisang goreng, ditemani teh.",
      source: "review 5",
      price: "Rp 28rb",
      priceMockup: true,
      illustration: "Ilustrasi empat potong pisang goreng di piring hitam dan segelas teh",
      mockup: true,
    },
    {
      id: "tiramisu",
      label: "Pencuci mulut",
      name: "Tiramisu",
      note: "Rasa kopinya kuat, mascarpone-nya enak, tidak terlalu manis.",
      source: "review 2",
      illustration: "Ilustrasi sepotong tiramisu bertabur cokelat dengan sendok kecil",
      mockup: true,
    },
    {
      id: "banana-split",
      label: "Pencuci mulut",
      name: "Banana Split",
      nameMockup: true,
      note: "Pisang, tiga scoop es krim, saus cokelat dan crumble.",
      source: "photos",
      illustration: "Ilustrasi banana split: pisang, tiga scoop es krim, saus cokelat dan crumble di mangkuk hitam",
      mockup: true,
    },
  ] as MenuItem[],
};

export type UseId = "pagi" | "kerja" | "rombongan";

export const uses = {
  heading: "Datang untuk…",
  items: [
    {
      id: "pagi" as UseId,
      time: "Sab–Min · dari 07.00", // hours
      title: "Pagi akhir pekan",
      body: "Sabtu dan Minggu kami sudah buka jam 07.00.",
      extra: "Mampir sarapan dulu: nasi uduk, bubur ayam, atau telur dan roti panggang.",
      extraMockup: true,
      illustration: {
        text: "Ilustrasi dari atas: meja sarapan dekat jendela, dengan bubur, telur dan roti panggang, kopi dan teh, disinari cahaya pagi.",
        mockup: true,
      } as Item,
    },
    {
      id: "kerja" as UseId,
      time: "Sen–Jum · dari 09.00", // hours
      title: "Kerja",
      body: "Wifi stabil dan pelayanan cepat, jadi kamu bisa kerja sambil ngopi.", // review 2
      illustration: {
        text: "Ilustrasi dari atas: sofa kulit panjang dengan dua meja kecil, laptop dan kopi.",
        mockup: true,
      } as Item,
    },
    {
      id: "rombongan" as UseId,
      time: "Setiap hari · sampai 21.30", // hours
      title: "Rombongan & meeting",
      body: "Ruangnya luas dan plafonnya tinggi. Datang berdua atau ramai-ramai, mejanya kami atur sesuai jumlah kalian. Cocok untuk makan siang, makan malam atau meeting.", // reviews 1, 3
      illustration: {
        text: "Ilustrasi dari atas: tiga meja disatukan untuk dua belas orang, dengan hidangan dan laptop, di bawah lampu tembaga.",
        mockup: true,
      } as Item,
    },
  ],
};

// Paraphrased from real Google reviews only. Never quoted, never attributed to a name.
export const reviews = {
  heading: "Kata mereka",
  ratingLine: `${shop.rating} dari 5 · ${shop.ratingCount} ulasan di Google`, // listing
  caption: "Diringkas dari ulasan Google, bukan kutipan langsung.",
  items: [
    {
      topic: "Rombongan",
      text: "Enak untuk kumpul bareng teman atau keluarga, rombongan kecil maupun besar, karena mejanya bisa diatur. Plating-nya rapi dan menu Indonesianya enak.",
      source: "review 1",
    },
    {
      topic: "Kerja & tiramisu",
      text: "Tempat langganan untuk kerja: wifi stabil, pelayanan cepat, suasananya nyaman. Tiramisu-nya enak sekali, kopinya kuat dan tidak terlalu manis.",
      source: "review 2",
    },
    {
      topic: "Tuna",
      text: "Tuna-nya enak dan juicy, dan harganya tidak mahal untuk porsi dan lokasinya.",
      source: "review 4",
    },
    {
      topic: "Nasi goreng wagyu",
      text: "Pilihan makanan, teh dan kopinya banyak. Nasi goreng wagyu-nya enak, nasi maupun dagingnya; pisang goreng dan tehnya juga.",
      source: "review 5",
    },
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  todayLabel: "Hari ini",
  hoursCaption: "Jam buka",
  cta: "Petunjuk Arah",
  mapTitle: "Peta lokasi Publika Eat and Coffee",
  mapFallback: "Peta Google Maps sedang dimuat.",
};

export const contact = {
  heading: { text: "Ketemu di Publika, ya?", mockup: true } as Item,
  body: {
    text: "Mau datang rombongan atau pakai tempat untuk meeting? Kabari kami dulu lewat WhatsApp, nanti mejanya kami siapkan. Paket menu untuk meeting juga bisa diatur.",
    mockup: true,
  } as Item,
  // No number is listed. The owner must supply one before this becomes a link.
  whatsapp: { label: "WhatsApp rombongan", note: "Nomor menyusul", href: null as string | null, mockup: true },
  directions: "Petunjuk Arah",
  illustration: {
    text: "Ilustrasi dari atas: meja panjang di malam hari, penuh hidangan, di bawah tiga lampu tembaga yang menyala.",
    mockup: true,
  } as Item,
};

export const footer = {
  line: "Publika Eat and Coffee · Jakarta Garden City Blok B2 No. 11, Cakung, Jakarta Timur",
  noteBefore: "Draf mockup untuk pemilik. Jam buka dan ulasan dari",
  noteLink: "Google Maps",
  noteAfter: ".",
};
