import glob from "glob";
import { join } from "path";
import { promisify } from "util";
import { Configuration } from "webpack";
import Mode from "~api/source/scripts/build/types/mode/mode";
import getExperiments from "~api/source/scripts/build/wrappers/getExperiments/getExperiments";
import getLoaders from "~api/source/scripts/build/wrappers/getLoaders/getLoaders";
import getOptimization from "~api/source/scripts/build/wrappers/getOptimization/getOptimization";
import getOutput from "~api/source/scripts/build/wrappers/getOutput/getOutput";
import getPlugins from "~api/source/scripts/build/wrappers/getPlugins/getPlugins";
import getResolve from "~api/source/scripts/build/wrappers/getResolve/getResolve";

const globAsync = promisify(glob);

type GetConfigArguments = {
  mode: Mode;
};

type GetConfig = (argument: GetConfigArguments) => Promise<Configuration>;

const getConfig: GetConfig = async ({
  mode,
}: GetConfigArguments): Promise<Configuration> => {
  const files = (await globAsync("source/**/*.ts", {}))
    .filter((file) => {
      return !file.startsWith("source/scripts");
    })
    .reduce((accumulator, file) => {
      const splittedFile = file.split(".ts");
      splittedFile.pop();
      const deletedExtensionFile = splittedFile.join();
      const fixedFileName = deletedExtensionFile.replace(/^(source)/, "");
      accumulator[fixedFileName] = join(process.cwd(), file);
      return accumulator;
    }, {} as Record<string, string>);
  return {
    mode: mode === Mode.Development ? mode : Mode.Production,
    entry: files,
    devtool: "source-map",
    node: {
      global: true,
    },
    optimization: getOptimization({ mode }),
    module: {
      rules: getLoaders({ mode }),
    },
    plugins: getPlugins({
      mode,
    }),
    resolve: getResolve(),
    output: getOutput(),
    experiments: getExperiments(),
  };
};

export default getConfig;
