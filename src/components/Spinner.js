import React from 'react'
import { BarLoader } from 'react-spinners'
import { Box } from 'grommet'

export const Spinner = () => {
  return (
    <Box align="center" fill justify="center">
      <BarLoader color="#fca311" />
    </Box>
  )
}

export default Spinner
