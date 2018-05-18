export const actionType = {
  ADD_NODE: 'ADD_NODE',
  MOVING: 'MOVING',
  CHANGE_DIRECTION: 'CHANGE_DIRECTION'
}

export const addNode = node => ({
  type: actionType.ADD_NODE,
  payload: node
})

export const moveToNext = list => ({
  type: actionType.MOVING,
  payload: list
})
