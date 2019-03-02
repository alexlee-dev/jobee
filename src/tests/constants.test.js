import { emptyUser, screens } from '../constants'
import Jobs from '../screens/Jobs'
import Settings from '../screens/Settings'

describe('Constants', () => {
  it('Should match emptyUser.', () => {
    expect(emptyUser).toEqual({
      displayName: null,
      email: null,
      photoURL: null,
      preferences: {
        watchlist: [],
        watlistIndex: 0
      }
    })
  })

  it('Should match screens.', () => {
    expect(screens).toEqual({
      jobs: Jobs,
      settings: Settings
    })
  })
})
