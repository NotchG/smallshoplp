// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia. Menu names stay as the shop writes them.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Red Soldadu Riverside", // listing
  type: "Kedai kopi", // listing type: coffee_shop
  addressShort: "Jl. Sederhana I No.4A, Gedong, Pasar Rebo", // listing
  addressFull:
    "Jl. Sederhana I No.4A, RT.1/RW.6, Gedong, Kec. Pasar Rebo, Jakarta Timur 13760", // listing
  phone: "0812-1506-6612", // listing
  tel: "tel:+6281215066612", // listing
  whatsapp: { text: "https://wa.me/6281215066612", mockup: true } as Item, // assumes the 0812 number takes WhatsApp
  mapsUrl: "https://maps.google.com/?cid=18049291249921847522", // listing googleMapsUri
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Red%20Soldadu%20Riverside%2C%20Jl.%20Sederhana%20I%20No.4A%2C%20Pasar%20Rebo&output=embed",
  hours: [{ days: "Senin–Minggu", time: "08.00–23.00" }], // hours: same every day
  hoursNote: "buka setiap hari", // hours
  todayLine: { label: "Buka hari ini", time: "08.00–23.00" }, // true every day
};

export const meta = {
  title: "Red Soldadu Riverside · Kedai kopi di tepi Ciliwung, Pasar Rebo",
  description:
    "Kedai kopi di tepi Kali Ciliwung, Pasar Rebo, Jakarta Timur. Kopi, mocktail dan camilan. Buka setiap hari 08.00–23.00.",
};

export const banner =
  "Draf mockup untuk Red Soldadu Riverside. Beberapa detail masih contoh sampai dikonfirmasi pemilik.";

export const labels = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
  openMaps: "Buka di Google Maps",
  newTab: "(tab baru)",
  illustration: "Ilustrasi",
};

export const hero = {
  headline: ["Red Soldadu", "Riverside"], // listing name, set as two lines
  sub: { text: "Kopi, mocktail, dan suara sungai di tepi Ciliwung.", mockup: true } as Item,
};

// Di tepi Ciliwung: the setting, from reviews 2, 3, 4 and the photos.
export const setting = {
  heading: "Di tepi Ciliwung",
  lead: "Tersembunyi di dalam kompleks perumahan, di tikungan Kali Ciliwung.", // reviews 2, 3, 4
  body: "Dari dek kayu kamu melihat sungai mengalir di antara pepohonan, pemandangan yang jarang ada di Jakarta Timur. Tenang, teduh, jeda dari riuhnya kota.", // reviews 1, 2, 3, 4
  facts: [
    { text: "Paviliun kayu dan baja, dengan dek di atas sungai" }, // photos
    { text: "Hijau dan teduh, ditemani suara sungai dan pepohonan" }, // reviews 1, 2, 3
    { text: "Tertata sampai ke sendok, gelas, dan piringnya" }, // review 4
  ] as Item[],
  drawingLabel: "Ilustrasi paviliun kayu dan baja di atas Kali Ciliwung",
};

export type ArtKey =
  | "blackAndBerries"
  | "bananaFritter"
  | "cheeseBakedPeuyeum"
  | "mocktail"
  | "honeyWings";

export type Featured = {
  name: string;
  note: string;
  price: Item;
  art: ArtKey;
  artLabel: string;
  mockup?: boolean;
};

// Menu andalan: the five items reviewers single out. Names are real; prices are examples.
export const menu = {
  heading: "Menu andalan",
  intro: "Yang paling sering dipuji pengunjung.",
  priceNote: "Harga masih contoh.",
  featured: [
    {
      name: "Black and Berries",
      note: "Kopi yang disebut wajib dicoba.", // review 1
      price: { text: "Rp 38rb", mockup: true },
      art: "blackAndBerries",
      artLabel: "Gelas tinggi berisi kopi hitam di atas lapisan beri",
    },
    {
      name: "Banana Fritter",
      note: "Pisang goreng yang ikut direkomendasikan.", // review 1
      price: { text: "Rp 35rb", mockup: true },
      art: "bananaFritter",
      artLabel: "Tiga potong pisang goreng di atas piring dengan saus beri",
    },
    {
      name: "Cheese Baked Peuyeum",
      note: "Peuyeum panggang keju, gurih dan agak manis.", // review 3
      price: { text: "Rp 35rb", mockup: true },
      art: "cheeseBakedPeuyeum",
      artLabel: "Peuyeum panggang dengan keju di dalam pinggan oval",
    },
    {
      name: "Mocktail",
      note: "Kejutan kecil, setara kafe Jakarta Selatan.", // reviews 3, 4
      price: { text: "Rp 40rb", mockup: true },
      art: "mocktail",
      artLabel: "Gelas mocktail bersoda dengan daun mint di atas tatakan gabus",
    },
    {
      name: "Honey Wings",
      note: "Sayap ayam berbalut madu.", // review 5
      price: { text: "Rp 42rb", mockup: true },
      art: "honeyWings",
      artLabel: "Tiga sayap ayam madu dengan wijen di atas piring",
    },
  ] as Featured[],
  groups: [
    {
      title: "Kopi",
      range: { text: "Rp 30–40rb", mockup: true },
      items: [
        { text: "Black and Berries" }, // review 1
        { text: "Iced Cappuccino" }, // review 5
        { text: "Espresso", mockup: true },
        { text: "Americano", mockup: true },
        { text: "Cappuccino", mockup: true },
        { text: "Caffe Latte", mockup: true },
        { text: "Es Kopi Susu Gula Aren", mockup: true },
        { text: "Manual brew V60", mockup: true },
      ] as Item[],
    },
    {
      title: "Mocktail & minuman dingin",
      range: { text: "Rp 35–45rb", mockup: true },
      items: [
        { text: "Iced Lychee" }, // review 5
        { text: "Lychee Mint Sparkling", mockup: true },
        { text: "Berry Lime Cooler", mockup: true },
        { text: "Passion Fruit Soda", mockup: true },
      ] as Item[],
    },
    {
      title: "Camilan",
      range: { text: "Rp 30–45rb", mockup: true },
      items: [
        { text: "Banana Fritter" }, // review 1
        { text: "Cheese Baked Peuyeum" }, // review 3
        { text: "Honey Wings" }, // review 5
        { text: "Kentang Goreng", mockup: true },
        { text: "Cireng", mockup: true },
        { text: "Roti Bakar", mockup: true },
      ] as Item[],
    },
    {
      title: "Makanan berat",
      range: { text: "Rp 50–70rb", mockup: true },
      items: [
        { text: "Beef Black Pepper" }, // reviews 1, 5
        { text: "Spaghetti Bolognese" }, // reviews 1, 5
      ] as Item[],
    },
  ],
  // Bean bags are on the bar in the photos; selling them by the bag and the name are examples.
  beans: { text: "Biji kopi untuk dibawa pulang", detail: "House blend 200 g", mockup: true },
  beansLabel: "Kantong biji kopi",
};

export type DayStop = { time: string; label: string; at: number; mockup?: boolean };

// Kerja atau santai: [MOCKUP] section. Opening and closing times are real (hours).
export const workday = {
  heading: { text: "Kerja atau santai", mockup: true } as Item,
  lead: { text: "Datang pagi bawa laptop, pulang setelah mocktail terakhir.", mockup: true } as Item,
  body: "Ada yang datang untuk kerja beberapa jam, ada yang cuma ingin duduk dan mendengar suara sungai.", // reviews 1, 3, 4
  // at: position on the line, 08.00 = 0, 23.00 = 1
  stops: [
    { time: "08.00", label: "Buka", at: 0 },
    { time: "Pagi", label: "Kopi dan laptop", at: 2 / 15, mockup: true },
    { time: "Sore", label: "Camilan dan angin dari sungai", at: 7 / 15, mockup: true },
    { time: "Senja", label: "Mocktail saat cahaya turun di atas sungai", at: 10 / 15, mockup: true },
    { time: "23.00", label: "Tutup", at: 1 },
  ] as DayStop[],
  workNote: { text: "Ada Wi-Fi dan colokan untuk yang datang kerja.", mockup: true } as Item,
};

// Paraphrased from real reviews only. Never invented, never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  items: [
    { text: "Pemandangan sungai dan hijaunya pepohonan, jarang ada di Jakarta Timur." }, // reviews 2, 3, 4
    { text: "Tenang dan damai, jeda dari riuhnya Jakarta." }, // reviews 1, 4
    { text: "Kopinya enak, camilannya layak dipesan." }, // reviews 1, 2, 3
    { text: "Mocktailnya bikin kaget, setara kafe di Jakarta Selatan." }, // reviews 3, 4
    { text: "Sendok, gelas, dan piringnya dipilih dengan teliti." }, // review 4
    { text: "Bersih, tertata rapi, suasananya enak." }, // review 5
  ] as Item[],
  source: "Dirangkum dari ulasan Google · 4,5 dari 506 ulasan", // listing
};

export const visit = {
  heading: "Kunjungi kami",
  notes: [
    { text: "Di dalam kompleks perumahan, tapi mudah ditemukan." }, // review 2
    { text: "Jalan di depan agak sempit, pelan-pelan saja." }, // review 2
    { text: "Parkir sekitar 3 mobil, plus motor." }, // review 2
    { text: "Ada mushola di dekat kafe, bersih dan nyaman." }, // reviews 1, 4
  ] as Item[],
  mapTitle: "Peta lokasi Red Soldadu Riverside",
};

export const contact = {
  heading: "Hubungi kami",
  line: { text: "Tanya menu atau arah jalan lewat WhatsApp.", mockup: true } as Item,
  footerHours: "Setiap hari 08.00–23.00",
  footerNote: "Draf mockup, belum dipublikasikan",
};
