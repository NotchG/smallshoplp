// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources: raw.json (listing, hours, reviews), photos (owner-1/2 on the site; customer photos only described).

export type Item = { text: string; mockup?: boolean };
export type Dish = { name: Item; price?: Item; desc?: Item };
export type Photo = { src: string; alt: string; width: number; height: number };

export const meta = {
  title: "Pintu Dua Coffee · Kopi & rooftop di Lubang Buaya, Cipayung",
  description:
    "Coffee shop bergaya industrial dengan rooftop di Jl. Manunggal XVII No.2, Lubang Buaya, Cipayung. Buka setiap hari 09.00–00.00.",
  banner: "Draf mockup untuk Pintu Dua Coffee. Beberapa detail masih contoh sampai Anda konfirmasi.",
};

export const shop = {
  name: "Pintu Dua Coffee", // listing
  signLines: ["Pintu", "Dua"] as [string, string], // stacked as on the wall sign (photo-3)
  // The listing name ends in "Coffee". "Coffee House" (wall sign) vs "Coffee & Kitchen" (cup) is an owner question.
  subtitle: { text: "Coffee" } as Item,
  type: "Coffee shop",
  address: "Jl. Manunggal XVII No.2, Lubang Buaya, Cipayung, Jakarta Timur 13810",
  addressLines: ["Jl. Manunggal XVII No.2,", "Lubang Buaya, Cipayung,", "Jakarta Timur 13810"],
  phoneDisplay: "0821-2398-0026",
  phoneTel: "+6282123980026",
  // Mobile number; assumed to take WhatsApp until the owner confirms.
  whatsapp: { text: "https://wa.me/6282123980026", mockup: true } as Item,
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Pintu%20Dua%20Coffee&destination_place_id=ChIJl7Wz6uftaS4RGdRouMpRuu8",
  placeUrl: "https://maps.google.com/?cid=17274209251852080153",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Pintu+Dua+Coffee,+Jl.+Manunggal+XVII+No.2,+Lubang+Buaya,+Cipayung&output=embed",
  hours: [{ days: "Senin–Minggu", time: "09.00–00.00" }],
  rating: { value: "4,7", count: 289 },
};

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
};

export const hero = {
  sub: { text: "Kopi, dapur, dan rooftop di Lubang Buaya.", mockup: true } as Item,
  todayLabel: "Buka hari ini",
  todayTime: "09.00–00.00",
  photo: {
    src: "/img/minuman-signature.jpg",
    alt: "Minuman susu dingin dengan biskuit karamel di atasnya, dalam gelas bertuliskan Pintu Dua",
    width: 344,
    height: 430,
  } as Photo,
  caption: {
    name: { text: "Biscoff Latte", mockup: true } as Item,
    price: { text: "Rp 32rb", mockup: true } as Item,
    desc: { text: "Minuman susu dingin dengan biskuit karamel di atasnya." } as Item, // owner-1
  },
};

export const rooftop = {
  label: "Rooftop",
  heading: { text: "Ngopi di bawah, ngobrol di atas.", mockup: true } as Item,
  // reviews 3, 4: a rooftop is rare in a suburban area; photos: it has a roof
  lead: { text: "Rooftop beratap di tengah perumahan Cipayung: jarang ada di pinggiran kota." } as Item,
  rows: [
    {
      key: "Atas",
      text: { text: "Atap seng, lampu bohlam berjajar, meja kayu." } as Item, // photos
      extra: { text: "Paling hidup setelah gelap.", mockup: true } as Item,
    },
    {
      key: "Bawah",
      text: { text: "Bar kopi, dinding beton, lampu kawat, rak penuh sirup dan kantong kopi." } as Item, // photos
      extra: { text: "Siang hari pas untuk kerja atau belajar.", mockup: true } as Item,
    },
  ],
};

export const menu = {
  heading: "Menu andalan",
  lead: { text: "Dari bar di lantai bawah." } as Item,
  note: { text: "Nama dan harga masih contoh.", mockup: true } as Item,
  signatureLabel: "Signature",
  signature: {
    name: { text: "Biscoff Latte", mockup: true },
    price: { text: "Rp 32rb", mockup: true },
    desc: { text: "Yang di foto atas: susu dingin dengan biskuit karamel di atasnya." },
  } as Dish,
  groups: [
    {
      title: "Kopi",
      items: [
        {
          name: { text: "Es Kopi Susu Pintu Dua", mockup: true },
          price: { text: "Rp 22rb", mockup: true },
          desc: { text: "Kopi susu gula aren.", mockup: true },
        },
        { name: { text: "Americano", mockup: true }, price: { text: "Rp 20rb", mockup: true } },
        { name: { text: "Cappuccino", mockup: true } },
        { name: { text: "Caffe Latte", mockup: true } },
        { name: { text: "V60 manual brew", mockup: true } },
      ] as Dish[],
    },
    {
      title: "Non-kopi",
      items: [
        { name: { text: "Matcha Latte", mockup: true } },
        { name: { text: "Red Velvet", mockup: true } },
        { name: { text: "Chocolate", mockup: true } },
        { name: { text: "Lychee Tea", mockup: true } },
      ] as Dish[],
    },
  ],
  // The counter placards, worded as on the counter (photos)
  counter: [
    { sign: "Order & Pay Here", text: { text: "Pesan dan bayar di kasir, bisa pakai QR." } as Item },
    { sign: "Pick Up Here", text: { text: "Ambil pesananmu di sini." } as Item },
  ],
};

export const kitchen = {
  heading: "Dari dapur",
  lead: { text: "Camilan buat teman ngobrol.", mockup: true } as Item,
  dishes: [
    {
      name: { text: "Mix Platter", mockup: true },
      price: { text: "Rp 30rb", mockup: true },
      desc: { text: "Kentang goreng, sosis, nugget, dan saus tomat." }, // owner-2
      photo: {
        src: "/img/dapur-platter.jpg",
        alt: "Kentang goreng, sosis, dan nugget dengan saus tomat di nampan kertas",
        width: 720,
        height: 480,
      } as Photo,
    },
    {
      name: { text: "Dimsum Mentai", mockup: true },
      price: { text: "Rp 25rb", mockup: true },
      desc: { text: "Dimsum dengan saus oranye yang dibakar, plus saus sambal." }, // owner-2
      photo: {
        src: "/img/dapur-dimsum.jpg",
        alt: "Empat dimsum bersaus oranye yang dibakar, dengan saus sambal",
        width: 750,
        height: 500,
      } as Photo,
    },
  ],
  extrasLabel: "Juga ada",
  extras: [
    { text: "Kentang Goreng", mockup: true },
    { text: "Nasi Goreng", mockup: true },
    { text: "Indomie Goreng", mockup: true },
  ] as Item[],
};

// Paraphrased from real reviews only. Never invented, never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  rating: `${shop.rating.value} dari ${shop.rating.count} ulasan Google`,
  items: [
    { text: "Barista dan stafnya ramah dan sigap membantu." }, // reviews 1, 2, 3, 5
    { text: "Suasananya nyaman, musiknya pelan: enak buat ngobrol." }, // reviews 1, 3
    { text: "Rooftop di tengah perumahan: jarang ada, tetap layak walau ramai." }, // reviews 3, 4
    { text: "Makanan dan minumannya enak." }, // reviews 1, 2
  ] as Item[],
  note: "Diringkas dari ulasan Google, bukan kutipan langsung.",
};

export const visit = {
  heading: "Kunjungi kami",
  addressLabel: "Alamat",
  hoursLabel: "Jam buka",
  closingLine: "Buka setiap hari sampai tengah malam.",
  mapTitle: "Peta lokasi Pintu Dua Coffee",
  mapFallback: "Buka di Google Maps",
};

export const contact = {
  label: "Hubungi kami",
  heading: { text: "Rooftop-nya menunggu.", mockup: true } as Item,
};
