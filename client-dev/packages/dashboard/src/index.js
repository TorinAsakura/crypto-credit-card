import MobileDetect from 'mobile-detect'
import { extractReferalLink } from '@c3/utils'

const device = new MobileDetect(window.navigator.userAgent)

if (device.phone()) {
  import('./mobile.js')
} else {
  import('./desktop.js')
}

extractReferalLink()
