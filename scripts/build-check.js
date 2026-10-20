const fs = require("node:fs");
const path = require("node:path");

const requiredFiles = [
  "index.html",
  "css/style.css",
  "src/app.js",
  "src/ticket-api.js",
  "src/ticket-service.js",
];
const missing = requiredFiles.filter(
  (file) => !fs.existsSync(path.join(process.cwd(), file)),
);

if (missing.length) {
  console.error(
    `Build impossible : fichiers manquants\n- ${missing.join("\n- ")}`,
  );
  process.exitCode = 1;
} else {
  const html = fs.readFileSync(path.join(process.cwd(), "index.html"), "utf8");
  if (!html.includes("src/app.js")) {
    console.error("Build impossible : index.html ne charge pas src/app.js");
    process.exitCode = 1;
  } else {
    console.log(`Build check OK (${requiredFiles.length} fichiers vérifiés)`);
  }
}
