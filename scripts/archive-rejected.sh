#!/usr/bin/env bash
# Archives shops whose owner declined or never answered: deletes the Coolify app and the site,
# and keeps only what a rebuild needs (brief.md, raw.json, photos/) in shops/_rejected/<slug>/.
#
# Usage:
#   ./scripts/archive-rejected.sh <slug>...        named shops
#   ./scripts/archive-rejected.sh --all            every declined or unanswered shop that still has a folder
#   ./scripts/archive-rejected.sh --dry-run ...    show what would be deleted and moved, change nothing
#
# A shop qualifies when its status is "rejected" and declined_at is set or owner_stage is
# "no_answer". Rejected candidates (never pitched) are never touched.
# Needs in .env:      COOLIFY_URL, COOLIFY_TOKEN   (only when a shop has a coolify_uuid)
# Writes to shops.json: archived_at, coolify_uuid = "", preview_url = ""
. "$(dirname "$0")/_common.sh"
ensure_shops_json

KEEP="brief.md raw.json photos"
DRY=0; ALL=0; SLUGS=()
for a in "$@"; do
  case "$a" in
    --dry-run) DRY=1 ;;
    --all) ALL=1 ;;
    -*) echo "Unknown option $a" >&2; exit 1 ;;
    *) SLUGS+=("$a") ;;
  esac
done
[ "$ALL" = 1 ] || [ "${#SLUGS[@]}" -gt 0 ] || { echo "Usage: archive-rejected.sh [--dry-run] <slug>...|--all" >&2; exit 1; }

field() { jq -r --arg s "$1" --arg f "$2" '.shops[] | select(.slug==$s) | .[$f] // empty' "$SHOPS_JSON"; }

# Prints why a shop can't be archived; prints nothing when it can.
why_not() {
  local slug="$1" status
  case "$slug" in ""|*/*|.*|_*) echo "not a shop slug"; return ;; esac
  status="$(field "$slug" status)"
  [ -n "$status" ] || { echo "not in shops.json"; return; }
  [ "$status" = rejected ] || { echo "status is $status, needs rejected"; return; }
  if [ -z "$(field "$slug" declined_at)" ] && [ "$(field "$slug" owner_stage)" != no_answer ]; then
    echo "rejected without declined_at or owner_stage no_answer (never pitched), left alone"; return
  fi
  if [ ! -d "$ROOT/shops/$slug" ]; then
    if [ -d "$ROOT/shops/_rejected/$slug" ]; then echo "already archived in shops/_rejected/$slug"
    else echo "no folder at shops/$slug"; fi
  fi
}

if [ "$ALL" = 1 ]; then
  # A read loop rather than mapfile, which macOS's bash 3.2 doesn't have.
  while IFS= read -r s; do if [ -n "$s" ] && [ -d "$ROOT/shops/$s" ]; then SLUGS+=("$s"); fi; done \
    < <(jq -r '.shops[] | select(.status=="rejected" and (((.declined_at // "") != "") or .owner_stage=="no_answer")) | .slug' "$SHOPS_JSON")
  [ "${#SLUGS[@]}" -gt 0 ] || { echo "No declined or unanswered shops left to archive."; exit 0; }
fi

FAILED=0; TODO=(); DONE=(); NEEDS_COOLIFY=0
for s in "${SLUGS[@]}"; do
  reason="$(why_not "$s")"
  if [ -n "$reason" ]; then echo "✗ $s: $reason"; FAILED=1; continue; fi
  TODO+=("$s")
  [ -z "$(field "$s" coolify_uuid)" ] || NEEDS_COOLIFY=1
done
[ "${#TODO[@]}" -gt 0 ] || exit $FAILED

if [ "$NEEDS_COOLIFY" = 1 ]; then . "$(dirname "$0")/_coolify.sh"; fi

archive() {
  local slug="$1" uuid dir dest f log keep=() drop=()
  dir="$ROOT/shops/$slug"; dest="$ROOT/shops/_rejected/$slug"
  uuid="$(field "$slug" coolify_uuid)"
  for f in $KEEP; do if [ -e "$dir/$f" ]; then keep+=("$f"); fi; done
  while IFS= read -r f; do
    case " $KEEP " in *" $f "*) ;; *) drop+=("$f") ;; esac
  done < <(ls -A "$dir")

  if [ "$DRY" = 1 ]; then
    if [ -n "$uuid" ]; then echo "→ $slug: would delete Coolify app $uuid"; fi
    echo "→ $slug: would move to shops/_rejected/$slug/: ${keep[*]:-nothing}"
    echo "→ $slug: would delete shops/$slug ($(du -sh "$dir" | awk '{print $1}')) with the rest: ${drop[*]:-nothing}"
    return 0
  fi

  if [ -n "$uuid" ]; then
    log="$(mktemp)"
    if api DELETE "/applications/$uuid?delete_configurations=true&delete_volumes=true&docker_cleanup=true" >"$log" 2>&1; then
      echo "✓ $slug: deleted Coolify app $uuid"
    elif [ "$API_CODE" = 404 ]; then
      echo "· $slug: Coolify app $uuid was already gone"
    else
      echo "✗ $slug: couldn't delete Coolify app $uuid, left its files alone:"
      grep -v '^$' "$log" | sed 's/^/    /'
      rm -f "$log"; return 1
    fi
    rm -f "$log"
  fi

  # Checked by hand: set -e is off inside a function called with ||, and rm -rf must not
  # run unless every keeper has moved.
  mkdir -p "$dest" || { echo "✗ $slug: can't create shops/_rejected/$slug"; return 1; }
  for f in "${keep[@]+"${keep[@]}"}"; do
    rm -rf "$dest/$f" && mv "$dir/$f" "$dest/$f" \
      || { echo "✗ $slug: couldn't move $f to shops/_rejected/$slug, stopped before deleting anything"; return 1; }
  done
  rm -rf "$dir" || { echo "✗ $slug: couldn't delete shops/$slug"; return 1; }

  update_shops --arg s "$slug" --arg now "$(now)" '
    .shops |= map(if .slug == $s then . + {archived_at: $now, coolify_uuid: "", preview_url: "", updated_at: $now} else . end)
  ' || { echo "✗ $slug: files archived but shops.json wasn't updated"; return 1; }
  echo "✓ $slug: archived to shops/_rejected/$slug (${keep[*]:-nothing kept})"
  DONE+=("shops/$slug" "shops/_rejected/$slug")
}

for s in "${TODO[@]}"; do archive "$s" || FAILED=1; done

if [ "${#DONE[@]}" -gt 0 ]; then
  echo ""
  echo "Commit with:"
  echo "  git add -A ${DONE[*]} data/shops.json"
fi
exit $FAILED
