import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import JobCardHeader from './JobCardHeader'
import JobCardBody from './JobCardBody'

export class JobCard extends Component {
  static propTypes = {
    addressCountry: PropTypes.string,
    addressLocality: PropTypes.string,
    addressRegion: PropTypes.string,
    app: PropTypes.object.isRequired,
    datePosted: PropTypes.string,
    description: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    documentId: PropTypes.string,
    employmentType: PropTypes.string,
    industry: PropTypes.string,
    title: PropTypes.string
  }

  state = { editMode: false }

  render() {
    const { isDescriptionVisible } = this.props.app
    const { editMode } = this.state
    const {
      addressCountry,
      addressLocality,
      addressRegion,
      datePosted,
      description,
      documentId,
      employmentType,
      industry,
      title
    } = this.props
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
      <Box align="center" fill justify="start">
        <Box
          // background="#ecf0f1"
          background="#ffffff"
          elevation="large"
          round="medium"
          style={{ maxHeight: '450px' }}
          width="80%"
        >
          {!isDescriptionVisible && <JobCardHeader />}
          <JobCardBody
            datePosted={datePosted}
            description={description}
            documentId={documentId}
            editMode={editMode}
            employmentType={finalEmploymentType}
            finalTitle={finalTitle}
            industry={industry}
            location={location}
            title={title}
          />
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = ({ app }) => ({ app })

export default connect(mapStateToProps)(JobCard)

// export const JobCard = ({
//   addressCountry,
//   addressLocality,
//   addressRegion,
//   datePosted,
//   description,
//   documentId,
//   employmentType,
//   industry,
//   title
// }) => {
//   let finalEmploymentType = employmentType
//   if (!employmentType) finalEmploymentType = 'Inquire within'
//   let finalTitle = []
//   if (title && title.includes(',')) finalTitle = title.split(',')
//   let location
//   if (addressLocality && addressRegion) {
//     location = `${addressLocality}, ${addressRegion}`
//   } else {
//     location = addressCountry
//   }

//   return (
//     <Box
//       // background="#ecf0f1"
//       background="#ffffff"
//       elevation="large"
//       margin={{ top: 'medium' }}
//       round="medium"
//       style={{ maxHeight: '500px' }}
//       width="80%"
//     >
//       <JobCardHeader />
//       <JobCardBody
//         datePosted={datePosted}
//         documentId={documentId}
//         employmentType={finalEmploymentType}
//         finalTitle={finalTitle}
//         industry={industry}
//         location={location}
//         title={title}
//       />
//     </Box>
//   )
// }

// JobCard.propTypes = {
//   addressCountry: PropTypes.string,
//   addressLocality: PropTypes.string,
//   addressRegion: PropTypes.string,
//   datePosted: PropTypes.string,
//   description: PropTypes.string,
//   documentId: PropTypes.string,
//   employmentType: PropTypes.string,
//   industry: PropTypes.string,
//   title: PropTypes.string
// }

// export default JobCard
