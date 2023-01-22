import { join } from "path";

const getOutput = () => {
  return {
    path: join(process.cwd(), "destination"),
    publicPath: "/",
    filename: "index.js",
    chunkFilename: "[id].js",
    library: "@krzysztofzawisla/hejto-client",
    libraryTarget: "umd",
    globalObject: "this",
  };
};

export default getOutput;
