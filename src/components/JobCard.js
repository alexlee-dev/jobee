import React from 'react'
import { Box, Image, Text, Heading, Stack, Button } from 'grommet'
import moment from 'moment'
import { Checkmark, Clear } from 'grommet-icons'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'

export const JobCard = ({
  addressLocality,
  addressRegion,
  datePosted,
  description,
  employmentType,
  industry,
  title
}) => {
  return (
    <Box
      background="#ecf0f1"
      elevation="large"
      margin={{ top: 'medium' }}
      width="90%"
    >
      <Box height="200px">
        <Stack>
          <Box height="200px">
            <Image
              fit="cover"
              src="https://images.pexels.com/photos/432361/pexels-photo-432361.jpeg?auto=compress"
            />
          </Box>
          <Box
            align="center"
            background="dark-3"
            justify="center"
            margin="medium"
            round="medium"
            pad={{ horizontal: 'medium', vertical: 'small' }}
            width="95px"
          >
            <Text>{moment(datePosted).format('MMM Do')}</Text>
          </Box>
        </Stack>
      </Box>
      <Box pad="large">
        <Heading level="2" margin={{ top: 'none', bottom: 'small' }}>
          {title}
        </Heading>
        <Text>
          {addressLocality}, {addressRegion}
        </Text>
        <Text size="small">{industry}</Text>
        <Text size="small">{employmentType}</Text>
        <Button label="View Description" margin={{ top: 'large' }} plain />
        <Box align="center" direction="row" gap="medium" justify="center">
          <AwesomeButton type="primary">
            <Box>
              <Checkmark />
            </Box>
          </AwesomeButton>
          <AwesomeButton type="secondary">
            <Box>
              <Clear />
            </Box>
          </AwesomeButton>
        </Box>
      </Box>
    </Box>
  )
}

export default JobCard
