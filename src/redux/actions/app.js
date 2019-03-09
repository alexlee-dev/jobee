export const SET_LOADING_STATE = 'SET_LOADING_STATE'
export const SET_CURRENT_SCREEN = 'SET_CURRENT_SCREEN'
export const SET_DESCRIPTION_VISIBILITY = 'SET_DESCRIPTION_VISIBILITY'
export const SET_EDIT_MODE = 'SET_EDIT_MODE'
export const SET_WATCHLIST_INDEX = 'SET_WATCHLIST_INDEX'
export const SET_ONBOARDING = 'SET_ONBOARDING'
export const SET_ONBOARDING_STEP = 'SET_ONBOARDING_STEP'

export const setLoadingState = isLoading => ({
  type: SET_LOADING_STATE,
  payload: { isLoading }
})
export const setCurrentScreen = currentScreen => ({
  type: SET_CURRENT_SCREEN,
  payload: { currentScreen }
})
export const setDescriptionVisibility = isDescriptionVisible => ({
  type: SET_DESCRIPTION_VISIBILITY,
  payload: { isDescriptionVisible }
})
export const setEditMode = editMode => ({
  type: SET_EDIT_MODE,
  payload: { editMode }
})
export const setWatchlistIndex = watchlistIndex => ({
  type: SET_WATCHLIST_INDEX,
  payload: { watchlistIndex }
})
export const setOnboarding = isOnboarding => ({
  type: SET_ONBOARDING,
  payload: { isOnboarding }
})
export const setOnboardingStep = onboardingStep => ({
  type: SET_ONBOARDING_STEP,
  payload: { onboardingStep }
})
