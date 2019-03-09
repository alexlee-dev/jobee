import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Button } from 'grommet'
import { setOnboardingStep, setOnboarding } from '../redux/actions/app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ActionBarOnboarding = ({ app, dispatch }) => {
  const handleNext = () => {
    const { onboardingStep } = app
    dispatch(setOnboardingStep(onboardingStep + 1))
  }

  const handleBack = () => {
    const { onboardingStep } = app
    dispatch(setOnboardingStep(onboardingStep - 1))
  }

  const handleGetStared = () => {
    dispatch(setOnboarding(false))
  }

  const { onboardingStep } = app

  return (
    <Box align="center" direction="row" gap="medium" justify="between">
      <Box direction="row" gap="small">
        <FontAwesomeIcon color="#fca311" icon={['fas', 'circle']} />
        <FontAwesomeIcon
          color={onboardingStep > 0 ? '#fca311' : '#CCCCCC'}
          icon={['fas', 'circle']}
        />
        <FontAwesomeIcon
          color={onboardingStep > 1 ? '#fca311' : '#CCCCCC'}
          icon={['fas', 'circle']}
        />
      </Box>
      {onboardingStep > 0 && <Button label="Back" onClick={handleBack} />}
      {onboardingStep < 2 && <Button label="Next" onClick={handleNext} />}
      {onboardingStep === 2 && (
        <Button label="Get Started" onClick={handleGetStared} />
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
