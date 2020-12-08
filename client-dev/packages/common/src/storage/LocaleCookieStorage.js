import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import cookies from 'js-cookie'

const KEY_NAME = 'c3locale'

export class LocaleCookieStorage {
  constructor() {
    this.cookies = cookies
  }

  getCookieOptions() {
    if (!canUseDOM) {
      return {}
    }

    const hostname = window.location.hostname
      .replace('m.', '')
      .replace('www.', '')
      .replace('www.', '')
      .replace('auth.', '')
      .replace('dashboard.', '')
      .replace('trade.', '')
      .replace('cabinet.', '')

    const domain = hostname === 'localhost' ? hostname : `.${hostname}`

    return { domain }
  }

  async getItem() {
    return { locale: this.cookies.get(KEY_NAME) }
  }

  async setItem(key, { locale }) {
    this.cookies.set(KEY_NAME, locale, this.getCookieOptions())

    return null
  }

  async removeItem() {
    this.cookies.expire(KEY_NAME)

    return null
  }
}
