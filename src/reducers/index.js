import { combineReducers } from 'redux'
import snakes from './snakes.js'
import meat from './meat.js'

export default combineReducers({
  snakes,
  meat
})
