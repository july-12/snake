export const actionType = {
  RANDOM_MEAT: 'RANDOM_MEAT'
}

export const randomMeat = ({ x, y }) => ({
  type: actionType.RANDOM_MEAT,
  payload: { x, y }
})
