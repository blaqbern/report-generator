const childProcess = require('child_process')
const electron = require('electron-prebuilt')
const db = require('./db/connection')

const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const compiler = webpack(webpackConfig)

const port = process.env.PORT

const app = require('express')()

if (process.env.NODE_ENV === 'development') {
  require('./devServer')(compiler, webpackConfig.output.publicPath)
}

app.get('/operators/:operator/folders', (req, res) =>
  // slow down response to mimic async
  setTimeout(() => {
    db.query(
      `SELECT * FROM folder WHERE operator = '${req.params.operator}'`,
      (err, rows) => {
        if (err) {
          console.error(`Internal Server error: ${err}`)
          res.status(500).send(err)
        }
        res.status(200).json(rows)
      }
    )
  }, 2000)
)

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(`API_SERVER ERROR: ${err}`)
  } else {
    console.log(`API server listening on port ${port}`)
    childProcess.spawn(electron, ['.'])
  }
})
