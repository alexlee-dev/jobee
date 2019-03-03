import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Button, Text } from 'grommet'
import {
  removeJobFromWatchlist,
  continueWatchingJob
} from '../redux/actions/firebase'
import { setLoadingState } from '../redux/actions/app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <Box align="center" direction="row" height="50px" justify="center">
      <Button
        onClick={handleRemoveFromWatchlist}
        style={{ height: '50px', width: '50%' }}
      >
        <Box
          align="center"
          background="status-critical"
          direction="row"
          fill
          gap="small"
          justify="center"
          round={{ corner: 'bottom-left', size: 'medium' }}
        >
          <FontAwesomeIcon icon={['far', 'eye-slash']} size="sm" />
          <Text color="white" size="small" weight="bold">
            IGNORE
          </Text>
        </Box>
      </Button>
      <Button
        onClick={handleContinueWatching}
        style={{ height: '50px', width: '50%' }}
      >
        <Box
          align="center"
          background="status-ok"
          fill
          justify="center"
          round={{ corner: 'bottom-right', size: 'medium' }}
        >
          <Text color="white" size="small" weight="bold">
            KEEP WATCHING
          </Text>
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
