import React from 'react'
import { Box, Text } from 'grommet'

const JobCard = ({ title }) => {
  console.log(`in <JobCard />: ${title}`)
  return (
    <Box elevation="medium" pad="large" round="medium" width="90%">
      <Text>{title}</Text>
    </Box>
  )
}

export default JobCard
