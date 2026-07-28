#!/bin/bash
# Synct de dispatcher-source naar beide projecten (bron-van-waarheid = dit package).
set -euo pipefail
BRON="$(cd "$(dirname "$0")/src" && pwd)"

DOELEN=(
  "/Users/jurrienkuijper/uwontruimer-agent/uwontruimer-dashboard/src/lib/object-dispatch"
  "/Users/jurrienkuijper/takaros-v2/lib/object-dispatch"
)

for DOEL in "${DOELEN[@]}"; do
  mkdir -p "$DOEL"
  rsync -a --delete "$BRON/" "$DOEL/"
  echo "✓ gesynct → $DOEL"
done
