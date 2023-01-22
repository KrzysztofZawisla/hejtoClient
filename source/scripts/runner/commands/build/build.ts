import { platform } from "os";
import { $ } from "zx";

(async (): Promise<void> => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  await $`yarn run rimraf destination && cross-env NODE_OPTIONS="--max-old-space-size=8192" TS_NODE_PROJECT=tsconfig.node.json webpack --mode production`;
})();
