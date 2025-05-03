const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  //SOURCE MAP FOR PRODUCTION
  devtool: "source-map",
});
