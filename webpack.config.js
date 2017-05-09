const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const IS_DEV = process.env.NODE_ENV !== 'production';
const HOST = 'localhost';
const PORT = 3000;

const config = {
  devtool: 'hidden-source-map',
  entry: IS_DEV
    ? [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      path.join(__dirname, './src/index.jsx')
    ]
    : [path.join(__dirname, './src/index.jsx')],
  output: {
    path: path.join(__dirname, 'docs/public'),
    filename: 'bundle.js',
    publicPath: '/opera/public/'
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        include: [path.join(__dirname, 'src')],
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      currying: true,
      flattening: true
    }),
    new webpack.DefinePlugin(
      Object.assign(
        {},
        {
          'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
          'typeof window': JSON.stringify('object')
        },
        IS_DEV ? {} : { 'module.hot': false }
      )
    )
  ],
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    host: HOST,
    port: PORT,
    proxy: {
      '/opera': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/opera': '' }
      }
    },
    historyApiFallback: true,
    compress: true,
    hot: true // Enable HMR on the server
  }
};

if (IS_DEV) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(), // Enable HMR globally
    new webpack.NamedModulesPlugin(), // Prints more readable module names
    new webpack.NoEmitOnErrorsPlugin() // Do not emit assets that include errors
  );
} else {
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

module.exports = config;
