import { RATE, actionType } from '../actions/speed.js'

let initialState = {
  rate: RATE.middle
}
export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_SPEED:
      return { ...state, rate: action.payload }
    default:
      return state
  }
}
