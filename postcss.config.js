module.exports = (ctx) => ({
  map: true,
  plugins: [
    /* eslint-disable global-require */
    require('postcss-smart-import')({ addDependencyTo: ctx.webpack }),
    require('autoprefixer')()
    /* eslint-enable global-require */
  ]
});
