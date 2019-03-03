import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import JobCardBodyDefault from './JobCardBodyDefault'
import JobCardBodyDescription from './JobCardBodyDescription'

const JobCardBody = ({
  app,
  datePosted,
  description,
  dispatch,
  documentId,
  editMode,
  employmentType,
  finalTitle,
  industry,
  location,
  title
}) => {
  if (app.isDescriptionVisible) {
    return <JobCardBodyDescription description={description} />
  } else {
    return (
      <JobCardBodyDefault
        datePosted={datePosted}
        documentId={documentId}
        editMode={editMode}
        employmentType={employmentType}
        finalTitle={finalTitle}
        title={title}
        industry={industry}
        location={location}
      />
    )
  }
}

JobCardBody.propTypes = {
  app: PropTypes.object.isRequired,
  datePosted: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  documentId: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  employmentType: PropTypes.string.isRequired,
  finalTitle: PropTypes.array,
  industry: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string
}

const mapStateToProps = ({ app }) => ({ app })

export default connect(mapStateToProps)(JobCardBody)
