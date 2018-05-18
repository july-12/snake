export const directionType = {
  LEFT: 37,
  TOP: 38,
  RIGHT: 39,
  BOTTOM: 40
}
export const actionType = {
  ADD_NODE: 'ADD_NODE',
  MOVING: 'MOVING',
  EAT_MEAT: 'EAT_MEAT',
  CHANGE_DIRECTION: 'CHANGE_DIRECTION'
}

export const addNode = node => ({
  type: actionType.ADD_NODE,
  payload: node
})

export const moving = list => ({
  type: actionType.MOVING,
  payload: list
})

export const changeDirection = direction => ({
  type: actionType.CHANGE_DIRECTION,
  payload: direction
})

export const eatMeat = list => ({
  type: actionType.EAT_MEAT,
  payload: list
})
