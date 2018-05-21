import { combineReducers } from 'redux'
import speed from './speed.js'
import snake from './snake.js'
import meat from './meat.js'

export default combineReducers({
  speed,
  snake,
  meat
})
