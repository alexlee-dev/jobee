import React from 'react'
import { Box } from 'grommet'
import Spinner from './Spinner'

export const LoadingScreen = () => {
  return (
    <Box align="center" background="#14213D" fill justify="center">
      <Spinner />
    </Box>
  )
}

export default LoadingScreen
