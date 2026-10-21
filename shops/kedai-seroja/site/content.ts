// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources: listing / hours = raw.json, reviews 1–5 = raw.json reviews (paraphrased only),
// photos = customer photos (reference only, never shown).

export type ArtName =
  | "kecombrang" | "dendeng" | "nasiRendang" | "bakwan" | "bakmi"
  | "nasi" | "rendang" | "ayamBakar" | "telurBalado" | "tempeOrek" | "sayurLodeh" | "perkedel" | "sambalAti"
  | "latte" | "risol" | "lumpia" | "donatCokelat" | "donatWarna" | "donatGula";

export type Item = { text: string; mockup?: boolean };

export const meta = {
  title: "Kedai Seroja · Masakan rumahan & kopi di Rawamangun (draf)",
  description:
    "Kedai Seroja di Jl. Sawo No.15, Rawamangun: masakan rumahan, lauk pilihan sendiri, dan kopi. Buka setiap hari kecuali Selasa.",
};

export const banner = "Draf tampilan untuk Kedai Seroja. Beberapa isi masih contoh.";

export const shop = {
  // Listing says "Kedai Seroja Jakarta"; the sign on the house reads "KEDAI SEROJA" (listing, photos).
  name: "Kedai Seroja",
  nameLines: ["Kedai", "Seroja"] as const,
  tagline: { text: "Masakan rumahan & kopi di sudut Rawamangun", mockup: true } as Item,
  address: "Jl. Sawo No.15, Rawamangun, Pulo Gadung, Jakarta Timur 13220",
  addressShort: "Jl. Sawo No.15, Rawamangun",
  phoneDisplay: "(021) 4893552",
  phoneHref: "tel:+62214893552",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Kedai%20Seroja%20Jakarta&destination_place_id=ChIJ78zOiLHtaS4RkyMKbowe3H8",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Kedai%20Seroja%2C%20Jl.%20Sawo%20No.15%2C%20Rawamangun%2C%20Jakarta%20Timur&output=embed",
  rating: { value: "4,5", count: 452 },
};

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Lauk", href: "#lauk" },
  { label: "Kopi", href: "#kopi" },
  { label: "Lokasi", href: "#lokasi" },
];

export const actions = {
  directions: "Petunjuk Arah",
  call: "Telepon",
  callFull: `Telepon ${shop.phoneDisplay}`,
};

// Hours (raw.json regularOpeningHours). jsDay: 0 = Minggu … 6 = Sabtu.
export type Day = { day: string; jsDay: number; open?: string; close?: string; closed?: boolean };
export const hours: Day[] = [
  { day: "Senin", jsDay: 1, open: "10.00", close: "21.00" },
  { day: "Selasa", jsDay: 2, closed: true },
  { day: "Rabu", jsDay: 3, open: "10.00", close: "21.00" },
  { day: "Kamis", jsDay: 4, open: "10.00", close: "21.00" },
  { day: "Jumat", jsDay: 5, open: "09.00", close: "21.00" },
  { day: "Sabtu", jsDay: 6, open: "09.00", close: "21.00" },
  { day: "Minggu", jsDay: 0, open: "09.00", close: "21.00" },
];

export const today = {
  // Shown at build time and with JS off; swapped for today's line after mount.
  fallback: "Buka setiap hari kecuali Selasa",
  open: (from: string, to: string) => `Buka hari ini ${from}–${to}`,
  closed: (next: Day) => `Hari ini tutup · ${next.day} buka ${next.open}`,
  todayLabel: "(hari ini)",
  closedLabel: "Tutup",
};

export const hero = {
  plateLabel: "Ilustrasi piring ramesan: nasi putih, rendang, telur balado, tempe orek, dan perkedel di atas daun pisang",
  plateCaption: { text: "Contoh piring ramesan · mulai Rp 22rb", mockup: true } as Item,
  seeMenu: "Lihat menu",
};

export type Dish = {
  name: string;
  note: Item;          // one-line description
  price?: Item;        // absent = "harga menyusul"
  fromReviews: boolean;
  art: ArtName;
  featured?: boolean;
  mockup?: boolean;    // the dish itself is a guess
};

export const menuAndalan = {
  title: "Menu andalan",
  intro: "Hidangan yang disebut tamu di ulasan Google.",
  priceNote: { text: "Harga contoh, menunggu konfirmasi pemilik.", mockup: true } as Item,
  reviewTag: "disarankan di ulasan",
  noPrice: "harga menyusul",
  dishes: [
    {
      name: "Nasi Goreng Kecombrang", // reviews 2, 5
      note: { text: "Nasi goreng dengan harum segar bunga kecombrang, telur ceplok di atasnya.", mockup: true },
      price: { text: "Rp 35rb", mockup: true },
      fromReviews: true,
      art: "kecombrang",
      featured: true,
    },
    {
      name: "Dendeng Batokok", // review 2
      note: { text: "Daging sapi pipih yang dipukul, dengan sambal cabai.", mockup: true },
      price: { text: "Rp 42rb", mockup: true },
      fromReviews: true,
      art: "dendeng",
    },
    {
      name: "Nasi Rendang", // review 3
      note: { text: "Rendang daging dengan nasi putih hangat di atas daun.", mockup: true },
      price: { text: "Rp 38rb", mockup: true },
      fromReviews: true,
      art: "nasiRendang",
    },
    {
      name: "Bakwan Jagung", // review 2
      note: { text: "Bakwan jagung manis, renyah di pinggirnya.", mockup: true },
      price: { text: "Rp 15rb", mockup: true },
      fromReviews: true,
      art: "bakwan",
    },
    {
      // A Chinese-style noodle dish is in review 1; the exact dish is a guess.
      name: "Bakmi Ayam Jamur",
      note: { text: "Bakmi ayam jamur, bisa juga bakmi goreng.", mockup: true },
      fromReviews: false,
      art: "bakmi",
      mockup: true,
    },
  ] as Dish[],
};

export type Tray = { name: string; art: ArtName; mockup?: boolean };

export const ramesan = {
  title: "Pilih lauk sendiri",
  // Reviews 1 and 3: warteg/ramesan-style counter, build your own rice plate.
  text: "Seperti di warteg: lauk rumahan berjajar di etalase. Ambil nasi, tunjuk lauk yang kamu mau, dan piringmu jadi.",
  line: { text: "Pilih lauk sendiri, atau langsung pesan Nasi Goreng Kecombrang.", mockup: true } as Item,
  priceFrom: { text: "Satu piring mulai Rp 22rb", mockup: true } as Item,
  counterLabel: "Contoh isi etalase lauk",
  trayNote: { text: "Contoh lauk, menunggu konfirmasi pemilik.", mockup: true } as Item,
  trays: [
    { name: "Nasi putih", art: "nasi" },
    { name: "Rendang", art: "rendang" }, // review 3
    { name: "Ayam Bakar", art: "ayamBakar", mockup: true },
    { name: "Telur Balado", art: "telurBalado", mockup: true },
    { name: "Tempe Orek", art: "tempeOrek", mockup: true },
    { name: "Sayur Lodeh", art: "sayurLodeh", mockup: true },
    { name: "Perkedel", art: "perkedel", mockup: true },
    { name: "Sambal Goreng Ati", art: "sambalAti", mockup: true },
  ] as Tray[],
};

export type MenuItem = { name: string; price?: Item; art?: ArtName; mockup?: boolean };

export const kopi = {
  title: "Kopi & camilan",
  // Reviews 2 and 4 praise the coffee, the latte by name.
  intro: "Tamu di ulasan Google memuji kopinya, terutama latte. Temani dengan camilan dari etalase.",
  coffeeTitle: "Kopi",
  coffee: [
    { name: "Latte", price: { text: "Rp 28rb", mockup: true } },
    { name: "Kopi Susu Gula Aren", price: { text: "Rp 25rb", mockup: true }, mockup: true },
    { name: "Americano", mockup: true },
    { name: "Kopi Tubruk", mockup: true },
  ] as MenuItem[],
  nonCoffeeTitle: "Bukan kopi",
  nonCoffee: [
    { name: "Es Teh Manis", mockup: true },
    { name: "Es Jeruk", mockup: true },
    { name: "Teh Tarik", mockup: true },
  ] as MenuItem[],
  cardNote: { text: "Harga contoh. Yang belum berharga menyusul dari pemilik.", mockup: true } as Item,
  shelfLabel: "Etalase camilan",
  donutTitle: "Donat",
  donutPrice: { text: "Rp 10rb", mockup: true } as Item,
  // Donuts on a green leaf in the display case (photos).
  donuts: [
    { name: "Meses cokelat", art: "donatCokelat" },
    { name: "Meses warna-warni", art: "donatWarna" },
    { name: "Gula halus isi", art: "donatGula" },
  ] as MenuItem[],
  snacks: [
    { name: "Latte", price: { text: "Rp 28rb", mockup: true }, art: "latte" },
    { name: "Risol Ragout", price: { text: "Rp 8rb/pcs", mockup: true }, art: "risol" }, // review 3
    { name: "Lumpia", price: { text: "Rp 8rb/pcs", mockup: true }, art: "lumpia" }, // review 3
  ] as MenuItem[],
};

export const suasana = {
  title: "Suasananya",
  lead: { text: "Masakan rumahan, di rumah yang hangat.", mockup: true } as Item,
  // Reviews 1, 3, 4, 5: a house in a residential street, cosy, warm welcome, seating inside and out.
  text:
    "Kedai Seroja menempati sebuah rumah di jalan perumahan yang tenang di Rawamangun. Tempatnya sederhana dan nyaman, tamu disambut hangat, dan beberapa di antaranya menyebutnya permata tersembunyi.",
  facts: [
    "Di jalan perumahan, Jl. Sawo No.15",
    "Tempat duduk di dalam dan di luar",
    "Rumah dengan jendela jati dan pintu lengkung",
  ],
  photoSlots: [
    { label: "Foto dari pemilik: tampak depan dengan papan merah", alt: "Tempat foto dari pemilik: tampak depan dengan papan merah" },
    { label: "Foto dari pemilik: jendela jati & lorong lengkung", alt: "Tempat foto dari pemilik: jendela jati dan lorong lengkung" },
  ],
  // The small canvas at the entrance (photos).
  canvas: "Home at last.",
  canvasNote: "Kanvas kecil di pintu masuk",
};

export const kata = {
  title: "Kata mereka",
  rating: `${shop.rating.value} dari ${shop.rating.count} ulasan di Google`,
  note: "Diringkas dari ulasan Google, bukan kutipan.",
  // Paraphrased themes. No names, no quotes.
  themes: [
    { title: "Masakannya enak", text: "Dari masakan Nusantara sampai mi, tamu bilang semuanya enak." }, // reviews 1, 3, 4, 5
    { title: "Harga bersahabat", text: "Harganya dinilai wajar untuk kualitas makanannya." }, // reviews 3, 4
    { title: "Kopinya dipuji", text: "Kopinya mendapat pujian, terutama latte." }, // reviews 2, 4
    { title: "Tempatnya nyaman", text: "Interiornya rapi dan nyaman, dengan tempat duduk di dalam dan di luar." }, // reviews 2, 3, 5
  ],
};

export const kunjungi = {
  title: "Kunjungi kami",
  hoursTitle: "Jam buka",
  // Reviews 1 (residential area) + photos (red sign on the white gable).
  landmarkFact: "Ada di dalam jalan perumahan. Cari papan merah KEDAI SEROJA di atap putih.",
  landmarkOwner: { text: "Patokan: (diisi pemilik)", mockup: true } as Item,
  mapTitle: "Peta lokasi Kedai Seroja",
  mapFallback: "Peta Google Maps",
};

export const hubungi = {
  title: "Hubungi kami",
  line: { text: "Mampir, ya. Atau telepon dulu.", mockup: true } as Item,
};

export const footer = {
  draftNote: "Situs ini draf untuk pemilik.",
};

export const a11y = {
  skip: "Langsung ke isi",
  home: "Kedai Seroja, ke atas halaman",
  navLabel: "Navigasi utama",
  art: (name: string) => `Ilustrasi ${name}`,
};
