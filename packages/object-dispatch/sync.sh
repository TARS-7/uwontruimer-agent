#!/bin/bash
# Synct de dispatcher-source naar beide projecten (bron-van-waarheid = dit package).
# Doelen staan op de werkmachine onder ~/work. Bestaat een projectmap niet, dan stopt
# het script vóór er iets gesynct wordt: nooit rsync --delete naar een verkeerd pad.
set -euo pipefail
BRON="$(cd "$(dirname "$0")/src" && pwd)"

PROJECTEN=(
  "$HOME/work/uw-ontruimer/uwontruimer-dashboard"
  "$HOME/work/takaros/takaros-v2"
)
DOELEN=(
  "$HOME/work/uw-ontruimer/uwontruimer-dashboard/src/lib/object-dispatch"
  "$HOME/work/takaros/takaros-v2/lib/object-dispatch"
)

# Eerst alles controleren, dan pas syncen (niets half doen).
for PROJECT in "${PROJECTEN[@]}"; do
  if [ ! -d "$PROJECT/.git" ] && [ ! -f "$PROJECT/.git" ]; then
    echo "✗ projectmap ontbreekt of is geen git-repo: $PROJECT — gestopt, niets gesynct" >&2
    exit 1
  fi
done

for DOEL in "${DOELEN[@]}"; do
  mkdir -p "$DOEL"
  rsync -a --delete "$BRON/" "$DOEL/"
  echo "✓ gesynct → $DOEL"
done
