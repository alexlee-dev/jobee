import React from 'react'
import { Box, Image } from 'grommet'

const JobCardHeader = () => {
  return (
    <Box height="125px">
      <Image
        className="round-top"
        fit="cover"
        src="https://res.cloudinary.com/alexlee-dev/image/upload/q_auto:eco/v1552237813/portland-5.jpg"
      />
    </Box>
  )
}

export default JobCardHeader
