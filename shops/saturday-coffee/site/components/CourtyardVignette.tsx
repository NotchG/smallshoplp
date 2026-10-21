// Hero vignette: a corner of the courtyard (photo 1). White column, brick planter with a
// cream concrete cap, snake plants, a white folding table with a kopi susu. 17 flat shapes.
// Placeholder drawing until the owner sends photos.
import { mock } from "@/lib/mockup";

export default function CourtyardVignette({ alt, className = "" }: { alt: string; className?: string }) {
  return (
    <svg viewBox="0 0 400 360" role="img" aria-label={alt} className={className} {...mock(true)}>
      {/* column */}
      <rect x="46" y="18" width="52" height="324" fill="#FAF8F3" />
      <rect x="84" y="18" width="14" height="324" fill="#E4DFD5" />
      <rect x="36" y="0" width="72" height="22" rx="2" fill="#FAF8F3" />
      <rect x="38" y="334" width="68" height="26" fill="#E4DFD5" />
      {/* snake plants (behind the cap) */}
      <path d="M134 252Q126 190 124 128Q140 186 148 252Z" fill="#3D6B4A" />
      <path d="M154 252Q150 170 158 96Q170 170 170 252Z" fill="#86A86B" />
      <path d="M178 252Q184 180 198 112Q196 184 194 252Z" fill="#3D6B4A" />
      <path d="M202 252Q198 160 208 80Q222 160 218 252Z" fill="#2F5539" />
      <path d="M228 252Q236 186 254 120Q250 190 244 252Z" fill="#86A86B" />
      <path d="M254 252Q262 200 276 146Q276 204 268 252Z" fill="#3D6B4A" />
      {/* brick planter, cream concrete cap */}
      <rect x="122" y="260" width="170" height="100" fill="#A8452A" />
      <path
        d="M122 285H292M122 310H292M122 335H292M160 260v25M222 260v25M262 260v25M140 285v25M192 285v25M244 285v25M160 310v25M222 310v25M270 310v25M140 335v25M192 335v25M244 335v25"
        stroke="#8E3820"
        strokeWidth="2"
        fill="none"
      />
      <rect x="114" y="246" width="186" height="16" rx="3" fill="#EDE6D6" />
      {/* folding table */}
      <path d="M314 288L384 360M384 288L314 360" stroke="#E4DFD5" strokeWidth="5" strokeLinecap="round" />
      <rect x="302" y="280" width="94" height="9" rx="2" fill="#FAF8F3" />
      {/* kopi susu */}
      <path d="M332 232H360L357 280H335Z" fill="#FAF8F3" fillOpacity="0.32" />
      <path d="M334.6 258H357.4L356.4 277H335.6Z" fill="#8C5A2E" />
      <path d="M333.6 240H358.4L357.4 258H334.6Z" fill="#EADCC6" />
    </svg>
  );
}
