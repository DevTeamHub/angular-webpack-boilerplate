const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {  index: './src/server.ts' },
  resolve: { extensions: ['.ts', '.js'] },
  context: __dirname,
  target: 'node',
  mode: "none",
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /\.ts$/, 
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: "server/tsconfig.server.json"
        } 
      }
    ]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    )
  ]
}