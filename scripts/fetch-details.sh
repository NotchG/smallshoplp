#!/usr/bin/env bash
# Usage: ./scripts/fetch-details.sh <place_id> <slug> [photoCount]
# Saves shops/<slug>/raw.json, every photo the business uploaded itself (owner-N.jpg),
# and up to photoCount (default 3) customer photos for reference (photo-N.jpg).
. "$(dirname "$0")/_common.sh"
load_key

PLACE_ID="${1:?Usage: fetch-details.sh <place_id> <slug> [photoCount]}"
SLUG="${2:?Usage: fetch-details.sh <place_id> <slug> [photoCount]}"
PHOTOS="${3:-3}"
[[ "$SLUG" =~ ^[a-z0-9][a-z0-9-]*$ ]] || { echo "Bad slug: $SLUG" >&2; exit 1; }

DIR="$ROOT/shops/$SLUG"
mkdir -p "$DIR/photos"

MASK="id,displayName,formattedAddress,primaryType,primaryTypeDisplayName,types,editorialSummary,reviews,regularOpeningHours,priceLevel,nationalPhoneNumber,internationalPhoneNumber,websiteUri,googleMapsUri,rating,userRatingCount,businessStatus,photos"

RESP="$(curl -sS "https://places.googleapis.com/v1/places/$PLACE_ID" \
  -H "X-Goog-Api-Key: $GOOGLE_PLACES_KEY" \
  -H "X-Goog-FieldMask: $MASK")"
if echo "$RESP" | jq -e '.error' >/dev/null 2>&1; then
  echo "Places API error: $(echo "$RESP" | jq -r '.error.message')" >&2; exit 1
fi
echo "$RESP" | jq '.' > "$DIR/raw.json"
echo "Saved $DIR/raw.json"

# Photos. Places returns up to 10, each with who uploaded it (authorAttributions).
# Uploaded by the business itself (author name matches the shop name) → owner-N.jpg, usable on the site.
# Anyone else → photo-N.jpg, reference only (first PHOTOS of them).
# Names are compared as lowercase letters and digits only, with "&" read as "and", against the
# full listing name and against the part before " - ", " | " or "(" (listings often add an area or
# keywords there). So "SAYKOP - SAYA Kopi" matches "SAYKOP ( Saya Kopi )". Uploaders who share only
# a word with the shop ("Super Laris Manis") are left as customer photos: a missed owner photo is
# safer than a customer photo on the site.
# photos/photos.json lists every downloaded file with its author and owner flag.
# We ask for the image URL (skipHttpRedirect) so the key is never sent to the image host.
MANIFEST="$(echo "$RESP" | jq --argjson n "$PHOTOS" '
  def norm: ascii_downcase | gsub("&"; "and") | gsub("[^a-z0-9]"; "");
  (.displayName.text // "") as $name
  | ([($name | norm), ($name | split(" - ")[0] | split(" | ")[0] | split("(")[0] | norm)]
     | map(select(length > 0)) | unique) as $shops
  | [(.photos // [])[] | ((.authorAttributions // [])[0].displayName // "") as $author
    | ($author | norm) as $a
    | {
      name,
      author: $author,
      owner: ($a != "" and any($shops[]; . as $s
              | $a == $s or (([$a, $s] | map(length) | min) >= 4 and (($s | startswith($a)) or ($a | startswith($s))))))
    }]
  | (map(select(.owner)) | to_entries | map(.value + {file: "owner-\(.key + 1).jpg"}))
    + (map(select(.owner | not)) | .[:$n] | to_entries | map(.value + {file: "photo-\(.key + 1).jpg"}))
')"

echo "$MANIFEST" | jq -c '.[]' | while read -r P; do
  NAME="$(echo "$P" | jq -r .name)"; FILE="$(echo "$P" | jq -r .file)"
  URI="$(curl -sS "https://places.googleapis.com/v1/$NAME/media?maxWidthPx=1600&skipHttpRedirect=true" \
    -H "X-Goog-Api-Key: $GOOGLE_PLACES_KEY" | jq -r '.photoUri // empty')"
  if [ -n "$URI" ]; then
    curl -sSL "$URI" -o "$DIR/photos/$FILE" && echo "Saved photos/$FILE"
  fi
done
echo "$MANIFEST" | jq 'map({file, author, owner, usable_on_site: .owner})' > "$DIR/photos/photos.json"
echo "Owner photos: $(echo "$MANIFEST" | jq 'map(select(.owner)) | length')  (listed in photos/photos.json)"
