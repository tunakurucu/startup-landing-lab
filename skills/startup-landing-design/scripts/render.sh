#!/usr/bin/env bash
set -euo pipefail
if [[ $# -ne 2 ]]; then echo "usage: render.sh <url-or-file> <out-dir>" >&2; exit 2; fi
target="$1"
output="$2"
mkdir -p "$output"
if [[ -f "$target" ]]; then target="file://$(cd "$(dirname "$target")" && pwd)/$(basename "$target")"; fi
if command -v agent-browser >/dev/null 2>&1; then
  agent-browser open "$target"
  for size in "1440 900" "768 1024" "390 844"; do
    read -r width height <<< "$size"
    agent-browser set viewport "$width" "$height"
    # agent-browser scroll accepts a pixel count (vercel-labs/agent-browser#501).
    # Scroll to activate in-view scenes, then return to the top before the full-page capture.
    for _ in 1 2 3; do agent-browser scroll down "$height"; done
    agent-browser scroll up 99999
    agent-browser screenshot --full "$output/$width.png"
  done
elif npx --no-install playwright --version >/dev/null 2>&1; then
  node "$(dirname "$0")/render-playwright.mjs" "$target" "$output"
else
  echo "rendering unavailable; mark visual QA as not run" >&2
  exit 2
fi
