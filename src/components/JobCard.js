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
  documentId,
  employmentType,
  industry,
  title
}) => {
  let finalEmploymentType = employmentType
  if (!employmentType) finalEmploymentType = 'Inquire within'
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
      <JobCardHeader />
      <JobCardBody
        datePosted={datePosted}
        documentId={documentId}
        employmentType={finalEmploymentType}
        finalTitle={finalTitle}
        industry={industry}
        location={location}
        title={title}
      />
    </Box>
  )
}

JobCard.propTypes = {
  addressCountry: PropTypes.string,
  addressLocality: PropTypes.string,
  addressRegion: PropTypes.string,
  datePosted: PropTypes.string,
  description: PropTypes.string,
  documentId: PropTypes.string,
  employmentType: PropTypes.string,
  industry: PropTypes.string,
  title: PropTypes.string
}

export default JobCard
