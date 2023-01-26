import { join } from "path";

const getOutput = () => {
  return {
    path: join(process.cwd(), "destination"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[id].js",
    library: "@krzysztofzawisla/hejto-client",
    libraryTarget: "umd",
    globalObject: "this",
  };
};

export default getOutput;
