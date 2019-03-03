import React from 'react'
import { Box, Image } from 'grommet'

const JobCardHeader = () => {
  return (
    <Box height="125px">
      <Image
        className="round-top"
        fit="cover"
        src="https://images.pexels.com/photos/432361/pexels-photo-432361.jpeg?auto=compress"
      />
    </Box>
  )
}

export default JobCardHeader
