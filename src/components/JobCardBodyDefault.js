import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Heading, Text } from 'grommet'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JobCardActions from './JobCardActions'
import JobCardButtons from './JobCardButtons'

const JobCardBodyDefault = ({
  app,
  dispatch,
  documentId,
  finalTitle,
  title,
  datePosted,
  industry,
  employmentType,
  location
}) => {
  const { editMode } = app
  return (
    <Box style={{ padding: '24px 0 0 0' }}>
      <Box pad={{ horizontal: 'large' }}>
        <Heading
          color="#0d121c"
          level="2"
          margin={{ top: 'none', bottom: 'small' }}
        >
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
      <JobCardActions />

      {editMode && <JobCardButtons documentId={documentId} />}
    </Box>
  )
}

JobCardBodyDefault.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  documentId: PropTypes.string.isRequired,
  finalTitle: PropTypes.array,
  title: PropTypes.string.isRequired,
  datePosted: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  employmentType: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired
}

const mapStateToProps = ({ app }) => ({ app })

export default connect(mapStateToProps)(JobCardBodyDefault)
