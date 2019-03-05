import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'

class Splash extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.replace(user ? 'Dashboard' : 'SignUp')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'black' }}>Splash</Text>
        <ActivityIndicator size="large" color="black" />
      </View>
    )
  }
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
