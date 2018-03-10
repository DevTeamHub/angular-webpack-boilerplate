const webpack = require("webpack");
const path = require('path');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const importer = require("postcss-import-url");
const tools = require('@ngtools/webpack');
const optimizer = require("@angular-devkit/build-optimizer");
const helpers = require("./webpack/helpers");

module.exports = function () {
    return {
        entry: {
            main: "./src/main.server"
        },
        context: __dirname,
        output: {
            path: path.resolve(__dirname, '../dist/server'),
            filename: "[name].bundle.js",
            libraryTarget: 'commonjs'
        },
        target: 'node',
        node: false,
        module: {
            rules: [
                { 
                    test: /\.scss$/, 
                    use: [
                        { loader: "to-string-loader" }, 
                        { loader: "css-loader", options : { minimize: true } }, 
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
                { 
                    test: /\.(png|jpg|woff|woff2|ttf|eot|svg|gif)$/, 
                    use: [
                        { loader: "file-loader" }
                    ] 
                }
            ]
        },
        plugins: [

            new tools.AngularCompilerPlugin({
                tsConfigPath: "./public/tsconfig.server.json",
                entryModule: './public/src/app/app.server.module#AppServerModule',
                mainPath: "./src/main.server.ts",
                platform: tools.PLATFORM.Server
            })

        ],
        resolve: {
            mainFields: ['main', 'module'],
            extensions: [".ts", ".tsx", ".js"]
        },
        externals: [/^@angular/, (_, request, callback) => {
              // Absolute & Relative paths are not externals
              if (request.match(/^\.{0,2}\//)) {
                return callback();
              }
      
              try {
                // Attempt to resolve the module via Node
                const e = require.resolve(request);
                if (/node_modules/.test(e)) {
                  // It's a node_module
                  callback(null, request);
                } else {
                  // It's a system thing (.ie util, fs...)
                  callback();
                }
              } catch (e) {
                // Node couldn't find it, so it must be user-aliased
                callback();
              }
            }
          ]
    }
}
