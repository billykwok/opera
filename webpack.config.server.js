const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const IS_DEV = process.env.NODE_ENV !== 'production';

const config = {
  entry: './src/server.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/static/'
  },
  resolve: {
    alias: {
      Common: path.resolve(__dirname, 'src/component/Common')
    },
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        exclude: [/\.dataurl\.png$/i],
        include: [path.join(__dirname, 'src')],
        use: [
          {
            loader: 'file-loader',
            query: {
              emitFile: false,
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.dataurl\.png$/i,
        include: [path.join(__dirname, 'src')],
        use: ['url-loader?limit=0']
      },
      {
        test: /\.jsx?$/i,
        use: ['babel-loader?cacheDirectory']
      },
      {
        test: /\.scss$/i,
        include: [path.join(__dirname, 'src')],
        loaders: [
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 2,
              camelCase: true,
              localIdentName: IS_DEV
                ? '[path]___[name]__[local]___[hash:base64:5]'
                : '[hash:base64:8]',
              sourceMap: IS_DEV
            }
          },
          'postcss-loader',
          { loader: 'sass-loader', query: { sourceMap: IS_DEV } }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
      'typeof window': JSON.stringify('undefined')
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  target: 'node',
  externals: [nodeExternals()],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: false,
    __dirname: false,
    setImmediate: true
  },
  performance: false
};

module.exports = config;
