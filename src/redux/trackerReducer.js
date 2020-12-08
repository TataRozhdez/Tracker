import { PAUSE_TRACKER, RESTORE_TRACKER, START_TRACKER } from './types'

const initialState = {
  timers: [],
}

export function trackerReducer(state = initialState, action) {
  switch (action.type) {
    case START_TRACKER:
      return {
        ...state,
        timers: [action.payload, ...state.timers],
      }
    case PAUSE_TRACKER:
      const pauseTimer = state.timers.filter((t) => t.id !== action.payload.id)
      return {
        ...state,
        timers: [...pauseTimer, action.payload],
      }
    case RESTORE_TRACKER:
      const restoreTimer = state.timers.filter(
        (t) => t.id !== action.payload.id
      )
      return {
        ...state,
        timers: [action.payload, ...restoreTimer],
      }

    default:
      return state
  }
}
