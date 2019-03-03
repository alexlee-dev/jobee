import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Button, Menu, Text } from 'grommet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setDescriptionVisibility, setEditMode } from '../redux/actions/app'

const JobCardActions = ({ app, dispatch }) => {
  const handleViewDescription = () => {
    dispatch(setDescriptionVisibility(true))
  }

  const handleEditMode = () => {
    dispatch(setEditMode(true))
  }

  const handleDefaultMode = () => {
    dispatch(setEditMode(false))
  }

  const editModeMenuOptions = [{ label: 'Exit Edit Mode', onClick: handleDefaultMode }]

  const defaultModeMenuOptions = [{ label: 'Edit Mode', onClick: handleEditMode }]

  const { editMode } = app

  return (
    <Box
      align="center"
      direction="row"
      justify="between"
      margin={{ vertical: 'large' }}
      pad={{ horizontal: 'large' }}
    >
      <Button onClick={handleViewDescription}>
        <Box background="#5d94f7" pad="medium" round="medium">
          <Text color="white">Description</Text>
        </Box>
      </Button>
      <Menu
        dropAlign={{ bottom: 'top', right: 'right' }}
        icon={
          <FontAwesomeIcon
            color="#c6cedf"
            icon={['far', 'ellipsis-v']}
            size="2x"
          />
        }
        items={editMode ? editModeMenuOptions : defaultModeMenuOptions}
      />
    </Box>
  )
}

JobCardActions.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ app }) => ({ app })

export default connect(mapStateToProps)(JobCardActions)
