import React from 'react'
import { Box, Heading, Image, Paragraph } from 'grommet'

const Onboarding1 = () => {
  return (
    <Box animation={{ type: 'fadeIn', duration: 3000 }}>
      <Box height="40%">
        <Image fit="contain" src="assets/svg/notify.svg" />
      </Box>
      <Heading>Important Notifications</Heading>
      <Paragraph>
        Stay in-the-know with updates on your favorite job postings.
      </Paragraph>
    </Box>
  )
}

export default Onboarding1
