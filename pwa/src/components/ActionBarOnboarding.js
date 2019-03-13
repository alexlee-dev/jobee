import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Button } from 'grommet'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ActionBarOnboarding = ({ app, dispatch }) => {
  // const { onboardingStep } = app

  return (
    <Box align="center" direction="row" gap="medium" justify="center">
      {/* <Box direction="row" gap="small">
        <FontAwesomeIcon color="#fca311" icon={['fas', 'circle']} />
        <FontAwesomeIcon
          color={onboardingStep > 0 ? '#fca311' : '#CCCCCC'}
          icon={['fas', 'circle']}
        />
      </Box> */}
      <Button label="Get Started" primary type="submit" />
    </Box>
  )
}

ActionBarOnboarding.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ app }) => ({ app })

export default connect(mapStateToProps)(ActionBarOnboarding)
