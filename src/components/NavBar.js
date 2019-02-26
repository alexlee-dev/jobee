import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Heading, Image } from 'grommet'
import { User } from 'grommet-icons'

const NavBar = ({ app, firebase }) => {
  const { currentScreen } = app
  const screenName =
    currentScreen.charAt(0).toUpperCase() + currentScreen.slice(1)
  const { photoURL } = firebase.user
  return (
    <Box
      align="center"
      background="light-2"
      direction="row"
      gap="medium"
      height="60px"
      justify="start"
      pad="medium"
    >
      {photoURL ? (
        <Box height="34px" round="full" width="34px">
          <Image
            fit="contain"
            src={photoURL}
            style={{ borderRadius: '100%' }}
          />
        </Box>
      ) : (
        <User />
      )}
      <Heading level="2" margin="none">
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
