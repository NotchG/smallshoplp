#!/usr/bin/env bash
# Usage: ./scripts/add-candidates.sh <candidates.json>
# Input: a JSON array of {slug, place_id, name, type, address, reviews, rating, has_website, why}.
# Skips shops already in shops.json (by place_id). Refuses slug collisions.
. "$(dirname "$0")/_common.sh"
ensure_shops_json

FILE="${1:?Usage: add-candidates.sh <candidates.json>}"
jq -e 'type == "array" and all(.[]; (.slug|type)=="string" and (.place_id|type)=="string" and (.name|type)=="string")' "$FILE" >/dev/null \
  || { echo "Input must be an array of objects with slug, place_id and name." >&2; exit 1; }

BAD_SLUGS="$(jq -r '.[].slug | select(test("^[a-z0-9][a-z0-9-]*$") | not)' "$FILE")"
[ -z "$BAD_SLUGS" ] || { echo "Invalid slugs (use lowercase letters, digits, hyphens):"; echo "$BAD_SLUGS"; exit 1; } >&2

COLLISIONS="$(jq -r --slurpfile cur "$SHOPS_JSON" '
  ($cur[0].shops | map(.place_id)) as $ids
  | ($cur[0].shops | map(.slug)) as $slugs
  | map(select((.place_id | IN($ids[])) | not))
  | ( [ .[] | select(.slug | IN($slugs[])) | .slug ]
      + ( group_by(.slug) | map(select(length > 1) | .[0].slug) ) )
  | unique | .[]' "$FILE")"
[ -z "$COLLISIONS" ] || { echo "Slug already taken, pick another:"; echo "$COLLISIONS"; exit 1; } >&2

BEFORE="$(jq '.shops | length' "$SHOPS_JSON")"
NOW="$(now)"
jq --slurpfile new "$FILE" --arg now "$NOW" '
  (.shops | map(.place_id)) as $ids
  | ($new[0] | map(select((.place_id | IN($ids[])) | not))) as $fresh
  | .shops += ($fresh | map(. + {status: "candidate", brief_note: "", created_at: $now, updated_at: $now}))
' "$SHOPS_JSON" | write_shops_json

ADDED=$(( $(jq '.shops | length' "$SHOPS_JSON") - BEFORE ))
TOTAL="$(jq length "$FILE")"
echo "Added $ADDED new candidates ($((TOTAL - ADDED)) already known)."
