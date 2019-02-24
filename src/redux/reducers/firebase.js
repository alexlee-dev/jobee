const firebaseDefaultState = {
  hasCheckedForUser: false,
  isDatabaseConnected: false,
  user: {
    accessToken: null,
    email: null,
    firstName: null,
    id: null,
    isNewUser: null,
    lastName: null,
    picture: null
  }
}

export default (state = firebaseDefaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      const { user } = action.payload
      return Object.assign({}, state, { user })
    case 'SET_DATABASE_CONNECTED':
      const { isDatabaseConnected } = action.payload
      return Object.assign({}, state, { isDatabaseConnected })
    case 'SET_HAS_CHECKED_FOR_USER':
      const { hasCheckedForUser } = action.payload
      return Object.assign({}, state, { hasCheckedForUser })
    default:
      return state
  }
}
