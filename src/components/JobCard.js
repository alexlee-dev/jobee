import React from 'react'
import { Box, Image, Text, Heading, Stack, Button } from 'grommet'
import moment from 'moment'
import { Checkmark, Clear } from 'grommet-icons'
import 'react-awesome-button/dist/styles.css'

export const JobCard = ({
  addressCountry,
  addressLocality,
  addressRegion,
  datePosted,
  description,
  employmentType,
  industry,
  title
}) => {
  let finalTitle = []
  if (title && title.includes(',')) finalTitle = title.split(',')
  let location
  if (addressLocality && addressRegion) {
    location = `${addressLocality}, ${addressRegion}`
  } else {
    location = addressCountry
  }
  
  return (
    <Box
      background="#ecf0f1"
      elevation="large"
      margin={{ top: 'medium' }}
      round="medium"
      style={{ maxHeight: '500px' }}
      width="80%"
    >
      <Box height="200px">
        <Stack>
          <Box height="200px">
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
      <Box pad="large">
        <Heading level="2" margin={{ top: 'none', bottom: 'small' }}>
          {finalTitle[0] || title}
        </Heading>
        {finalTitle && (
          <Heading level="3" margin={{ top: 'none', bottom: 'small' }}>
            {finalTitle[1]}
          </Heading>
        )}
        <Text size="small">
          Posted on {moment(datePosted).format('MMM Do')}
        </Text>
        <Text size="small">
          {industry} | {employmentType}
        </Text>
        <Button
          label="View Description"
          margin={{ bottom: 'medium', top: 'small' }}
          plain
        />
        <Box align="center" direction="row" gap="xlarge" justify="center">
          <Button>
            <Box background="status-ok" pad="medium" round="full">
              <Checkmark color="white" />
            </Box>
          </Button>
          <Button>
            <Box background="status-critical" pad="medium" round="full">
              <Clear color="white" />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default JobCard
