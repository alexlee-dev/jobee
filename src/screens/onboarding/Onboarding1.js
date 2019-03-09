import React from 'react'
import { Box, Heading, Paragraph, Image, FormField, Select } from 'grommet'

const Onboarding1 = () => {
  return (
    <Box animation={{ type: 'fadeIn', duration: 3000 }}>
      <Box height="25%">
        <Image fit="contain" src="assets/svg/people-search.svg" />
      </Box>
      <Heading>Select a company to get started</Heading>
      <FormField
        component={Select}
        label="Company"
        name="company"
        options={['one', 'two', 'three']}
        required
      />
      <Paragraph>You can always add or remove companies later.</Paragraph>
    </Box>
  )
}

export default Onboarding1
