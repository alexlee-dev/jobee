export const SET_LOADING_STATE = 'SET_LOADING_STATE'
export const SET_CURRENT_SCREEN = 'SET_CURRENT_SCREEN'
export const SET_DESCRIPTION_VISIBILITY = 'SET_DESCRIPTION_VISIBILITY'
export const SET_EDIT_MODE = 'SET_EDIT_MODE'

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
