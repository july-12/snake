export const actionType = {
  ADD_NODE: 'ADD_NODE'
}

export const addNode = node => ({
  type: actionType.ADD_NODE,
  payload: node
})
