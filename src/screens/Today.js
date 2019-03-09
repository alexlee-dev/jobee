import React from 'react'
import { Box, Heading, Text } from 'grommet'

const Today = () => {
  return (
    <Box align="center" fill justify="start">
      <Box
        background="#ffffff"
        elevation="large"
        pad="medium"
        round="medium"
        style={{ maxHeight: '450px' }}
        width="80%"
      >
        <Heading level="2">Nothing to see here!</Heading>
        <Text>Come back tomorrow to see the newest updates.</Text>
      </Box>
    </Box>
  )
}

export default Today
