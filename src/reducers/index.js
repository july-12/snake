import { combineReducers } from 'redux'
import speed from './speed.js'
import snakes from './snakes.js'
import meat from './meat.js'

export default combineReducers({
  speed,
  snakes,
  meat
})
