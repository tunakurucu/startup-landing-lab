#!/usr/bin/env bash
# Render a page at 1440x900, 768x1024 and 390x844. Every backend writes the same files:
# <width>-top.png (first screen) and <width>.png (full page).
# Exits 0 on success, 1 if a capture looks blank, 3 with an "unavailable: ..." line if nothing can render.
set -uo pipefail
if [[ $# -ne 2 ]]; then echo "usage: render.sh <url-or-file> <out-dir>" >&2; exit 2; fi
target="$1"
output="$2"
mkdir -p "$output"
if [[ -f "$target" ]]; then target="file://$(cd "$(dirname "$target")" && pwd)/$(basename "$target")"; fi
node "$(dirname "$0")/render-playwright.mjs" "$target" "$output"
code=$?
if [[ $code -ne 3 ]]; then exit $code; fi
if command -v agent-browser >/dev/null 2>&1; then
  echo "Playwright unavailable; rendering with agent-browser" >&2
  set -e
  agent-browser open "$target"
  for size in "1440 900" "768 1024" "390 844"; do
    read -r width height <<< "$size"
    agent-browser set viewport "$width" "$height"
    agent-browser screenshot "$output/$width-top.png"
    # agent-browser scroll accepts a pixel count (vercel-labs/agent-browser#501).
    for _ in 1 2 3; do agent-browser scroll down "$height"; done
    agent-browser scroll up 99999
    agent-browser screenshot --full "$output/$width.png"
  done
  exit 0
fi
exit 3
