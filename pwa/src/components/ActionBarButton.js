import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'grommet'
import { setCurrentScreen } from '../redux/actions/app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ActionBarButton = ({
  app,
  dispatch,
  fontAwesomeIcon,
  icon,
  screen
}) => {
  const { currentScreen } = app
  let Icon = icon
  const handleButtonClick = () => {
    dispatch(setCurrentScreen(screen))
  }
  return (
    <Button
      icon={
        fontAwesomeIcon ? (
          <FontAwesomeIcon
            color={currentScreen === screen ? '#fca311' : undefined}
            icon={icon}
          />
        ) : (
          <Icon color={currentScreen === screen && 'brand'} />
        )
      }
      onClick={handleButtonClick}
      style={{ padding: '0' }}
    />
  )
}

ActionBarButton.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  fontAwesomeIcon: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
  screen: PropTypes.string.isRequired
}

const mapStateToProps = ({ app }) => ({ app })

export default connect(mapStateToProps)(ActionBarButton)
