// Shared types for the dashboard. Mirrors the shape of data/shops.json.

export type Status =
  | "candidate" | "rejected" | "approved"
  | "brief_ready" | "brief_rework" | "brief_approved"
  | "planned" | "built" | "owner_approved";

export type OwnerStage = "" | "no_answer" | "prospect" | "hot" | "do";

export interface Shop {
  slug: string;
  place_id: string;
  name: string;
  type?: string;
  address?: string;
  reviews?: number | null;
  rating?: number | null;
  has_website?: boolean;
  why?: string;
  status: Status;
  brief_note?: string;
  created_at?: string;
  updated_at?: string;
  // Publishing
  coolify_uuid?: string;
  preview_url?: string;
  // Owner outreach
  outreach_sent_at?: string;
  followup_sent_at?: string;
  link_sent_at?: string;
  owner_stage?: OwnerStage;
  owner_stage_at?: string;
  declined_at?: string;
  // Set by scripts/archive-rejected.sh once the site and its Coolify app are deleted.
  archived_at?: string;
}

export interface ShopsFile {
  shops: Shop[];
}

export interface Listing {
  phone: string;
  mapsUrl: string;
  website: string;
  rating: number | null;
  reviews: number | null;
}

// shops/<slug>/outreach.json, written by /shop-landing outreach.
export interface Outreach {
  hook: string;
}

export interface ShopFiles {
  brief: boolean;
  checklist: boolean;
  docs: string[];
  screenshots: string[];
}

export interface OnlineState {
  online: boolean;
  reason: string;
}
