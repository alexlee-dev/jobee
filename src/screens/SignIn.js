import React from 'react'
import { Box } from 'grommet'
import SignInButtons from '../components/SignInButtons'
import Logo from '../components/Logo'

export const SignIn = () => {
  return (
    <Box align="center" background="#14213D" fill gap="xlarge" justify="center">
      <Box animation={{ type: 'fadeIn', duration: 3000 }} gap="xlarge">
        <Logo />
        <SignInButtons />
      </Box>
    </Box>
  )
}

export default SignIn
