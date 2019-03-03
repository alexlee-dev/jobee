import React from 'react'
import { Box, Button, Text } from 'grommet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const JobCardActions = () => {
  return (
    <Box
      align="center"
      direction="row"
      justify="between"
      margin={{ vertical: 'large' }}
      pad={{ horizontal: 'large' }}
    >
      <Button>
        <Box background="#5d94f7" pad="medium" round="medium">
          <Text color="white">Description</Text>
        </Box>
      </Button>
      <Button>
        <FontAwesomeIcon
          color="#c6cedf"
          icon={['far', 'ellipsis-h']}
          size="2x"
        />
      </Button>
    </Box>
  )
}

export default JobCardActions
