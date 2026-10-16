// The Bonjur balloon sign as a 24×32 marker: paper envelope, red band, blue skirt and basket.
export default function BalloonMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      width="24"
      height="32"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M12 1C5.6 1 1.5 5.7 1.5 11.6c0 4.6 3 7.6 6 10.4h9c3-2.8 6-5.8 6-10.4C22.5 5.7 18.4 1 12 1Z"
        fill="#FBFAF6"
        stroke="#1F3A8F"
        strokeWidth="1.5"
      />
      <path d="M1.9 13.2h20.2c-.4 1.7-1.2 3.1-2.1 4.3H4c-.9-1.2-1.7-2.6-2.1-4.3Z" fill="#C8322A" />
      <path d="M4 17.5h16c-1.1 1.6-2.4 3.1-3.7 4.5H7.7C6.4 20.6 5.1 19.1 4 17.5Z" fill="#1F3A8F" />
      <path d="M8.2 22.2 9.4 26M15.8 22.2 14.6 26" stroke="#131A3A" strokeWidth="1" fill="none" />
      <rect x="8.5" y="26" width="7" height="5" rx="1" fill="#1F3A8F" />
    </svg>
  );
}
