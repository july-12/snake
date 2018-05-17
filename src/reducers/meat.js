import { actionType } from '../actions/meat.js'

let initialState = {
  x: 100,
  y: 160
}
export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_POSITION:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
