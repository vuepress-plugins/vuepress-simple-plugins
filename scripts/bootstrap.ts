import { existsSync, writeFileSync, readdirSync } from "fs";
import { join, resolve } from "path";
import { version } from "../package.json";

const packagesDir = resolve(process.cwd(), "packages");

const files = readdirSync(packagesDir);

files.forEach((pkgName) => {
  if (pkgName.charAt(0) === "." || pkgName === "theme") return;

  const desc = `${pkgName} plugin for VuePress`;
  const pkgPath = join(packagesDir, pkgName, "package.json");

  // generate package.json
  if (!existsSync(pkgPath)) {
    const pkgJSON = {
      name: `vuepress-plugin-${pkgName}`,
      version,
      description: desc,
      main: "lib/node/index.js",
      types: "lib/node/index.d.ts",
      publishConfig: {
        access: "public",
      },
      repository: {
        type: "git",
        url: "git+https://github.com/ComicAuthor/vuepress-simple-plugins.git",
        directory: `packages/${pkgName}`,
      },
      keywords: ["vuepress", "vuepress2", "vuepress-plugin", pkgName],
      author: {
        email: "chenjibzh@163.com",
        name: "Caleb",
        url: "https://reinness.com",
      },
      license: "MIT",
      bugs: {
        url: "https://github.com/ComicAuthor/vuepress-simple-plugins/issues",
      },
      homepage: `https://github.com/ComicAuthor/vuepress-simple-plugins/packages/${pkgName}#readme`,
    };

    writeFileSync(pkgPath, `${JSON.stringify(pkgJSON, null, 2)}\n`);
  }

  const readmePath = join(packagesDir, pkgName, "README.md");

  // generate README.md
  if (!existsSync(readmePath))
    writeFileSync(
      readmePath,
      `# vuepress-plugin-${pkgName}

[![Version](https://img.shields.io/npm/v/vuepress-plugin-${pkgName}/next.svg?style=flat-square&logo=npm) ![Downloads](https://img.shields.io/npm/dm/vuepress-plugin-${pkgName}.svg?style=flat-square&logo=npm) ![Size](https://img.shields.io/bundlephobia/min/vuepress-plugin-${pkgName}?style=flat-square&logo=npm)](https://www.npmjs.com/package/vuepress-plugin-${pkgName})

${desc}.

## Usage

\`\`\`bash
yarn add vuepress-plugin-${pkgName}@next
\`\`\`

Or

\`\`\`bash
npm i vuepress-plugin-${pkgName}@next
\`\`\`

---

VuePress 的 ${pkgName} 插件。

## 使用

\`\`\`bash
yarn add vuepress-plugin-${pkgName}@next
\`\`\`

或

\`\`\`bash
npm i vuepress-plugin-${pkgName}@next
\`\`\`
`
    );
});
