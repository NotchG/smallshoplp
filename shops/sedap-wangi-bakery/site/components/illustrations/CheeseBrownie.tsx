import Plate from "./Plate";

export default function CheeseBrownie() {
  return (
    <svg viewBox="24 22 192 128" aria-hidden="true" focusable="false">
      <Plate />
      <rect x="64" y="72" width="112" height="61" fill="#4A2A1F" />
      <rect x="64" y="60" width="112" height="20" rx="2" fill="#F5D76E" />
      <path d="M64 80Q78 70 92 77T120 76T148 77T176 75V84H64Z" fill="#4A2A1F" />
      <path d="M78 64q10 6 22 0M128 66q12 5 26 -1" stroke="#4A2A1F" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <rect x="64" y="104" width="112" height="3" fill="#5C3628" />
    </svg>
  );
}
