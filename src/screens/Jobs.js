import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import JobCard from '../components/JobCard'

export const Jobs = ({ firebase }) => {
  const { jobs } = firebase.database
  const { data } = jobs[0]
  console.log({ jobs })
  return (
    <Box align="center" fill gap="medium" overflow="auto">
      <JobCard
        addressLocality={data.addressLocality}
        addressRegion={data.addressRegion}
        datePosted={data.datePosted}
        description={data.description}
        employmentType={data.employmentType}
        industry={data.industry}
        title={data.title}
      />
      {/* {jobs.map(job => {
        const { title } = job.data
        return <JobCard key={title} title={title} />
      })} */}
    </Box>
  )
}

Jobs.propTypes = {
  dispatch: PropTypes.func.isRequired,
  firebase: PropTypes.object.isRequired
}

const mapStateToProps = ({ firebase }) => ({ firebase })

export default connect(mapStateToProps)(Jobs)
