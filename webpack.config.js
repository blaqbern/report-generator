const path = require('path')
const fs = require('fs')
const webpack = require('webpack')

const development = process.env.NODE_ENV === 'development'
const noDevtools = require('yargs').argv.no_devtools

const APP_ENTRY = path.join(__dirname, 'src', 'index.js')
const BUILD_PATH = path.join(__dirname, 'public', 'build')

function grabDependencies(dependencies) {
  const pkg = JSON.parse(fs.readFileSync('./package.json'))
  return Object.keys(pkg.devDependencies)
    .concat(Object.keys(pkg.dependencies))
    .filter(dependency => dependencies.includes(dependency))
}

const VENDOR = grabDependencies([
  /react[-]?[a-z]*/,
  /redux[-]?[a-z]*/,
])

const config = {
  entry: {
    app: [APP_ENTRY],
    vendor: VENDOR,
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIndentName=[name]__[local]__[hash:base64:5]',
          'postcss',
        ],
        exclude: /node_modules/,
      },
      // TODO add loaders for images, fonts, svg
    ],
  },
  postcss() {
    return [require('postcss-modules-values')]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: development,
      __NO_DEV_TOOLS__: noDevtools,
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
}

if (process.env.NODE_ENV === 'development') {
  module.exports = Object.assign({}, config, {
    devtool: '#eval-source-maps',
    entry: {
      app: [
        'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      ].concat(config.entry.app),
      vendor: config.entry.vendor,
    },
    module: {
      preLoaders: [
        { test: /\.js$/, loaders: ['eslint'], exclude: /node_modules/ },
      ],
      loaders: config.module.loaders,
    },
    eslint: {
      configFile: './.eslintrc.js',
    },
    plugins: config.plugins.concat([new webpack.HotModuleReplacementPlugin()]),
  })
} else {
  module.exports = config
}
