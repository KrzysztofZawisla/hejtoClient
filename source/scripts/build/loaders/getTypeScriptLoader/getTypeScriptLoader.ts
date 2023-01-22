import { join, resolve } from "path";
import Mode from "~api/source/scripts/build/types/mode/mode";

type GetTypeScriptLoaderArguments = {
  mode: Mode;
  withESBuild?: boolean;
};

const getTypeScriptLoader = ({
  mode,
  withESBuild,
}: GetTypeScriptLoaderArguments) => {
  return {
    test: /\.(ts|js)$/,
    include: [join(process.cwd(), "source")],
    use: [
      {
        loader: "cache-loader",
        options: {
          cacheDirectory: resolve(".webpackCache"),
        },
      },
      {
        loader:
          mode === Mode.Development && withESBuild
            ? "esbuild-loader"
            : "babel-loader",
        options:
          withESBuild && mode === Mode.Development
            ? {
                loader: "tsx",
                target: "esnext",
              }
            : {
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
      {
        loader: "ts-loader",
        options: {
          configFile: join(process.cwd(), "tsconfig.json"),
        },
      },
    ],
  };
};

export default getTypeScriptLoader;
