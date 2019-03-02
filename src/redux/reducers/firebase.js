const firebaseDefaultState = {
  database: {
    jobs: []
  },
  hasCheckedForUser: false,
  user: {
    displayName: null,
    email: null,
    photoURL: null,
    preferences: null,
    uid: null
  }
}

export default (state = firebaseDefaultState, action) => {
  switch (action.type) {
    case 'REMOVE_FROM_WATCHLIST':
      const { documentId } = action.payload
      return Object.assign({}, state, {
        user: {
          ...state.user,
          preferences: state.preferences.filter(
            document => document.id !== documentId
          )
        }
      })
    case 'SET_DATABASE':
      const { collectionName, dataArray } = action.payload
      return Object.assign({}, state, {
        database: { [collectionName]: dataArray }
      })
    case 'SET_USER':
      const { user } = action.payload
      return Object.assign({}, state, { user })
    case 'SET_USER_PREFERENCES':
      const { userPreferences } = action.payload
      return Object.assign({}, state, {
        user: { ...state.user, preferences: userPreferences }
      })
    case 'SET_HAS_CHECKED_FOR_USER':
      const { hasCheckedForUser } = action.payload
      return Object.assign({}, state, { hasCheckedForUser })
    default:
      return state
  }
}
