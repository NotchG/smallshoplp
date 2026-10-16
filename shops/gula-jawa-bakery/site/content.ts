// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: listing / hours = Google Maps listing, review N = raw.json review N,
// photos = customer photos (reference only, never on the site).

export type Mockable = { text: string; mockup?: boolean };
export type Price = { label: string; mockup: boolean };

export type ArtId =
  | "abon-gulung"
  | "pastry"
  | "donut-pink"
  | "donut-blue"
  | "tiramisu-donut"
  | "cheese-bread"
  | "chocolate-sourdough"
  | "cheesecake-slice";

const placeId = "ChIJbQOYNQD1aS4Rr02JTGw23B0";
const phoneTel = "+6282261842007";
const whatsappPrefill = "Halo Gula Jawa Bakery, abon gulungnya masih ada hari ini?"; // [MOCKUP]

export const shop = {
  name: "Gula Jawa Bakery", // listing (written in caps there)
  scriptLines: ["Gula", "Jawa"] as const, // the neon sign in the shop (photos)
  wordRest: "Bakery",
  area: "Klender, Jakarta Timur", // listing
  address: "Jl. I Gusti Ngurah Rai No. 21, Klender, Duren Sawit, Jakarta Timur 13470", // listing
  addressShort: "Jl. I Gusti Ngurah Rai No. 21, Klender", // listing
  nearby: "Dekat rel kereta di Klender.", // review 3
  phoneDisplay: "0822-6184-2007", // listing
  phoneTel,
  // hours: every day 07:00–21:00 (listing). Review 2 (a year old) said 08:00; asked in the checklist.
  hours: { label: "Setiap hari", today: "Buka hari ini", open: "07.00", close: "21.00" },
  rating: { value: "4,3", count: "1.071", source: "Google" }, // listing
  placeId,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=Gula%20Jawa%20Bakery&destination_place_id=${placeId}`,
  mapsUrl: "https://maps.google.com/?cid=2151654560744689071", // listing googleMapsUri
  mapEmbedUrl:
    "https://www.google.com/maps?q=Gula+Jawa+Bakery,+Jl.+I+Gusti+Ngurah+Rai+No.21,+Klender&output=embed",
  callUrl: `tel:${phoneTel}`,
  whatsapp: {
    url: `https://wa.me/${phoneTel.replace("+", "")}?text=${encodeURIComponent(whatsappPrefill)}`,
    prefill: whatsappPrefill,
    mockup: true, // that the number takes WhatsApp is not confirmed
  },
};

export const hoursRange = `${shop.hours.open}–${shop.hours.close}`;

export const banner = "Draf: contoh situs untuk Gula Jawa Bakery. Belum resmi."; // CLAUDE.md rule 7

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  whatsappLong: "Chat WhatsApp",
  call: "Telepon",
  openMaps: "Buka di Google Maps",
};

export const hero = {
  line: "Abon gulungnya viral.", // reviews 2, 3
  lineEarly: "Datang pagi, sebelum habis.", // reviews 2, 3
  support: "Roti dan bun dipanggang di dapur terbuka, dekat rel kereta di Klender.", // review 3
};

export const art: Record<ArtId, { title: string }> = {
  "abon-gulung": { title: "Ilustrasi abon gulung, utuh dan satu potong" },
  pastry: { title: "Ilustrasi pastry berlapis yang dipilin" },
  "donut-pink": { title: "Ilustrasi pastry donat dengan glaze pink dan remahan" },
  "donut-blue": { title: "Ilustrasi pastry donat dengan glaze biru dan mutiara gula" },
  "tiramisu-donut": { title: "Ilustrasi tiramisu donut bertabur cokelat bubuk" },
  "cheese-bread": { title: "Ilustrasi cheese bread dengan parutan keju" },
  "chocolate-sourdough": { title: "Ilustrasi chocolate sourdough" },
  "cheesecake-slice": { title: "Ilustrasi cheesecake per potong" },
};
// Every illustration stands in for an owner photo, so all of them are mockups.
export const artIsMockup = true;

export const featured = {
  heading: "Yang paling dicari",
  intro: "Dua alasan orang rela datang pagi-pagi ke Klender.",
  items: [
    {
      id: "abon-gulung",
      name: "Abon gulung",
      alias: "abon roll", // reviews 2, 3
      blurb:
        "Bintangnya. Roti gulung berbalut abon yang bikin tempat ini viral, dan biasanya paling cepat habis.", // reviews 2, 3
      price: { label: "Rp 22rb", mockup: true } as Price,
      art: "abon-gulung" as ArtId,
    },
    {
      id: "pastry",
      name: "Pastry",
      alias: undefined as string | undefined,
      blurb:
        "Jangan sampai terlewat. Berlapis mentega, renyah di luar, lembut di dalam, dan besar untuk harganya.", // review 2
      price: { label: "mulai Rp 25rb", mockup: true } as Price,
      art: "pastry" as ArtId,
    },
  ],
};

export const dayBar = {
  open: "07.00", // hours
  close: "21.00", // hours
  best: { label: "Paling lengkap", from: "07.00", until: "10.00", share: 3 / 14, mockup: true }, // review 2: "almost out by 10"
  late: "Makin sore, makin sedikit pilihan.", // reviews 2, 4
  closing: "Datang pagi, sebelum abon gulungnya habis.", // brief tone
};

export type MenuItem = { name: string; price?: Price; mockup?: boolean; source?: string };
// Products shown on a group's rack. A slot can hold several illustrations that share one
// caption (the two glazed pastry-donuts), so the caption always sits right under them.
export type RackSlot = { ids: ArtId[]; caption: string; mockup?: boolean };
export type MenuGroupData = {
  id: string;
  group: string;
  from?: Price;
  rack: RackSlot[];
  items: MenuItem[];
};

export const menu = {
  heading: "Dari oven kami",
  intro: "Yang laris cepat habis, jadi tidak semuanya ada setiap saat.", // reviews 2, 4, 5
  groups: [
    {
      id: "roti",
      group: "Roti manis & asin",
      from: { label: "mulai Rp 12rb", mockup: true },
      rack: [
        { ids: ["cheese-bread"], caption: "Cheese bread" },
        { ids: ["chocolate-sourdough"], caption: "Chocolate sourdough" },
      ],
      items: [
        { name: "Abon gulung", price: { label: "Rp 22rb", mockup: true }, source: "review 2, 3" },
        { name: "Cheese bread", source: "review 4" },
        { name: "Srikaya bread", source: "review 4" },
        { name: "Chocolate sourdough", source: "review 4" },
        { name: "Roti chicken karage", source: "review 1" },
        { name: "Roti gula jawa", mockup: true },
        { name: "Roti sobek", mockup: true },
        { name: "Roti cokelat keju", mockup: true },
        { name: "Roti pisang cokelat", mockup: true },
      ],
    },
    {
      id: "pastry",
      group: "Pastry & donat",
      from: { label: "mulai Rp 25rb", mockup: true },
      rack: [
        { ids: ["donut-pink", "donut-blue"], caption: "Pastry donat aneka glaze", mockup: true },
        { ids: ["tiramisu-donut"], caption: "Tiramisu donut" },
      ],
      items: [
        { name: "Pastry", source: "review 2" },
        { name: "Tiramisu donut", source: "review 4" },
        { name: "Pastry donat aneka glaze", mockup: true, source: "photos (name unknown)" },
      ],
    },
    {
      id: "kue",
      group: "Kue & cheesecake",
      rack: [{ ids: ["cheesecake-slice"], caption: "Cheesecake per potong" }],
      items: [
        // review 1 paid about Rp 50.000 for a thick slice; the price itself stays a mockup
        { name: "Cheesecake per potong", price: { label: "Rp 50rb", mockup: true }, source: "review 1" },
        { name: "Cheesecake brownie", source: "review 1" },
        { name: "Bolu gula jawa", mockup: true },
      ],
    },
  ] as MenuGroupData[],
  notes: [
    { text: "Sesuai namanya: roti gula jawa, bolu gula jawa, dan kopi susu gula aren.", mockup: true },
    { text: "Harga dan gambar masih contoh.", mockup: false },
  ] as Mockable[],
};

export const kitchen = {
  heading: "Dapur terbuka",
  lead: "Roti dan bun dipanggang di depan mata.", // review 3
  body: "Dapurnya terbuka, jadi kamu bisa lihat roti dan bun dibuat dan keluar dari oven.", // review 3
  trayTitle: "Ilustrasi loyang berisi delapan pastry yang baru keluar dari oven",
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const reviews = {
  heading: "Kata mereka",
  summary: `${shop.rating.value} di Google dari ${shop.rating.count} ulasan`, // listing
  note: "Ringkasan ulasan Google, bukan kutipan langsung.",
  items: [
    { text: "Abon gulungnya memang sesuai reputasi, tapi cepat sekali habis.", sources: [2, 3] },
    { text: "Pastry-nya jangan dilewatkan: renyah di luar, lembut di dalam, besar untuk harganya.", sources: [2] },
    { text: "Dapurnya terbuka, roti dan bun kelihatan dipanggang langsung.", sources: [3] },
    { text: "Staf menawarkan untuk menghangatkan roti dan kue sebelum disajikan.", sources: [1] },
    { text: "Datang lebih awal kalau mau pilihan lengkap; sore hari banyak tray sudah kosong.", sources: [2, 4] },
  ],
};

export function reviewSourceLine(n: number) {
  return n > 1 ? `Dari ${n} ulasan Google` : "Dari 1 ulasan Google";
}

export const visit = {
  heading: "Kunjungi kami",
  seating: "Tempat duduknya sedikit. Kebanyakan pembeli bawa pulang.", // reviews 1, 2
  mapTitle: "Peta lokasi Gula Jawa Bakery",
  mapLoading: "Peta Google Maps",
};

export const contact = {
  heading: "Hubungi kami",
  lead: { text: "Takut kehabisan? Chat dulu lewat WhatsApp, minta abon gulungnya disisihkan.", mockup: true } as Mockable,
  channels: { text: "Telepon atau WhatsApp", mockup: true } as Mockable,
};

export const footer = {
  sourceNote: "Alamat dan jam buka dari Google Maps.",
  draftNote: "Draf situs contoh, belum resmi.",
};

export const meta = {
  title: "Gula Jawa Bakery, Klender · Abon gulung & pastry",
  description:
    "Bakery di Klender, Jakarta Timur, dengan dapur terbuka. Abon gulung yang viral dan pastry berlapis mentega. Buka setiap hari 07.00–21.00.",
};
