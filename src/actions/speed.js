export const RATE = {
  slow: 200,
  middle: 100,
  fast: 50
}
export const actionType = {
  CHANGE_SPEED: 'CHANGE_SPEED'
}

export const changeSpeed = rate => ({
  type: actionType.CHANGE_SPEED,
  payload: rate
})
