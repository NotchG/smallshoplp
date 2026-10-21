// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief (or is copy written for the page).
// Every one of them is listed in owner-checklist.md.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "kupinami",
  descriptor: "Cafe & Resto",
  fullName: "kupinami Cafe & Resto",
  type: "Kafe dan resto keluarga",
  // listing
  address: "Jl. Bina Marga No. 44, Ceger, Cipayung, Jakarta Timur 13820",
  addressLines: ["Jl. Bina Marga No. 44, Ceger,", "Cipayung, Jakarta Timur 13820"],
  phone: "0811-1314-314",
  waUrl: "https://wa.me/628111314314",
  tel: "tel:+628111314314",
  mapsUrl: "https://maps.google.com/?cid=8993584992493652087",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Kupinami%20Cafe%20%26%20Resto&destination_place_id=ChIJX9Q8fkDtaS4Rd0jejuahz3w",
  mapEmbed:
    "https://www.google.com/maps?q=Kupinami%20Cafe%20%26%20Resto%2C%20Jl.%20Bina%20Marga%20No.44%2C%20Cipayung&output=embed",
  // handles from the shop's own hours graphic (owner-2); URLs derived, to confirm
  instagram: "https://www.instagram.com/kupinami",
  facebook: "https://www.facebook.com/kupinami",
  handle: "@kupinami",
  // listing
  rating: "4,7",
  reviewCount: "2.883",
};

export const meta = {
  title: "kupinami Cafe & Resto · Cipayung, Jakarta Timur",
  description:
    "Kafe dan resto keluarga yang tenang di Cipayung: tanpa musik, ada area bermain anak dan musala. Buka setiap hari 07.00–22.00.",
};

export const hours = {
  days: "Setiap hari",
  time: "07.00–22.00",
  // From the shop's own hours graphic (owner-2); Google's hours don't show it.
  fridayBreak: { text: "Jumat istirahat 11.00–13.00 untuk Jum'atan", mockup: true } as Item,
};

export const wa = {
  reserve: { text: "Halo kupinami, saya ingin reservasi meja.", mockup: true } as Item,
  event: {
    text: "Halo kupinami, saya ingin bertanya tentang tempat acara di lantai atas.",
    mockup: true,
  } as Item,
};

export function waLink(message: string) {
  return `${shop.waUrl}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#keluarga", label: "Keluarga" },
  { href: "#acara", label: "Acara" },
  { href: "#lokasi", label: "Lokasi" },
];

export const hero = {
  // fact: no music (reviews 1, 2, 4); wording written for the page
  quiet: { text: "Tanpa musik. Cukup suara obrolan.", mockup: true } as Item,
  personality: { text: "Tempat makan keluarga yang tenang di Cipayung.", mockup: true } as Item,
  hoursLine: "Buka setiap hari 07.00–22.00",
  ctaReserve: "Reservasi via WhatsApp",
  ctaDirections: "Petunjuk Arah",
  photo: {
    src: "/img/kupinami-cappuccino.jpg",
    width: 840,
    height: 793,
    alt: "Cappuccino dengan latte art di cangkir hijau toska, di atas meja kayu kupinami.",
  },
  // review 4
  caption: "Cappuccino, disajikan dengan kue kacang dan dua pilihan gula.",
};

export const family = {
  heading: "Nyaman untuk keluarga",
  intro: {
    text: "Orang tua makan dengan tenang, anak-anak bermain di dekatnya, dan ada tempat untuk salat.",
    mockup: true,
  } as Item,
  // reviews 1, 2, 4
  facilities: [
    {
      name: "Area bermain anak",
      line: "Area bermainnya luas. Si kecil betah berlama-lama, Anda tetap bisa makan dengan tenang.",
    },
    { name: "Musala", line: "Bersih dan rapi, jadi Anda bisa salat tanpa perlu pergi ke tempat lain." },
    { name: "Tanpa musik", line: "Tidak ada musik yang diputar. Tenang untuk mengobrol, makan, atau bekerja." },
    { name: "Parkir luas", line: "Lahan parkirnya lega, mudah untuk datang sekeluarga." },
    {
      name: "Lantai atas untuk acara",
      line: "Ada lantai atas untuk kumpul bersama keluarga atau teman.",
      link: { href: "#acara", label: "Lihat acara" },
    },
  ],
};

export type Dish = { name: string; note?: Item; price?: Item; mockup?: boolean };
export type MenuGroup = {
  id: string;
  category: string;
  from: Item;
  visual: "mie" | "carbonara" | "cappuccino" | "omelet";
  items: Dish[];
};

export const menu = {
  heading: "Menu andalan",
  intro: {
    text: "Dari Mie Aceh sampai chicken carbonara, dari espresso sampai pisang goreng brown sugar. Masakan Indonesia dan Barat, dimasak dengan sungguh-sungguh.",
    mockup: true,
  } as Item,
  note: { text: "Harga contoh.", mockup: true } as Item,
  groups: [
    {
      id: "mie",
      category: "Mie",
      from: { text: "mulai Rp 40rb", mockup: true },
      visual: "mie",
      items: [
        {
          name: "Mie Aceh beef wagyu",
          note: { text: "Berkuah, dagingnya empuk dan potongannya besar." }, // review 4
          price: { text: "Rp 75rb", mockup: true },
        },
        { name: "Mie goreng oriental" }, // review 4
        {
          name: "Mie Aceh goreng, tumis, atau kuah",
          note: { text: "Pilih daging, udang, atau seafood.", mockup: true },
          mockup: true,
        },
      ],
    },
    {
      id: "pasta",
      category: "Pasta & Western",
      from: { text: "mulai Rp 50rb", mockup: true },
      visual: "carbonara",
      items: [
        { name: "Chicken carbonara" }, // reviews 1, 5
        { name: "Fish and chips", note: { text: "Dengan saus tartar." }, mockup: true }, // photo; menu name unknown
        {
          name: "Menu anak",
          note: { text: "Chicken nuggets dengan kentang goreng, atau spaghetti bolognese porsi kecil.", mockup: true },
          mockup: true,
        },
      ],
    },
    {
      id: "kopi",
      category: "Kopi & minuman",
      from: { text: "mulai Rp 25rb", mockup: true },
      visual: "cappuccino",
      items: [
        {
          name: "Cappuccino & latte",
          // fact: review 4; wording written for the page
          note: { text: "Disajikan dengan kue kacang dan dua pilihan gula, manisnya Anda yang atur.", mockup: true },
        },
        { name: "Espresso" }, // review 3
        { name: "Lemonade coffee" }, // review 1
        { name: "Kopi Gayo manual brew", mockup: true },
      ],
    },
    {
      id: "sarapan",
      category: "Sarapan & camilan",
      from: { text: "mulai Rp 25rb", mockup: true },
      visual: "omelet",
      items: [
        { name: "Croissant" },
        { name: "Samosa" },
        { name: "Pisang goreng brown sugar" }, // review 3
        {
          name: "Omelet daging sapi",
          note: { text: "Dengan potongan daging tumis, paprika, tomat, dan salad wortel." }, // owner-1 photo
          mockup: true,
        },
      ],
    },
  ] as MenuGroup[],
  omeletPhoto: {
    src: "/img/kupinami-omelet.jpg",
    width: 440,
    height: 440,
    alt: "Omelet dengan potongan daging sapi tumis, paprika, tomat, dan salad wortel.",
  },
};

export const events = {
  heading: "Acara di kupinami",
  // fact: upstairs floor for events (review 2)
  intro: { text: "Lantai atas kami bisa dipakai untuk kumpul bersama.", mockup: true } as Item,
  sub: {
    text: "Ceritakan acara Anda lewat WhatsApp, kami bantu siapkan tempatnya.",
    mockup: true,
  } as Item,
  cardTitle: "Cocok untuk",
  uses: [
    { text: "Arisan", mockup: true },
    { text: "Ulang tahun anak", mockup: true },
    { text: "Kumpul keluarga", mockup: true },
    { text: "Pertemuan kantor", mockup: true },
  ] as Item[],
  cta: "Pesan tempat via WhatsApp",
};

// Paraphrased from real reviews only. Never invented, never quoted, never attributed to a name.
export const praise = {
  heading: "Kata para tamu",
  rating: `${shop.rating} dari ${shop.reviewCount} ulasan Google`,
  note: "Diringkas dari ulasan Google.",
  items: [
    { text: "Tenang, karena memang tidak ada musik. Enak untuk mengobrol, makan, atau bekerja." }, // reviews 1, 2, 4
    { text: "Anak-\u2060anak betah berjam-\u2060jam di area bermainnya." }, // review 2
    { text: "Mie Aceh beef wagyu-\u2060nya berkuah, dagingnya empuk, dan potongannya besar." }, // review 4
    { text: "Kopinya dibuat dengan teliti oleh barista yang paham betul." }, // review 3
  ] as Item[],
};

export const visit = {
  heading: "Kunjungi kami",
  hoursLabel: "Jam buka",
  parking: "Parkir luas", // review 2
  unconfirmed: "Belum dikonfirmasi",
  ctaDirections: "Petunjuk Arah",
  ctaMaps: "Buka di Google Maps",
  mapTitle: "Peta lokasi kupinami Cafe & Resto",
  mapPlaceholder: "Peta Google Maps: Jl. Bina Marga No. 44, Cipayung",
};

export const contact = {
  heading: "Hubungi kami",
  waLabel: "WhatsApp",
  waUse: "Reservasi & pesan antar", // owner-2: "RSVP & Delivery Order"
  waCta: "Chat WhatsApp",
  socialLabel: "Media sosial",
  directions: "Petunjuk Arah",
};

export const banner =
  "Draf mockup untuk kupinami Cafe & Resto. Beberapa detail masih contoh sampai Anda konfirmasi.";
