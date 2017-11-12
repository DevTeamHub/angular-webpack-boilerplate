const webpack = require("webpack");
const path = require('path');
const autoprefixer = require('autoprefixer');
const importer = require("postcss-import-url");

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
                    test: /\.scss$/, 
                    use: [
                        { loader: "to-string-loader" }, 
                        { loader: "css-loader" }, 
                        { 
                            loader: "postcss-loader", 
                            options: { 
                                ident: 'postcss', 
                                plugins: [
                                    importer(),
                                    autoprefixer({ browsers: ['last 20 versions'] })
                                ]
                            } 
                        }, 
                        { loader: "sass-loader" }
                    ] 
                },
                { 
                    test: /\.html$/, 
                    use: [
                        { loader: "raw-loader" }
                    ] 
                },
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
