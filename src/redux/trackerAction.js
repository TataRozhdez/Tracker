import { PAUSE_TRACKER, START_TRACKER } from './types'
import moment from 'moment'

export const startNewTimer = (time, name) => {
  const newTimer = {
    id: `${time}`,
    name: `${name}` || `${moment(time).format('MM-DD-YYYY/HH:mm:ss')}`,
    time: time,
    current: null,
    status: 'play',
  }

  return {
    type: START_TRACKER,
    payload: newTimer,
  }
}

export const pauseTimer = (timer) => {
  const nowPause = document.querySelector('#current-time').innerHTML

  const pauseTime = {
    id: timer.id,
    name: timer.name,
    time: timer.time,
    current: `${nowPause}`,
    status: 'pause',
  }

  return {
    type: PAUSE_TRACKER,
    payload: pauseTime,
  }
}

export const restoreTimer = (timer) => {
  const restoreTime = {
    id: timer.id,
    name: timer.name,
    time: timer.time,
    current: timer.current,
    status: 'play',
  }

  return {
    type: PAUSE_TRACKER,
    payload: restoreTime,
  }
}
