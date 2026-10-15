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
