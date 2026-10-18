// One WebGL canvas over the hero that draws the cake and everything scattered around it in 3D.
// It does no layout of its own: each frame it is told where every piece's anchor element sits on
// the page (centre, size, rotation, which piece, visibility), so the hero's mechanics (cursor
// tilt, pointer repulsion, floating, the spin, the implode/explode, the cycle) keep driving plain
// DOM anchors and the models follow. The perspective camera maps the z = 0 plane 1:1 to CSS px;
// further pieces sit at z < 0 and nearer ones at z > 0, sized so they still match their anchors.
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
import { createCakeKit, P } from "./models";

export type Pose = {
  id: string; // which piece (see models.ts)
  x: number; // centre, px from the hero's top-left
  y: number;
  size: number; // apparent size, px
  z: number; // depth: <0 further away, >0 nearer
  tilt: number; // rad, turn about the screen's x axis
  yaw: number; // rad, turn about the screen's y axis
  spin: number; // rad, turn about the piece's own up axis
  visible: boolean;
};
export type CakeFrame = { w: number; h: number; poses: Pose[] };

export type CakeScene = {
  render(f: CakeFrame): void;
  snapshot(id: string, px: number): string; // a still of one cake for the picker cards
  onLost(cb: () => void): void;
  dispose(): void;
};

const FOV = 30;
type Holder = { root: Group; tilt: Group; spin: Group; variants: Map<string, Group> };

export function createCakeScene(canvas: HTMLCanvasElement): CakeScene | null {
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  } catch {
    return null;
  }
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = NeutralToneMapping; // keeps the palette close to its hex
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

  const pmrem = new PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const env = pmrem.fromScene(room, 0.04).texture;
  room.dispose();
  pmrem.dispose();
  const lights = (scene: Scene) => {
    scene.environment = env;
    scene.environmentIntensity = 0.6;
    scene.add(new HemisphereLight(P.fondant, P.bubblegum, 0.8));
    const key = new DirectionalLight(0xffffff, 2.0);
    key.position.set(-0.6, 1, 0.9);
    scene.add(key);
    const fill = new DirectionalLight(0xffffff, 0.6);
    fill.position.set(0.9, 0.3, 0.6);
    scene.add(fill);
  };

  const scene = new Scene();
  lights(scene);
  const camera = new PerspectiveCamera(FOV, 1, 1, 20000);
  const kit = createCakeKit();
  const holders: Holder[] = [];
  const holder = (i: number): Holder => {
    if (holders[i]) return holders[i];
    const root = new Group();
    const tilt = new Group();
    const spin = new Group();
    root.add(tilt);
    tilt.add(spin);
    scene.add(root);
    return (holders[i] = { root, tilt, spin, variants: new Map() });
  };

  let W = 0;
  let H = 0;
  const place = (h: Holder, p: Pose) => {
    h.root.visible = p.visible && p.size > 2;
    if (!h.root.visible) return;
    if (!h.variants.has(p.id)) {
      const v = kit.build(p.id);
      h.spin.add(v);
      h.variants.set(p.id, v);
    }
    for (const [vid, v] of h.variants) v.visible = vid === p.id;
    const D = camera.position.z;
    const k = (D - p.z) / D; // keeps the apparent size and place at depth z
    h.root.position.set((p.x - W / 2) * k, (H / 2 - p.y) * k, p.z);
    h.root.scale.setScalar((p.size / 2) * k);
    h.root.rotation.set(0, p.yaw, 0);
    h.tilt.rotation.set(p.tilt, 0, 0);
    h.spin.rotation.set(0, p.spin, 0);
  };

  // the picker cards' stills: one cake, three-quarter view
  const still = new Scene();
  lights(still);
  const stillCam = new PerspectiveCamera(26, 1, 0.1, 100);
  stillCam.position.set(0, 0, 5.6);
  const stills = new Map<string, Group>();

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
      f.poses.forEach((p, i) => place(holder(i), p));
      for (let i = f.poses.length; i < holders.length; i++) holders[i].root.visible = false;
      renderer.render(scene, camera);
    },
    snapshot(id, px) {
      if (!stills.has(id)) {
        const v = kit.build(id);
        const g = new Group();
        g.add(v);
        g.rotation.set(0.32, -0.45, 0);
        still.add(g);
        stills.set(id, g);
      }
      for (const [sid, g] of stills) g.visible = sid === id;
      const keepW = W;
      const keepH = H;
      renderer.setSize(px, px, false);
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
