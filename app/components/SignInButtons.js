import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from 'react-native-button'
// import { Box, Button, Text } from 'grommet'
// import { signInWithRedirect } from '../firebase/auth'

export const SignInButtons = ({ dispatch }) => {
  return (
    <View style={styles.container}>
      <Button
        containerStyle={styles.buttonContainer}
        style={{ color: 'black' }}
        onPress={() => console.log('pressed')}
      >
        Sign Up
      </Button>
      <Button
        containerStyle={styles.buttonContainer}
        style={{ color: 'black' }}
        onPress={() => console.log('pressed')}
      >
        Log In
      </Button>
    </View>
    // <Text>SIGNINBUTTONS</Text>
    // <Box>
    //   <Box gap="medium" fill="horizontal">
    //     <Button onClick={signInWithRedirect}>
    //       <Box
    //         align="center"
    //         background="light-1"
    //         fill="horizontal"
    //         height="50px"
    //         justify="center"
    //         round="small"
    //       >
    //         <Text weight="bold">Sign Up</Text>
    //       </Box>
    //     </Button>
    //     <Button onClick={signInWithRedirect}>
    //       <Box
    //         align="center"
    //         background="neutral-3"
    //         fill="horizontal"
    //         height="50px"
    //         justify="center"
    //         round="small"
    //       >
    //         <Text weight="bold">Log In</Text>
    //       </Box>
    //     </Button>
    //   </Box>
    // </Box>
  )
}

export default SignInButtons

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    height: 50,
    width: '50%',
    margin: 10,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'white'
  }
})
