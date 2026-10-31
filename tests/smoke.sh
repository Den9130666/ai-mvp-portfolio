#!/usr/bin/env bash
set -euo pipefail
base="${1:-https://portfolio.omniq.space}"
for p in / /docflow/ /cargodesk/ /autoimport/ /ai-servicedesk/ /reportpilot/ /assets/core.js /assets/styles.css; do
  code=$(curl -sS -L -o /dev/null -w '%{http_code}' "$base$p")
  [[ "$code" == 200 ]] || { echo "FAIL $p: $code"; exit 1; }
  echo "PASS $p"
done
for f in assets/*.js */app.js; do node --check "$f"; done
echo "JavaScript syntax OK"