import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Input, Text } from 'react-native-elements'
// import { Formik } from 'formik'

class SignUpScreen extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    emailHasBeenEdited: false,
    passwordHasBeenEdited: false,
    confirmPasswordHasBeenEdited: false
  }

  handleChangeName = name => {
    this.setState({ name })
  }

  handleChangeEmail = email => {
    this.setState({ email })
  }

  handleEmailBlur = () => {
    this.setState({ emailHasBeenEdited: true })
  }

  handlePasswordBlur = () => {
    this.setState({ passwordHasBeenEdited: true })
  }

  handleConfirmPasswordBlur = () => {
    this.setState({ confirmPasswordHasBeenEdited: true })
  }

  handleChangePassword = password => {
    this.setState({ password })
  }

  handleChangeConfirmPassword = confirmPassword => {
    this.setState({ confirmPassword })
  }

  emailValidator = () => {
    const { email, emailHasBeenEdited } = this.state
    if (emailHasBeenEdited) {
      if (!email) {
        return 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return 'Please enter a valid email address'
      } else {
        return undefined
      }
    } else {
      return undefined
    }
  }

  passwordValidator = () => {
    const { password, passwordHasBeenEdited } = this.state

    if (passwordHasBeenEdited) {
      if (!password) {
        return 'Required'
      } else {
        return undefined
      }
    } else {
      return undefined
    }
  }

  confirmPasswordValidator = () => {
    const {
      confirmPasswordHasBeenEdited,
      confirmPassword,
      passwordHasBeenEdited,
      password
    } = this.state
    if (confirmPasswordHasBeenEdited && passwordHasBeenEdited) {
      if (!confirmPassword) {
        return 'Required'
      } else if (confirmPassword !== password) {
        return 'Passwords do not match'
      }
    } else {
      return undefined
    }
  }

  render() {
    const { name, email, password, confirmPassword } = this.state

    return (
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.copy}>
          <Text h1>Jobee</Text>
          <Text>Sign up to be a Jobee user.</Text>
        </View>
        <Input
          containerStyle={styles.inputContainer}
          errorStyle={{ color: 'red' }}
          label="Name"
          onChangeText={this.handleChangeName}
          placeholder="Name"
          value={name}
        />
        <Input
          containerStyle={styles.inputContainer}
          errorMessage={this.emailValidator()}
          errorStyle={{ color: 'red' }}
          label="Email"
          onChangeText={this.handleChangeEmail}
          onBlur={this.handleEmailBlur}
          placeholder="Email"
          value={email}
        />
        <Input
          containerStyle={styles.inputContainer}
          errorMessage={this.passwordValidator()}
          errorStyle={{ color: 'red' }}
          label="Password"
          onBlur={this.handlePasswordBlur}
          onChangeText={this.handleChangePassword}
          placeholder="Password"
          secureTextEntry
          value={password}
        />
        <Input
          containerStyle={styles.inputContainer}
          errorMessage={this.confirmPasswordValidator()}
          errorStyle={{ color: 'red' }}
          label="Confirm Password"
          onBlur={this.handleConfirmPasswordBlur}
          onChangeText={this.handleChangeConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
        />
      </ScrollView>
    )
  }
}

export default SignUpScreen

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: 'center',
    // backgroundColor: '#14213D',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 25
  },
  copy: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 25
  },
  inputContainer: {
    marginVertical: 10
  }
})
