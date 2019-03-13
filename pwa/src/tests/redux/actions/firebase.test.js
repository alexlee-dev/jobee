import '../../../firebase/init'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  setHasCheckedForUser,
  setUser,
  setDatabase,
} from '../../../redux/actions/firebase'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Firebase Actions', () => {
  it('Should set up the setHasCheckedForUser action object.', () => {
    const action = setHasCheckedForUser(true)
    expect(action).toEqual({
      type: 'SET_HAS_CHECKED_FOR_USER',
      payload: { hasCheckedForUser: true }
    })
  })

  it('Should set up the setUser action object.', () => {
    const user = { displayName: 'Alex' }
    const action = setUser(user)
    expect(action).toEqual({
      type: 'SET_USER',
      payload: { user }
    })
  })

  it('Should set up the setDatabase action object.', () => {
    const dataArray = []
    const action = setDatabase('testCollection', dataArray)
    expect(action).toEqual({
      type: 'SET_DATABASE',
      payload: { collectionName: 'testCollection', dataArray }
    })
  })
})
