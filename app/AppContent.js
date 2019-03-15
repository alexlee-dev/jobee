import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { screens } from './constants'

const AppContent = ({ app, firebase }) => {
  const Screen = screens[app.currentScreen]
  return (
    <View style={styles.container}>
      <Screen />
    </View>
  )
}

AppContent.propTypes = {
  app: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  firebase: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

const mapStateToProps = ({ app, firebase }) => ({ app, firebase })

export default connect(mapStateToProps)(AppContent)
