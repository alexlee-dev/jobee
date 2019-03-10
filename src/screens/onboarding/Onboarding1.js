import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Heading, Paragraph, Image, FormField, Select } from 'grommet'

const Onboarding1 = ({ firebase }) => {
  const { companies } = firebase.database // * this is an array
  const companyNames = companies.map(({ id }) => id)
  return (
    <Box animation={{ type: 'fadeIn', duration: 3000 }}>
      <Box height="25%">
        <Image fit="contain" src="assets/svg/people-search.svg" />
      </Box>
      <Heading>Select a company to get started</Heading>
      <FormField
        component={Select}
        label="Company"
        name="company"
        options={companyNames}
        required
      />
      <Paragraph>You can always add or remove companies later.</Paragraph>
    </Box>
  )
}

Onboarding1.propTypes = {
  dispatch: PropTypes.func.isRequired,
  firebase: PropTypes.object.isRequired
}

const mapStateToProps = ({ firebase }) => ({ firebase })

export default connect(mapStateToProps)(Onboarding1)
