#!/usr/bin/env bash
# One-off: shops contacted before video-first outreach got the mockup link in their first
# message. Record that as link_sent_at, so the app doesn't ask to send the link again.
# Usage: ./scripts/mark-link-sent.sh   (safe to rerun)
. "$(dirname "$0")/_common.sh"
ensure_shops_json

COUNT="$(jq '[.shops[] | select((.outreach_sent_at // "") != "" and (.link_sent_at // "") == "")] | length' "$SHOPS_JSON")"
[ "$COUNT" -gt 0 ] || { echo "Nothing to do: every contacted shop already has link_sent_at."; exit 0; }

update_shops '
  .shops |= map(if (.outreach_sent_at // "") != "" and (.link_sent_at // "") == ""
    then . + {link_sent_at: .outreach_sent_at}
    else . end)
'
echo "Marked the link as sent for $COUNT shop(s)."
