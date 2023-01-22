import { join } from "path";
import UnusedWebpackPlugin from "unused-webpack-plugin";

const getUnusedWebpackPlugin = () => {
  return new UnusedWebpackPlugin({
    directories: [join(process.cwd(), "source")],
    exclude: [
      "*.test.ts",
      "*.test.ts.snap",
      "*.test.tsx",
      "*.test.tsx.snap",
      "setupTests.ts",
      "scripts",
    ],
    root: process.cwd(),
  });
};

export default getUnusedWebpackPlugin;
