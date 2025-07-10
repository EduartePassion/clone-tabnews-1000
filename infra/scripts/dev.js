const { spawn } = require("node:child_process");

function runCommand(command) {
  return spawn(command, { stdio: "inherit", shell: true });
}

function runDev() {
  const devProcess = runCommand("npm run dev:prepare && npm run dev:start");

  devProcess.on("error", (err) => {
    console.error("Erro ao iniciar o processo de desenvolvimento:", err);
  });

  devProcess.on("exit", (code) => {
    if (code !== 0) {
      console.error(`Processo finalizado com código ${code}`);
    }
  });

  const shutdown = () => {
    console.log("\n[dev] Interrompido. Encerrando serviços...");
    const stopProcess = runCommand("npm run services:stop");

    stopProcess.on("exit", () => process.exit());
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

runDev();
