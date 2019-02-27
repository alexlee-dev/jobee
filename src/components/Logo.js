import React from 'react'
import { Image, Box } from 'grommet'

const Logo = () => {
  return (
    <Box align="center" height="100px" justify="center" width="300px">
      <Image fit="contain" src="assets/svg/title.svg" />
    </Box>
  )
}

export default Logo
