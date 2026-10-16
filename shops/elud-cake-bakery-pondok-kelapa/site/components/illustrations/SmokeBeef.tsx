import Bag from "./Bag";
import { C, type ArtProps } from "./Art";

export default function SmokeBeef(props: ArtProps) {
  return (
    <Bag label="Ilustrasi Roti Smoke Beef dalam kantong" {...props}>
      <rect x="40" y="60" width="160" height="78" rx="38" fill={C.crust} />
      <path d="M46 94q74-9 148 0v14q-74 9-148 0z" fill={C.crumb} />
      <path d="M48 98q10-7 20 0t20 0 20 0 20 0 20 0 20 0 20 0 20 0v10q-74 8-140 0z" fill={C.brick} fillOpacity={0.7} />
      <polyline points="58,92 70,100 82,92 94,100 106,92 118,100 130,92 142,100 154,92 166,100 178,92" stroke={C.white} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" fill="none" />
    </Bag>
  );
}
