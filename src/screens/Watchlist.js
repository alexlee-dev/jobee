import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import JobCard from '../components/JobCard'

export const Watchlist = ({ firebase }) => {
  const { watchlist, watchlistIndex } = firebase.user.preferences
  const { jobs } = firebase.database
  const id = watchlist[watchlistIndex]
  const { data } = jobs.find(obj => obj.id === id)
  return (
    <Box align="center" fill gap="medium" overflow="auto">
      <JobCard
        addressCountry={data.addressCountry}
        addressLocality={data.addressLocality}
        addressRegion={data.addressRegion}
        datePosted={data.datePosted}
        description={data.description}
        documentId={id}
        employmentType={data.employmentType}
        industry={data.industry}
        title={data.title}
      />
    </Box>
  )
}

Watchlist.propTypes = {
  dispatch: PropTypes.func.isRequired,
  firebase: PropTypes.object.isRequired
}

const mapStateToProps = ({ firebase }) => ({ firebase })

export default connect(mapStateToProps)(Watchlist)
