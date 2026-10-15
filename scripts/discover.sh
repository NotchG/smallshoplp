#!/usr/bin/env bash
# Usage: ./scripts/discover.sh "<text query>" [includedType] [maxPages]
# Example: ./scripts/discover.sh "bakeries in Shoreditch, London" bakery 1
# Writes data/searches/<timestamp>-<query>.json and prints its path.
. "$(dirname "$0")/_common.sh"
load_key

QUERY="${1:?Usage: discover.sh \"<query>\" [includedType] [maxPages]}"
TYPE="${2:-}"
MAX_PAGES="${3:-1}"

MASK="places.id,places.displayName,places.formattedAddress,places.primaryType,places.primaryTypeDisplayName,places.websiteUri,places.rating,places.userRatingCount,places.businessStatus,places.googleMapsUri,nextPageToken"

SLUG="$(echo "$QUERY" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-|-$//g' | cut -c1-60)"
OUT="$ROOT/data/searches/$(date -u +%Y%m%d-%H%M%S)-$SLUG.json"
mkdir -p "$ROOT/data/searches"

ALL='[]'
TOKEN=""
for ((page=1; page<=MAX_PAGES; page++)); do
  BODY="$(jq -n --arg q "$QUERY" --arg t "$TYPE" --arg tok "$TOKEN" '
    {textQuery: $q, pageSize: 20}
    + (if $t != "" then {includedType: $t} else {} end)
    + (if $tok != "" then {pageToken: $tok} else {} end)')"
  RESP="$(curl -sS -X POST "https://places.googleapis.com/v1/places:searchText" \
    -H "Content-Type: application/json" \
    -H "X-Goog-Api-Key: $GOOGLE_PLACES_KEY" \
    -H "X-Goog-FieldMask: $MASK" \
    -d "$BODY")"
  if echo "$RESP" | jq -e '.error' >/dev/null 2>&1; then
    echo "Places API error: $(echo "$RESP" | jq -r '.error.message')" >&2; exit 1
  fi
  ALL="$(jq -n --argjson a "$ALL" --argjson r "$RESP" '$a + ($r.places // [])')"
  TOKEN="$(echo "$RESP" | jq -r '.nextPageToken // ""')"
  [ -z "$TOKEN" ] && break
  sleep 2
done

jq -n --arg q "$QUERY" --arg t "$TYPE" --arg at "$(now)" --argjson p "$ALL" \
  '{query: $q, includedType: $t, fetched_at: $at, count: ($p|length), places: $p}' > "$OUT"
echo "Found $(echo "$ALL" | jq length) places → $OUT"
