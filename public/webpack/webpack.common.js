const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function (options) {
    return {
        module: {
            rules: [
                { test: /\.scss$/, use: ["to-string-loader", "css-loader?minimize=" + options.minify, "postcss-loader", "sass-loader"] },
                { test: /\.html$/, use: ["raw-loader"] },
                { test: /\.(png|jpg|woff|woff2|ttf|eot|svg)$/, use: ["file-loader"] }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({ template: "./public/src/index.html", chunksSortMode: function(a, b) { var order = ["polyfills", "angular-chunk", "vendor", "main"]; return order.indexOf(a.names[0]) - order.indexOf(b.names[0]); } }),
            new CopyWebpackPlugin([{ from: "./public/src/img", to: "./img" }, 
                                   { from: "./public/src/fonts", to: "./fonts" }]),
            new webpack.optimize.CommonsChunkPlugin({ name: "angular-chunk", filename: "angular-chunk.js", chunks: ["main", "vendor"] })
        ],
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        }
    }
}