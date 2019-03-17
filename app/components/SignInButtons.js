import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import Button from 'react-native-button'
import { setCurrentScreen } from '../redux/actions/app'
// import { signInWithRedirect } from '../firebase/auth'

export const SignInButtons = ({ dispatch }) => {
  const handleSignUpPress = () => {
    dispatch(setCurrentScreen('signUpScreen'))
  }

  return (
    <View style={styles.container}>
      <Button
        containerStyle={styles.buttonSignUp}
        style={{ color: 'black' }}
        onPress={handleSignUpPress}
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

SignInButtons.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapDispatchToProps = ({ dispatch }) => ({ dispatch })

export default connect(mapDispatchToProps)(SignInButtons)

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
