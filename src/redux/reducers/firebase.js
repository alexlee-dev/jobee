const firebaseDefaultState = {
  isDatabaseConnected: false
}

export default (state = firebaseDefaultState, action) => {
  switch (action.type) {
    case 'MAKE_A_SANDWICH':
      return state
    case 'APOLOGIZE':
      return state
    case 'SET_DATABASE_CONNECTED':
      const { isDatabaseConnected } = action.payload
      return Object.assign({}, state, { isDatabaseConnected })
    default:
      return state
  }
}
