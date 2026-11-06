#!/usr/bin/env bash
# Usage: ./scripts/set-status.sh <slug> <status> [note]
# Claude may set: brief_ready, planned, built. Other statuses are the human's (approval app).
. "$(dirname "$0")/_common.sh"
ensure_shops_json

SLUG="${1:?Usage: set-status.sh <slug> <status> [note]}"
STATUS="${2:?Usage: set-status.sh <slug> <status> [note]}"
NOTE="${3:-}"

case "$STATUS" in
  candidate|approved|rejected|brief_ready|brief_rework|brief_approved|planned|built|owner_approved) ;;
  *) echo "Unknown status: $STATUS" >&2; exit 1 ;;
esac

jq -e --arg s "$SLUG" 'any(.shops[]; .slug == $s)' "$SHOPS_JSON" >/dev/null \
  || { echo "No shop with slug: $SLUG" >&2; exit 1; }

update_shops --arg s "$SLUG" --arg st "$STATUS" --arg note "$NOTE" --arg now "$(now)" '
  .shops |= map(if .slug == $s
    then . + {status: $st, updated_at: $now} + (if $note != "" then {brief_note: $note} else {} end)
    else . end)
'
echo "$SLUG → $STATUS"
