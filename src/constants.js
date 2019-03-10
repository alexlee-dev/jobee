import Settings from './screens/Settings'
import Today from './screens/Today'
import Watchlist from './screens/Watchlist'
import Onboarding1 from './screens/onboarding/Onboarding1';

export const emptyUser = {
  displayName: null,
  email: null,
  photoURL: null
}

export const screens = {
  settings: Settings,
  today: Today,
  watchlist: Watchlist
}

export const onboardingContent = {
  0: Onboarding1
}