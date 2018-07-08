var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    externals: {
      "jquery": "jQuery"
    }, 
    module:{
      rules:[
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: '../'
              }
            },
            "css-loader"
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          hash: true,
          template: "./src/index.html",
          filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "bundle.css",
      })
    ]
  }