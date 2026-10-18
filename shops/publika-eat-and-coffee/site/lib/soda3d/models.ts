// The three hero dishes as 3D models, built from simple solids in the drawings' own colours
// (components/art/palette.ts), so they read as the menu's drawings given depth: matte black
// plates, golden fried rice under fanned marbled wagyu, a layered tiramisu dusted with cocoa,
// a glazed cup of kopi beside a glass of iced tea. Every model lies flat (up = +y) and fits a
// plate of radius 1. Geometries and materials are built once and shared by every copy.
import {
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  CircleGeometry,
  Color,
  CylinderGeometry,
  DoubleSide,
  ExtrudeGeometry,
  Float32BufferAttribute,
  Group,
  LatheGeometry,
  Material,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Shape,
  SphereGeometry,
  SRGBColorSpace,
  Texture,
  TorusGeometry,
  Vector2,
} from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { C } from "@/components/art/palette";
import type { DishId } from "@/content";

export type DishKit = { build: (id: DishId) => Group; dispose: () => void };

// a deterministic random, so every copy of a dish is the same dish
function rng(seed: number) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function canvasTexture(w: number, h: number, paint: (g: CanvasRenderingContext2D) => void) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  paint(c.getContext("2d")!);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

const lathe = (pts: [number, number][], seg = 64) => new LatheGeometry(pts.map(([r, y]) => new Vector2(r, y)), seg);

export function createDishKit(): DishKit {
  const geos: BufferGeometry[] = [];
  const mats: Material[] = [];
  const texs: Texture[] = [];
  const g = <T extends BufferGeometry>(x: T) => (geos.push(x), x);
  const m = <T extends Material>(x: T) => (mats.push(x), x);
  const std = (color: string, roughness: number, extra: Partial<MeshStandardMaterial> = {}) =>
    m(new MeshStandardMaterial({ color, roughness, metalness: 0, ...extra }));
  const glaze = (color: string) => m(new MeshPhysicalMaterial({ color, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.12 }));

  // ---- materials ----
  const rim = std(C.rim, 0.42);
  const well = std(C.steel, 0.6);
  const rice = std("#ffffff", 0.95, { vertexColors: true });
  const marbling = canvasTexture(256, 64, (x) => {
    x.fillStyle = C.wagyu;
    x.fillRect(0, 0, 256, 64);
    const r = rng(7);
    x.strokeStyle = C.marbling;
    x.globalAlpha = 0.75;
    for (let i = 0; i < 18; i++) {
      x.lineWidth = 1 + r() * 3;
      x.beginPath();
      let px = r() * 256;
      let py = r() * 64;
      x.moveTo(px, py);
      for (let k = 0; k < 4; k++) {
        px += 12 + r() * 30;
        py += (r() - 0.5) * 18;
        x.lineTo(px, py);
      }
      x.stroke();
    }
    x.globalAlpha = 1;
    x.fillStyle = "rgba(40, 18, 12, 0.55)"; // seared edges
    x.fillRect(0, 0, 256, 6);
    x.fillRect(0, 58, 256, 6);
  });
  texs.push(marbling);
  const wagyu = std("#ffffff", 0.55, { map: marbling });
  const onion = std(C.leaf, 0.6);
  const onion2 = std(C.lime, 0.6);
  const cracker = std(C.mascarpone, 0.8);
  const sponge = std(C.crema, 0.95);
  const cream = std(C.mascarpone, 0.7);
  const cocoaMap = canvasTexture(256, 256, (x) => {
    x.fillStyle = C.cocoa;
    x.fillRect(0, 0, 256, 256);
    const r = rng(11);
    for (let i = 0; i < 420; i++) {
      x.fillStyle = r() < 0.75 ? C.coffee : C.crema;
      x.globalAlpha = 0.5 + r() * 0.5;
      x.beginPath();
      x.arc(r() * 256, r() * 256, 0.8 + r() * 2.4, 0, Math.PI * 2);
      x.fill();
    }
    x.globalAlpha = 1;
  });
  texs.push(cocoaMap);
  const cocoa = std("#ffffff", 1, { map: cocoaMap });
  const steelware = m(new MeshStandardMaterial({ color: C.grout, metalness: 0.85, roughness: 0.28 }));
  const cup = glaze(C.tile);
  const saucer = glaze(C.grout);
  const cremaMap = canvasTexture(256, 256, (x) => {
    const grd = x.createRadialGradient(128, 128, 0, 128, 128, 128);
    grd.addColorStop(0, C.coffee);
    grd.addColorStop(0.72, C.coffee);
    grd.addColorStop(0.86, C.crema);
    grd.addColorStop(1, C.crema);
    x.fillStyle = grd;
    x.fillRect(0, 0, 256, 256);
    const isle = x.createRadialGradient(96, 100, 0, 96, 100, 34);
    isle.addColorStop(0, "rgba(154,101,56,0.6)");
    isle.addColorStop(1, "rgba(154,101,56,0)");
    x.fillStyle = isle;
    x.fillRect(0, 0, 256, 256);
  });
  texs.push(cremaMap);
  const coffee = std("#ffffff", 0.14, { map: cremaMap });
  const glass = m(new MeshPhysicalMaterial({ color: C.tile, roughness: 0.06, transparent: true, opacity: 0.24, depthWrite: false, side: DoubleSide }));
  const tea = std(C.tea, 0.18, { transparent: true, opacity: 0.92 });
  const ice = m(new MeshPhysicalMaterial({ color: C.tile, roughness: 0.1, transparent: true, opacity: 0.55, clearcoat: 1 }));

  // ---- shared geometry ----
  const plateGeo = g(lathe([[0, -0.035], [0.86, -0.035], [0.96, 0.02], [1.0, 0.07], [0.985, 0.088], [0.9, 0.064], [0.7, 0.036], [0, 0.036]]));
  const wellGeo = g(new CircleGeometry(0.69, 64).rotateX(-Math.PI / 2).translate(0, 0.037, 0));
  const plate = () => {
    const p = new Group();
    p.add(new Mesh(plateGeo, rim), new Mesh(wellGeo, well));
    return p;
  };

  // fried rice: a faceted dome, every facet a slightly different gold (so it reads as grains)
  const riceGeo = (() => {
    const s = new SphereGeometry(0.5, 56, 22, 0, Math.PI * 2, 0, Math.PI / 2).toNonIndexed();
    s.scale(1, 0.62, 0.88);
    const r = rng(3);
    const pos = s.getAttribute("position");
    const golds = [C.rice, "#CF9A40", "#E2B460", "#BE8536", "#D9A54A"].map((h) => new Color(h));
    const col = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i += 3) {
      const c = r() < 0.06 ? new Color(C.wagyu) : golds[Math.floor(r() * golds.length)];
      const lift = 1 + r() * 0.05;
      for (let k = 0; k < 3; k++) {
        const v = i + k;
        if (pos.getY(v) > 0.01) pos.setXYZ(v, pos.getX(v) * lift, pos.getY(v) * lift, pos.getZ(v) * lift);
        col.set([c.r, c.g, c.b], v * 3);
      }
    }
    s.setAttribute("color", new Float32BufferAttribute(col, 3));
    s.computeVertexNormals();
    return g(s.translate(0, 0.036, 0.04));
  })();
  const riceY = (x: number, z: number) => {
    const t = 1 - (x / 0.5) ** 2 - ((z - 0.04) / 0.44) ** 2;
    return t > 0 ? 0.036 + 0.31 * Math.sqrt(t) : 0.036;
  };
  // one wagyu slice: a thin strip arched to lie over the dome
  const sliceGeo = (() => {
    const b = new BoxGeometry(0.2, 0.035, 0.6, 2, 1, 16);
    const pos = b.getAttribute("position");
    for (let i = 0; i < pos.count; i++) pos.setY(i, pos.getY(i) - 0.62 * pos.getZ(i) ** 2);
    b.computeVertexNormals();
    return g(b);
  })();
  const onionGeos = (() => {
    const r = rng(5);
    const a: BufferGeometry[] = [];
    const b: BufferGeometry[] = [];
    for (let i = 0; i < 22; i++) {
      const x = (r() - 0.5) * 0.8;
      const z = (r() - 0.5) * 0.7;
      const y = riceY(x, z);
      const c = new CylinderGeometry(0.026, 0.026, 0.014, 10).rotateX((r() - 0.5) * 0.6).translate(x, y + 0.035, z);
      (i % 3 ? a : b).push(c);
    }
    return [g(mergeGeometries(a)), g(mergeGeometries(b))];
  })();
  const crackerGeo = (() => {
    const sh = new Shape();
    const r = rng(9);
    for (let i = 0; i <= 28; i++) {
      const t = (i / 28) * Math.PI * 2;
      const rad = 0.2 * (1 + (r() - 0.5) * 0.18);
      const p = [Math.cos(t) * rad, Math.sin(t) * rad * 0.8] as const;
      if (i === 0) sh.moveTo(...p);
      else sh.lineTo(...p);
    }
    return g(new ExtrudeGeometry(sh, { depth: 0.02, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 2 }).rotateX(-Math.PI / 2));
  })();

  const nasiGoreng = () => {
    const d = plate();
    d.add(new Mesh(riceGeo, rice));
    for (let i = 0; i < 5; i++) {
      // fanned like a hand of cards from a pivot at the front of the dome, each over its crown
      const a = -0.56 + i * 0.28;
      const x = Math.sin(a) * 0.3;
      const z = 0.36 - Math.cos(a) * 0.3;
      const s = new Mesh(sliceGeo, wagyu);
      s.position.set(x, riceY(x, z) + 0.02 + i * 0.006, z);
      s.rotation.y = -a;
      d.add(s);
    }
    d.add(new Mesh(onionGeos[0], onion), new Mesh(onionGeos[1], onion2));
    const c = new Mesh(crackerGeo, cracker);
    c.position.set(-0.56, 0.05, 0.42);
    c.rotation.set(0.12, 0.6, 0.08);
    d.add(c);
    return d;
  };

  // tiramisu: sponge and mascarpone layers under a cocoa top, a spoon beside
  const tiraGeos = (() => {
    const layers: [number, Material][] = [[0.085, sponge], [0.1, cream], [0.085, sponge], [0.11, cream]];
    let y = 0.036;
    const out: { geo: BufferGeometry; mat: Material }[] = [];
    for (const [h, mat] of layers) {
      out.push({ geo: g(new RoundedBoxGeometry(0.92, h, 0.92, 2, 0.025).translate(0, y + h / 2, 0)), mat });
      y += h;
    }
    out.push({ geo: g(new RoundedBoxGeometry(0.9, 0.03, 0.9, 2, 0.012).translate(0, y + 0.012, 0)), mat: cocoa });
    return out;
  })();
  const spoonGeos = [
    g(new SphereGeometry(0.1, 24, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2).scale(0.9, 0.32, 1.35).translate(0, 0.07, -0.26)),
    g(new BoxGeometry(0.036, 0.014, 0.5).translate(0, 0.075, 0.12)),
  ];
  const tiramisu = () => {
    const d = plate();
    const t = new Group();
    for (const l of tiraGeos) t.add(new Mesh(l.geo, l.mat));
    t.rotation.y = -0.14;
    t.position.set(-0.08, 0, -0.04);
    d.add(t);
    const s = new Group();
    for (const sg of spoonGeos) s.add(new Mesh(sg, steelware));
    s.position.set(0.62, 0, 0.36);
    s.rotation.y = 0.55;
    d.add(s);
    return d;
  };

  // kopi & teh: a glazed cup of black kopi on its saucer, a glass of iced tea beside it
  const saucerGeo = g(lathe([[0, 0], [0.38, 0], [0.47, 0.035], [0.53, 0.07], [0.515, 0.084], [0.44, 0.055], [0.2, 0.038], [0, 0.038]]));
  const cupGeo = g(lathe([[0, 0.04], [0.17, 0.04], [0.19, 0.06], [0.24, 0.13], [0.28, 0.24], [0.3, 0.33], [0.31, 0.37], [0.295, 0.38], [0.282, 0.36], [0.27, 0.32], [0.25, 0.23], [0.2, 0.13], [0.16, 0.09], [0, 0.085]]));
  const coffeeGeo = g(new CircleGeometry(0.272, 48).rotateX(-Math.PI / 2).translate(0, 0.33, 0));
  const handleGeo = g(new TorusGeometry(0.09, 0.028, 12, 32, Math.PI * 1.25).rotateZ(-Math.PI * 0.62).translate(0.32, 0.22, 0));
  const glassGeo = g(new CylinderGeometry(0.24, 0.205, 0.56, 40, 1, true).translate(0, 0.28, 0));
  const glassBase = g(new CircleGeometry(0.205, 40).rotateX(-Math.PI / 2).translate(0, 0.004, 0));
  const teaGeo = g(new CylinderGeometry(0.225, 0.198, 0.42, 40).translate(0, 0.215, 0));
  const iceGeo = g(new RoundedBoxGeometry(0.15, 0.15, 0.15, 2, 0.03));
  const kopiTeh = () => {
    const d = new Group();
    const k = new Group();
    k.add(new Mesh(saucerGeo, saucer), new Mesh(cupGeo, cup), new Mesh(coffeeGeo, coffee), new Mesh(handleGeo, cup));
    k.position.set(-0.36, 0, -0.2);
    k.rotation.y = 0.5;
    const t = new Group();
    t.add(new Mesh(teaGeo, tea), new Mesh(glassBase, glass), new Mesh(glassGeo, glass));
    const i1 = new Mesh(iceGeo, ice);
    i1.position.set(-0.06, 0.4, 0.02);
    i1.rotation.set(0.3, 0.4, 0.2);
    const i2 = new Mesh(iceGeo, ice);
    i2.position.set(0.08, 0.39, -0.05);
    i2.rotation.set(-0.2, 1.1, 0.3);
    t.add(i1, i2);
    t.position.set(0.5, 0, 0.34);
    d.add(k, t);
    return d;
  };

  const BUILD: Record<DishId, () => Group> = {
    "nasi-goreng-wagyu": nasiGoreng,
    tiramisu,
    "kopi-teh": kopiTeh,
    "tuna-sambal-matah": nasiGoreng, // not shown in the hero
    "pisang-goreng-teh": tiramisu,
  };

  return {
    build: (id) => BUILD[id](),
    dispose: () => {
      geos.forEach((x) => x.dispose());
      mats.forEach((x) => x.dispose());
      texs.forEach((x) => x.dispose());
    },
  };
}
