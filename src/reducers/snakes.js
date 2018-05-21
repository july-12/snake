import { actionType, directionType } from '../actions/snakes.js'

let initialState = {
  list: [{ x: 200, y: 300 }, { x: 210, y: 300 }, { x: 220, y: 300 }],
  direction: directionType.RIGHT
}
export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_NODE:
      return { ...state, list: [...state.list, action.payload] }
    case actionType.MOVING:
    case actionType.EAT_MEAT:
      return { ...state, list: action.payload }
    case actionType.CHANGE_DIRECTION:
      return { ...state, direction: action.payload }
    default:
      return state
  }
}
