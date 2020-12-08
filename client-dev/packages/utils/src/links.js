/* eslint-disable global-require */
/* eslint-disable no-useless-escape */
import qs from 'querystring'

const replacements = [
  'auth',
  'trade',
  'cabinet',
  'dashboard',
]

export const getDomainLink = (target, query = {}) => {
  const origin = replacements.reduce((result, replacement) =>
    result.replace(`${replacement}.`, target ? `${target}.` : '')
  , window.location.origin) // eslint-disable-line indent

  if (!(query && Object.keys(query).length > 0)) {
    return origin
  }

  const search = qs.encode(query)

  return `${origin}/?${search}`
}

export const getReferalLink = (target, id) => getDomainLink(target, { uid: `uid${id}` })

export const extractReferalLink = () => {
  const { search, origin, hostname } = window.location

  if (!search) {
    return
  }

  const { uid } = qs.parse(search.substr(1))

  if (!uid) {
    return
  }

  let [target] = replacements.filter(replacement => (new RegExp(`${replacement}.`)).test(origin))

  if (!target) {
    target = 'promo'
  }

  const cookie = require('js-cookie')
  const domain = getDomainLink('auth').replace('http:\/\/', '').replace('https:\/\/', '').replace('auth.', '.')

  cookie.set('c3uid', {
    uid: uid.replace('uid', ''),
    target,
  }, {
    domain: hostname === 'localhost' ? null : domain,
  })
}

export const getUid = () => {
  const cookie = require('js-cookie')

  return cookie.getJSON('c3uid') || { uid: null, target: null }
}
