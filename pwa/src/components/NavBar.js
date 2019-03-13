import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Heading } from 'grommet'

export const NavBar = ({ app, firebase }) => {
  const { currentScreen } = app
  const screenName =
    currentScreen.charAt(0).toUpperCase() + currentScreen.slice(1)
  return (
    <Box
      align="center"
      direction="row"
      gap="medium"
      height="60px"
      justify="between"
      pad="large"
    >
      <Heading color="light-1" level="2" margin="none">
        {screenName}
      </Heading>
    </Box>
  )
}

NavBar.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ app, firebase }) => ({ app, firebase })

export default connect(mapStateToProps)(NavBar)
