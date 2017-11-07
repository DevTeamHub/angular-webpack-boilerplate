const webpackMerge = require("webpack-merge");

module.exports = function (env) {
    
    if (!env) env = "dev";

    const options = require("./config/" + env + ".config.json");
    const commonConfig = require("./webpack/webpack.common.js")(options);
    const envConfig = require("./webpack/webpack." + env + ".js")(options);
    
    return webpackMerge(commonConfig, envConfig);
}