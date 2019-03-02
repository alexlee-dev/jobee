import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import JobCard from '../components/JobCard'

export const Jobs = ({ firebase }) => {
  const { watchlist } = firebase.user.preferences
  const { data } = watchlist[0]
  return (
    <Box align="center" fill gap="medium" overflow="auto">
      <JobCard
        addressCountry={data.addressCountry}
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
