import { c } from "@/components/art/palette";
import GardenLamp from "@/components/art/GardenLamp";

// Placeholder scene "Malam · taman": the garden after dark (reviews 1, 2): stones, shrubs,
// three lit lamps, and the plywood room glowing through its window.
export default function NightGarden({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label={label}
      className={className}
    >
      <rect width="400" height="500" fill={c.ink} />

      {/* tree canopy */}
      <g fill={c.leaf} opacity="0.5">
        <circle cx="330" cy="70" r="74" />
        <circle cx="244" cy="34" r="54" />
        <circle cx="398" cy="170" r="62" />
      </g>

      {/* the room behind the window, lights on */}
      <rect x="20" y="118" width="132" height="222" fill={c.ply} />
      <path d="M64 118V340M108 118V340M20 196H64M64 244H108M108 180H152M20 290H64M108 286H152" stroke={c.oak} strokeWidth="3" />
      <rect x="20" y="118" width="132" height="222" fill="none" stroke={c.brew} strokeWidth="6" />
      <rect x="84" y="118" width="4" height="222" fill={c.brew} />

      {/* ground */}
      <rect y="352" width="400" height="148" fill={c.wall} opacity="0.05" />

      {/* shrubs */}
      <g fill={c.leaf}>
        <circle cx="196" cy="350" r="30" />
        <circle cx="230" cy="338" r="34" />
        <circle cx="384" cy="342" r="40" />
        <circle cx="12" cy="368" r="30" />
      </g>
      <g fill={c.ink} opacity="0.3">
        <circle cx="236" cy="352" r="22" />
        <circle cx="392" cy="358" r="26" />
      </g>

      {/* lamps */}
      <GardenLamp x={170} y={412} />
      <GardenLamp x={316} y={388} s={0.72} />
      <GardenLamp x={356} y={480} s={1.15} />

      {/* stones */}
      <g fill={c.concrete} opacity="0.88">
        <ellipse cx="258" cy="432" rx="62" ry="28" />
        <ellipse cx="98" cy="456" rx="40" ry="17" />
        <ellipse cx="190" cy="486" rx="32" ry="9" />
        <ellipse cx="40" cy="494" rx="28" ry="8" />
      </g>
      <g fill={c.wall} opacity="0.2">
        <ellipse cx="246" cy="420" rx="38" ry="10" />
        <ellipse cx="92" cy="448" rx="22" ry="6" />
      </g>
    </svg>
  );
}
