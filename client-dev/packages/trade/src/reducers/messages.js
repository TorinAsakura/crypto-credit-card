import { createReducer } from '@c3/utils'
import en from '../../locales/en.json'
import ru from '../../locales/ru.json'

const initialState = {
  en,
  ru,
}

export default createReducer(initialState, {})
