import React from 'react'
import { Box } from 'grommet'
import { signInWithRedirect } from '../firebase/auth'
import GoogleButton from 'react-google-button'

export const SignInButton = ({ dispatch }) => {
  return (
    <Box align="center" justify="center">
      <GoogleButton onClick={signInWithRedirect} type="light" />
    </Box>
  )
}

export default SignInButton
