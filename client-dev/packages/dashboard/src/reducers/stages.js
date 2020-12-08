import { DateTime, Interval } from 'luxon'
import { createReducer } from '@c3/utils'
import stages from '../stages.json'

const items = stages.items.filter(({ from, to }) => {
  const interval = Interval.fromDateTimes(
    DateTime.fromFormat(from, 'dd.MM.yyyy'),
    DateTime.fromFormat(to, 'dd.MM.yyyy'),
  )

  return !interval.isBefore(DateTime.local())
})

const [current] = items.filter(({ from, to }) => {
  const interval = Interval.fromDateTimes(
    DateTime.fromFormat(from, 'dd.MM.yyyy'),
    DateTime.fromFormat(to, 'dd.MM.yyyy'),
  )

  return interval.contains(DateTime.local())
})

const initialState = {
  current: current || {
    from: '',
    to: '',
    bonus: 0,
    price: 0,
  },
  items: stages.items,
}

export default createReducer(initialState)
