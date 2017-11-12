const helpers = require("./helpers");
const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function (options) {
    return {
        module: {
            rules: [
                { 
                    test: /\.(png|jpg|woff|woff2|ttf|eot|svg)$/, 
                    use: [
                        { loader: "file-loader" }
                    ] 
                }
            ] 
        },
        plugins: [

            new HtmlWebpackPlugin({ 
                template: "./public/src/index.html",
                minify: options.minify ? {
                    caseSensitive: true,
                    collapseWhitespace: true,
                    keepClosingSlash: true
                } : null,
                chunksSortMode: function(a, b) { 
                    var order = ["polyfills", "angular-chunk", "vendor", "main"]; 
                    return order.indexOf(a.names[0]) - order.indexOf(b.names[0]); 
                } 
            }),

            new CopyWebpackPlugin([{ from: "./public/src/img", to: "./img" },
                                   { from: "./public/src/fonts", to: "./fonts" }]),

            new webpack.optimize.CommonsChunkPlugin({ 
                 name: "angular-chunk", 
                 filename: "angular-chunk.js", 
                 chunks: ["main", "vendor"] 
            }),

            new webpack.DefinePlugin({ configuration: helpers.parseConfig(options) })
        ],
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        }
    }
}