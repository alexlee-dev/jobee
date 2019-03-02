const firebaseDefaultState = {
  database: {
    jobs: []
  },
  hasCheckedForUser: false,
  user: {
    displayName: null,
    email: null,
    photoURL: null,
    preferences: {
      watchlist: [],
      watchlistIndex: 0
    },
    uid: null
  }
}

export default (state = firebaseDefaultState, action) => {
  switch (action.type) {
    case 'SET_DATABASE':
      const { collectionName, dataArray } = action.payload
      return Object.assign({}, state, {
        database: { [collectionName]: dataArray }
      })
    case 'SET_HAS_CHECKED_FOR_USER':
      const { hasCheckedForUser } = action.payload
      return Object.assign({}, state, { hasCheckedForUser })
    case 'SET_USER':
      const { user } = action.payload
      return Object.assign({}, state, { user })
    case 'SET_USER_PREFERENCES':
      const { userPreferences } = action.payload
      return Object.assign({}, state, {
        user: { ...state.user, preferences: userPreferences }
      })
    case 'SET_WATCHLIST':
      const { watchlist } = action.payload
      return Object.assign({}, state, {
        user: {
          ...state.user,
          preferences: {
            ...state.user.preferences,
            watchlist
          }
        }
      })
    case 'SET_WATCHLIST_INDEX':
      const { watchlistIndex } = action.payload
      return Object.assign({}, state, {
        user: {
          ...state.user,
          preferences: {
            ...state.user.preferences,
            watchlistIndex
          }
        }
      })
    default:
      return state
  }
}
