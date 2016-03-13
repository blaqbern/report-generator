/* eslint-disable no-console */

const path = require('path')
const app = require('express')()

const port = process.env.DEV_SERVER_PORT

module.exports = function startDevServer(compiler, publicPath) {
  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: publicPath,
      stats: {
        colors: true,
      },
    })
  )
  app.use(
    require('webpack-hot-middleware')(compiler)
  )

  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  )

  app.listen(port, 'localhost', (err) => {
    if (err) {
      console.log(`DEV_SERVER ERROR: ${err}`)
    } else {
      console.log(`Development server listening on port ${port}`)
    }
  })
}
