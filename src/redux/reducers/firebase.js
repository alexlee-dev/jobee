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
    preferences: { favoriteCompanies: [], watchlist: [] },
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
    // TODO: You were going to edit this to be more dynamic like the SET_DATABASE
    // * so that you could set the favorite companies in onboarding here
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
    default:
      return state
  }
}
