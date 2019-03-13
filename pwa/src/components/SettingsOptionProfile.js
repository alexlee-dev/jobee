import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Box, Image, Text } from 'grommet'
import { FormNext } from 'grommet-icons'

export const SettingsOptionProfile = ({ app, firebase }) => {
  const { displayName, email, photoURL } = firebase.user
  return (
    <Button hoverIndicator name="button" onClick={() => {}}>
      <Box
        align="center"
        border="bottom"
        direction="row"
        gap="small"
        pad="medium"
      >
        <Box align="center" justify="center" width="30%">
          <Box height="50px" round="full" width="50px">
            <Image
              fit="contain"
              src={photoURL}
              style={{ borderRadius: '100%' }}
            />
          </Box>
        </Box>
        <Box width="60%">
          <Text weight="bold">{displayName}</Text>
          <Text size="small" truncate>
            {email}
          </Text>
        </Box>
        <Box align="end" width="10%">
          <FormNext />
        </Box>
      </Box>
    </Button>
  )
}

SettingsOptionProfile.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  firebase: PropTypes.object.isRequired
}

const mapStateToProps = ({ app, firebase }) => ({ app, firebase })

export default connect(mapStateToProps)(SettingsOptionProfile)
