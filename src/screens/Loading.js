import React from 'react'
import { Box } from 'grommet'
import Spinner from '../components/Spinner'

export const Loading = () => {
  return (
    <Box align="center" background="#14213D" fill justify="center">
      <Spinner />
    </Box>
  )
}

export default Loading
