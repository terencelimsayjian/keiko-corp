const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
      path: __dirname + '/docs',
      filename: 'js/bundle.js'
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
                publicPath: '../'
              }
            },
            "css-loader"
          ]
        },
        {
          test: /\.(png|jp(e*)g|svg|gif|eot|ttf|woff|woff2)$/,  
          use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000,
                name: 'img/[hash]-[name].[ext]',
            } 
          }]
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
        filename: "css/bundle.css",
      }),
      new CopyWebpackPlugin([
        { from: 'src/static_img', to: 'static_img' },
      ])
    ]
  }