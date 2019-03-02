import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Box, Button, Heading, Text } from 'grommet'
import JobCardButtons from './JobCardButtons'

const JobCardBody = ({
  datePosted,
  employmentType,
  finalTitle,
  industry,
  title
}) => {
  return (
    <Box pad="large">
      <Heading level="2" margin={{ top: 'none', bottom: 'small' }}>
        {finalTitle[0] || title}
      </Heading>
      {finalTitle && (
        <Heading level="3" margin={{ top: 'none', bottom: 'small' }}>
          {finalTitle[1]}
        </Heading>
      )}
      <Box margin={{ vertical: 'small' }}>
        <Text size="small">
          Posted on {moment(datePosted).format('MMM Do')}
        </Text>
      </Box>
      <Box margin={{ vertical: 'small' }}>
        <Text size="small">
          {industry} | {employmentType}
        </Text>
      </Box>

      <Button
        label="View Description"
        margin={{ bottom: 'medium', top: 'small' }}
        plain
        style={{ textDecoration: 'underline' }}
      />
      <JobCardButtons />
    </Box>
  )
}

JobCardBody.propTypes = {
  datePosted: PropTypes.string.isRequired,
  employmentType: PropTypes.string.isRequired,
  finalTitle: PropTypes.array,
  industry: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default JobCardBody
