// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: (listing) / (hours) / (reviews n) / (photos) refer to raw.json and photos.json.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Woven Coffee", // listing writes "WOVEN COFFEE"; caps come from CSS
  type: "Kafe",
  address: "Jl. Jatinegara Timur No.107, Bali Mester, Jatinegara, Jakarta Timur 13310", // listing
  addressShort: "Jl. Jatinegara Timur No.107",
  addressLines: ["Jl. Jatinegara Timur No.107", "Bali Mester, Jatinegara", "Jakarta Timur 13310"],
  near: "Dekat Halte Kampung Melayu", // reviews 1
  phone: "0858-9232-0323", // listing
  tel: "+6285892320323",
  whatsapp: { href: "https://wa.me/6285892320323", mockup: true }, // [MOCKUP] 0858 is a mobile, assumed WhatsApp
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=WOVEN+COFFEE&destination_place_id=ChIJV_HlqXnzaS4R9iWXOROVGNY",
  mapsUrl:
    "https://maps.google.com/?cid=15427244433360758262&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", // raw.json googleMapsUri
  mapEmbedSrc:
    "https://maps.google.com/maps?q=WOVEN%20COFFEE%20Jl.%20Jatinegara%20Timur%20No.107&output=embed",
};

// (hours) Monday–Friday 9–21, Saturday–Sunday 10–21. idx uses JS getDay(): 0 = Minggu.
export const hours = {
  rows: [
    { days: "Senin–Jumat", short: "Sen–Jum", idx: [1, 2, 3, 4, 5], open: "09.00", close: "21.00" },
    { days: "Sabtu–Minggu", short: "Sab–Min", idx: [6, 0], open: "10.00", close: "21.00" },
  ],
  note: "Buka setiap hari",
  fallback: "Buka setiap hari · 09.00–21.00 (Sabtu–Minggu mulai 10.00)",
  todayPrefix: "Buka hari ini",
};

export const rating = { value: "4,6", count: 302 }; // listing, shown as text only

export const meta = {
  title: "Woven Coffee · Kopi dan teh di Jatinegara, Jakarta Timur",
  description:
    "Woven Coffee, kedai kopi di Jl. Jatinegara Timur No.107, dekat Halte Kampung Melayu. Kopi Enak, Ice Vietnamese, pilihan teh, camilan. Buka setiap hari.",
};

export const banner = "Draf: contoh situs untuk Woven Coffee, belum resmi.";

export const hero = {
  line: { text: "Kopi dan teh, dirajut sederhana di Jatinegara.", mockup: true } as Item,
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
};

// Signature section (reviews 2; photos: photo-3 label, reference only)
export const signature = {
  heading: "Kopi Enak",
  body: [
    { text: "Racikan khas Woven. Seorang tamu menyebut rasanya unik, tapi tetap enak." }, // reviews 2
    { text: "Ada juga dalam botol, untuk dibawa pulang atau diminum di jalan.", mockup: true },
  ] as Item[],
  spellingNote: {
    text: "Di label botol tertulis KOPI ENA. Ejaan nama yang benar masih menunggu konfirmasi pemilik.",
    mockup: true,
  } as Item,
  orderCta: "Pesan via WhatsApp",
};

export const products = {
  kopiEnak: {
    name: ["Kopi", "Enak"],
    labelText: ["KOPI", "ENA"], // as printed on the bottle (photos)
    sizes: [
      { label: "250 ml", price: "Rp 25rb", mockup: true },
      { label: "1 liter", price: null as string | null, note: "untuk di rumah", mockup: true },
    ],
    drawingAlt: "Ilustrasi botol Kopi Enak dengan label KOPI ENA",
    drawingMockup: true,
  },
  iceVietnamese: {
    name: ["Ice", "Vietnamese"], // reviews 2
    price: { text: "Rp 25rb", mockup: true } as Item,
    note: { text: "Favorit seorang pelanggan tetap" } as Item, // reviews 2
    drawingAlt: "Ilustrasi Ice Vietnamese: kopi Vietnam dengan es",
    drawingMockup: true,
  },
  tea: {
    name: ["Teh", "satu poci"],
    price: { text: "Rp 22rb", mockup: true } as Item,
    photo: "/photos/owner-2.jpg",
    alt: "Teh dalam poci putih dan secangkir teh biru di meja kayu Woven Coffee",
  },
};

export const menu = {
  heading: "Menu andalan",
  intro: "Banyak pilihan kopi untuk hampir semua selera, ditambah teh, camilan, dan makanan.", // reviews 3, 5
  note: { text: "Daftar ini contoh. Menu dan nama akan disesuaikan dengan menu di kedai.", mockup: true } as Item,
  groups: [
    {
      name: "Kopi hitam",
      items: [
        { text: "Americano", mockup: true },
        { text: "V60 manual brew", mockup: true },
        { text: "Vietnamese drip, panas atau dingin", mockup: true },
        { text: "Biji kopi house blend, 200 g", mockup: true },
      ] as Item[],
    },
    {
      name: "Kopi susu",
      items: [
        { text: "Kopi Enak (botol)", mockup: true },
        { text: "Cappuccino", mockup: true },
        { text: "Café Latte", mockup: true },
        { text: "Es Kopi Susu Gula Aren", mockup: true },
      ] as Item[],
    },
    {
      name: "Teh & non-kopi",
      items: [
        { text: "Teh Blackcurrant", mockup: true },
        { text: "Teh Mangga", mockup: true },
        { text: "Butterfly Pea Tea", mockup: true },
        { text: "Chocolate", mockup: true },
      ] as Item[],
    },
    {
      name: "Camilan & makan",
      items: [
        { text: "Kentang Goreng", mockup: true },
        { text: "Roti Bakar", mockup: true },
        { text: "Pisang Goreng Keju", mockup: true },
        { text: "Makanan berat, tanya menu hari ini" }, // reviews 5 ("new products: meals")
      ] as Item[],
    },
  ],
};

export const tea = {
  heading: "Bukan cuma kopi",
  body: "Pilihan tehnya ternyata cukup banyak. Rasanya sederhana dan segar, selingan yang pas dari kopi.", // reviews 1
  served: "Disajikan satu poci, lengkap dengan cangkir putih.", // photos: owner-2
  listLabel: "Teh yang sering tersaji",
  list: [
    { text: "Blackcurrant" }, // photos: owner-2 packet
    { text: "Mangga" }, // photos: owner-2 packet
    { text: "Buah merah", mockup: true }, // packet seen, name unknown
    { text: "Butterfly Pea (teh biru)", mockup: true }, // blue tea seen in the cup, name inferred
  ] as Item[],
};

export const amenities = {
  heading: "Kenapa mampir",
  intro: {
    text: "Tempat sederhana yang nyaman, untuk mampir sebentar atau duduk lebih lama sambil ngobrol.",
    mockup: true,
  } as Item,
  items: [
    { term: "Wi-Fi", text: "Bawa laptop dan kerja sebentar. Ada Wi-Fi untuk tamu.", source: "reviews 2" },
    { term: "Ruang merokok ber-AC", text: "Merokok tetap di ruangan yang sejuk.", source: "reviews 3" },
    { term: "Bayar pakai apa saja", text: "Hampir semua metode pembayaran diterima.", source: "reviews 1" },
    { term: "Parkir motor", text: "Mampir naik motor? Ada tempat parkirnya.", source: "reviews 1" },
    { term: "Dekat Halte Kampung Melayu", text: "Gampang dijangkau dengan transportasi umum.", source: "reviews 1" },
    { term: "Buka setiap hari", text: "Senin–Jumat mulai 09.00, Sabtu–Minggu mulai 10.00, sampai 21.00.", source: "hours" },
  ],
};

// Paraphrased from real Google reviews, third person, never quoted, never named.
// year is for the owner checklist only (not rendered).
export const reviews = {
  heading: "Kata mereka",
  ratingLine: `Rata-rata ${rating.value} dari ${rating.count} ulasan di Google.`,
  link: "Lihat ulasan di Google Maps",
  note: "Diringkas dari ulasan Google, bukan kutipan langsung.",
  items: [
    {
      text: "Seorang tamu mampir mendadak dan malah jatuh hati pada tehnya: pilihannya banyak, rasanya sederhana tapi segar.",
      source: "reviews 1",
      year: "sekitar 2025",
    },
    {
      text: "Tempatnya nyaman untuk ngobrol dengan teman. Kopi Enak terasa unik, tapi favoritnya tetap Ice Vietnamese.",
      source: "reviews 2",
      year: "sekitar 2018",
    },
    {
      text: "Timnya ramah dan paham betul soal kopi. Seorang tamu bahkan diajak membuat espresso sendiri.",
      source: "reviews 5",
      year: "sekitar 2019",
    },
    {
      text: "Tempat santai untuk nongkrong bersama teman sepulang kerja, dengan harga yang wajar.",
      source: "reviews 4",
      year: "sekitar 2021",
    },
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  access: "Dekat Halte Kampung Melayu, ada parkir motor.", // reviews 1
  shared: "Satu lokasi dengan tempat gurame bakar.", // reviews 1
  hoursCaption: "Jam buka",
  mapTitle: "Peta lokasi Woven Coffee",
};

export const contact = {
  heading: "Hubungi kami",
  line: {
    text: "Tanya menu, pesan Kopi Enak botol, atau sekadar memastikan kami buka.",
    mockup: true,
  } as Item,
  call: "Telepon",
};

export const footer = {
  freshly: "Freshly weaved", // photos: bottle label
  slogan: { text: "The Art of Putting Good Things Together", mockup: true } as Item, // owner-1 wall graphic, wording to confirm
  draft: "Draf contoh, belum situs resmi Woven Coffee.",
};
