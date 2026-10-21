// The black track-light rail from Kaneki's ceiling, spots angled toward the glass.
const spots = [
  { left: "7%", tilt: -16 },
  { left: "22%", tilt: -11 },
  { left: "37%", tilt: -5 },
  { left: "63%", tilt: 5 },
  { left: "78%", tilt: 11 },
  { left: "93%", tilt: 16 },
];

export default function TrackRail() {
  return (
    <div className="rail" aria-hidden="true">
      {spots.map((s) => (
        <svg
          key={s.left}
          viewBox="0 0 12 26"
          className="rail-spot"
          style={{ left: s.left, transform: `rotate(${s.tilt}deg)` }}
          focusable="false"
        >
          <rect x="5" y="0" width="2" height="5" fill="#1C2523" />
          <rect x="1" y="5" width="10" height="18" rx="2" fill="#1C2523" />
          <ellipse cx="6" cy="23" rx="4" ry="1.4" fill="#F0C878" />
        </svg>
      ))}
    </div>
  );
}
