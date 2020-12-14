import {
  GET_LS_TRACKER,
  PAUSE_TRACKER,
  REMOVE_ALL,
  REMOVE_TRACKER,
  RESTORE_TRACKER,
  START_TRACKER,
} from './types'
import moment from 'moment'

export const setTimers = (timersLS) => {
  return {
    type: GET_LS_TRACKER,
    payload: timersLS,
  }
}

export const setLS = (timers, dispatch) => {
  const existArr = JSON.parse(localStorage.getItem('Tracker'))

  existArr && timers.length === 0 && dispatch(setTimers(existArr))

  if (timers.length > 0) {
    existArr && localStorage.removeItem('Tracker')
    localStorage.setItem('Tracker', JSON.stringify(timers))
  }
}

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
  const nowPause = Date.now() - timer.time

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
  const begin = +Date.now() - +timer.current

  const restoreTime = {
    id: timer.id,
    name: timer.name,
    time: begin,
    current: null,
    status: 'play',
  }

  return {
    type: RESTORE_TRACKER,
    payload: restoreTime,
  }
}

export const removeTracker = (timers, id) => {
  if (timers.length === 1 && timers[0].id === id) {
    localStorage.removeItem('Tracker')
    return {
      type: REMOVE_ALL,
    }
  } else {
    const removedArr = timers.filter((t) => t.id !== id)

    return {
      type: REMOVE_TRACKER,
      payload: removedArr.sort(),
    }
  }
}
