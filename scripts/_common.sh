#!/usr/bin/env bash
# Shared setup for scripts. Sourced, not run.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SHOPS_JSON="$ROOT/data/shops.json"

need() { command -v "$1" >/dev/null 2>&1 || { echo "Missing '$1'. Install it first." >&2; exit 1; }; }
need jq
need curl

load_key() {
  if [ -z "${GOOGLE_PLACES_KEY:-}" ] && [ -f "$ROOT/.env" ]; then
    set -a; . "$ROOT/.env"; set +a
  fi
  if [ -z "${GOOGLE_PLACES_KEY:-}" ]; then
    echo "GOOGLE_PLACES_KEY is not set. Add it to .env or the environment." >&2; exit 1
  fi
}

ensure_shops_json() {
  [ -f "$SHOPS_JSON" ] || { mkdir -p "$(dirname "$SHOPS_JSON")"; echo '{"shops":[]}' > "$SHOPS_JSON"; }
}

# Write stdin to shops.json atomically, after checking it is valid JSON with a shops array.
write_shops_json() {
  local tmp="$SHOPS_JSON.tmp"
  cat > "$tmp"
  jq -e '.shops | type == "array"' "$tmp" >/dev/null || { rm -f "$tmp"; echo "Refusing to write invalid shops.json" >&2; exit 1; }
  mv "$tmp" "$SHOPS_JSON"
}

now() { date -u +%Y-%m-%dT%H:%M:%SZ; }

# One writer at a time with the approval app and the worker's git steps (approve-app/lib/store.ts
# takes the same lock). mkdir is atomic; a lock older than 5 minutes was left by a crashed writer.
LOCK_DIR="$ROOT/data/.lock"
lock_shops() {
  local tries=0
  until mkdir "$LOCK_DIR" 2>/dev/null; do
    if [ -n "$(find "$LOCK_DIR" -maxdepth 0 -mmin +5 2>/dev/null)" ]; then rm -rf "$LOCK_DIR"; continue; fi
    [ "$tries" -lt 200 ] || { echo "shops.json is busy (another writer holds the lock); try again." >&2; return 1; }
    sleep 0.1; tries=$((tries + 1))
  done
}
unlock_shops() { rm -rf "$LOCK_DIR"; }

# Apply a jq filter to shops.json and write it back, holding the lock from read to write:
#   update_shops [jq options...] '<filter>'
update_shops() {
  lock_shops || return 1
  local rc=0
  jq "$@" "$SHOPS_JSON" | write_shops_json || rc=1
  unlock_shops
  return "$rc"
}
