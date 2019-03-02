import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Button } from 'grommet'
import { Checkmark, Clear } from 'grommet-icons'
import {
  removeJobFromWatchlist,
  continueWatchingJob
} from '../redux/actions/firebase'
import { setLoadingState } from '../redux/actions/app'

const JobCardButtons = ({ dispatch, documentId, firebase }) => {
  const { preferences, uid } = firebase.user
  const { watchlistIndex } = preferences
  const handleContinueWatching = () => {
    dispatch(setLoadingState(true))
    dispatch(continueWatchingJob(uid, watchlistIndex))
  }
  const handleRemoveFromWatchlist = () => {
    dispatch(setLoadingState(true))
    dispatch(removeJobFromWatchlist(uid, documentId))
  }

  return (
    <Box align="center" direction="row" gap="large" justify="center">
      <Button onClick={handleContinueWatching} style={{ width: '50%' }}>
        <Box
          align="center"
          background="status-ok"
          fill="horizontal"
          justify="center"
          pad="medium"
          round="large"
        >
          <Checkmark color="white" />
        </Box>
      </Button>
      <Button onClick={handleRemoveFromWatchlist} style={{ width: '50%' }}>
        <Box
          align="center"
          background="status-critical"
          fill="horizontal"
          justify="center"
          pad="medium"
          round="large"
        >
          <Clear color="white" />
        </Box>
      </Button>
    </Box>
  )
}

JobCardButtons.propTypes = {
  dispatch: PropTypes.func.isRequired,
  documentId: PropTypes.string.isRequired,
  firebase: PropTypes.object.isRequired
}

const mapStateToProps = ({ dispatch, firebase }) => ({ dispatch, firebase })

export default connect(mapStateToProps)(JobCardButtons)
