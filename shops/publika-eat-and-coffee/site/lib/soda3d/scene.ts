// One WebGL canvas over the hero that draws the big dish and the small floating ones in 3D.
// It does no layout of its own: each frame it is told where every dish's anchor element sits on
// the page (centre, size, rotation, visibility), so all the hero's mechanics (cursor tilt, pointer
// repulsion, floating, the spin and the implode/explode) keep driving the same DOM anchors and the
// models simply follow them. The perspective camera maps the z = 0 plane 1:1 to CSS px; the back
// dishes sit further away and the front ones nearer, sized so they still match their anchors.
import {
  DirectionalLight,
  Group,
  HemisphereLight,
  NeutralToneMapping,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  WebGLRenderer,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { C } from "@/components/art/palette";
import type { DishId } from "@/content";
import { createDishKit } from "./models";

export type DishPose = {
  x: number; // centre, px from the hero's top-left
  y: number;
  size: number; // apparent plate diameter, px
  z: number; // depth: <0 further away, >0 nearer
  tilt: number; // rad: how far the top is turned toward the viewer
  yaw: number; // rad: turn toward the cursor
  spin: number; // rad: turn on the table
  visible: boolean;
};
export type SodaFrame = { w: number; h: number; centre: DishPose; centreId: DishId; smallId: DishId; items: DishPose[] };

export type SodaScene = {
  render(f: SodaFrame): void;
  snapshot(id: DishId, px: number): string; // a still of one dish for the picker cards
  onLost(cb: () => void): void;
  dispose(): void;
};

const FOV = 30;

type Holder = { root: Group; tilt: Group; spin: Group; variants: Partial<Record<DishId, Group>> };

export function createSodaScene(canvas: HTMLCanvasElement, ids: DishId[], count: number): SodaScene | null {
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  } catch {
    return null;
  }
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = NeutralToneMapping; // keeps the palette close to its hex
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

  const lights = (scene: Scene) => {
    scene.add(new HemisphereLight(C.tile, C.timber, 0.75));
    const key = new DirectionalLight(0xffffff, 2.2);
    key.position.set(-0.6, 1, 0.9); // daylight from the hall's windows, upper left
    scene.add(key);
    const fill = new DirectionalLight(0xffffff, 0.5);
    fill.position.set(0.8, 0.2, 0.6);
    scene.add(fill);
  };
  const pmrem = new PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const env = pmrem.fromScene(room, 0.04).texture;
  room.dispose();
  pmrem.dispose();

  const scene = new Scene();
  scene.environment = env;
  scene.environmentIntensity = 0.55;
  lights(scene);
  const camera = new PerspectiveCamera(FOV, 1, 1, 20000);

  const kit = createDishKit();
  const holder = (): Holder => {
    const root = new Group();
    const tilt = new Group();
    const spin = new Group();
    root.add(tilt);
    tilt.add(spin);
    const variants: Holder["variants"] = {};
    for (const id of ids) {
      const v = kit.build(id);
      v.visible = false;
      spin.add(v);
      variants[id] = v;
    }
    scene.add(root);
    return { root, tilt, spin, variants };
  };
  const centre = holder();
  const items = Array.from({ length: count }, holder);

  let W = 0;
  let H = 0;
  const place = (h: Holder, p: DishPose, id: DishId) => {
    h.root.visible = p.visible && p.size > 2;
    if (!h.root.visible) return;
    const D = camera.position.z;
    const k = (D - p.z) / D; // keeps the apparent size and place at depth z
    h.root.position.set((p.x - W / 2) * k, (H / 2 - p.y) * k, p.z);
    h.root.scale.setScalar((p.size / 2) * k);
    h.root.rotation.set(0, p.yaw, 0);
    h.tilt.rotation.set(p.tilt, 0, 0);
    h.spin.rotation.set(0, p.spin, 0);
    for (const [vid, v] of Object.entries(h.variants)) v!.visible = vid === id;
  };

  // the picker cards' stills: one dish, three-quarter view, in its own little scene
  const still = new Scene();
  still.environment = env;
  still.environmentIntensity = 0.55;
  lights(still);
  const stillCam = new PerspectiveCamera(26, 1, 0.1, 100);
  stillCam.position.set(0, 0, 5.2);
  const stills: Partial<Record<DishId, Group>> = {};
  for (const id of ids) {
    const v = kit.build(id);
    v.rotation.set(0.95, -0.35, 0);
    v.visible = false;
    still.add(v);
    stills[id] = v;
  }

  return {
    render(f) {
      if (f.w !== W || f.h !== H) {
        W = f.w;
        H = f.h;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.position.set(0, 0, H / 2 / Math.tan((FOV * Math.PI) / 360));
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
      }
      place(centre, f.centre, f.centreId);
      f.items.forEach((p, i) => items[i] && place(items[i], p, f.smallId));
      renderer.render(scene, camera);
    },
    snapshot(id, px) {
      const keepW = W;
      const keepH = H;
      renderer.setSize(px, px, false);
      for (const [vid, v] of Object.entries(stills)) v!.visible = vid === id;
      renderer.render(still, stillCam);
      const url = canvas.toDataURL("image/png");
      if (keepW && keepH) renderer.setSize(keepW, keepH, false);
      return url;
    },
    onLost(cb) {
      canvas.addEventListener("webglcontextlost", (e) => {
        e.preventDefault();
        cb();
      }, { once: true });
    },
    dispose() {
      kit.dispose();
      env.dispose();
      renderer.dispose();
    },
  };
}
