export const SET_LOADING_STATE = 'SET_LOADING_STATE'

export const setLoadingState = isLoading => ({
  type: SET_LOADING_STATE,
  payload: { isLoading }
})
