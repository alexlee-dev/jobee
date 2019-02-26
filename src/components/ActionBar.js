import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import { SettingsOption, Sort, User } from 'grommet-icons'
import ActionBarButton from './ActionBarButton'

const ActionBar = ({ app }) => {
  const { isLoading } = app
  return (
    <Box
      background="light-2"
      direction="row"
      height="50px"
      justify="between"
      pad="medium"
    >
      {!isLoading && (
        <React.Fragment>
          <ActionBarButton icon={Sort} screen="jobs" />
          <ActionBarButton icon={User} screen="user" />
          <ActionBarButton icon={SettingsOption} screen="settings" />
        </React.Fragment>
      )}
    </Box>
  )
}

ActionBar.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ app }) => ({ app })

export default connect(mapStateToProps)(ActionBar)
