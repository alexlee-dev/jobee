const firebaseDefaultState = {
  hasCheckedForUser: false,
  user: {
    displayName: null,
    email: null,
    photoURL: null
  }
}

export default (state = firebaseDefaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      const { user } = action.payload
      return Object.assign({}, state, { user })
    case 'SET_HAS_CHECKED_FOR_USER':
      const { hasCheckedForUser } = action.payload
      return Object.assign({}, state, { hasCheckedForUser })
    default:
      return state
  }
}
