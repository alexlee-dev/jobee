import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import { User } from 'grommet-icons'

const ActionBar = ({ app }) => {
  const { isLoading } = app
  return (
    <Box background="light-2" direction="row" height="50px" justify="between" pad="medium">
      {!isLoading && (
        <React.Fragment>
          <User />
          <User />
          <User />
          <User />
          <User />
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
