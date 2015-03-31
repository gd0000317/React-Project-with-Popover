var path = require('path').join.bind(null, __dirname)



/* Environment-dependent Settings */

var outputDir = path('dev-build')
var indexEntry = ['./examples/basic/index.js', 'webpack/hot/dev-server']
var jsLoaders = ['react-hot', 'babel']
var devtool = 'source-map'

/* Webpack Config Proper */

module.exports = {
  entry: {
    index: indexEntry
  },
  output: {
    path: outputDir,
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: jsLoaders }
    ]
  },
  devtool: devtool,
  devServer: {
    contentBase: outputDir
  }
}
