const path = require('path')
module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/')
  },
  devServer: {
    clientLogLevel: 'none',
    hot: true,
    port: 3000,
  },
  devtool: "source-map",
}