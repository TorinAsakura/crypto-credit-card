import { Locales } from 'locale'

export default (locales = []) =>
  (req, res, next) => {
    if (req.cookies.c3locale) {
      req.locale = req.cookies.c3locale

      return next()
    }

    const supported = new Locales(locales)
    const { normalized } = (new Locales(req.headers['accept-language'])).best(supported)

    req.locale = normalized || locales[0]

    return next()
  }
