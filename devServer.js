/* eslint-disable no-console */

const path = require('path')
const childProcess = require('child_process')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const electron = require('electron-prebuilt')
const app = require('express')()

const port = 3000

const compiler = webpack(webpackConfig)

if (process.env.NODE_ENV === 'development') {
  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: `http://localhost:${port}${webpackConfig.output.publicPath}`,
      stats: {
        colors: true,
      },
    })
  )
  app.use(
    require('webpack-hot-middleware')(compiler)
  )
}

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
)

app.listen('3000', 'localhost', (err) => {
  if (err) {
    console.log(`DEV_SERVER ERROR: ${err}`)
  } else {
    console.log(`Express server listening on port ${port}`)
    childProcess.spawn(electron, ['.'])
  }
})
