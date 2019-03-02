import React from 'react'
import { Box, Button } from 'grommet'
import { Checkmark, Clear } from 'grommet-icons'

const JobCardButtons = () => {
  return (
    <Box align="center" direction="row" gap="large" justify="center">
      <Button style={{ width: '50%' }}>
        <Box
          align="center"
          background="status-ok"
          fill="horizontal"
          justify="center"
          pad="medium"
          round="large"
        >
          <Checkmark color="white" />
        </Box>
      </Button>
      <Button style={{ width: '50%' }}>
        <Box
          align="center"
          background="status-critical"
          fill="horizontal"
          justify="center"
          pad="medium"
          round="large"
        >
          <Clear color="white" />
        </Box>
      </Button>
    </Box>
  )
}

export default JobCardButtons
