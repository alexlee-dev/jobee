const firebaseDefaultState = {
  database: {
    companies: [],
    jobs: []
  },
  hasCheckedForUser: false,
  user: {
    displayName: null,
    email: null,
    photoURL: null,
    preferences: { companies: [], watchlist: [] },
    uid: null
  }
}

export default (state = firebaseDefaultState, action) => {
  switch (action.type) {
    case 'SET_DATABASE':
      const { collectionName, dataArray } = action.payload
      const newDatabase = Object.assign({}, state.database, {
        [collectionName]: dataArray
      })
      return Object.assign({}, state, { database: newDatabase })
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
    case 'SET_USER_PREFERENCE':
      const { preferenceName, data } = action.payload
      const newUserPreferences = Object.assign({}, state.user.preferences, {
        [preferenceName]: data
      })
      return Object.assign({}, state, {
        user: { ...state.user, preferences: newUserPreferences }
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
    default:
      return state
  }
}
