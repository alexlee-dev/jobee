import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import { SettingsOption, Sort, User } from 'grommet-icons'

const ActionBar = ({ app }) => {
  const { currentScreen, isLoading } = app
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
          <Sort color={currentScreen === 'jobs' && 'brand'} />
          <User color={currentScreen === 'user' && 'brand'} />
          <SettingsOption color={currentScreen === 'settings' && 'brand'} />
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
