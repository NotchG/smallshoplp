// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Language: Bahasa Indonesia, "kamu" register (itself [MOCKUP], see owner-checklist.md).

export type Item = { text: string; mockup?: boolean };

export const banner =
  "Draf mockup untuk Rene Cafe. Beberapa detail masih contoh dan menunggu konfirmasi pemilik.";

export const shop = {
  name: "Rene Cafe", // listing
  type: "Kafe", // listing (type: cafe)
  place: "Pondok Ranggon, Jakarta Timur", // listing; spelling to confirm with the owner
  // listing writes "Jl. Pd. Rangon No.11 ... Pd. Ranggon"; one spelling used here, to confirm
  address: "Jl. Pondok Ranggon No. 11, Pondok Ranggon, Cipayung, Jakarta Timur 13860",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Rene%20Cafe&destination_place_id=ChIJkaZqJO6TaS4RGa943dc7-zE",
  mapsUrl:
    "https://maps.google.com/?cid=3601538125332524825&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Rene%20Cafe%2C%20Jl.%20Pd.%20Rangon%20No.11%2C%20Cipayung%2C%20Jakarta%20Timur&output=embed",
  hoursSummary: "Buka setiap hari, 10.00–22.00", // hours
  everyDay: "Buka setiap hari", // hours
  hours: [
    { day: "Senin", time: "10.00–22.00" },
    { day: "Selasa", time: "10.00–22.00" },
    { day: "Rabu", time: "10.00–22.00" },
    { day: "Kamis", time: "10.00–22.00" },
    { day: "Jumat", time: "10.00–22.00" },
    { day: "Sabtu", time: "10.00–22.00" },
    { day: "Minggu", time: "10.00–22.00" },
  ],
  rating: { value: "4,2", count: 618 }, // listing
};

export const meta = {
  title: "Rene Cafe · Kafe di Pondok Ranggon, Jakarta Timur",
  description:
    "Rene Cafe, kafe bata dan kaca di tengah taman hijau yang luas di Pondok Ranggon, Cipayung, Jakarta Timur. Buka setiap hari, 10.00–22.00.",
};

export const ui = {
  skip: "Langsung ke konten",
  directions: "Petunjuk Arah",
  directionsHint: " (buka Google Maps)",
  mapsLink: "Lihat di Google Maps",
  mapTitle: "Peta lokasi Rene Cafe",
  mapLoading: "Peta Google Maps sedang dimuat.",
};

export const hero = {
  // photos, reviews 1, 2, 4, 5; tone line from the brief
  line: {
    text: "Kafe bata dan kaca di tengah taman hijau yang luas. Ngopi di bawah pohon, makan siang di tepi taman.",
  } as Item,
  windowLabel:
    "Ilustrasi: jendela kaca tinggi berangka baja hitam dengan atap pelana, menghadap taman hijau dengan pepohonan, pagar tanaman berpucuk merah dan meja kayu di atas rumput",
};

export type Place = {
  key: "taman" | "teras" | "ruang";
  name: string;
  text: Item;
  extra?: Item;
  note?: Item;
  label: string;
};

export const places = {
  heading: "Ruang hijau",
  // review 1, paraphrased
  intro: {
    text: "Separuh taman, separuh hutan kecil. Pengunjung menyebutnya tempat paling hijau di Jakarta Timur.",
  } as Item,
  introExtra: { text: "Datang untuk satu kopi, lalu betah sampai makan siang.", mockup: true } as Item,
  items: [
    {
      key: "taman",
      name: "Taman",
      text: { text: "Meja kayu di atas rumput, di bawah pepohonan, berbatas pagar tanaman berpucuk merah." }, // photos
      extra: { text: "Pas untuk keluarga dan rombongan di akhir pekan.", mockup: true },
      label: "Ilustrasi: meja kayu bundar dan kursi besi di atas rumput, di bawah pohon, dengan pagar tanaman berpucuk merah",
    },
    {
      key: "teras",
      name: "Teras kayu",
      text: { text: "Teras beratap berlantai kayu, dengan untaian lampu bohlam, menghadap taman." }, // photos
      label: "Ilustrasi: teras beratap berlantai kayu dengan untaian lampu bohlam, meja dan kursi kayu, menghadap taman",
    },
    {
      key: "ruang",
      name: "Ruang bata & kaca",
      text: { text: "Dinding bata merah, atap pelana berangka baja hitam, jendela kaca tinggi dan kursi rotan." }, // photos
      extra: { text: "Meja dekat jendela untuk yang datang sendiri, bekerja atau membaca.", mockup: true },
      note: { text: "Kata pengunjung, toiletnya bersih dan wangi." }, // review 4
      label: "Ilustrasi: dinding bata merah dengan jendela kaca tinggi berangka baja hitam, meja kayu dan kursi rotan",
    },
  ] as Place[],
};

export type Dish = { key: "pangsit" | "penyet" | "bebek" | "matcha"; name: string; note: Item; label: string };

export const dishes = {
  heading: "Wajib dicoba",
  intro: { text: "Yang disebut pengunjung dalam ulasan mereka." } as Item, // reviews 1, 3, 5
  items: [
    {
      key: "pangsit",
      name: "Pangsit Kuah",
      note: { text: "Disebut wajib dicoba oleh pengunjung." }, // review 3
      label: "Ilustrasi: pangsit kuah dalam mangkuk, dilihat dari atas, di meja kayu bundar",
    },
    {
      key: "penyet",
      name: "Ayam Penyet",
      note: { text: "Dengan tahu dan tempe. Sambalnya enak dan pedasnya nendang." }, // review 1
      label: "Ilustrasi: ayam penyet dengan tahu, tempe dan sambal di piring, dilihat dari atas",
    },
    {
      key: "bebek",
      name: "Bebek Keranjang",
      note: { text: "Kata pengunjung, susah ditemukan di tempat lain." }, // review 5
      label: "Ilustrasi: potongan bebek dalam keranjang rotan, dilihat dari atas",
    },
    {
      key: "matcha",
      name: "Matcha Latte",
      note: { text: "Disukai pengunjung, ada juga versi esnya." }, // review 1, photos
      label: "Ilustrasi: es matcha latte dalam gelas dengan es batu, dilihat dari atas",
    },
  ] as Dish[],
};

export type MenuGroup = { title: string; from: Item; items: Item[] };

export const menu = {
  heading: "Menu andalan",
  groups: [
    {
      title: "Kopi & non-kopi",
      from: { text: "mulai Rp 25rb", mockup: true },
      items: [
        { text: "Matcha Latte" }, // review 1
        { text: "Es Kopi Susu Gula Aren", mockup: true },
        { text: "Americano", mockup: true },
        { text: "Cappuccino", mockup: true },
        { text: "Es Teh Leci", mockup: true },
      ],
    },
    {
      title: "Makanan berat",
      from: { text: "mulai Rp 40rb", mockup: true },
      items: [
        { text: "Ayam Penyet" }, // review 1
        { text: "Pangsit Kuah" }, // review 3
        { text: "Bebek Keranjang" }, // review 5
        { text: "Nasi Goreng", mockup: true },
        { text: "Mie Goreng", mockup: true },
        { text: "Nasi Ayam Bakar", mockup: true },
      ],
    },
    {
      title: "Camilan",
      from: { text: "mulai Rp 25rb", mockup: true },
      items: [
        { text: "Pisang Goreng Coklat Keju", mockup: true },
        { text: "Kerupuk dengan saus cocol", mockup: true }, // photos; name is [MOCKUP]
      ],
    },
  ] as MenuGroup[],
  snacksLabel:
    "Ilustrasi: dua keranjang kawat beralas kertas, satu berisi camilan bertabur coklat dan keju, satu berisi kerupuk dengan saus cocol",
};

export const praise = {
  heading: "Kata mereka",
  source: `Dirangkum dari ulasan Google · ${shop.rating.value} dari ${shop.rating.count} ulasan`, // listing
  // Paraphrased from real reviews only. Never invented, never attributed to a name.
  items: [
    { text: "Tempat paling hijau di Jakarta Timur, dikelilingi pepohonan: separuh taman, separuh hutan." }, // review 1
    { text: "Tenang dan nyaman. Area luarnya hangat dan dikelilingi alam, stafnya ramah." }, // review 2
    { text: "Permata tersembunyi di tempat yang tak terduga, dengan halaman belakang hijau yang luas." }, // review 4
    { text: "Ruang hijaunya luas, suasananya menyenangkan, dan bebek keranjangnya sulit dicari di tempat lain." }, // review 5
  ] as Item[],
};

export const visit = {
  heading: "Kunjungi kami",
};

export const contact = {
  heading: "Hubungi kami",
  line: { text: "Sampai jumpa di bawah pohon.", mockup: true } as Item,
  // Placeholders only: the listing has no phone number. Nothing is shown until the owner sends one.
  slots: [
    { label: "WhatsApp", value: "Nomor menyusul dari pemilik", mockup: true },
    { label: "Instagram", value: "Akun menyusul", mockup: true },
  ],
  placeholderTag: "Belum diisi",
};
