const appDefaultState = {
  currentScreen: null,
  editMode: false,
  isDescriptionVisible: false,
  isLoading: true
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
    default:
      return state
  }
}
