export const actionType = {
  CHANGE_POSITION: 'CHANGE_POSITION'
}

export const changeRandomPos = () => ({
  type: actionType.CHANGE_POSITION,
  payload: { x: 100, y: 200 }
})
