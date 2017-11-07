const webpack = require("webpack");
const path = require('path');

module.exports = function (options) {
    return {
        entry: {
            polyfills: "./public/src/polyfills",
            vendor: "./public/src/vendor",
            main: "./public/src/main"
        },
        output: {
            path: path.resolve(__dirname, '../../public/bin/dist'),
            filename: "[name].bundle.js",
            sourceMapFilename: "[name].map"
        },
        module: {
            rules: [
                { 
                    test: /\.ts$/, 
                    use: [
                        { loader: "awesome-typescript-loader" },
                        { loader: "angular-router-loader" },
                        { loader: "angular2-template-loader" } 
                    ] 
                },
            ]
        },
        devtool: "inline-source-map",
        devServer: {
            port: 9000,
            historyApiFallback: true
        }
    }
}
