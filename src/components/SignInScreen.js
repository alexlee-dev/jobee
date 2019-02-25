import React from 'react'
import { Box } from 'grommet'
import SignInButton from './SignInButton'
import Logo from './Logo'

const SignInScreen = () => {
  return (
    <Box align="center" background="#14213D" fill gap="xlarge" justify="center">
      <Box animation={{ type: 'fadeIn', duration: 3000 }} gap="xlarge">
        <Logo />
        <SignInButton />
      </Box>
    </Box>
  )
}

export default SignInScreen
