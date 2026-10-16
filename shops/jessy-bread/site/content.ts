// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief, or is sourced but unconfirmed
// (the tagline, every cake price, the building description). Listed in owner-checklist.md.
// Language: Bahasa Indonesia. Cake names stay exactly as the shop's price cards write them.

export type Item = { text: string; mockup?: boolean };

// Which drawing to use. The drawings live in components/CakeArt.tsx and BreadArt.tsx.
export type CakeKind =
  | "birthday"
  | "blackforest"
  | "doubleChoco"
  | "chocolateMouse"
  | "tiramissu"
  | "strawberryCheese"
  | "jessyDelight"
  | "rainbow"
  | "redVelvet";

// price absent → the card reads "Tanya harga"
export type Cake = {
  name: string;
  size?: string;
  price?: Item;
  art: CakeKind;
  alt: string;
};

export type BreadKind = "bun" | "multigrain" | "tawar" | "lapis";

export const shop = {
  name: "Jessy Bread",
  tagline: { text: "My Bread is Yours.", mockup: true } as Item, // from the price cards; owner to confirm
  type: "Toko roti & kue",
  address: "Jl. Balai Pustaka Timur No. C2, Rawamangun, Pulo Gadung, Jakarta Timur 13220",
  phone: "(021) 4896888",
  tel: "+62214896888",
  mapsUrl: "https://maps.google.com/?cid=575248056374486860",
  mapEmbed:
    "https://www.google.com/maps?q=Jessy+Bread,+Jl.+Balai+Pustaka+Timur+No.+C2,+Rawamangun,+Jakarta+Timur&output=embed",
  hours: "Setiap hari 06.00–22.00",
  rating: "4,6",
  reviewCount: "1.009",
};

export const meta = {
  title: "Jessy Bread · Toko Roti & Kue di Rawamangun",
  description:
    "Roti dan kue di Jl. Balai Pustaka Timur No. C2, Rawamangun, Jakarta Timur. Buka setiap hari 06.00–22.00.",
  banner: "Draf mockup untuk Jessy Bread. Beberapa detail masih contoh sampai Anda konfirmasi.",
  skip: "Langsung ke konten",
};

export const actions = {
  call: "Telepon",
  callFull: `Telepon ${shop.phone}`,
  directions: "Petunjuk Arah",
  order: { text: "Telepon untuk pesan", mockup: true } as Item,
};

export const hero = {
  sub: "Roti & kue · Rawamangun, Jakarta Timur",
  line: "Roti segar dan kue ulang tahun dengan harga bersahabat.",
  hours: "Buka setiap hari 06.00–22.00",
};

export const heroCake: Cake = {
  name: "Birthday Cake Large",
  size: "16 cm",
  price: { text: "Rp\u00a0165.000", mockup: true },
  art: "birthday",
  alt: "Ilustrasi Birthday Cake Large: kue bundar tinggi berlapis krim hijau pandan dengan hiasan butiran di tepi bawah, di atas alas emas",
};

export const cakeSection = {
  title: "Kue untuk setiap perayaan",
  lead: { text: "Kue ulang tahun langganan keluarga di Rawamangun.", mockup: true } as Item,
  note: "Harga sesuai kartu di etalase dan bisa berubah. Gambar adalah ilustrasi.",
};

// Shelf order from the design brief §6: shelf 1, then shelf 2.
export const cakes: Cake[] = [
  {
    name: "Blackforest",
    size: "20×30",
    art: "blackforest",
    alt: "Ilustrasi kue Blackforest persegi dengan serutan cokelat dan ceri",
  },
  {
    name: "Double Choco Cake",
    price: { text: "Rp\u00a0250.000", mockup: true },
    art: "doubleChoco",
    alt: "Ilustrasi Double Choco Cake persegi dengan lapisan bolu dan krim cokelat",
  },
  {
    name: "Chocolate Mouse",
    price: { text: "Rp\u00a0165.000", mockup: true },
    art: "chocolateMouse",
    alt: "Ilustrasi Chocolate Mouse: kue bundar berlapis cokelat mengilap dengan serpihan cokelat dan ceri",
  },
  {
    name: "Tiramissu",
    size: "16 cm",
    price: { text: "Rp\u00a0190.000", mockup: true },
    art: "tiramissu",
    alt: "Ilustrasi Tiramissu: kue bundar berkrim putih dengan taburan kakao dan hiasan krim",
  },
  {
    name: "Strawberry Cheese",
    price: { text: "Rp\u00a0250.000", mockup: true },
    art: "strawberryCheese",
    alt: "Ilustrasi Strawberry Cheese: kue bundar berkrim putih dengan saus stroberi merah yang meleleh di tepinya",
  },
  {
    name: "Jessy Delight",
    size: "20 cm",
    price: { text: "Rp\u00a0220.000", mockup: true },
    art: "jessyDelight",
    alt: "Ilustrasi Jessy Delight: kue panjang berlapis cokelat dengan pita bergaris di sisinya",
  },
  {
    name: "Rainbow Cake",
    art: "rainbow",
    alt: "Ilustrasi Rainbow Cake persegi dengan enam lapis bolu warna-warni dan garis merah putih di atasnya",
  },
  {
    name: "Red Velvet",
    art: "redVelvet",
    alt: "Ilustrasi kue Red Velvet bundar dengan lapisan bolu merah dan krim keju putih",
  },
];

export const cakeOrder: Item = {
  text: "Pesan kue ulang tahun lewat telepon, lengkap dengan tulisan ucapan di atasnya.",
  mockup: true,
};

export const breadSection = {
  title: "Roti setiap hari",
  // reviews 2, 4, 5
  lead: "Pilihan roti dan kuenya banyak: roti gandum dan multigrain yang selalu segar, sampai kue dan roti tradisional.",
  morning: { text: "Buka mulai 06.00, pas untuk sarapan sebelum berangkat.", mockup: true } as Item,
  moreLabel: "Juga ada",
};

export const breads: { name: Item; price?: Item; art: BreadKind; alt: string }[] = [
  {
    name: { text: "Roti manis dalam kantong" },
    price: { text: "mulai Rp\u00a08.000", mockup: true },
    art: "bun",
    alt: "Ilustrasi roti manis bundar keemasan dalam kantong plastik bening bertuliskan Bread",
  },
  {
    name: { text: "Roti gandum & multigrain" },
    art: "multigrain",
    alt: "Ilustrasi roti gandum lonjong bertabur biji-bijian dengan sayatan di atasnya",
  },
  {
    name: { text: "Roti tawar", mockup: true },
    price: { text: "mulai Rp\u00a018.000", mockup: true },
    art: "tawar",
    alt: "Ilustrasi roti tawar dengan kulit cokelat keemasan",
  },
  {
    name: { text: "Lapis surabaya", mockup: true },
    price: { text: "potongan mulai Rp\u00a020.000", mockup: true },
    art: "lapis",
    alt: "Ilustrasi potongan kue lapis surabaya: lapisan kuning dan cokelat dengan selai",
  },
];

export const breadMore: Item[] = [
  { text: "roti sobek", mockup: true },
  { text: "roti abon", mockup: true },
  { text: "roti cokelat keju", mockup: true },
  { text: "bolu pandan", mockup: true },
  { text: "bolu gulung", mockup: true },
  { text: "kue lapis", mockup: true },
];

export const upstairs = {
  title: "Makan di lantai dua",
  // reviews 3, 5
  lead: "Lantai satu toko roti, lantai dua restoran kecil. Makan di tempat, atau bawa pulang roti Anda.",
  // description, review 5
  body: "Masakan Indonesia dan internasional. Menunya tidak banyak, tapi enak dan harganya terjangkau.",
  facts: ["Parkir", "Wifi"],
  dishesLabel: "Contoh menu",
  dishes: [
    { text: "Nasi goreng", mockup: true },
    { text: "Mie goreng", mockup: true },
    { text: "Ayam penyet", mockup: true },
    { text: "Spaghetti bolognese", mockup: true },
  ] as Item[],
  fromPrice: { text: "Makanan mulai Rp\u00a030.000", mockup: true } as Item,
  drinks: ["Es teh", "Es kopi"],
  drinksAlt: "Ilustrasi es teh dan es kopi dalam gelas plastik bertutup kubah dengan logo bundar Jessy Bread berwarna oranye",
};

// Paraphrased from real Google reviews only. Never quoted, never attributed to a name.
export const praiseSection = {
  title: "Kata mereka",
  rating: `${shop.rating} dari 5`,
  count: `${shop.reviewCount} ulasan di Google`,
  note: "Diringkas dari ulasan Google.",
};

export const praise: { title: string; text: string }[] = [
  {
    title: "Harga bersahabat",
    text: "Lebih murah dari toko roti lain di sekitarnya, dan rasanya sepadan dengan harganya.", // reviews 3, 4
  },
  {
    title: "Langganan kue ulang tahun",
    text: "Ada keluarga yang selalu membeli kue ulang tahun di sini. Blackforest jadi favorit mereka.", // review 2
  },
  {
    title: "Kue cokelat & keju",
    text: "Kue cokelat dan kejunya enak, dengan tekstur yang lembut.", // review 1
  },
  {
    title: "Pilihannya banyak",
    text: "Dari kue dan roti tradisional sampai red velvet dan rainbow cake.", // review 4
  },
  {
    title: "Bersih dan ramah",
    text: "Tokonya bersih, toiletnya juga, dan stafnya ramah serta sigap membantu.", // review 1
  },
  {
    title: "Lantai dua hemat",
    text: "Menu restoran di lantai dua tidak banyak, tapi enak dan harganya murah.", // review 5
  },
];

export const visit = {
  title: "Kunjungi kami",
  parking: "Parkir tersedia di halaman depan", // description, photos
  wayfinding: {
    text: "Gedung abu-abu dua lantai dengan list oranye dan papan oval Jessy Bread & Cake.",
    mockup: true, // from a customer photo of unknown date; owner to confirm it still looks like this
  } as Item,
  facadeAlt: "Gambar sederhana tampak depan toko: gedung abu-abu dua lantai dengan list oranye dan papan oval Jessy Bread & Cake di tiang",
  mapTitle: "Peta lokasi Jessy Bread",
  mapFallback: "Peta Google Maps",
  mapLink: "Buka di Google Maps",
};

export const contact = {
  title: "Hubungi kami",
  text: "Ada pertanyaan soal roti atau kue? Telepon kami.",
};

export const footer = {
  draft: "Draf mockup · info dari listing Google Maps",
};
