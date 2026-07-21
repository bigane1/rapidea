/** PM2 — démarrage depuis le dossier du repo cloné sur le VPS */
module.exports = {
  apps: [
    {
      name: "rapidea",
      cwd: __dirname,
      script: "npm",
      args: "start -- -p 3003",
      env: {
        NODE_ENV: "production",
        PORT: "3003",
      },
      autorestart: true,
      max_restarts: 10,
    },
  ],
};
