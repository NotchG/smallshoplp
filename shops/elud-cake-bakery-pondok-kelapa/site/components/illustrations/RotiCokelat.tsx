import Bag from "./Bag";
import { C, type ArtProps } from "./Art";

export default function RotiCokelat(props: ArtProps) {
  return (
    <Bag label="Ilustrasi Roti Cokelat dalam kantong" {...props}>
      <ellipse cx="118" cy="98" rx="76" ry="44" fill={C.crust} />
      <path d="M62 86q14-14 28 0t28 0 28 0 28 0M58 106q15-14 30 0t30 0 30 0 30 0" stroke={C.cocoa} strokeWidth={6} strokeLinecap="round" fill="none" />
    </Bag>
  );
}
