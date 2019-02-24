import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import ActionBar from './components/ActionBar'
import Spinner from './components/Spinner'
import SignInButton from './components/SignInButton'
import {
  checkDatabaseConnection,
  checkIndexedDB
} from './redux/actions/firebase'
import store from './redux/store/store'

const App = ({ app, firebase }) => {
  const { isLoading } = app
  const { hasCheckedForUser } = firebase
  const { displayName } = firebase.user
  // const { id } = firebase.user

  useEffect(() => {
    store.dispatch(checkDatabaseConnection())
  }, [isLoading])

  // useEffect(() => {
  //   store.dispatch(checkUser())
  // }, [id])

  useEffect(() => {
    store.dispatch(checkIndexedDB())
  }, [displayName])

  return (
    <Box fill justify="end">
      {isLoading && <Spinner />}
      {!isLoading && hasCheckedForUser && !displayName && <SignInButton />}
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
