import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Logo from '../components/Logo'
import SignInButtons from '../components/SignInButtons'
import { version } from '../package.json'

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <SignInButtons />
      <Text style={styles.versionTag}>v{version}</Text>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#14213D',
    flex: 1,
    justifyContent: 'center'
  },
  versionTag: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
