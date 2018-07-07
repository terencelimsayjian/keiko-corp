module.exports = {
    entry: './js/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
      }
  }