import { START_TRACKER } from './types'

const initialState = {
  timers: [
    // {
    //   id: '',
    //   name: '',
    //   time: '',
    //   status: '', // play || pause
    // },
  ],
}

export function trackerReducer(state = initialState, action) {
  switch (action.type) {
    case START_TRACKER:
      return {
        ...state,
        timers: [...state.timers, action.payload],
      }

    default:
      return state
  }
}
