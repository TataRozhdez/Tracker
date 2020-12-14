import {
  GET_LS_TRACKER,
  PAUSE_TRACKER,
  REMOVE_ALL,
  REMOVE_TRACKER,
  RESTORE_TRACKER,
  START_TRACKER,
} from './types'

const initialState = {
  timers: [],
}

const sortingByData = (a, b) => {
  return +a.id - +b.id
}

export function trackerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LS_TRACKER:
      return {
        timers: [...action.payload],
      }

    case START_TRACKER:
      return {
        ...state,
        timers: [action.payload, ...state.timers],
      }

    case PAUSE_TRACKER:
      const pauseTimer = state.timers.filter((t) => t.id !== action.payload.id)
      const timersPause = [action.payload, ...pauseTimer]
        .sort(sortingByData)
        .reverse()

      return {
        ...state,
        timers: [...timersPause],
      }

    case RESTORE_TRACKER:
      const restoreTimer = state.timers.filter(
        (t) => t.id !== action.payload.id
      )
      const timersRestore = [action.payload, ...restoreTimer]
        .sort(sortingByData)
        .reverse()

      return {
        ...state,
        timers: [...timersRestore],
      }

    case REMOVE_TRACKER:
      return {
        timers: [...action.payload],
      }

    case REMOVE_ALL:
      return {
        timers: [],
      }

    default:
      return state
  }
}
