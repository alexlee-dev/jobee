import React from 'react'
import { Box, Text, Image } from 'grommet'
import SignInButtons from '../components/SignInButtons'
import Logo from '../components/Logo'
import { version } from '../../package.json'

export const SignIn = () => {
  return (
    <Box align="center" background="#14213D" fill gap="xlarge" justify="center">
      <Box animation={{ type: 'fadeIn', duration: 3000 }} gap="xlarge">
        <Logo />
        <SignInButtons />
      </Box>
      <Box direction="row" gap="xsmall">
        <Text size="small" weight="bold">
          Version:
        </Text>
        <Text size="small">{version}</Text>
        <Image src="https://api.netlify.com/api/v1/badges/81706173-76e4-4215-bf6f-517365c762cf/deploy-status" />
      </Box>
    </Box>
  )
}

export default SignIn
