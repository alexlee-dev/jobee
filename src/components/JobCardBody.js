import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Box, Button, Heading, Text } from 'grommet'
import JobCardButtons from './JobCardButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const JobCardBody = ({
  datePosted,
  documentId,
  employmentType,
  finalTitle,
  industry,
  location,
  title
}) => {
  return (
    <Box style={{ padding: '24px 0 0 0' }}>
      <Box pad={{ horizontal: 'large' }}>
        <Heading level="2" margin={{ top: 'none', bottom: 'small' }}>
          {finalTitle[0] || title}
        </Heading>
        {finalTitle && (
          <Heading level="3" margin={{ top: 'none', bottom: 'small' }}>
            {finalTitle[1]}
          </Heading>
        )}
      </Box>
      <Box
        align="center"
        direction="row"
        gap="small"
        justify="start"
        pad={{ horizontal: 'large' }}
      >
        {/* <Location color="brand"  /> */}
        <FontAwesomeIcon color="purple" icon={['far', 'map-marker-alt']} />
        <Heading level="4" margin="none">
          {location}
        </Heading>
      </Box>

      <Box margin={{ vertical: 'small' }} pad={{ horizontal: 'large' }}>
        <Text size="small">
          Posted on {moment(datePosted).format('MMM Do')}
        </Text>
      </Box>
      <Box margin={{ vertical: 'small' }} pad={{ horizontal: 'large' }}>
        <Text size="small">
          {industry} | {employmentType}
        </Text>
      </Box>

      <Box pad={{ horizontal: 'large' }}>
        <Button
          label="View Description"
          margin={{ bottom: 'medium', top: 'small' }}
          plain
          style={{ textDecoration: 'underline' }}
        />
      </Box>

      <JobCardButtons documentId={documentId} />
    </Box>
  )
}

JobCardBody.propTypes = {
  datePosted: PropTypes.string.isRequired,
  documentId: PropTypes.string.isRequired,
  employmentType: PropTypes.string.isRequired,
  finalTitle: PropTypes.array,
  industry: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default JobCardBody
