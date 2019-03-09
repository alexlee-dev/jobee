import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Button } from 'grommet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ActionBarOnboarding = ({ app, dispatch }) => {
  const { onboardingStep } = app

  return (
    <Box align="center" direction="row" gap="medium" justify="between">
      <Box direction="row" gap="small">
        <FontAwesomeIcon color="#fca311" icon={['fas', 'circle']} />
        <FontAwesomeIcon
          color={onboardingStep > 0 ? '#fca311' : '#CCCCCC'}
          icon={['fas', 'circle']}
        />
      </Box>
      {onboardingStep > 0 && <Button label="Back" />}
      {onboardingStep < 1 && <Button label="Next" type="submit" />}
      {onboardingStep === 1 && (
        <Button label="Get Started" />
      )}
    </Box>
  )
}

ActionBarOnboarding.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ app }) => ({ app })

export default connect(mapStateToProps)(ActionBarOnboarding)
