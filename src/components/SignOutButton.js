import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import 'react-awesome-button/dist/styles.css'
import { AwesomeButton } from 'react-awesome-button'
import { Box } from 'grommet'
import { signOut } from '../firebase/auth';

const SignOutButton = ({ dispatch }) => {
  return (
    <Box align="center" justify="center">
      <AwesomeButton
        action={signOut}
        ripple
        size="small"
        type="secondary"
      >
        Sign Out
      </AwesomeButton>
    </Box>
  )
}

SignOutButton.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapDispatchToProps = ({ dispatch }) => ({ dispatch })

export default connect(mapDispatchToProps)(SignOutButton)
