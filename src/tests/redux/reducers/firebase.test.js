import firebaseReducer from '../../../redux/reducers/firebase'

describe('Firebase Reducer', () => {
  const firebaseDefaultState = {
    database: {
      jobs: []
    },
    hasCheckedForUser: false,
    user: {
      displayName: null,
      email: null,
      photoURL: null,
      preferences: { watchlist: [] },
      uid: null
    }
  }

  it('Should set up default state.', () => {
    const state = firebaseReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(firebaseDefaultState)
  })

  it('Should handle the setDatabase action.', () => {
    const state = firebaseReducer(undefined, {
      type: 'SET_DATABASE',
      payload: { collectionName: 'jobs', dataArray: [1, 2, 3] }
    })
    const expectedState = Object.assign({}, firebaseDefaultState, {
      database: {
        jobs: [1, 2, 3]
      }
    })
    expect(state).toEqual(expectedState)
  })

  it('Should handle the setUser action.', () => {
    const state = firebaseReducer(undefined, {
      type: 'SET_USER',
      payload: {
        user: {
          displayName: 'Alex',
          email: 'fake@email.com',
          photoURL: 'fakeURL'
        }
      }
    })
    const expectedState = Object.assign({}, firebaseDefaultState, {
      user: {
        displayName: 'Alex',
        email: 'fake@email.com',
        photoURL: 'fakeURL'
      }
    })
    expect(state).toEqual(expectedState)
  })

  it('Should handle the setHasCheckedForUser action.', () => {
    const state = firebaseReducer(undefined, {
      type: 'SET_HAS_CHECKED_FOR_USER',
      payload: { hasCheckedForUser: true }
    })
    const expectedState = Object.assign({}, firebaseDefaultState, {
      hasCheckedForUser: true
    })
    expect(state).toEqual(expectedState)
  })
})
