import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Text } from 'grommet'
import { FormNext } from 'grommet-icons'

const determineStyle = top => {
  if (top) {
    return { marginTop: '20px', width: '100%' }
  } else {
    return { width: '100%' }
  }
}

export const SettingsOption = ({
  comingSoon,
  handleClick,
  icon,
  label,
  top = false
}) => {
  const Icon = icon
  return (
    <Button
      hoverIndicator
      name="button"
      onClick={handleClick}
      style={determineStyle(top)}
    >
      <Box
        align="center"
        border="bottom"
        direction="row"
        gap="small"
        pad="medium"
      >
        <Box width="20%">
          <Icon />
        </Box>
        <Box direction="row" gap="small" width="70%">
          <Text size="small">{label}</Text>
          {comingSoon && <Text size="small">Coming soon!</Text>}
        </Box>
        <Box align="end" width="10%">
          <FormNext />
        </Box>
      </Box>
    </Button>
  )
}

SettingsOption.propTypes = {
  comingSoon: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default SettingsOption
