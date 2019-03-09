import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './firebase/observer'
import { Box } from 'grommet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import {
  faEllipsisV,
  faMapMarkerAlt,
  faNewspaper
} from '@fortawesome/pro-regular-svg-icons'
import ActionBar from './components/ActionBar'
import SignInScreen from './components/SignInScreen'
import LoadingScreen from './components/LoadingScreen'
import { screens } from './constants'
import NavBar from './components/NavBar'

library.add(far, fas, faEllipsisV, faMapMarkerAlt, faNewspaper)

export const App = ({ app, firebase }) => {
  const { currentScreen, isLoading } = app
  const { displayName } = firebase.user
  const Screen = screens[currentScreen]

  if (isLoading) {
    return <LoadingScreen />
  } else if (!isLoading && !displayName) {
    return <SignInScreen />
  } else {
    return (
      <Box className="shell" fill justify="between">
        <NavBar />
        <Screen />
        <ActionBar />
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
