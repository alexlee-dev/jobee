import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import ActionBar from './components/ActionBar'
import Spinner from './components/Spinner'
import SignInButton from './components/SignInButton'
import { checkDatabaseConnection } from './redux/actions/firebase'
import store from './redux/store/store'

const App = ({ app }) => {
  const { isLoading } = app

  useEffect(() => {
    store.dispatch(checkDatabaseConnection())
  }, [isLoading])

  return (
    <Box fill justify="end">
      {isLoading && <Spinner />}
      {!isLoading && <SignInButton />}
      <ActionBar />
    </Box>
  )
}

App.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ app }) => ({ app })

export default connect(mapStateToProps)(App)
