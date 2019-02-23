import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import 'react-awesome-button/dist/styles.css'
import { AwesomeButton } from 'react-awesome-button'
import { Box } from 'grommet'
import { checkDatabaseConnection } from '../redux/actions/firebase'

const SignInButton = ({ dispatch }) => {
  return (
    <Box align="center" justify="center">
      <AwesomeButton
        action={() => dispatch(checkDatabaseConnection('Alex'))}
        ripple
        size="small"
        type="primary"
      >
        Log In
      </AwesomeButton>
    </Box>
  )
}

const mapDispatchToProps = ({ dispatch }) => ({ dispatch })

export default connect(mapDispatchToProps)(SignInButton)
