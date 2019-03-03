import store from '../../../redux/store/store'

describe('Redux Store', () => {
  const defaultState = {
    app: { currentScreen: null, editMode: false, isDescriptionVisible: false, isLoading: true },
    firebase: {
      database: { jobs: [] },
      hasCheckedForUser: false,
      user: { displayName: null, email: null, photoURL: null, preferences: { watchlist: [], watchlistIndex: 0 }, uid: null }
    }
  }

  it('Should be able to get default state.', () => {
    const state = store.getState()
    expect(state).toEqual(defaultState)
  })
})
