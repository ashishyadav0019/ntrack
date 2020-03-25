const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
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
               },
               // {
               //      test: /\.scss$/,
               //      use: [
               //           MiniCssExtractPlugin.loader,
               //           {
               //                loader: "css-loader"
               //           },
               //           {
               //                loader: "sass-loader",
               //                options: {
               //                     data: '@import "_variables_references.scss";',
               //                     includePaths: [
               //                          path.resolve(__dirname, '../../../Static4/grunt/pathConfig/stag'),
               //                     ]
               //                }
               //           }
               //      ]
               // }
          ]
     }
};