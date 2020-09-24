import _ from "lodash";

export default (favicons) => _.get(favicons, "icons[0].src");
