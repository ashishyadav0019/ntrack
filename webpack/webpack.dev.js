const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const MergeIntoSingle = require('webpack-merge-and-include-globally');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = merge(common, {
  entry: {
    index: './src/jass/tracking.js'
  },
  devServer: {
    // index: '../index.html',
    // contentBase: path.join(__dirname, 'src/jass/'),
    compress: true,
    port: 9000
  },
  mode: 'none',
  //devtool: 'inline-source-map',
  target: "web",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/jass/test.html",
      filename: 'index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, '../gen'),
    filename: '[name].js',
    libraryTarget: 'umd',
  }
});