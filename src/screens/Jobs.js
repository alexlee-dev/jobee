import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import JobCard from '../components/JobCard'

const Jobs = ({ firebase }) => {
  const { jobs } = firebase.database
  console.log({ jobs })
  return (
    <Box align="center" fill gap="medium" overflow="auto">
      {jobs.map(job => {
        const { title } = job.data
        console.log({ title })
        return <JobCard title={title} />
      })}
    </Box>
  )
}

Jobs.propTypes = {
  dispatch: PropTypes.func.isRequired,
  firebase: PropTypes.object.isRequired
}

const mapStateToProps = ({ firebase }) => ({ firebase })

export default connect(mapStateToProps)(Jobs)
