import { actionType } from '../actions/meat.js'
import lodash from 'lodash'
let _ = lodash

let initialState = {
  x: _.random(Math.floor(30)) * 10,
  y: _.random(Math.floor(40)) * 10
}
export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.RANDOM_MEAT:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
