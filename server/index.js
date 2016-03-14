const app = require('express')()
const port = process.env.PORT

const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const compiler = webpack(webpackConfig)

// TODO check if webpack production build is working (I think it's not),
// figure a way to get around passing publicPath to devServer explicitly
if (process.env.NODE_ENV === 'development') {
  require('../devServer')(compiler, webpackConfig.output.publicPath)
}

const startElectron = require('./startElectron')
const handlers = require('./handlers')

app.get('/operators/:operator/folders', handlers.getFolders)

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(`API_SERVER ERROR: ${err}`)
  } else {
    console.log(`API server listening on port ${port}`)
    startElectron()
  }
})
