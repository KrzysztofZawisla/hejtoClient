import { join } from "path";
import Mode from "~api/source/scripts/build/types/mode/mode";

type GetTypeScriptLoaderArguments = {
  mode: Mode;
  withESBuild?: boolean;
};

const getTypeScriptLoader = ({}: //mode,
//withESBuild,
GetTypeScriptLoaderArguments) => {
  return {
    test: /\.(ts|js)$/,
    exclude: /(node_module|destination)/,
    include: [join(process.cwd(), "source")],
    use: [
      /*{
        loader: "ts-loader",
        options: {
          configFile: join(process.cwd(), "tsconfig.json"),
        },
      },*/
      /*{
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },*/
      /*{
        loader: "cache-loader",
        options: {
          cacheDirectory: resolve(".webpackCache"),
        },
      },*/
      /*{
        loader: "file-loader",
        options: {
          name: (resourcePath: string) => {
            console.log(resourcePath);
            const fixedPath = resourcePath.replace(
              join(process.cwd(), "source"),
              "",
            );
            return fixedPath;
          },
        },
      },*/
      {
        loader:
          //mode === Mode.Development && withESBuild
          //  ? "esbuild-loader"
          "babel-loader",
        options:
          //withESBuild && mode === Mode.Development
          //  ? {
          //     loader: "tsx",
          //     target: "esnext",
          //   }
          //  : {
          {
            cacheDirectory: true,
            presets: [
              [
                "@babel/env",
                {
                  bugfixes: true,
                  useBuiltIns: "usage",
                  corejs: "3",
                },
              ],
              "@babel/preset-typescript",
            ],
          },
      },

      /*{
        loader: "ts-loader",
        options: {
          compiler: "ttypescript",
          //onfigFile: join(process.cwd(), "tsconfig.json"),
        },
      },
      {
        loader: "@stavalfi/babel-plugin-module-resolver-loader",
        options: {
          root: ["./source"],
          extensions: [".js", ".jsx", ".d.ts", ".ts", ".tsx"],
        },
      },*/
    ],
  };
};

export default getTypeScriptLoader;
