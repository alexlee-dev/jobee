import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './firebase/observer'
import { Box } from 'grommet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCircle } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import {
  faEllipsisV,
  faMapMarkerAlt,
  faNewspaper
} from '@fortawesome/pro-regular-svg-icons'
import ActionBar from './components/ActionBar'
import LoadingScreen from './screens/Loading'
import SignInScreen from './screens/SignIn'
import { screens } from './constants'
import NavBar from './components/NavBar'
import ErrorBoundary from './components/ErrorBoundary'
import Onboarding from './screens/Onboarding'

library.add(far, fas, faCircle, faEllipsisV, faMapMarkerAlt, faNewspaper)

export const App = ({ app, firebase }) => {
  const { currentScreen, isLoading, isOnboarding } = app
  const { displayName } = firebase.user
  const Screen = screens[currentScreen]

  if (isLoading) {
    return (
      <ErrorBoundary>
        <LoadingScreen />
      </ErrorBoundary>
    )
  } else if (!isLoading && isOnboarding) {
    return (
      <ErrorBoundary>
        <Onboarding />
      </ErrorBoundary>
    )
  } else if (!isLoading && !isOnboarding && !displayName) {
    return (
      <ErrorBoundary>
        <SignInScreen />
      </ErrorBoundary>
    )
  } else {
    return (
      <Box className="shell" fill justify="between">
        <ErrorBoundary>
          <NavBar />
        </ErrorBoundary>
        <ErrorBoundary>
          <Screen />
        </ErrorBoundary>
        <ErrorBoundary>
          <ActionBar />
        </ErrorBoundary>
      </Box>
    )
  }
}

App.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  firebase: PropTypes.object.isRequired
}

const mapStateToProps = ({ app, firebase }) => ({ app, firebase })

export default connect(mapStateToProps)(App)
