import React, { Component } from 'react'
import { Box, Button, Heading, Paragraph } from 'grommet'
import * as Sentry from '@sentry/browser'

class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
    })
  }

  render() {
    if (this.state.error) {
      //render fallback UI
      return (
        <Box
          align="center"
          background="#14213D"
          fill
          gap="xlarge"
          justify="center"
          pad="large"
        >
          <Heading>An error occured!</Heading>
          <Paragraph>
            You can help the developer by telling him your experience.
          </Paragraph>
          <Button
            label="Report feedback"
            onClick={Sentry.showReportDialog}
            primary
          />
          <Paragraph>Otherwise, please reload the application and try again.</Paragraph>
        </Box>
      )
    } else {
      //when there's not an error, render children untouched
      return this.props.children
    }
  }
}

export default ErrorBoundary
