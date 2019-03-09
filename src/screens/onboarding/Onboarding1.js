import React from 'react'
import { Box, Heading, Paragraph, Image } from 'grommet'

const Onboarding1 = () => {
  return (
    <Box animation={{ type: 'fadeIn', duration: 3000 }}>
      <Box height="40%">
        <Image fit="contain" src="assets/svg/people-search.svg" />
      </Box>
      <Heading>Find A Job Where You'd Like To Work</Heading>
      <Paragraph>
        Jobee helps you to narrow down your search to your favorite companies,
        keeping an eye on any updates to their job board.
      </Paragraph>
    </Box>
  )
}

export default Onboarding1
