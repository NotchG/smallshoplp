// The hero's 3D pieces, built from simple solids in the brief's palette (docs/design-brief.md §3):
// three cakes in finishes from the owner's photos, and the stars and confetti scattered around
// them. Cakes stand on a board (up = +y), centred on their middle and about 2 units tall, so a
// pose's size is their apparent height; stars and confetti fit a radius of 1. Geometry and
// materials are shared by every copy; a piece is asked for by id:
//   "cake-pink" | "cake-rainbow" | "cake-ombre" | "star:#hex" | "strip:#hex" | "disc:#hex" | "curl:#hex"
import {
  BoxGeometry,
  BufferGeometry,
  Color,
  ConeGeometry,
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
  TorusGeometry,
  Vector2,
} from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

import { P } from "./palette";
export { P };

export type CakeKit = { build: (id: string) => Group; dispose: () => void };

function rng(seed: number) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}
const lathe = (pts: [number, number][], seg = 72) => new LatheGeometry(pts.map(([r, y]) => new Vector2(r, y)), seg);

export function createCakeKit(): CakeKit {
  const geos: BufferGeometry[] = [];
  const mats = new Map<string, Material>();
  const g = <T extends BufferGeometry>(x: T) => (geos.push(x), x);
  // fondant and cream are soft and matte; a touch of clearcoat reads as sugar sheen
  const fondant = (hex: string, rough = 0.55) => {
    const key = `f${hex}${rough}`;
    if (!mats.has(key)) mats.set(key, new MeshPhysicalMaterial({ color: hex, roughness: rough, clearcoat: 0.25, clearcoatRoughness: 0.5 }));
    return mats.get(key)!;
  };
  const metal = (hex: string) => {
    const key = `m${hex}`;
    if (!mats.has(key)) mats.set(key, new MeshStandardMaterial({ color: hex, metalness: 0.9, roughness: 0.25 }));
    return mats.get(key)!;
  };
  const sugar = (hex: string) => {
    const key = `s${hex}`;
    if (!mats.has(key)) mats.set(key, new MeshPhysicalMaterial({ color: hex, roughness: 0.08, transparent: true, opacity: 0.62, clearcoat: 1, side: DoubleSide }));
    return mats.get(key)!;
  };
  const vertexCream = (() => {
    const m = new MeshPhysicalMaterial({ color: "#ffffff", roughness: 0.6, vertexColors: true, clearcoat: 0.2 });
    mats.set("vc", m);
    return m;
  })();

  // ---- shared geometry ----
  const R = 0.6; // cake radius
  const HT = 1.0; // cake height
  const BOARD = 0.04;
  const boardGeo = g(new CylinderGeometry(0.8, 0.8, BOARD, 72).translate(0, BOARD / 2, 0));
  // a cake body with a softly rounded top edge
  const bodyGeo = (h = HT, r = R) =>
    g(lathe([[0, 0], [r, 0], [r, h - 0.05], [r - 0.012, h - 0.02], [r - 0.04, h], [0, h]]).translate(0, BOARD, 0));
  // a piped rosette: a fat ring with a dome in the middle
  const rosetteGeo = g(mergeGeometries([new TorusGeometry(0.045, 0.03, 10, 18).rotateX(Math.PI / 2), new SphereGeometry(0.045, 12, 8).scale(1, 0.8, 1).translate(0, 0.012, 0)]));
  const rosettes = (n: number, y: number, r: number, mat: Material) => {
    const grp = new Group();
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const m = new Mesh(rosetteGeo, mat);
      m.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
      m.rotation.y = -a;
      grp.add(m);
    }
    return grp;
  };
  // a five-point star, puffy like a fondant cutout
  const starShape = (() => {
    const s = new Shape();
    for (let i = 0; i <= 10; i++) {
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const rad = i % 2 ? 0.45 : 1;
      const p = [Math.cos(a) * rad, Math.sin(a) * rad] as const;
      if (i === 0) s.moveTo(...p);
      else s.lineTo(...p);
    }
    return s;
  })();
  const starGeo = g(new ExtrudeGeometry(starShape, { depth: 0.22, bevelEnabled: true, bevelThickness: 0.14, bevelSize: 0.12, bevelSegments: 4, curveSegments: 4 }).center());
  const heartShape = (() => {
    const s = new Shape();
    s.moveTo(0, -0.9);
    s.bezierCurveTo(0.9, -0.2, 1.0, 0.55, 0.5, 0.75);
    s.bezierCurveTo(0.2, 0.86, 0, 0.6, 0, 0.42);
    s.bezierCurveTo(0, 0.6, -0.2, 0.86, -0.5, 0.75);
    s.bezierCurveTo(-1.0, 0.55, -0.9, -0.2, 0, -0.9);
    return s;
  })();
  const heartGeo = g(new ExtrudeGeometry(heartShape, { depth: 0.25, bevelEnabled: true, bevelThickness: 0.12, bevelSize: 0.1, bevelSegments: 3, curveSegments: 10 }).center());

  // ---- cake: pink fondant, rainbow topper, stars on sticks, rosette border (owner-5) ----
  const pinkBody = bodyGeo(1.05, 0.6);
  const arcGeo = (r: number) => g(new TorusGeometry(r, 0.032, 12, 40, Math.PI));
  const cloudGeo = g(mergeGeometries([
    new SphereGeometry(0.075, 16, 10).translate(-0.06, 0, 0),
    new SphereGeometry(0.095, 16, 10).translate(0.03, 0.03, 0),
    new SphereGeometry(0.065, 16, 10).translate(0.11, -0.01, 0),
  ]));
  const stickGeo = g(new CylinderGeometry(0.008, 0.008, 0.42, 6).translate(0, 0.21, 0));
  const plaqueGeo = (() => {
    const s = new Shape();
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      const r = 0.2 + 0.014 * Math.cos(a * 16); // scalloped like the name plaque on the teddy cake
      const p = [Math.cos(a) * r, Math.sin(a) * r] as const;
      if (i === 0) s.moveTo(...p);
      else s.lineTo(...p);
    }
    return g(new ExtrudeGeometry(s, { depth: 0.02, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 2 }));
  })();
  const cakePink = () => {
    const c = new Group();
    c.add(new Mesh(boardGeo, fondant(P.fondant, 0.4)));
    c.add(new Mesh(pinkBody, fondant(P.pink)));
    c.add(rosettes(22, BOARD + 0.03, 0.62, fondant(P.fondant, 0.7)));
    const top = BOARD + 1.05;
    const rainbow = new Group();
    [P.strawberry, P.butterDeep, P.toskaDeep, P.lilacDeep].forEach((col, i) => rainbow.add(new Mesh(arcGeo(0.3 - i * 0.06), fondant(col))));
    rainbow.position.set(0, top + 0.02, -0.05);
    c.add(rainbow);
    const cl1 = new Mesh(cloudGeo, fondant(P.fondant, 0.7));
    cl1.position.set(-0.27, top + 0.06, -0.02);
    const cl2 = cl1.clone();
    cl2.position.x = 0.25;
    c.add(cl1, cl2);
    [[-0.32, -0.28, P.butterDeep, 0.13], [0.06, -0.38, P.lilacDeep, 0.1], [0.34, -0.22, P.strawberry, 0.11], [-0.12, -0.42, P.toskaDeep, 0.09]].forEach(([x, z, col, s]) => {
      const st = new Mesh(stickGeo, fondant(P.fondant, 0.5));
      st.position.set(x as number, top, z as number);
      const sr = new Mesh(starGeo, fondant(col as string));
      sr.scale.setScalar(s as number);
      sr.position.set(x as number, top + 0.42, z as number);
      c.add(st, sr);
    });
    const pl = new Mesh(plaqueGeo, fondant(P.fondant, 0.5));
    pl.position.set(0, BOARD + 0.52, 0.6);
    c.add(pl);
    c.position.y = -0.85;
    return c;
  };

  // ---- cake: rainbow stripes, white drip, upturned cones, sprinkles (owner-2) ----
  const stripeCols = [P.lilacDeep, P.toskaDeep, P.butterDeep, P.pink, P.strawberry];
  const stripeGeo = g(new CylinderGeometry(0.6, 0.6, 0.2, 72).translate(0, 0.1, 0));
  const dripCapGeo = g(lathe([[0, 0], [0.605, 0], [0.605, 0.07], [0.58, 0.1], [0, 0.1]]));
  const dripGeo = (() => {
    const r = rng(21);
    const parts: BufferGeometry[] = [];
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2 + r() * 0.1;
      const len = 0.08 + r() * 0.2;
      const d = new CylinderGeometry(0.03, 0.03, len, 8).translate(0, -len / 2, 0);
      const tip = new SphereGeometry(0.036, 10, 8).translate(0, -len, 0);
      const both = mergeGeometries([d.toNonIndexed(), tip.toNonIndexed()]);
      both.translate(Math.cos(a) * 0.6, 0, Math.sin(a) * 0.6);
      parts.push(both);
    }
    return g(mergeGeometries(parts));
  })();
  const coneGeo = g(new ConeGeometry(0.1, 0.32, 18).translate(0, 0.16, 0));
  const scoopGeo = g(new SphereGeometry(0.12, 18, 12));
  const sprinkleGeos = (() => {
    const r = rng(33);
    const buckets: BufferGeometry[][] = [[], [], [], []];
    for (let i = 0; i < 70; i++) {
      const a = r() * Math.PI * 2;
      const rad = Math.sqrt(r()) * 0.52;
      const s = new CylinderGeometry(0.009, 0.009, 0.05, 6).rotateZ(Math.PI / 2).rotateY(r() * Math.PI).translate(Math.cos(a) * rad, 0.01, Math.sin(a) * rad);
      buckets[i % 4].push(s);
    }
    return buckets.map((b) => g(mergeGeometries(b)));
  })();
  const cakeRainbow = () => {
    const c = new Group();
    c.add(new Mesh(boardGeo, fondant(P.fondant, 0.4)));
    stripeCols.forEach((col, i) => {
      const s = new Mesh(stripeGeo, fondant(col, 0.6));
      s.position.y = BOARD + i * 0.2;
      c.add(s);
    });
    const top = BOARD + 1.0;
    const cap = new Mesh(dripCapGeo, fondant(P.fondant, 0.45));
    cap.position.y = top - 0.01;
    const drips = new Mesh(dripGeo, fondant(P.fondant, 0.45));
    drips.position.y = top + 0.02;
    c.add(cap, drips);
    [P.strawberry, P.laut, P.butterDeep, P.grape].forEach((col, i) => {
      const m = new Mesh(sprinkleGeos[i], fondant(col, 0.5));
      m.position.y = top + 0.09;
      c.add(m);
    });
    [[-0.22, -0.08, P.pink], [0.2, -0.16, P.lilacDeep]].forEach(([x, z, col]) => {
      const scoop = new Mesh(scoopGeo, fondant(col as string, 0.7));
      scoop.position.set(x as number, top + 0.15, z as number);
      const cone = new Mesh(coneGeo, fondant(P.cone, 0.85));
      cone.position.set(x as number, top + 0.2, z as number);
      cone.rotation.z = (x as number) < 0 ? 0.18 : -0.18;
      c.add(scoop, cone);
    });
    [[0.05, 0.25, P.strawberry], [-0.3, 0.22, P.fondant], [0.34, 0.12, P.pink]].forEach(([x, z, col]) => {
      const h = new Mesh(heartGeo, fondant(col as string));
      h.scale.setScalar(0.09);
      h.position.set(x as number, top + 0.17, z as number);
      h.rotation.set(-0.3, (x as number) * 1.5, 0);
      c.add(h);
    });
    c.position.y = -0.75;
    return c;
  };

  // ---- cake: turquoise-to-purple ombre cream, gold pearls, sugar sails, shells (owner-8) ----
  const ombreGeo = (() => {
    const b = new CylinderGeometry(0.6, 0.6, 1.0, 72, 24).translate(0, 0.5 + BOARD, 0);
    const pos = b.getAttribute("position");
    const lo = new Color(P.lilacDeep);
    const hi = new Color(P.toskaDeep);
    const col = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const t = Math.min(1, Math.max(0, (pos.getY(i) - BOARD) / 1.0));
      const c = lo.clone().lerp(hi, t * t * (3 - 2 * t));
      col.set([c.r, c.g, c.b], i * 3);
    }
    b.setAttribute("color", new Float32BufferAttribute(col, 3));
    return g(b);
  })();
  const pearls = (() => {
    const r = rng(45);
    const parts: BufferGeometry[] = [];
    for (let i = 0; i < 46; i++) {
      const a = r() * Math.PI * 2;
      const y = BOARD + 0.12 + r() * 0.82;
      const s = 0.7 + r() * 0.8;
      parts.push(new SphereGeometry(0.028 * s, 10, 8).translate(Math.cos(a) * 0.615, y, Math.sin(a) * 0.615));
    }
    for (let i = 0; i < 14; i++) {
      const a = r() * Math.PI * 2;
      const rad = 0.2 + r() * 0.34;
      parts.push(new SphereGeometry(0.03, 10, 8).translate(Math.cos(a) * rad, BOARD + 1.02, Math.sin(a) * rad));
    }
    return g(mergeGeometries(parts));
  })();
  const sailGeo = (() => {
    const s = new Shape();
    s.moveTo(0, 0);
    s.lineTo(0.3, 0);
    s.quadraticCurveTo(0.12, 0.25, 0.04, 0.55);
    s.lineTo(0, 0);
    return g(new ExtrudeGeometry(s, { depth: 0.012, bevelEnabled: false }));
  })();
  const shellGeo = (() => {
    const s = new Shape();
    s.moveTo(0, 0);
    for (let i = 0; i <= 24; i++) {
      const a = Math.PI * 0.15 + (i / 24) * Math.PI * 0.7;
      const r = 0.16 + 0.014 * Math.cos(i * Math.PI * 0.5);
      s.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    s.lineTo(0, 0);
    return g(new ExtrudeGeometry(s, { depth: 0.04, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.015, bevelSegments: 2 }));
  })();
  const cakeOmbre = () => {
    const c = new Group();
    c.add(new Mesh(boardGeo, fondant(P.fondant, 0.4)));
    c.add(new Mesh(ombreGeo, vertexCream));
    c.add(rosettes(22, BOARD + 0.03, 0.62, fondant(P.fondant, 0.7)));
    c.add(new Mesh(pearls, metal(P.gold)));
    const top = BOARD + 1.0;
    [[-0.18, -0.1, P.pink, -0.3], [0.04, -0.2, P.toskaDeep, 0.25], [0.2, 0.0, P.lilacDeep, 0.9]].forEach(([x, z, col, ry]) => {
      const sail = new Mesh(sailGeo, sugar(col as string));
      sail.position.set(x as number, top, z as number);
      sail.rotation.y = ry as number;
      c.add(sail);
    });
    [[0.32, 0.3, P.pink], [-0.36, 0.18, P.fondant]].forEach(([x, z, col]) => {
      const sh = new Mesh(shellGeo, fondant(col as string, 0.5));
      sh.position.set(x as number, top + 0.01, z as number);
      sh.rotation.set(-1.2, (x as number) * 2, 0);
      c.add(sh);
    });
    c.position.y = -0.75;
    return c;
  };

  // ---- scattered pieces: fondant stars and confetti, any palette colour ----
  const stripGeo = (() => {
    const b = new BoxGeometry(1.8, 0.07, 0.42, 24, 1, 2);
    const pos = b.getAttribute("position");
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      pos.setY(i, pos.getY(i) + Math.sin(x * 2.2) * 0.32); // a ribbon with a wave in it
      pos.setZ(i, pos.getZ(i) + x * 0.12 * Math.sign(pos.getZ(i)) * 0.4);
    }
    b.computeVertexNormals();
    return g(b);
  })();
  const discGeo = g(new CylinderGeometry(0.62, 0.62, 0.1, 28).rotateX(Math.PI / 2));
  const curlGeo = g(new TorusGeometry(0.62, 0.11, 10, 36, Math.PI * 1.45));

  const build = (id: string): Group => {
    const [kind, hex] = id.split(":");
    const grp = new Group();
    switch (kind) {
      case "cake-pink":
        return cakePink();
      case "cake-rainbow":
        return cakeRainbow();
      case "cake-ombre":
        return cakeOmbre();
      case "star":
        grp.add(new Mesh(starGeo, fondant(hex, 0.5)));
        break;
      case "strip":
        grp.add(new Mesh(stripGeo, fondant(hex, 0.6)));
        break;
      case "disc":
        grp.add(new Mesh(discGeo, fondant(hex, 0.5)));
        break;
      case "curl":
        grp.add(new Mesh(curlGeo, fondant(hex, 0.5)));
        break;
      case "heart":
        grp.add(new Mesh(heartGeo, fondant(hex, 0.5)));
        break;
    }
    return grp;
  };

  return {
    build,
    dispose: () => {
      geos.forEach((x) => x.dispose());
      mats.forEach((x) => x.dispose());
    },
  };
}
