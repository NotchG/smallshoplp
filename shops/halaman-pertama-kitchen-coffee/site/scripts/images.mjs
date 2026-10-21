// One-off: builds the site's images from the owner's own photo (owner-1.jpg, 1600x2400).
// Usage: node scripts/images.mjs  (from site/). Customer photos (photo-*.jpg) are never used.
import path from "node:path";
import fs from "node:fs/promises";
import sharp from "sharp";

const SRC = path.resolve("..", "photos", "owner-1.jpg");
const PUB = path.resolve("public");
await fs.mkdir(path.join(PUB, "menu"), { recursive: true });

const jpeg = { quality: 78, mozjpeg: true, progressive: true };

// Hero window: full photo, two sizes.
await sharp(SRC).resize(900, 1350).jpeg(jpeg).toFile(path.join(PUB, "hero-900.jpg"));
await sharp(SRC).resize(600, 900).jpeg(jpeg).toFile(path.join(PUB, "hero-600.jpg"));

// Dish crops, boxes from design-brief §6 (x, y, w, h in source pixels), all 4:3, out at 800x600.
const crops = {
  "pizza-pepperoni": [380, 600, 1000, 750],
  "sushi-maki": [0, 1280, 800, 600],
  "sweet-potato-fries": [880, 1140, 720, 540],
  "cheese-fries": [400, 1580, 880, 660],
};
for (const [name, [left, top, width, height]] of Object.entries(crops)) {
  await sharp(SRC)
    .extract({ left, top, width, height })
    .resize(800, 600)
    .jpeg(jpeg)
    .toFile(path.join(PUB, "menu", `${name}.jpg`));
}
console.log("images written to public/");
