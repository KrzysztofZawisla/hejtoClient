import getConfig from "~api/source/scripts/build/root/getConfig/getConfig";
import Mode from "~api/source/scripts/build/types/mode/mode";

export default getConfig({
  mode: Mode.Production,
});
