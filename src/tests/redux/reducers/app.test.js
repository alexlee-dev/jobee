import appReducer from '../../../redux/reducers/app'

describe('App Reducer', () => {
  const appDefaultState = {
    currentScreen: null,
    editMode: false,
    isDescriptionVisible: false,
    isLoading: true,
    isOnboarding: false,
    onboardingStep: 0,
    watchlistIndex: 0
  }

  it('Should set up default state.', () => {
    const state = appReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(appDefaultState)
  })

  it('Should handle the setCurrentScreen action.', () => {
    const state = appReducer(undefined, {
      type: 'SET_CURRENT_SCREEN',
      payload: { currentScreen: 'jobs' }
    })
    expect(state).toEqual({
      currentScreen: 'jobs',
      editMode: false,
      isDescriptionVisible: false,
      isLoading: true,
      isOnboarding: false,
      onboardingStep: 0,
      watchlistIndex: 0
    })
  })

  it('Should handle the setLoadingState action.', () => {
    const state = appReducer(undefined, {
      type: 'SET_LOADING_STATE',
      payload: { isLoading: false }
    })
    expect(state).toEqual({
      currentScreen: null,
      editMode: false,
      isDescriptionVisible: false,
      isLoading: false,
      isOnboarding: false,
      onboardingStep: 0,
      watchlistIndex: 0
    })
  })
})
