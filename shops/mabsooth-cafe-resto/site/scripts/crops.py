# Crops the owner's photos into public/ (run once: python3 -I scripts/crops.py from site/).
# Only owner-*.jpg may be used on the site; photo-*.jpg are reference only.
# Crop boxes are (x, y, w, h) in source pixels, from docs/trd.md "Assets".
import os
import sys
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
PHOTOS = os.path.join(SITE, "..", "photos")
PUBLIC = os.path.join(SITE, "public")
os.makedirs(PUBLIC, exist_ok=True)

JOBS = [
    # file, source, (x, y, w, h), export size or None, quality
    ("canopy-wide.jpg", "owner-1.jpg", (0, 0, 1290, 440), None, 80),
    ("canopy-phone.jpg", "owner-1.jpg", (0, 0, 620, 440), None, 80),
    ("terrace-tiles.jpg", "owner-1.jpg", (760, 860, 530, 534), None, 82),
    ("lamb-shank.jpg", "owner-2.jpg", (0, 700, 1600, 1600), (1200, 1200), 74),
]

only = set(sys.argv[1:])
for name, src, (x, y, w, h), size, q in JOBS:
    if only and name not in only:
        continue
    assert src.startswith("owner-"), "only owner photos may go on the site"
    im = Image.open(os.path.join(PHOTOS, src)).convert("RGB")
    out = im.crop((x, y, x + w, y + h))
    if size:
        out = out.resize(size, Image.LANCZOS)
    path = os.path.join(PUBLIC, name)
    out.save(path, "JPEG", quality=q, optimize=True, progressive=True)
    print(f"{name}: {out.size[0]}x{out.size[1]}, {os.path.getsize(path) // 1024} KB")
