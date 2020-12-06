import { START_TRACKER } from './types'

export const startNewTimer = (time, name) => {
  const newTimer = {
    id: `${time}`,
    name: `${name}` || `${time}`,
    time: time,
    status: 'play',
  }

  return {
    type: START_TRACKER,
    payload: newTimer,
  }
}
