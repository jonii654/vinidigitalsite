import { execSync } from "child_process";
import { existsSync, unlinkSync } from "fs";
import { join } from "path";

const projectDir = join(import.meta.dirname, "..");

// Delete corrupted lock file
const lockFile = join(projectDir, "package-lock.json");
if (existsSync(lockFile)) {
  unlinkSync(lockFile);
  console.log("Deleted corrupted package-lock.json");
}

// Delete node_modules
try {
  execSync("rm -rf node_modules", { cwd: projectDir, stdio: "inherit" });
  console.log("Deleted node_modules");
} catch (e) {
  console.log("No node_modules to delete");
}

// Run npm install to generate fresh lock file
console.log("Running npm install...");
try {
  execSync("npm install --no-audit --no-fund", {
    cwd: projectDir,
    stdio: "inherit",
    timeout: 120000,
  });
  console.log("npm install completed successfully!");
} catch (e) {
  console.error("npm install failed:", e.message);
  process.exit(1);
}
