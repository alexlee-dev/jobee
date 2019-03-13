import store from '../../../redux/store/store'

describe('Redux Store', () => {
  const defaultState = {
    app: {
      currentScreen: null,
      editMode: false,
      isDescriptionVisible: false,
      isLoading: true,
      isOnboarding: false,
      onboardingStep: 0,
      watchlistIndex: 0
    },
    firebase: {
      database: { companies: [], jobs: [] },
      hasCheckedForUser: false,
      user: {
        displayName: null,
        email: null,
        photoURL: null,
        preferences: { companies: [], watchlist: [] },
        uid: null
      }
    }
  }

  it('Should be able to get default state.', () => {
    const state = store.getState()
    expect(state).toEqual(defaultState)
  })
})
