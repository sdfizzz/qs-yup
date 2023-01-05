const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(less|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
    }),
  ],
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
