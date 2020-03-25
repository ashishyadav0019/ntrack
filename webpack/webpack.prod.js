const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//  const HTMLWebPackPlugin = require('html-webpack-plugin');
//  const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MergeIntoSingle = require('webpack-merge-and-include-globally');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const uglify = require("uglify-js");



module.exports = merge(common, {
  entry: {
    nTrack: './src/jass/tracking.js'
  },
  mode: 'production',//'production',
  //devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        //sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
  ],
  output: {
    path: path.resolve(__dirname, './../dist'),
    filename: '[name]_v1.js',
    libraryTarget: 'umd'
  }
});