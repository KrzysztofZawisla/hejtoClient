import { join } from "path";

const getResolve = () => {
  return {
    extensions: [".js", ".ts", ".mjs", ".wasm", ".json"],
    alias: {
      "~api": join(process.cwd()),
    },
  };
};

export default getResolve;
