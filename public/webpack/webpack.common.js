const helpers = require("./helpers");
const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function (options) {
    return {
        context: path.resolve(__dirname, ".."),
        module: {
            rules: [
                {
                    test: /\.(eot|svg|cur)$/,
                    loader: 'file-loader',
                },
                {
                    test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000
                            }
                        },
                        {
                            loader: "webp-loader?{quality: 95}"
                        }
                    ]
                }
            ]
        },
        plugins: [

            new HtmlWebpackPlugin({
                template: "./src/index.html",
                title: "Angular webpack boilerplate",
                minify: options.minify ? {
                    caseSensitive: true,
                    collapseWhitespace: true,
                    keepClosingSlash: true
                } : null,
                chunksSortMode: function (a, b) {
                    var order = ["polyfills", "angular-chunk", "vendor", "main"];
                    return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
                }
            }),

            new CopyWebpackPlugin([{ from: "./src/img", to: "./img" },
            { from: "./src/fonts", to: "./fonts" }]),

            new webpack.DefinePlugin({ configuration: helpers.parseConfig(options) })
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: 'commons',
                        chunks: 'initial',
                        minChunks: 2
                    }
                }
            }
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        }
    }
}