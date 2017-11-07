const webpack = require("webpack");
const ngcWebpack = require("ngc-webpack");
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = function (options) {
    return {
        entry: {
            polyfills: "./public/src/polyfills",
            vendor: "./public/src/vendor",
            main: "./public/src/main-aot"
        },
        output: {
            path: "./public/bin/dist",
            filename: "[name].[chunkhash].bundle.js",
            sourceMapFilename: "[name].[chunkhash].map"
        },
        module: {
            rules: [
                { test: /\.ts$/, use: ["awesome-typescript-loader?configFileName=tsconfig-aot.json", "angular-router-loader?aot=true&genDir=public/bin/aot", "angular2-template-loader"] },
            ]
        },
        plugins: [
            new ngcWebpack.NgcWebpackPlugin({ tsConfig: "./tsconfig-aot.json", disabled: false }),
            new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true, comments: false, compress: { warnings: false } }),
            new CompressionPlugin({ asset: "[path].gz[query]", algorithm: "gzip", test: /\.(js|html)$/, threshold: 10240, minRatio: 0.8 })
        ],
        devtool: "inline-source-map",
        devServer: {
            port: 9000,
            historyApiFallback: true,
            compress: true
        }
    }
}
