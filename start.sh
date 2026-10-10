#!/usr/bin/env bash
# FloodWatch · Bengaluru — macOS/Linux launcher
# Starts the local static server (serve.py) and opens the app in your browser.
# Usage:  ./start.sh            # auto-select a free port and open browser
#         ./start.sh 8080       # use a specific port
#         ./start.sh 8080 --no-browser
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

PORT="${1:-0}"
shift || true
EXTRA_ARGS=("$@")

# Pick a Python launcher.
PY=""
for candidate in python3 python; do
  if command -v "$candidate" >/dev/null 2>&1; then PY="$candidate"; break; fi
done

if [ -z "$PY" ]; then
  echo "Python 3 was not found on PATH. Install Python 3 and re-run this script." >&2
  exit 1
fi

echo ""
echo "Starting FloodWatch (community preview — sample data)..."
echo "Serving: $ROOT"
echo "Press Ctrl+C to stop."
echo ""

# Pass --open unless the caller asked to skip the browser.
if printf '%s\n' "${EXTRA_ARGS[@]:-}" | grep -q -- '--no-browser'; then
  exec "$PY" "$ROOT/serve.py" --port "$PORT"
else
  exec "$PY" "$ROOT/serve.py" --port "$PORT" --open
fi
