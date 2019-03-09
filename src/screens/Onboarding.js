import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import ActionBarOnboarding from '../components/ActionBarOnboarding'
import { onboardingContent } from '../constants'

const Onboarding = ({ app }) => {
  const { onboardingStep } = app
  const OnboardingContent = onboardingContent[onboardingStep]
  return (
    <Box background="#14213D" fill>
      <Box
        fill
        justify="between"
        pad="large"
      >
        <Box>
          <OnboardingContent />
        </Box>
        <ActionBarOnboarding />
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
