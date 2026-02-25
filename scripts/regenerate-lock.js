import { execSync } from "child_process";
import { unlinkSync, existsSync } from "fs";
import { resolve } from "path";

const projectDir = resolve(process.cwd(), "..");

const lockPath = resolve(projectDir, "package-lock.json");
if (existsSync(lockPath)) {
  console.log("Deleting existing package-lock.json...");
  unlinkSync(lockPath);
}

const nodeModulesPath = resolve(projectDir, "node_modules");
if (existsSync(nodeModulesPath)) {
  console.log("Deleting node_modules...");
  execSync("rm -rf node_modules", { cwd: projectDir, stdio: "inherit" });
}

console.log("Running npm install...");
execSync("npm install", { cwd: projectDir, stdio: "inherit" });
console.log("Done! New package-lock.json generated.");
