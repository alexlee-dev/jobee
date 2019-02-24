import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './firebase/observer'
import { Box } from 'grommet'
import ActionBar from './components/ActionBar'
import Spinner from './components/Spinner'
import SignInButton from './components/SignInButton'
import SignOutButton from './components/SignOutButton'

const App = ({ app, firebase }) => {
  const { isLoading } = app
  const { displayName } = firebase.user

  return (
    <Box fill justify="end">
      {isLoading && <Spinner />}
      {!isLoading && !displayName && <SignInButton />}
      {displayName && <SignOutButton />}
      <ActionBar />
    </Box>
  )
}

App.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  firebase: PropTypes.object.isRequired
}

const mapStateToProps = ({ app, firebase }) => ({ app, firebase })

export default connect(mapStateToProps)(App)
