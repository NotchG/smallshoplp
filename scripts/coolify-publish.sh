#!/usr/bin/env bash
# Creates a Coolify app for a built shop, so its mockup auto-deploys from GitHub.
#
# Usage:
#   ./scripts/coolify-publish.sh <slug>          one shop
#   ./scripts/coolify-publish.sh --all           every built shop that has no Coolify app yet
#   ./scripts/coolify-publish.sh --dry-run ...   show what would be sent, change nothing
#
# Needs in .env:      COOLIFY_URL, COOLIFY_TOKEN   (secret, never committed)
# Needs in repo:      data/coolify.json            (IDs and domain, not secret)
# Writes to shops.json: coolify_uuid, preview_url
. "$(dirname "$0")/_common.sh"
ensure_shops_json

DRY=0; ALL=0; SLUGS=()
for a in "$@"; do
  case "$a" in
    --dry-run) DRY=1 ;;
    --all) ALL=1 ;;
    -*) echo "Unknown option $a" >&2; exit 1 ;;
    *) SLUGS+=("$a") ;;
  esac
done
[ "$ALL" = 1 ] || [ "${#SLUGS[@]}" -gt 0 ] || { echo "Usage: coolify-publish.sh [--dry-run] <slug>|--all" >&2; exit 1; }

. "$(dirname "$0")/_coolify.sh"
for k in project_uuid environment_name server_uuid github_app_uuid git_repository git_branch; do
  [ -n "$(cfg "$k")" ] || { echo "data/coolify.json is missing \"$k\"" >&2; exit 1; }
done
# Host per shop: domain_pattern with {slug} ("{slug}-mockup.example.com"), or slug.domain_suffix.
PATTERN="$(cfg domain_pattern)"
[ -n "$PATTERN" ] || [ -n "$(cfg domain_suffix)" ] || { echo "data/coolify.json needs \"domain_pattern\" (or \"domain_suffix\")" >&2; exit 1; }
if [ -n "$PATTERN" ] && [[ "$PATTERN" != *"{slug}"* ]]; then echo "domain_pattern must contain {slug}" >&2; exit 1; fi
host_for() { if [ -n "$PATTERN" ]; then echo "${PATTERN//\{slug\}/$1}"; else echo "$1.$(cfg domain_suffix)"; fi; }
SCHEME="$(cfg domain_scheme)"; SCHEME="${SCHEME:-http}"            # what Coolify serves
PREVIEW_SCHEME="$(cfg preview_scheme)"; PREVIEW_SCHEME="${PREVIEW_SCHEME:-https}"  # what visitors open

if [ "$ALL" = 1 ]; then
  # A read loop rather than mapfile, which macOS's bash 3.2 doesn't have.
  while IFS= read -r s; do [ -n "$s" ] && SLUGS+=("$s"); done \
    < <(jq -r '.shops[] | select((.status=="built" or .status=="owner_approved") and ((.coolify_uuid // "") == "")) | .slug' "$SHOPS_JSON")
  [ "${#SLUGS[@]}" -gt 0 ] || { echo "No built shops without a Coolify app."; exit 0; }
fi

EXISTING=""
if [ "$DRY" = 0 ]; then EXISTING="$(api GET /applications)" || exit 1; fi

publish() {
  local slug="$1" status uuid name domain preview app body
  status="$(jq -r --arg s "$slug" '.shops[] | select(.slug==$s) | .status' "$SHOPS_JSON")"
  [ -n "$status" ] || { echo "✗ $slug: not in shops.json"; return 1; }
  case "$status" in built|owner_approved) ;; *) echo "✗ $slug: status is $status, needs built"; return 1 ;; esac
  [ -f "$ROOT/shops/$slug/site/package.json" ] || { echo "✗ $slug: no site at shops/$slug/site"; return 1; }
  if git -C "$ROOT" rev-parse >/dev/null 2>&1 && [ -z "$(git -C "$ROOT" ls-files "shops/$slug/site/package.json")" ]; then
    echo "! $slug: site isn't committed yet. Commit and push it, or Coolify's build will fail."
  fi

  name="shop-$slug"
  domain="$SCHEME://$(host_for "$slug")"
  preview="$PREVIEW_SCHEME://$(host_for "$slug")"

  uuid="$(jq -r --arg s "$slug" '.shops[] | select(.slug==$s) | .coolify_uuid // empty' "$SHOPS_JSON")"
  if [ -z "$uuid" ] && [ -n "$EXISTING" ]; then
    uuid="$(echo "$EXISTING" | jq -r --arg n "$name" '[.[]? | select(.name==$n)][0].uuid // empty')"
    [ -n "$uuid" ] && echo "· $slug: found existing Coolify app, linking it"
  fi

  if [ -z "$uuid" ]; then
    body="$(jq -n \
      --arg project "$(cfg project_uuid)" --arg env "$(cfg environment_name)" \
      --arg server "$(cfg server_uuid)" --arg gh "$(cfg github_app_uuid)" \
      --arg repo "$(cfg git_repository)" --arg branch "$(cfg git_branch)" \
      --arg name "$name" --arg base "/shops/$slug/site" --arg domain "$domain" '{
        project_uuid: $project, environment_name: $env, server_uuid: $server,
        github_app_uuid: $gh, git_repository: $repo, git_branch: $branch,
        name: $name, description: "smallshoplp mockup",
        build_pack: "nixpacks", ports_exposes: "80",
        base_directory: $base, is_static: true, publish_directory: "/out",
        domains: $domain, instant_deploy: false
      }')"
    if [ "$DRY" = 1 ]; then echo "→ $slug: would create app:"; echo "$body" | jq .; return 0; fi
    app="$(api POST /applications/private-github-app "$body")" || { echo "✗ $slug: create failed: $app"; return 1; }
    uuid="$(echo "$app" | jq -r '.uuid // empty')"
    [ -n "$uuid" ] || { echo "✗ $slug: no uuid in response: $app"; return 1; }
    echo "✓ $slug: created app $uuid"
  elif [ "$DRY" = 1 ]; then
    echo "→ $slug: app exists ($uuid), would update settings and deploy"; return 0
  fi

  # Settings the create endpoint may not accept on every Coolify version: set them one by one,
  # and tell the user what to set by hand if one is refused.
  local manual=()
  api PATCH "/applications/$uuid" "$(jq -n --arg w "shops/$slug/site/**" '{watch_paths: $w}')" >/dev/null 2>&1 \
    || manual+=("Watch paths: shops/$slug/site/**")
  api PATCH "/applications/$uuid" '{"is_auto_deploy_enabled": true}' >/dev/null 2>&1 \
    || manual+=("Auto deploy: on")

  for kv in "NIXPACKS_NODE_VERSION=22" "PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1"; do
    local k="${kv%%=*}" v="${kv#*=}"
    api POST "/applications/$uuid/envs" "$(jq -n --arg k "$k" --arg v "$v" '{key: $k, value: $v}')" >/dev/null 2>&1 \
      || api PATCH "/applications/$uuid/envs" "$(jq -n --arg k "$k" --arg v "$v" '{key: $k, value: $v}')" >/dev/null 2>&1 \
      || manual+=("Environment variable: $kv")
  done

  jq --arg s "$slug" --arg u "$uuid" --arg url "$preview" --arg now "$(now)" '
    .shops |= map(if .slug == $s then . + {coolify_uuid: $u, preview_url: $url, updated_at: $now} else . end)
  ' "$SHOPS_JSON" | write_shops_json

  # Coolify versions differ on how a deploy is started; try each form quietly.
  if api POST "/deploy?uuid=$uuid" >/dev/null 2>&1 \
    || api GET "/deploy?uuid=$uuid" >/dev/null 2>&1 \
    || api POST "/applications/$uuid/start" >/dev/null 2>&1 \
    || api GET "/applications/$uuid/start" >/dev/null 2>&1; then
    echo "✓ $slug: deploying → $preview"
  else
    echo "! $slug: app ready but deploy didn't start; press Deploy in Coolify"
  fi

  if [ "${#manual[@]}" -gt 0 ]; then
    echo "  Set by hand in Coolify (this version's API refused them):"
    printf '    - %s\n' "${manual[@]}"
  fi
}

FAILED=0
for s in "${SLUGS[@]}"; do publish "$s" || FAILED=1; done
exit $FAILED
