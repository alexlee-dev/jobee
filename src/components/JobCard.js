import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import JobCardHeader from './JobCardHeader'
import JobCardBody from './JobCardBody'

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
      <JobCardHeader location={location} />
      <JobCardBody
        datePosted={datePosted}
        employmentType={employmentType}
        finalTitle={finalTitle}
        industry={industry}
        title={title}
      />
    </Box>
  )
}

JobCard.propTypes = {
  addressCountry: PropTypes.string,
  addressLocality: PropTypes.string,
  addressRegion: PropTypes.string,
  datePosted: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  employmentType: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default JobCard
