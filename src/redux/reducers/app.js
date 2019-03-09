const appDefaultState = {
  currentScreen: null,
  editMode: false,
  isDescriptionVisible: false,
  isLoading: false,
  isOnboarding: true,
  onboardingStep: 0,
  watchlistIndex: 0
}

export default (state = appDefaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SCREEN':
      const { currentScreen } = action.payload
      return Object.assign({}, state, { currentScreen })
    case 'SET_DESCRIPTION_VISIBILITY':
      const { isDescriptionVisible } = action.payload
      return Object.assign({}, state, { isDescriptionVisible })
    case 'SET_EDIT_MODE':
      const { editMode } = action.payload
      return Object.assign({}, state, { editMode })
    case 'SET_LOADING_STATE':
      const { isLoading } = action.payload
      return Object.assign({}, state, { isLoading })
    case 'SET_ONBOARDING':
      const { isOnboarding } = action.payload
      return Object.assign({}, state, { isOnboarding })
    case 'SET_ONBOARDING_STEP':
      const { onboardingStep } = action.payload
      return Object.assign({}, state, { onboardingStep })
    case 'SET_WATCHLIST_INDEX':
      const { watchlistIndex } = action.payload
      return Object.assign({}, state, { watchlistIndex })
    default:
      return state
  }
}
