import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { setCurrentScreen } from '../redux/actions/app'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Please provide a longer name')
    .max(50, 'Please provide a shorter name')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Please provide a longer password')
    .max(50, 'Please provide a shorter password')
    .required('Required')
})

const SignUpScreen = ({ dispatch }) => {
  const handleBackPress = () => {
    dispatch(setCurrentScreen('signInScreen'))
  }

  return (
    <ScrollView contentContainerStyle={styles.outerContainer}>
      <View style={styles.backButtonContainer}>
        <Button
          icon={<Icon name="long-arrow-left" size={20} color="grey" />}
          onPress={handleBackPress}
          style={styles.backButton}
          type="clear"
        />
      </View>
      <View style={styles.copy}>
        <Text h1>Jobee</Text>
        <Text>Sign up to be a Jobee user.</Text>
      </View>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}
        onSubmit={values => console.log({ values })}
        validationSchema={SignupSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <View style={styles.innerContainer}>
            <Input
              containerStyle={styles.inputContainer}
              errorMessage={touched.name && errors.name}
              errorStyle={{ color: 'red' }}
              label="Name"
              onChangeText={handleChange('name')}
              placeholder="Name"
              value={values.name}
            />
            <Input
              containerStyle={styles.inputContainer}
              errorMessage={touched.email && errors.email}
              errorStyle={{ color: 'red' }}
              label="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Email"
              value={values.email}
            />
            <Input
              containerStyle={styles.inputContainer}
              errorMessage={touched.password && errors.password}
              errorStyle={{ color: 'red' }}
              label="Password"
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              placeholder="Password"
              secureTextEntry
              value={values.password}
            />
            <Button
              onPress={handleSubmit}
              style={styles.signUpButton}
              title="Sign Up"
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

SignUpScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapDispatchToProps = ({ dispatch }) => ({ dispatch })

export default connect(mapDispatchToProps)(SignUpScreen)

const styles = StyleSheet.create({
  backButton: {},
  backButtonContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    width: '100%'
  },
  outerContainer: {
    alignItems: 'center',
    // backgroundColor: '#14213D',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 25
  },
  innerContainer: {
    height: '100%',
    width: '100%'
  },
  copy: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 25
  },
  inputContainer: {
    marginVertical: 10
  },
  signUpButton: {
    marginTop: 15
  }
})
