// The red awning from Jl. Angkasa: dome with panel seams, a steel seam, the valance with the
// script name (repeated and cut off at the screen edges, as it wraps the real dome), then the scallops.
export default function Awning({ name }: { name: string }) {
  return (
    <div className="awning on-awning">
      <div className="awning-dome" aria-hidden="true" />
      <div className="awning-seam" aria-hidden="true" />
      <div className="awning-valance">
        <div className="valance-row">
          <span className="valance-repeat" aria-hidden="true">
            {name}
          </span>
          <h1>{name}</h1>
          <span className="valance-repeat" aria-hidden="true">
            {name}
          </span>
        </div>
      </div>
      <svg className="awning-scallop" aria-hidden="true" focusable="false">
        <defs>
          {/* Circles sit on the tile edges, so x="50%" centres one scallop under the name. */}
          <pattern id="scallop-sm" patternUnits="userSpaceOnUse" x="50%" y="0" width="32" height="16">
            <circle cx="0" cy="0" r="16" fill="var(--color-awning)" />
            <circle cx="32" cy="0" r="16" fill="var(--color-awning)" />
          </pattern>
          <pattern id="scallop-lg" patternUnits="userSpaceOnUse" x="50%" y="0" width="48" height="24">
            <circle cx="0" cy="0" r="24" fill="var(--color-awning)" />
            <circle cx="48" cy="0" r="24" fill="var(--color-awning)" />
          </pattern>
        </defs>
        <rect className="sm" width="100%" height="16" fill="url(#scallop-sm)" />
        <rect className="lg" width="100%" height="24" fill="url(#scallop-lg)" />
      </svg>
    </div>
  );
}
