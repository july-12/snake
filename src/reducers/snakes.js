import { actionType } from '../actions/snakes.js'

let initialState = {
  list: [{ x: 200, y: 300 }, { x: 210, y: 300 }]
}
export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_NODE:
      return { ...state, list: [...state.list, action.payload] }
    default:
      return state
  }
}
