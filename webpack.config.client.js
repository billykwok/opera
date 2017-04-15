const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_DEV = process.env.NODE_ENV !== 'production';

const styleLoadersConfig = [
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
];

const config = {
  devtool: 'hidden-source-map',
  entry: IS_DEV
    ? [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/client.jsx'
    ]
    : './src/client.jsx',
  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: 'bundle.js',
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
        include: [path.join(__dirname, IS_DEV ? '../src' : 'src')],
        use: [
          { loader: 'file-loader', query: { name: 'images/[name].[ext]' } },
          { loader: 'img-loader', query: { optimizationLevel: 5 } }
        ]
      },
      {
        test: /\.dataurl\.png$/i,
        include: [path.join(__dirname, IS_DEV ? '../src' : 'src')],
        use: ['url-loader?limit=0']
      },
      {
        test: /\.jsx?$/i,
        include: [path.join(__dirname, IS_DEV ? '../src' : 'src')],
        use: ['babel-loader?cacheDirectory']
      },
      {
        test: /\.scss$/i,
        include: [path.join(__dirname, IS_DEV ? '../src' : 'src')],
        loaders: IS_DEV
          ? ['style-loader', ...styleLoadersConfig]
          : ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: styleLoadersConfig
          })
      }
    ]
  },
  plugins: [
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
  watch: IS_DEV,
  watchOptions: {
    ignored: [/node_modules/i, /dist/i],
    aggregateTimeout: 1000,
    poll: 3000
  },
  target: 'web'
};

if (IS_DEV) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
  config.performance = false;
} else {
  config.plugins.push(
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.AggressiveMergingPlugin()
  );
}

module.exports = config;
