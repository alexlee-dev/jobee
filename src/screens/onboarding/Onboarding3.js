import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'

const Onboarding1 = () => {
  return (
    <Box animation={{ type: 'fadeIn', duration: 3000 }}>
      <Heading>3rd thing</Heading>
      <Paragraph>
        Jobee helps you to narrow down your search to your favorite companies,
        keeping an eye on any updates to their job board.
      </Paragraph>
    </Box>
  )
}

export default Onboarding1
