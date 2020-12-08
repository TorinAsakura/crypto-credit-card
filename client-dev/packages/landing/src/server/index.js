import Express from 'express'
import { capture as captureDevice } from 'express-device'
import cookieParser from 'cookie-parser'
import { locale } from './middleware'
import render from './render'

export default (app = new Express()) => {
  app.use(captureDevice())
  app.use(cookieParser())

  app.use(locale(['en', 'ru']))

  app.use('/health', (req, res) => res.status(200).send())

  app.use(render())

  return app
}
