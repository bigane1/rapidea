#!/usr/bin/env bash
# Configure nginx pour rapidea.biganeway.fr → 127.0.0.1:3003
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE_NAME="rapidea"
SRC="$ROOT/scripts/nginx-rapidea-site.conf"
DEST="/etc/nginx/sites-available/$SITE_NAME"
ENABLED="/etc/nginx/sites-enabled/$SITE_NAME"
PROXY_TARGET="http://127.0.0.1:3003"

if ! command -v nginx >/dev/null 2>&1; then
  echo "nginx absent — rien à configurer"
  exit 0
fi

run_sudo() {
  if [ "$(id -u)" -eq 0 ]; then
    "$@"
  elif command -v sudo >/dev/null 2>&1; then
    if sudo -n true 2>/dev/null; then
      sudo -n "$@"
    else
      echo "⚠ sudo interactif requis pour: $*"
      sudo "$@"
    fi
  else
    echo "⚠ sudo absent — impossible de modifier nginx automatiquement"
    return 1
  fi
}

fix_proxy_in_file() {
  local f="$1"
  if run_sudo grep -q "proxy_pass" "$f"; then
    run_sudo sed -i -E \
      -e "s#proxy_pass[[:space:]]+http://(127\\.0\\.0\\.1|localhost):[0-9]+[[:space:]]*;#proxy_pass ${PROXY_TARGET};#g" \
      -e "s#proxy_pass[[:space:]]+http://rapidea[^;]*;#proxy_pass ${PROXY_TARGET};#g" \
      "$f"
    echo "→ proxy_pass corrigé dans $f"
  fi
}

echo "=== Diagnostic / correction nginx Rapidea ==="
run_sudo grep -r "proxy_pass" /etc/nginx/sites-enabled/ /etc/nginx/conf.d/ 2>/dev/null || true

_rapidea_files=()
while IFS= read -r _f; do
  _rapidea_files+=("$_f")
done < <(run_sudo grep -rl "rapidea\\.biganeway\\.fr" /etc/nginx/ 2>/dev/null || true)

if ((${#_rapidea_files[@]})); then
  for _f in "${_rapidea_files[@]}"; do
    fix_proxy_in_file "$_f" || true
  done
else
  echo "Aucune config rapidea.biganeway.fr — installation du modèle $DEST"
  if [ ! -f "$SRC" ]; then
    echo "⚠ Fichier modèle introuvable: $SRC"
    exit 0
  fi
  run_sudo mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled || exit 0
  run_sudo cp "$SRC" "$DEST" || exit 0
  run_sudo ln -sf "$DEST" "$ENABLED" || exit 0
fi

if run_sudo nginx -t; then
  run_sudo systemctl reload nginx || run_sudo service nginx reload || true
  echo "=== nginx rechargé ==="
else
  echo "⚠ nginx -t a échoué — correction manuelle requise"
  echo "  sudo grep -r proxy_pass /etc/nginx/"
  echo "  # proxy_pass doit pointer vers ${PROXY_TARGET}"
fi

exit 0
