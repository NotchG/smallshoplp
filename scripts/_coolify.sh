#!/usr/bin/env bash
# Shared Coolify setup for scripts. Sourced after _common.sh, not run.
#
# Needs in .env:      COOLIFY_URL, COOLIFY_TOKEN   (secret, never committed)
# Needs in repo:      data/coolify.json            (IDs and domain, not secret)

# Secrets from .env
if [ -f "$ROOT/.env" ]; then set -a; . "$ROOT/.env"; set +a; fi
: "${COOLIFY_URL:?Set COOLIFY_URL in .env (e.g. http://192.168.1.60:8000)}"
: "${COOLIFY_TOKEN:?Set COOLIFY_TOKEN in .env (Coolify → Keys & Tokens → API tokens)}"
COOLIFY_URL="${COOLIFY_URL%/}"

CONFIG="$ROOT/data/coolify.json"
[ -f "$CONFIG" ] || { echo "Missing $CONFIG. Copy data/coolify.example.json and fill it in." >&2; exit 1; }
cfg() { jq -r --arg k "$1" '.[$k] // empty' "$CONFIG"; }

# api METHOD PATH [JSON] → prints body; fails on HTTP >= 300.
# Also sets API_CODE to the HTTP status, when not called inside $(...).
api() {
  local method="$1" path="$2" body="${3:-}" out code
  API_CODE=""
  out="$(mktemp)"
  code="$(curl -sS -o "$out" -w '%{http_code}' -X "$method" "$COOLIFY_URL/api/v1$path" \
    -H "Authorization: Bearer $COOLIFY_TOKEN" -H "Content-Type: application/json" -H "Accept: application/json" \
    ${body:+-d "$body"})" || { rm -f "$out"; echo "Can't reach Coolify at $COOLIFY_URL" >&2; return 1; }
  API_CODE="$code"
  cat "$out"; rm -f "$out"
  [ "$code" -lt 300 ] || { echo "" >&2; echo "Coolify API $method $path → HTTP $code" >&2; return 1; }
}
