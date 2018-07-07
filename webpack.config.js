module.exports = {
    entry: './src/js/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [ "style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8000,
                        // name: 'img/[hash]-[name].[ext]',
                    }
                }]
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8000,
                        name: 'fonts/[hash]-[name].[ext]',
                    }
                }]
            },
        ]
    }
  }