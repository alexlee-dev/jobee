import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './firebase/observer'
import { Box } from 'grommet'
import ActionBar from './components/ActionBar'
import SignInScreen from './components/SignInScreen'
import LoadingScreen from './components/LoadingScreen'
import { screens } from './constants'
import NavBar from './components/NavBar'

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
      <Box fill justify="between">
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
