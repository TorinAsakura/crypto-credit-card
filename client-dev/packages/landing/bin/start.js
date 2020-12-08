/* eslint-disable no-console */
import path from 'path'
import Express from 'express'
import serveStatic from 'serve-static'
import configureApp from '../src/server'

const start = () => {
  const port = process.env.PORT || 8080

  const express = new Express()

  express.use(serveStatic(path.join(__dirname, '../dist')))

  const app = configureApp(express)

  app.listen(port, (error) => {
    if (error) {
      throw error
    }

    console.info('Server listening on port %s', port)
  })
}

start()
