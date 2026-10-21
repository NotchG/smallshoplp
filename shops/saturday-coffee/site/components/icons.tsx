// Authored line icons: 24px grid, 1.75 stroke, round caps. Decorative: aria-hidden.
import type { SVGProps } from "react";

function Base({ children, size = 20, ...rest }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

type P = SVGProps<SVGSVGElement> & { size?: number };

export const IconDirections = (p: P) => (
  <Base {...p}>
    <path d="M12 2.8 21.2 12 12 21.2 2.8 12Z" />
    <path d="M9.2 14.6v-2.4a1.6 1.6 0 0 1 1.6-1.6h4.4" />
    <path d="m13.4 8.4 2.2 2.2-2.2 2.2" />
  </Base>
);

export const IconChat = (p: P) => (
  <Base {...p}>
    <path d="M12 3.6a8.4 8.4 0 0 0-7.3 12.6L3.6 20.4l4.3-1.1A8.4 8.4 0 1 0 12 3.6Z" />
    <path d="M8.6 10.2c.3 2.4 2.8 4.9 5.2 5.2l1.2-1.4-1.9-.9-.8.7a4.4 4.4 0 0 1-2.1-2.1l.7-.8-.9-1.9Z" />
  </Base>
);

export const IconPhone = (p: P) => (
  <Base {...p}>
    <path d="M5.2 3.8h3.1l1.7 4.5-2.1 1.3a11 11 0 0 0 5.5 5.5l1.3-2.1 4.5 1.7v3.1a2 2 0 0 1-2.2 2A15.6 15.6 0 0 1 3.2 6a2 2 0 0 1 2-2.2Z" />
  </Base>
);

export const IconArrow = (p: P) => (
  <Base {...p}>
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </Base>
);

// Semi-outdoor courtyard: a pergola beam with lights hanging under it.
export const IconCourt = (p: P) => (
  <Base {...p}>
    <path d="M2.5 6.5h19" />
    <path d="M4.5 6.5v14M19.5 6.5v14" />
    <path d="M8 6.5Q12 11 16 6.5" />
    <circle cx="9.6" cy="10.4" r="1.2" />
    <circle cx="14.4" cy="10.4" r="1.2" />
    <path d="M2.5 20.5h19" />
  </Base>
);

export const IconStairs = (p: P) => (
  <Base {...p}>
    <path d="M3 20.5h5v-4.5h4.5v-4.5H17V7h4" />
    <path d="M3 20.5h18" />
  </Base>
);

export const IconLaptop = (p: P) => (
  <Base {...p}>
    <rect x="4.5" y="5" width="15" height="10.5" rx="1.5" />
    <path d="M2.5 19h19" />
  </Base>
);

export const IconParking = (p: P) => (
  <Base {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
    <path d="M10 16.5v-9h3.2a2.8 2.8 0 0 1 0 5.6H10" />
  </Base>
);

export const IconStar = ({ size = 20, ...rest }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...rest}>
    <path
      fill="currentColor"
      d="M12 2.6l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8Z"
    />
  </svg>
);
