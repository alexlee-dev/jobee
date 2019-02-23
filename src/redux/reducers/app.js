const appDefaultState = {
  isLoading: true
}

export default (state = appDefaultState, action) => {
  switch (action.type) {
    case 'SET_LOADING_STATE':
      const { isLoading } = action.payload
      return Object.assign({}, state, { isLoading })
    default:
      return state
  }
}
