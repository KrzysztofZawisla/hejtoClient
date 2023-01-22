import { join } from "path";

const getOutput = () => {
  return {
    path: join(process.cwd(), "destination", "source"),
    publicPath: "/",
    filename: "index.js",
    chunkFilename: "[id].js",
  };
};

export default getOutput;
