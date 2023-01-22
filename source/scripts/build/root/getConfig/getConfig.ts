import { join } from "path";
import { Configuration } from "webpack";
import Mode from "~api/source/scripts/build/types/mode/mode";
import getExperiments from "~api/source/scripts/build/wrappers/getExperiments/getExperiments";
import getLoaders from "~api/source/scripts/build/wrappers/getLoaders/getLoaders";
import getOptimization from "~api/source/scripts/build/wrappers/getOptimization/getOptimization";
import getOutput from "~api/source/scripts/build/wrappers/getOutput/getOutput";
import getPlugins from "~api/source/scripts/build/wrappers/getPlugins/getPlugins";
import getResolve from "~api/source/scripts/build/wrappers/getResolve/getResolve";

type GetConfigArguments = {
  mode: Mode;
};

type GetConfig = (argument: GetConfigArguments) => Promise<Configuration>;

const getConfig: GetConfig = async ({
  mode,
}: GetConfigArguments): Promise<Configuration> => {
  return {
    mode: mode === Mode.Development ? mode : Mode.Production,
    entry: join(process.cwd(), "source", `index.ts`),
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
