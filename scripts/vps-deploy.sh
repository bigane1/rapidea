#!/usr/bin/env bash
# Exécuté sur le VPS après `git pull` / reset hard.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

export NVM_DIR="$HOME/.nvm"
if [ ! -d "$NVM_DIR" ]; then
  echo "=== Installation de nvm ==="
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
fi
set +u
# shellcheck source=/dev/null
source "$NVM_DIR/nvm.sh"
set -u

if ! command -v node >/dev/null 2>&1; then
  echo "=== Installation de Node.js LTS ==="
  set +u
  nvm install --lts
  nvm alias default node
  set -u
fi

if [ -f .env ]; then
  sed -i 's/\r//' .env
fi

DEPLOY_COMMIT="$(git rev-parse HEAD)"
DEPLOY_SHORT="$(git rev-parse --short HEAD)"
echo "=== Rapidea deploy ==="
echo "    Dossier : $ROOT"
echo "    Commit  : $DEPLOY_SHORT ($DEPLOY_COMMIT)"
echo "    Node    : $(node -v)"

if [ ! -f "$ROOT/.env" ]; then
  echo "⚠ Fichier .env absent dans $ROOT"
  echo "  Créez-le avec SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / SMTP_FROM / SMTP_TO / PORT=3003"
fi

echo "=== Build Next.js ==="
npm ci --include=dev
npm run build

export NODE_ENV=production
export PORT=3003
PM2_APP_NAME="${PM2_APP_NAME:-rapidea}"

run_pm2() {
  if command -v pm2 >/dev/null 2>&1; then
    pm2 "$@"
  elif [[ -x ./node_modules/.bin/pm2 ]]; then
    ./node_modules/.bin/pm2 "$@"
  else
    npx --yes pm2 "$@"
  fi
}

free_port() {
  local port="$1"
  echo "=== Libération du port $port ==="
  if command -v fuser >/dev/null 2>&1; then
    fuser -k "${port}/tcp" 2>/dev/null || true
  elif command -v lsof >/dev/null 2>&1; then
    local pids
    pids="$(lsof -t -i:"${port}" 2>/dev/null || true)"
    if [ -n "$pids" ]; then
      kill -9 $pids 2>/dev/null || true
    fi
  fi
  sleep 2
}

echo "=== Arrêt des anciennes instances PM2 (rapidea*) ==="
run_pm2 delete "$PM2_APP_NAME" 2>/dev/null || true

free_port 3003

echo "=== Démarrage PM2 depuis $ROOT ==="
run_pm2 start "$ROOT/ecosystem.config.cjs" --update-env
run_pm2 save

echo "=== PM2 status ==="
run_pm2 describe "$PM2_APP_NAME" 2>/dev/null | grep -E 'exec cwd|script path|status|restarts' || run_pm2 status "$PM2_APP_NAME" || true

echo "=== Vérification HTTP locale (port 3003) ==="
_http_ok=false
for _attempt in 1 2 3 4 5 6 8 10; do
  sleep 5
  if curl -sf -o /dev/null --max-time 20 "http://127.0.0.1:3003/"; then
    _http_ok=true
    break
  fi
  echo "tentative $_attempt : pas de réponse sur :3003"
done

if [[ "$_http_ok" != true ]]; then
  echo "::error::L'application ne répond pas sur http://127.0.0.1:3003"
  run_pm2 logs "$PM2_APP_NAME" --lines 50 --nostream 2>/dev/null || true
  exit 1
fi

echo "=== OK : nouvelle version active sur port 3003 (commit $DEPLOY_SHORT) ==="

if command -v nginx >/dev/null 2>&1 || [ -x /www/server/nginx/sbin/nginx ]; then
  bash "$ROOT/scripts/ensure-nginx-rapidea.sh"
else
  echo "⚠ nginx absent — configurez le reverse proxy manuellement vers 127.0.0.1:3003"
fi
