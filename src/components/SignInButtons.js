import React from 'react'
import { Box, Button, Text } from 'grommet'
import { signInWithRedirect } from '../firebase/auth'
// import GoogleButton from 'react-google-button'

export const SignInButtons = ({ dispatch }) => {
  return (
    <Box>
      <Box gap="medium" fill="horizontal">
        <Button onClick={signInWithRedirect}>
          <Box
            align="center"
            background="light-1"
            fill="horizontal"
            height="50px"
            justify="center"
            round="small"
          >
            <Text weight="bold">Sign Up</Text>
          </Box>
        </Button>
        <Button onClick={signInWithRedirect}>
          <Box
            align="center"
            background="neutral-3"
            fill="horizontal"
            height="50px"
            justify="center"
            round="small"
          >
            <Text weight="bold">Log In</Text>
          </Box>
        </Button>
      </Box>
    </Box>
  )
}

export default SignInButtons
