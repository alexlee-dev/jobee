import Settings from './screens/Settings'
import Today from './screens/Today'
import Watchlist from './screens/Watchlist'
import Onboarding1 from './screens/onboarding/Onboarding1';
import Onboarding2 from './screens/onboarding/Onboarding2';

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
  0: Onboarding1,
  1: Onboarding2
}