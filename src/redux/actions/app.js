export const SET_LOADING_STATE = 'SET_LOADING_STATE'
export const SET_CURRENT_SCREEN = 'SET_CURRENT_SCREEN'

export const setLoadingState = isLoading => ({
  type: SET_LOADING_STATE,
  payload: { isLoading }
})

export const setCurrentScreen = currentScreen => ({
  type: SET_CURRENT_SCREEN,
  payload: { currentScreen }
})
