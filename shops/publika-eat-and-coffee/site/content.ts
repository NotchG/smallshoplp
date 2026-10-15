// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// Strings follow the PRD "Copy deck" (docs/prd.md). Site language: Bahasa Indonesia.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.

export type Item = { text: string; mockup?: boolean };
export type DishId = "nasi-goreng-wagyu" | "tuna-sambal-matah" | "kopi-teh" | "pisang-goreng-teh" | "tiramisu";
export type UseId = "pagi" | "kerja" | "rombongan";

const placeId = "ChIJbVbSLwCLaS4RUJwfviY1mKQ";

export const meta = {
  lang: "id",
  title: "Publika Eat and Coffee · Makan dan ngopi di Jakarta Garden City",
  description:
    "Kafe dan restoran di Jakarta Garden City, Cakung. Masakan Indonesia, kopi dan teh. Buka setiap hari, dari 07.00 di akhir pekan.",
};

export const banner = "Draf mockup untuk Publika Eat and Coffee. Beberapa detail masih contoh.";
export const skipLink = "Langsung ke isi halaman";

// Facts from raw.json (listing).
export const shop = {
  name: "Publika Eat and Coffee",
  address: "Jalan Jakarta Garden City Blok B2 No. 11, Cakung Timur, Cakung, Jakarta Timur 13910",
  addressShort: "Jakarta Garden City Blok B2 No. 11, Cakung, Jakarta Timur",
  placeId,
  listingUrl:
    "https://maps.google.com/?cid=11860288059194973264&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=Publika%20Eat%20and%20Coffee&destination_place_id=${placeId}`,
  embedUrl:
    "https://www.google.com/maps?q=Publika%20Eat%20and%20Coffee%2C%20Jakarta%20Garden%20City%20Blok%20B2%20No.%2011&output=embed",
  rating: "4,5",
  ratingCount: "1.467",
};

// Hours from raw.json. days = JS weekday numbers (0 = Minggu), read in Asia/Jakarta.
export const hours = [
  { label: "Senin–Jumat", short: "Sen–Jum", days: [1, 2, 3, 4, 5], open: "09.00", close: "21.30" },
  { label: "Sabtu–Minggu", short: "Sab–Min", days: [6, 0], open: "07.00", close: "21.30" },
];
export const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
export const hoursText = {
  timeZone: "Asia/Jakarta",
  todayLine: "Hari ini, {day}: {open}–{close}",
  fallback: "Sen–Jum 09.00–21.30 · Sab–Min 07.00–21.30",
};

export const nav = {
  label: "Navigasi utama",
  links: [
    { href: "#menu", text: "Menu", wide: false },
    { href: "#datang", text: "Datang untuk", wide: true }, // hidden on phones (TRD)
    { href: "#lokasi", text: "Lokasi", wide: false },
  ],
};

export const hero = {
  // non-breaking space keeps "Garden City" on one line at every width (implementation plan step 9)
  title: "Makan dan ngopi di Jakarta Garden City",
  lead: "Buka setiap hari, dari 07.00 di akhir pekan.",
  cta: "Petunjuk Arah",
  menuLink: "Lihat menu",
  // owner-1.jpg (uploaded by the business), cropped 897 x 673 at x 192
  photo: {
    src: "/foto/publika-bar.jpg",
    width: 897,
    height: 673,
    alt: "Bar dan kasir Publika Eat and Coffee di siang hari, di bawah rangka kayu berpola sarang lebah dan tiga lampu gantung tembaga.",
    caption: "Bar dan kasir kami, di bawah lampu tembaga. Foto: Publika.",
  },
};

type Visual =
  | { kind: "drawing"; mockup: true; label: string }
  | { kind: "photo"; src: string; width: number; height: number; alt: string };

export type MenuItem = {
  id: string;
  dish?: DishId;
  label: string;
  name: string;
  nameMockup?: boolean;
  note: string;
  price?: string;
  priceMockup?: boolean;
  visual: Visual;
};

export const menu = {
  heading: "Menu andalan",
  intro: { text: "Hidangan utama mulai Rp 55rb, kopi mulai Rp 30rb.", mockup: true } as Item,
  items: [
    {
      id: "nasi-goreng-wagyu",
      dish: "nasi-goreng-wagyu",
      label: "Makanan Indonesia",
      name: "Nasi Goreng Wagyu",
      nameMockup: true,
      note: "Nasi goreng dengan wagyu. Nasi dan dagingnya sama-sama dipuji.",
      price: "Rp 85rb",
      priceMockup: true,
      visual: {
        kind: "drawing",
        mockup: true,
        label: "Ilustrasi: nasi goreng dengan irisan wagyu dan daun bawang, di piring hitam.",
      },
    },
    {
      id: "tuna-sambal-matah",
      dish: "tuna-sambal-matah",
      label: "Makanan Indonesia",
      name: "Tuna Bakar Sambal Matah",
      nameMockup: true,
      note: "Tuna yang juicy, porsinya murah hati untuk harganya.",
      visual: {
        kind: "drawing",
        mockup: true,
        label: "Ilustrasi: irisan tuna bakar dengan sambal matah dan jeruk nipis, di piring hitam.",
      },
    },
    {
      id: "kopi-teh",
      dish: "kopi-teh",
      label: "Minuman",
      name: "Kopi & teh",
      note: "Banyak pilihan kopi dan teh.",
      price: "mulai Rp 30rb",
      priceMockup: true,
      visual: {
        kind: "drawing",
        mockup: true,
        label: "Ilustrasi: secangkir kopi dan segelas es teh.",
      },
    },
    {
      id: "pisang-goreng-teh",
      dish: "pisang-goreng-teh",
      label: "Camilan",
      name: "Pisang Goreng & Teh",
      note: "Pisang goreng, ditemani teh.",
      price: "Rp 28rb",
      priceMockup: true,
      visual: {
        kind: "drawing",
        mockup: true,
        label: "Ilustrasi: empat potong pisang goreng di piring hitam, dengan segelas teh.",
      },
    },
    {
      id: "tiramisu",
      dish: "tiramisu",
      label: "Pencuci mulut",
      name: "Tiramisu",
      note: "Kopi yang kuat dan mascarpone yang enak, dengan manis yang pas.",
      visual: {
        kind: "drawing",
        mockup: true,
        label: "Ilustrasi: sepotong tiramisu bertabur cokelat dengan sendok kecil, di piring hitam.",
      },
    },
    {
      id: "banana-split",
      label: "Pencuci mulut",
      name: "Banana Split",
      nameMockup: true,
      note: "Pisang, tiga scoop es krim, saus cokelat dan crumble.",
      // owner-2.jpg (uploaded by the business), cropped square, 440 x 440
      visual: {
        kind: "photo",
        src: "/foto/publika-banana-split.jpg",
        width: 440,
        height: 440,
        alt: "Pisang dibelah dua dengan tiga scoop es krim cokelat dan stroberi, saus cokelat, crumble dan daun mint, di piring hitam.",
      },
    },
  ] as MenuItem[],
};

export const uses = {
  heading: "Datang untuk…",
  stripLabel: {
    text: "Ilustrasi denah dari atas: meja sarapan di dekat jendela, dua meja kerja dengan laptop di depan sofa kulit, dan tiga meja yang disatukan untuk rombongan.",
    mockup: true,
  } as Item,
  items: [
    {
      id: "pagi" as UseId,
      time: "Sab–Min · dari 07.00",
      title: "Pagi akhir pekan",
      body: "Sabtu dan Minggu kami sudah buka jam 07.00.",
      extra: "Mampir sarapan dulu: nasi uduk, bubur ayam, atau telur dan roti panggang.",
      extraMockup: true,
      drawing: { text: "Ilustrasi: meja sarapan dengan bubur, telur dan roti panggang, kopi dan teh, di bawah cahaya pagi dari jendela.", mockup: true } as Item,
    },
    {
      id: "kerja" as UseId,
      time: "Sen–Jum · dari 09.00",
      title: "Kerja",
      body: "Wifi stabil dan pelayanan cepat, jadi kamu bisa kerja sambil ngopi.",
      drawing: { text: "Ilustrasi: dua meja kerja dengan laptop, kopi dan teh, di depan sofa kulit.", mockup: true } as Item,
    },
    {
      id: "rombongan" as UseId,
      time: "Setiap hari · sampai 21.30",
      title: "Rombongan & meeting",
      body: "Ruangnya luas dan plafonnya tinggi. Datang berdua atau ramai-ramai, mejanya kami atur sesuai jumlah kalian. Cocok untuk makan siang, makan malam atau meeting.",
      drawing: { text: "Ilustrasi: tiga meja disatukan di bawah lampu tembaga, dengan laptop, nasi goreng, tiramisu, kopi dan teh.", mockup: true } as Item,
    },
  ],
};

// Paraphrased from real Google reviews. Never quoted, never attributed to a name.
export const reviews = {
  heading: "Kata mereka",
  ratingLine: `${shop.rating} dari 5 · ${shop.ratingCount} ulasan di Google`,
  caption: "Diringkas dari ulasan Google, bukan kutipan langsung.",
  items: [
    {
      topic: "Rombongan",
      text: "Cocok untuk kumpul keluarga atau teman, berapa pun jumlahnya, karena stafnya mau mengatur ulang meja. Masakan Indonesianya enak dan tampilannya rapi.",
      source: "review 1",
    },
    {
      topic: "Kerja & tiramisu",
      text: "Jadi tempat kerja rutin berkat wifi yang stabil dan pelayanan yang cepat. Tiramisu-nya dipuji: kopinya terasa kuat dan manisnya pas.",
      source: "review 2",
    },
    {
      topic: "Tuna",
      text: "Hidangan tunanya dipuji juicy, dengan harga yang wajar untuk porsi dan lokasinya.",
      source: "review 4",
    },
    {
      topic: "Nasi goreng wagyu",
      text: "Pilihan makanan, kopi dan tehnya banyak. Nasi goreng wagyu, pisang goreng dan tehnya sama-sama dipuji.",
      source: "review 5",
    },
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  hoursCaption: "Jam buka",
  todayLabel: "Hari ini",
  cta: "Petunjuk Arah",
  mapTitle: "Peta lokasi Publika Eat and Coffee",
  mapLink: "Buka di Google Maps",
};

export const contact = {
  heading: { text: "Ketemu di Publika, ya?", mockup: true } as Item,
  body: {
    text: "Mau datang rombongan atau pakai tempat untuk meeting? Kabari kami dulu lewat WhatsApp, nanti mejanya kami siapkan. Paket menu untuk meeting juga bisa diatur.",
    mockup: true,
  } as Item,
  // No number is listed: the button stays disabled until the owner gives one.
  whatsapp: { label: "WhatsApp rombongan", note: "Nomor menyusul", href: null as string | null, mockup: true },
  cta: "Petunjuk Arah",
  tableCaption: "Datang rombongan? Mejanya kami satukan.",
  tableLabel: {
    text: "Ilustrasi: enam meja kecil disatukan menjadi satu meja panjang, dengan nasi goreng, tuna, pisang goreng, tiramisu, kopi dan teh di atasnya, di bawah tiga lampu tembaga.",
    mockup: true,
  } as Item,
};

export const footer = {
  line: `${shop.name} · ${shop.addressShort}`,
  noteBefore: "Draf mockup untuk pemilik. Jam buka dan ulasan dari ",
  noteLink: "Google Maps",
  noteAfter: ", foto dari Publika.",
};
