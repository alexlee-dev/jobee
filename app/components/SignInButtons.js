import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from 'react-native-button'
// import { signInWithRedirect } from '../firebase/auth'

export const SignInButtons = ({ dispatch }) => {
  return (
    <View style={styles.container}>
      <Button
        containerStyle={styles.buttonSignUp}
        style={{ color: 'black' }}
        onPress={() => console.log('pressed')}
      >
        Sign Up
      </Button>
      <Button
        containerStyle={styles.buttonLogIn}
        style={{ color: 'white' }}
        onPress={() => console.log('pressed')}
      >
        Log In
      </Button>
    </View>
  )
}

export default SignInButtons

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
    width: '100%'
  },
  buttonLogIn: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    height: 50,
    margin: 10,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#00739d'
  },
  buttonSignUp: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    height: 50,
    margin: 10,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'white'
  }
})
