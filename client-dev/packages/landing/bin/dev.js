/* eslint-disable no-console */
import path from 'path'
import Express from 'express'
import webpack from 'webpack'
import serveStatic from 'serve-static'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import * as config from '../config/webpack/dev'
import configureApp from '../src/server'

let app = new Express()

const compiler = webpack(config)

app.use(devMiddleware(compiler, { noInfo: true, publicPath: '/', disableHostCheck: true }))
app.use(hotMiddleware(compiler))

app.use(serveStatic(path.join(__dirname, '../public')))

const start = () => {
  const port = process.env.PORT || 8080

  app = configureApp(app)

  app.listen(port, (error) => {
    if (error) {
      throw error
    }

    console.info('Development server listening on port %s', port)
  })
}

start()
