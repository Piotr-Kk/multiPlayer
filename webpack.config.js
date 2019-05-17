const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  target: 'web',

  entry: path.resolve(__dirname, 'src', 'index.ts'),

  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js',
    compress: true,
    port: 8000
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.js', '.json']
  },

  module: {
    exprContextCritical: false,

    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [
          /node_modules/
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html' ,
    })
  ],

  externals: {
    
  }

};