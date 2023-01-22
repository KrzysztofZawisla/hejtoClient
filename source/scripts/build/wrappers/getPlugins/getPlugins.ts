import getUnusedWebpackPlugin from "~api/source/scripts/build/plugins/getUnusedWebpackPlugin/getUnusedWebpackPlugin";
import Mode from "~api/source/scripts/build/types/mode/mode";

type GetPluginsArguments = {
  mode: Mode;
};

const getPlugins = ({ mode }: GetPluginsArguments) => {
  console.log(mode);
  return [
    getUnusedWebpackPlugin(),
    /*getDuplicatePackageCheckerPlugin(),
    getDefinePlugin({
      mode,
    }),
    getCleanWebpackPlugin(),
    getBrotliCompressionPlugin(),
    getGzipCompressionPlugin(),
    getESLintPlugin(),
    getJsonMinimizerPlugin(),
    getBundleAnalyzerPlugin(),
    getLicensePlugin(),
    getCopyWebpackPlugin(),*/
  ];
};

export default getPlugins;
