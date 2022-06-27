/* eslint-disable @typescript-eslint/naming-convention */
import { existsSync, writeFileSync, readdirSync } from "fs";
import { join, resolve } from "path";
import { version } from "../package.json";

const packagesDir = resolve(process.cwd(), "docs");

const files = readdirSync(packagesDir);

files.forEach((pkgName) => {
  if (pkgName.charAt(0) === "." || pkgName === "theme") return;

  const desc = `Docs for vuepress-plugin-${pkgName}`;
  const pkgPath = join(packagesDir, pkgName, "package.json");

  // generate package.json
  if (!existsSync(pkgPath)) {
    const pkgJSON = {
      name: `${pkgName}`,
      version,
      description: desc,
      private: true,
      repository: {
        type: "git",
        url: "git+https://github.com/ComicAuthor/vuepress-simple-plugins.git",
        directory: `docs/${pkgName}`,
      },
      keywords: ["vuepress", "vuepress2", "vuepress-plugin", "docs", pkgName],
      author: {
        email: "chenjibzh@163.com",
        name: "Caleb",
        url: "https://reinness.com",
      },
      license: "MIT",
      scripts: {
        "docs:vite-build": "vuepress-vite build src",
        "docs:vite-clean-dev": "vuepress-vite dev src --clean-cache",
        "docs:vite-dev": "vuepress-vite dev src",
        "docs:webpack-build": "vuepress-webpack build src",
        "docs:webpack-clean-dev": "vuepress-webpack dev src --clean-cache",
        "docs:webpack-dev": "vuepress-webpack dev src",
      },
      dependencies: {
        vue: "3.2.37",
        vuepress: "^2.0.0-beta.48",
        "vuepress-theme-hope": "^2.0.0-beta.83",
        "vuepress-vite": "2.0.0-beta.48",
        "vuepress-webpack": "2.0.0-beta.48",
      },
    };

    writeFileSync(pkgPath, `${JSON.stringify(pkgJSON, null, 2)}\n`);
  }
});
