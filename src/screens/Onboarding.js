import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Form } from 'grommet'
import ActionBarOnboarding from '../components/ActionBarOnboarding'
import { onboardingContent } from '../constants'

const Onboarding = ({ app }) => {
  // const handleNext = () => {
  //   const { onboardingStep } = app
  //   dispatch(setOnboardingStep(onboardingStep + 1))
  // }

  // const handleBack = () => {
  //   const { onboardingStep } = app
  //   dispatch(setOnboardingStep(onboardingStep - 1))
  // }

  // const handleGetStared = () => {
  //   dispatch(setCurrentScreen('today'))
  //   dispatch(setOnboarding(false))
  // }

  const handleFormSubmission = ({ value }) => {
    const formInfo = value
    console.table(formInfo)
  }

  const { onboardingStep } = app
  const OnboardingContent = onboardingContent[onboardingStep]
  return (
    <Box background="#14213D" fill>
      <Box fill pad="large">
        <Form style={{ height: '100%' }} onSubmit={handleFormSubmission}>
          <Box fill justify="between">
            <OnboardingContent />
            <ActionBarOnboarding />
          </Box>
        </Form>
      </Box>
    </Box>
  )
}

Onboarding.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ app }) => ({ app })

export default connect(mapStateToProps)(Onboarding)
