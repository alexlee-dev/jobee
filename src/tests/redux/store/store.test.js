import store from '../../../redux/store/store'

describe('Redux Store', () => {
  const defaultState = {
    app: { currentScreen: null, isLoading: true },
    firebase: {
      database: { jobs: [] },
      hasCheckedForUser: false,
      user: { displayName: null, email: null, photoURL: null, preferences: null, uid: null }
    }
  }

  it('Should be able to get default state.', () => {
    const state = store.getState()
    expect(state).toEqual(defaultState)
  })
})
