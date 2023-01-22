import { RuleSetRule } from "webpack";
import getJavaScriptModuleLoader from "~api/source/scripts/build/loaders/getJavaScriptModuleLoader/getJavaScriptModuleLoader";
import getSourceMapLoader from "~api/source/scripts/build/loaders/getSourceMapLoader/getSourceMapLoader";
import getTypeScriptLoader from "~api/source/scripts/build/loaders/getTypeScriptLoader/getTypeScriptLoader";
import Mode from "~api/source/scripts/build/types/mode/mode";

type GetLoaderArguments = {
  mode: Mode;
};

type GetLoader = (argument: GetLoaderArguments) => RuleSetRule[];

const getLoaders: GetLoader = ({ mode }: GetLoaderArguments): RuleSetRule[] => {
  return [
    getSourceMapLoader() as RuleSetRule,
    getTypeScriptLoader({ mode, withESBuild: false }),
    getJavaScriptModuleLoader(),
  ];
};

export default getLoaders;
