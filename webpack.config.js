const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm
const webpack = require('webpack') // to access built-in plugins
const path = require('path')

module.exports = {
  entry: './src/js/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src/js')
      ],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { 'modules': false }]]
        }
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    compress: true,
    host: 'localhost',
    port: 3000,
    hot: true,
    watchContentBase: true,
    writeToDisk: true
  },
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(['dist'], {}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: '../index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
