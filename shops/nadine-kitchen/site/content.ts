// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Language: Bahasa Indonesia (lang="id"). Prices as "Rp 250rb", hours as "08.00–17.00".

export type Item = { text: string; mockup?: boolean };
export type Link = { label: string; href: string; mockup?: boolean; ariaLabel?: string };
export type Photo = { src: string; alt: string; width: number; height: number };

// [MOCKUP] That the listed number takes WhatsApp orders.
const WA_NUMBER = "6285711125253";
export const waLink = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const meta = {
  title: "Nadine Kitchen · Kue Ulang Tahun Custom di Duren Sawit",
  description:
    "Kue ulang tahun custom dengan figur fondant buatan tangan, dari Duren Sawit, Jakarta Timur. Buka setiap hari 08.00–17.00.",
};

export const banner = "Draf mockup untuk ditinjau pemilik. Belum dipublikasikan.";

// Facts from raw.json (listing) unless marked.
export const shop = {
  name: "Nadine Kitchen",
  descriptor: "Kue ulang tahun custom dari Duren Sawit", // brief: Page sections
  phoneDisplay: "0857-1112-5253", // listing
  tel: "tel:+6285711125253", // listing
  whatsapp: {
    label: "Pesan via WhatsApp",
    href: waLink("Halo Kak, saya mau pesan kue ulang tahun di Nadine Kitchen."),
    mockup: true,
  } as Link,
  instagram: {
    handle: "@nadine.kitchen.3701", // photos: owner-8 is a screenshot of its post
    href: "https://www.instagram.com/nadine.kitchen.3701/",
  },
  address: [
    "Jl. Rawa Domba Gg. Buntu No. 24A",
    "RT 02/RW 07, Duren Sawit",
    "Jakarta Timur 13440",
  ], // listing
  landmark: "Patokan: masuk dari Jl. Swadaya Raya", // listing
  hours: "Setiap hari 08.00–17.00", // hours: open every day 08:00–17:00
  rating: "5,0", // listing
  reviewCount: "257", // listing
  mapsUrl:
    "https://maps.google.com/?cid=6283500562077978225&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  mapEmbed: "https://www.google.com/maps?q=Nadine+Kitchen+Duren+Sawit&output=embed",
};

export const hero = {
  lead: shop.descriptor,
  hours: "Buka setiap hari 08.00–17.00",
  primary: shop.whatsapp,
  secondary: { label: "Lihat galeri", href: "#galeri" } as Link,
  proof: `${shop.rating} dari ${shop.reviewCount} ulasan Google`,
  photo: {
    src: "/photos/hero-teddy.jpg",
    width: 1000,
    height: 1188,
    alt: "Kue ulang tahun pink yang tinggi dengan beruang fondant memeluk hati, pelangi, awan tersenyum dan bintang pastel, berpinggiran krim mawar putih",
  } as Photo,
  caption: "Beruang & pelangi, ulang tahun ke-1",
};

// The hero's 3D cakes, one per finish in the owner's photos (brief: Signature products):
// smooth fondant with a rainbow topper (owner-5), rainbow stripes with a white drip (owner-2),
// turquoise-to-purple ombre cream with gold pearls (owner-8). They are illustrations of those
// finishes, not photos of real orders, so the hero marks them as mockup.
export const heroCakes = {
  label: "Pilih kue",
  prev: "Kue sebelumnya",
  next: "Kue berikutnya",
  pause: "Hentikan putaran otomatis",
  play: "Putar kue otomatis",
  motion: "Gerakkan kue dengan HP", // iPhones: asks for motion access so the cake follows the phone
  nav: [
    { label: "Galeri", href: "#galeri" },
    { label: "Cara pesan", href: "#cara-pesan" },
    { label: "Harga", href: "#harga" },
    { label: "Lokasi", href: "#lokasi" },
  ],
  items: [
    {
      id: "cake-pink",
      name: "Fondant & pelangi",
      finish: "Fondant halus, krim mawar",
      field: "bubblegum",
      alt: "Ilustrasi 3D: kue ulang tahun pink yang tinggi dengan pelangi fondant, awan, bintang bertangkai dan pinggiran krim mawar putih",
    },
    {
      id: "cake-rainbow",
      name: "Pelangi drip",
      finish: "Krim pelangi, drip putih",
      field: "butter",
      alt: "Ilustrasi 3D: kue bergaris pelangi dengan drip putih, cone es krim terbalik, hati dan sprinkle",
    },
    {
      id: "cake-ombre",
      name: "Ombré laut",
      finish: "Krim ombré, mutiara emas",
      field: "toska",
      alt: "Ilustrasi 3D: kue krim ombré dari toska ke ungu dengan mutiara emas, layar gula dan kerang",
    },
  ] as { id: string; name: string; finish: string; field: "bubblegum" | "butter" | "toska"; alt: string }[],
};

export type Field = "toska" | "butter" | "bubblegum" | "lilac";
export type GalleryItem = Photo & {
  theme: string;
  detail: string;
  field: Field;
  span: "feature" | "single";
};

// Owner photos only. Captions and alt text name the theme and age, never a child's
// name or a character / toy brand.
export const gallery = {
  heading: "Galeri kue",
  intro: "Tema favorit si kecil, jadi kue ulang tahunnya.",
  sub: "Figur fondant dibentuk tangan, sampai kumis kucing dan sisik putri duyungnya.",
  items: [
    {
      src: "/photos/mermaid.jpg",
      width: 900,
      height: 886,
      alt: "Kue putri duyung dengan krim ombré toska ke ungu, figur putri duyung fondant, layar gula bening merah muda dan biru, kerang, kuda laut, mutiara dan pasir biskuit",
      theme: "Dunia laut",
      detail: "Putri duyung fondant, layar gula bening, kerang dan mutiara di atas krim ombré toska ke ungu.",
      field: "toska",
      span: "feature",
    },
    {
      src: "/photos/cats.jpg",
      width: 860,
      height: 1035,
      alt: "Kue fondant putih ulang tahun pertama dengan kucing fondant hitam, oranye dan putih belang, angka 1 bermotif belang, dan jejak kaki kucing",
      theme: "Hewan lucu, ulang tahun ke-1",
      detail: "Kucing fondant dibentuk satu per satu, lengkap dengan jejak kakinya.",
      field: "butter",
      span: "single",
    },
    {
      src: "/photos/pompom.jpg",
      width: 900,
      height: 985,
      alt: "Kue karakter putih dengan lengkung pompom pink dan putih berpita, angka 7 pink, awan fondant, bola mutiara pink, putih dan emas, dan tulisan Happy Birthday merah",
      theme: "Pastel & awan, ulang tahun ke-7",
      detail: "Lengkung pompom, awan fondant, bola mutiara dan emas.",
      field: "bubblegum",
      span: "single",
    },
    {
      src: "/photos/rainbow.jpg",
      width: 792,
      height: 990,
      alt: "Kue berlapis krim belang pelangi dengan lelehan putih, pelangi dan awan fondant, figur kuda poni, cone es krim terbalik, permen hati dan sprinkle",
      theme: "Pelangi",
      detail: "Krim belang pelangi, lelehan putih, permen hati dan sprinkle.",
      field: "lilac",
      span: "single",
    },
    {
      src: "/photos/split.jpg",
      width: 900,
      height: 900,
      alt: "Kue dengan dua tema: separuh putih dengan hewan hutan, figur anak fondant dan daun monstera, separuh merah dengan jaring laba-laba dan figur pahlawan super",
      theme: "Dua tema, satu kue",
      detail: "Untuk dua anak: separuh hutan, separuh jaring laba-laba.",
      field: "toska",
      span: "single",
    },
    {
      src: "/photos/race.jpg",
      width: 900,
      height: 1200,
      alt: "Kue biru bertema balap dengan lintasan putar fondant oranye, mobil mainan, bendera kotak-kotak, api fondant dan angka 3 kuning",
      theme: "Lintasan balap, ulang tahun ke-3",
      detail: "Lintasan fondant oranye, bendera kotak-kotak dan api.",
      field: "butter",
      span: "single",
    },
    {
      src: "/photos/superhero.jpg",
      width: 900,
      height: 1200,
      alt: "Kue tinggi biru dengan bagian atas dan lelehan berwarna merah, potongan gambar pahlawan super, stiker komik dan angka 7 fondant putih",
      theme: "Pahlawan super, ulang tahun ke-7",
      detail: "Krim biru, lelehan merah dan stiker komik.",
      field: "bubblegum",
      span: "single",
    },
  ] as GalleryItem[],
  cta: {
    title: "Tema si kecil belum ada di sini?",
    text: "Kirim foto referensinya.",
    link: {
      label: "Kirim lewat WhatsApp",
      href: waLink("Halo Kak, saya mau tanya kue ulang tahun dengan tema ini:"),
      mockup: true,
    } as Link,
    mockup: true,
  },
};

export type Step = { title: string; text: string; note?: Item; mockup?: boolean };

export const order = {
  heading: "Cara pesan",
  steps: [
    {
      title: "Kirim tema & foto referensi",
      text: "Ceritakan tema favorit si kecil lewat WhatsApp, lampirkan foto contoh kalau ada.",
      mockup: true,
    },
    {
      title: "Pilih ukuran & rasa",
      text: "Pilih diameter kue dan rasa bolunya. Contoh ukuran dan harga ada di bawah.",
    },
    {
      title: "Tentukan tanggal",
      text: "Kabari tanggal dan jam acaranya.",
      note: { text: "Idealnya H-3. Butuh H-1? Tanyakan dulu, ya.", mockup: true },
    },
    {
      title: "Konfirmasi & DP",
      text: "Setelah desain dan harga cocok, pesanan dikunci dengan DP.",
      mockup: true,
    },
    {
      title: "Ambil di Duren Sawit",
      text: "Kue diambil di Jl. Rawa Domba, Duren Sawit, setiap hari 08.00–17.00.",
    },
  ] as Step[],
  card: {
    title: "Kartu pesanan",
    intro: "Isi untuk si kecil, lalu kirim ke WhatsApp kami.",
    fields: {
      name: { label: "Nama si kecil", placeholder: "Nama di papan kue" },
      age: { label: "Ulang tahun ke-", placeholder: "1" },
      date: { label: "Tanggal acara" },
      theme: { label: "Tema favorit", placeholder: "mis. kucing, putri duyung, balap" },
    },
    previewName: "NAMA",
    previewAge: "1",
    button: "Kirim lewat WhatsApp",
    buttonAria: "Kirim kartu pesanan lewat WhatsApp",
    note: "Tombol ini hanya membuka WhatsApp dengan pesan yang sudah terisi. Tidak ada data yang disimpan.",
    // Message the customer sends. "Kak" register is [MOCKUP].
    greeting: "Halo Kak, saya mau pesan kue ulang tahun di Nadine Kitchen.",
    lines: {
      name: "Nama si kecil",
      age: "Ulang tahun ke-",
      theme: "Tema favorit",
      date: "Tanggal acara",
    },
    mockup: true,
  },
};

export type Size = {
  name: string;
  size?: string;
  price: string;
  note?: string;
  silhouette: "d16" | "d20" | "tier2" | "cupcake";
  mockup: true;
};

// All [MOCKUP]: example prices and flavours for the owner to confirm.
export const sizes = {
  heading: "Ukuran & harga",
  intro: "Harga contoh untuk gambaran awal. Harga akhir tergantung tema dan detailnya, tanyakan lewat WhatsApp.",
  scaleNote: "Digambar dengan skala yang sama.",
  items: [
    { name: "Kue karakter", size: "Ø 16 cm", price: "mulai Rp 250rb", silhouette: "d16", mockup: true },
    { name: "Kue karakter", size: "Ø 20 cm", price: "mulai Rp 350rb", silhouette: "d20", mockup: true },
    { name: "Kue 2 tingkat", price: "mulai Rp 650rb", silhouette: "tier2", mockup: true },
    { name: "Cupcake karakter", price: "Rp 15rb/pcs", note: "min. 12 pcs", silhouette: "cupcake", mockup: true },
  ] as Size[],
  flavoursLabel: "Pilihan rasa",
  flavours: [
    { text: "Bolu vanila", mockup: true },
    { text: "Cokelat", mockup: true },
    { text: "Pandan", mockup: true },
    { text: "Red velvet", mockup: true },
    { text: "Rainbow cake", mockup: true },
  ] as Item[],
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const reviews = {
  heading: "Kata mereka",
  rating: shop.rating,
  ratingLine: `dari ${shop.reviewCount} ulasan Google`,
  source: "Diringkas dari ulasan Google",
  link: { label: "Lihat di Google Maps", href: shop.mapsUrl } as Link,
  items: [
    // review 5
    "Seorang orang tua memesan sehari sebelum acara dan tetap dilayani dengan baik. Kuenya tinggi dan besar, detail custom-nya sangat rinci, rasanya enak, dan harganya dinilai murah untuk kualitas segitu. Pesta ulang tahun anaknya jadi meriah.",
    // review 4
    "Pembeli lain menyebut kuenya enak, bentuknya lucu, harganya terjangkau, dan penjualnya ramah.",
  ],
  // reviews 1–3
  short: "Ulasan singkat lainnya memuji pelayanannya dan merekomendasikannya.",
};

export const visit = {
  heading: "Kunjungi kami",
  sub: { text: "Ambil pesanan di sini", mockup: true } as Item,
  hoursLabel: "Jam buka",
  addressLabel: "Alamat",
  delivery: { text: "Butuh diantar? Tanyakan saat pesan.", mockup: true } as Item,
  directions: { label: "Petunjuk arah", href: shop.mapsUrl } as Link,
  mapTitle: "Peta lokasi Nadine Kitchen",
  photo: {
    src: "/photos/chiller.jpg",
    width: 900,
    height: 1600,
    alt: "Lemari pendingin berisi empat kue ulang tahun yang sudah jadi: kue unicorn putih bertanduk pink, kue garasi bus dengan rambu lalu lintas, kue pink bertema taman, dan kue hutan dengan harimau, singa dan zebra fondant",
  } as Photo,
  caption: "Kue-kue yang siap diambil",
};

export const contact = {
  heading: "Hubungi kami",
  lead: { text: "Mau tema apa, Kak?", mockup: true } as Item,
  line: `Chat atau telepon ${shop.phoneDisplay}`,
  whatsapp: { label: "Chat WhatsApp", href: shop.whatsapp.href, mockup: true } as Link,
  phone: { label: `Telepon ${shop.phoneDisplay}`, href: shop.tel } as Link,
  instagram: {
    label: shop.instagram.handle,
    ariaLabel: `Instagram ${shop.instagram.handle}`,
    href: shop.instagram.href,
  } as Link,
};

export const footer = {
  line: "Nadine Kitchen · Cake ulang tahun custom · Duren Sawit, Jakarta Timur",
  draft: "Draf mockup untuk ditinjau pemilik. Belum dipublikasikan.",
};
