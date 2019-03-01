import { emptyUser, screens } from '../constants'
import Jobs from '../screens/Jobs'
import User from '../screens/User'
import Settings from '../screens/Settings'

describe('Constants', () => {
  it('Should match emptyUser.', () => {
    expect(emptyUser).toEqual({
      displayName: null,
      email: null,
      photoURL: null
    })
  })

  it('Should match screens.', () => {
    expect(screens).toEqual({
      jobs: Jobs,
      user: User,
      settings: Settings
    })
  })
})
