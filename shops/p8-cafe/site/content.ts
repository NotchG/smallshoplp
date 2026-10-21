// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Copy is Bahasa Indonesia, "kamu" register ([MOCKUP]: the owner may prefer "Anda").

export type Item = { text: string; mockup?: boolean };
export type PricedItem = Item & { price?: Item };

// ---------------------------------------------------------------- shop facts (listing)
export const shop = {
  name: "P8 Cafe",
  type: "Kafe & tempat brunch",
  address: "Jl. Pinang Raya No.8, Rawamangun, Pulo Gadung, Jakarta Timur 13220",
  addressLines: ["Jl. Pinang Raya No.8,", "Rawamangun, Pulo Gadung,", "Jakarta Timur 13220"],
  mapsUrl:
    "https://maps.google.com/?cid=3417086348020563686&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  mapEmbed:
    "https://www.google.com/maps?q=P8+Cafe,+Jl.+Pinang+Raya+No.8,+Rawamangun,+Jakarta+Timur&output=embed",
  // No phone number in the listing. Owner to send one; never invent it.
  whatsapp: { text: "", mockup: true } as Item,
  phone: { text: "", mockup: true } as Item,
  rating: { value: "4,7", count: 229 },
};

export const meta = {
  title: "P8 Cafe · Kopi, kue mentega, dan sudut tenang di Rawamangun",
  description:
    "P8 Cafe di Jl. Pinang Raya No.8, Rawamangun, Jakarta Timur. Setiap kopi datang bersama satu kue gratis. Buka setiap hari 10.00–21.00, Jumat–Minggu sampai 22.00.",
};

export const banner = "Draf mockup untuk P8 Cafe. Teks bergaris titik masih contoh sampai dikonfirmasi.";

// ---------------------------------------------------------------- hours (listing)
// dow: 0 = Minggu ... 6 = Sabtu (Asia/Jakarta)
export const hours = [
  { day: "Senin", time: "10.00–21.00", dow: 1 },
  { day: "Selasa", time: "10.00–21.00", dow: 2 },
  { day: "Rabu", time: "10.00–21.00", dow: 3 },
  { day: "Kamis", time: "10.00–21.00", dow: 4 },
  { day: "Jumat", time: "10.00–22.00", dow: 5 },
  { day: "Sabtu", time: "10.00–22.00", dow: 6 },
  { day: "Minggu", time: "10.00–22.00", dow: 0 },
];
export const hoursSummary = "Buka setiap hari";
export const hoursFallback = "Buka setiap hari · 10.00–21.00, Jumat–Minggu sampai 22.00";
export const todayLabel = "Buka hari ini";
export const todayTag = "hari ini";

// ---------------------------------------------------------------- actions
export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
  numberPending: { text: "Nomor menyusul", mockup: true } as Item,
};

function digits(s: string) {
  return s.replace(/\D/g, "");
}
// Empty numbers fall back to the contact section until the owner sends one.
export const whatsappHref = shop.whatsapp.text ? `https://wa.me/${digits(shop.whatsapp.text)}` : "#hubungi";
export const phoneHref = shop.phone.text ? `tel:+${digits(shop.phone.text)}` : "#hubungi";

// ---------------------------------------------------------------- 1. hero
export const hero = {
  line: { text: "Kopi, kue mentega, dan sudut tenang di Rawamangun.", mockup: true } as Item,
  stampText: "SETIAP KOPI + 1 KUE GRATIS ·",
  stampLabel: "Setiap kopi dapat satu kue gratis. Lihat detailnya",
  photo: {
    src: "/owner-1.jpg",
    width: 900,
    height: 1351,
    alt: "Es kopi bola es dalam gelas tinggi berlogo P8, dengan kendi kecil susu dan satu kue beruang di atas nampan.",
  },
};

// ---------------------------------------------------------------- 2. kopi + kue (reviews 3, 4, 5; photos)
export const cookies = {
  title: "Kopi + kue, gratis",
  lead: "Setiap kopi datang bersama satu kue mentega, gratis.",
  body: "Kuenya berbentuk beruang, sama seperti beruang di logo P8: kadang mentega, kadang kacang. Di ulasan Google, kue kecil ini sering dipuji.",
  items: [
    { text: "Kue mentega beruang", variant: "mentega" as const },
    { text: "Kue kacang beruang", variant: "kacang" as const },
  ],
};

// ---------------------------------------------------------------- 3. menu
export const menu = {
  title: "Menu andalan",
  lead: "Minuman dan kue dari etalase “ORDER HERE” di meja kasir, plus makanan untuk yang datang lapar.",
  legend: "Nama dan harga bergaris titik masih contoh.",
  features: [
    {
      name: { text: "Es Kopi Bola Es", mockup: true } as Item,
      price: { text: "Rp 35rb", mockup: true } as Item,
      desc: "Bola-bola es kopi dalam gelas tinggi P8, dengan kendi kecil berisi susu untuk kamu tuang sendiri.",
      illus: "es-kopi" as const,
    },
    {
      name: { text: "Red velvet cupcake" } as Item,
      price: { text: "Rp 25rb", mockup: true } as Item,
      desc: "Salah satu cupcake di etalase kaca, bersama cookies dan kue lain hari itu.",
      illus: "cupcake" as const,
    },
  ],
  groups: [
    {
      title: "Minuman",
      items: [
        { text: "Mocha latte" },
        { text: "Americano panas" },
        { text: "Teh panas" },
        { text: "Kopi susu gula aren", mockup: true, price: { text: "Rp 28rb", mockup: true } },
        { text: "Matcha latte", mockup: true },
        { text: "Iced lemon tea", mockup: true },
        { text: "Iced chocolate", mockup: true },
      ] as PricedItem[],
      note: "Kebanyakan disajikan dingin; yang panas americano dan teh. Minuman manis secara default, bisa minta kurang manis.",
    },
    {
      title: "Dari etalase",
      items: [
        { text: "Red velvet cupcake", price: { text: "Rp 25rb", mockup: true } },
        { text: "Cupcake lain" },
        { text: "Cookies" },
        { text: "Cake" },
      ] as PricedItem[],
    },
    {
      title: "Brunch",
      items: [
        { text: "French toast honey butter", mockup: true },
        { text: "Scrambled eggs on sourdough", mockup: true },
        { text: "Big breakfast plate dengan sosis ayam", mockup: true },
      ] as PricedItem[],
    },
    {
      title: "Nasi",
      priceNote: { text: "Rp 45rb per piring", mockup: true } as Item,
      items: [
        { text: "Buttermilk chicken rice" },
        { text: "Korean sweet sour chicken rice" },
        { text: "Chicken katsu curry rice", mockup: true },
        { text: "Beef teriyaki rice", mockup: true },
        { text: "Nasi goreng P8", mockup: true },
      ] as PricedItem[],
    },
  ],
};

// ---------------------------------------------------------------- 4. kerja & ngumpul (reviews 3, 4, 5; photos)
export const space = {
  title: "Kerja & ngumpul",
  lead: "Tempat yang tenang untuk buka laptop, atau duduk lama bareng teman.",
  points: [
    { title: "Jauh dari bising jalan", body: "Tidak ramai suara jalan, jadi pas untuk kerja dari kafe." },
    { title: "Musik pelan, ngobrol nyaman", body: "Volumenya pas, jadi kamu tidak perlu setengah berteriak." },
    { title: "Banyak ruang, sampai lantai atas", body: "Beberapa ruangan, dan tangga naik ke lantai atas." },
  ],
};

// ---------------------------------------------------------------- 5. ruang acara (reviews 5; photos)
export const events = {
  title: "Ruang acara",
  body: "P8 punya cukup ruang untuk acara kecil. Workshop dan kelas yoga sudah pernah diadakan di sini.",
  gatherings: { text: "Arisan atau ulang tahun kecil juga bisa ditanyakan.", mockup: true } as Item,
  seasonal: "Musiman: saat Ramadan ada menu plating untuk bukber, termasuk Es Rujak Gembira.",
  card: {
    question: [
      { text: "Mau pakai ruang untuk workshop atau yoga" },
      { text: ", arisan, atau ulang tahun", mockup: true },
      { text: "?" },
    ] as Item[],
    cta: { text: "Tanya lewat WhatsApp", mockup: true } as Item,
  },
};

// ---------------------------------------------------------------- 6. bawa pulang (photos)
export const takeHome = {
  title: "Bawa pulang",
  lead: "Datang buat kerja, pulang bawa satu toples cookies.",
  jar: { text: "P8 Butter Cookies" } as Item,
  jarPrice: { text: "Rp 40rb per toples", mockup: true } as Item,
  flavours: { text: "Rasa: original butter, kacang, chocolate chip", mockup: true } as Item,
  hampers: { text: "Hampers Lebaran" } as Item,
  hampersNote: "musiman, harga menyusul",
  cta: { text: "Pesan lewat WhatsApp", mockup: true } as Item,
};

// ---------------------------------------------------------------- 7. kata mereka
// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise = {
  title: "Kata mereka",
  ratingLine: `${shop.rating.value} dari ${shop.rating.count} ulasan Google`,
  footnote: "Diringkas dari ulasan Google, bukan kutipan.",
  link: "Baca ulasan di Google Maps",
  themes: [
    { title: "Seperti di rumah sendiri.", body: "Suasananya hangat dan lucu, bikin betah." },
    { title: "Tenang, enak buat kerja.", body: "Cocok untuk kerja dari kafe atau nongkrong bareng teman." },
    { title: "Kue gratisnya enak.", body: "Kue mentega dan kue kacang yang datang bersama kopi sering dipuji." },
    { title: "Pelayanannya sopan dan hangat.", body: "Tamu merasa dilayani dengan ramah." },
  ],
};

// ---------------------------------------------------------------- 8. kunjungi
export const visit = {
  title: "Kunjungi kami",
  mapTitle: "Peta lokasi P8 Cafe",
};

// ---------------------------------------------------------------- 9. hubungi
export const contact = {
  title: "Hubungi kami",
  lead: "Tanya menu, pesan toples, atau pakai ruang.",
  footer: `${shop.name} · Jl. Pinang Raya No.8, Rawamangun · Draf mockup, belum dipublikasikan`,
};

// Sub-label under number buttons until the owner sends a number.
export const whatsappSub: Item | undefined = shop.whatsapp.text ? undefined : actions.numberPending;
export const phoneSub: Item | undefined = shop.phone.text ? undefined : actions.numberPending;
