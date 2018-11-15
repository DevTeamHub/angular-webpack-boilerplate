const webpack = require("webpack");
const path = require('path');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const importer = require("postcss-import-url");
const tools = require('@ngtools/webpack');
const optimizer = require("@angular-devkit/build-optimizer");
var CompressionPlugin = require("compression-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (options) {
    return {
        entry: {
            polyfills: "./src/polyfills",
            vendor: "./src/vendor",
            main: "./src/main.browser"
        },
        output: {
            path: path.resolve(__dirname, '../../dist/browser'),
            filename: "[name].[chunkhash].bundle.js"
        },
        mode: "production",
        module: {
            rules: [
                { 
                    test: /\.scss$/, 
                    use: [
                        { loader: "to-string-loader" }, 
                        { loader: "css-loader", options : { minimize: options.minify } }, 
                        { 
                            loader: "postcss-loader", 
                            options: { 
                                ident: 'postcss', 
                                plugins: [
                                    importer(),
                                    autoprefixer({ browsers: ['last 20 versions'] }),
                                    cssnano({ 
                                        autoprefixer: false,
                                        safe: true,
                                        mergeLonghand: false,
                                        discardComments : true
                                    })
                                ]
                            } 
                        }, 
                        { loader: "sass-loader" }
                    ] 
                },
                { 
                    test: /\.html$/, 
                    use: [
                        { loader: "raw-loader" },
                        { loader: "html-minifier-loader", options: { caseSensitive: true } }
                    ] 
                },
                {
                    test: /\.js$/,
                    use: [{
                      loader: '@angular-devkit/build-optimizer/webpack-loader',
                    }]
                },
                { 
                    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/, 
                    use: [
                        { loader: '@angular-devkit/build-optimizer/webpack-loader' },
                        { loader: "@ngtools/webpack" }, 
                        { loader: "angular2-template-loader" }
                    ] 
                },
            ]
        },
        plugins: [
            new tools.AngularCompilerPlugin({
                tsConfigPath: "./public/tsconfig.browser.json",
                entryModule: './public/src/app/app.module#AppModule'              
            }),
            //new optimizer.PurifyPlugin(),
            new UglifyJSPlugin({
                sourceMap: false,
                uglifyOptions: {
                  ecma: 5,
                  warnings: false,
                  ie8: false,
                  mangle: true,
                  compress: {
                      pure_getters: true,
                      passes: 3,
                      warnings: false
                  },
                  output: {
                    ascii_only: true,
                    comments: false
                  },
                }
              }),
            new CompressionPlugin({ 
                algorithm: "gzip", 
                test: /\.(js|html)$/, 
                threshold: 10240, 
                minRatio: 0.8 
            }),
            new webpack.optimize.ModuleConcatenationPlugin()
        ]
    }
}
