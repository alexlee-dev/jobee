import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import ActionBar from './components/ActionBar'
import Spinner from './components/Spinner'
import { testDB } from './firebase/firestore';

const App = ({ app }) => {
  useEffect(() => {
    testDB()
  })
  const { isLoading } = app
  return (
    <Box fill justify="end">
      {isLoading && <Spinner />}
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
