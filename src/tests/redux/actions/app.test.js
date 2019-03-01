import { setLoadingState, setCurrentScreen } from '../../../redux/actions/app'

describe('App Reducer', () => {
  it('Should set up the setLoadingState action object.', () => {
    const action = setLoadingState(true)
    expect(action).toEqual({
      type: 'SET_LOADING_STATE',
      payload: { isLoading: true }
    })
  })

  it('Should set up the setCurrentScreen action object.', () => {
    const action = setCurrentScreen('jobs')
    expect(action).toEqual({
      type: 'SET_CURRENT_SCREEN',
      payload: { currentScreen: 'jobs' }
    })
  })
})
