import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'

const supported = ['en', 'ru']

const normalize = language => language.match(/[a-z]+/gi)[0]

const isSupported = language => supported.includes(normalize(language))

export const getUserLocale = () => {
  if (!canUseDOM) {
    return supported[0]
  }

  const language = navigator.language || navigator.userLanguage
  const { languages } = navigator

  if (isSupported(language)) {
    return normalize(language)
  }

  const [matched] = languages.filter(isSupported)

  if (matched) {
    return normalize(matched)
  }

  return supported[0]
}
