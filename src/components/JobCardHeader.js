import React from 'react'
import PropTypes from 'prop-types'
import { Box, Image, Stack, Text } from 'grommet'

const JobCardHeader = ({ location }) => {
  return (
    <Box height="125px">
      <Stack>
        <Box height="125px">
          <Image
            className="round-top"
            fit="cover"
            src="https://images.pexels.com/photos/432361/pexels-photo-432361.jpeg?auto=compress"
          />
        </Box>
        <Text className="location-tag" color="white">
          {location}
        </Text>
      </Stack>
    </Box>
  )
}

JobCardHeader.propTypes = {
  location: PropTypes.string.isRequired
}

export default JobCardHeader
