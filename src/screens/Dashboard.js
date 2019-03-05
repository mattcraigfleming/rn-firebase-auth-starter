import React from 'react'
import { StyleSheet, Button, Image, Text, View } from 'react-native'
import firebase from 'react-native-firebase'

export default class Dashboard extends React.Component {
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }
  signOutUser = async () => {
    const { navigate } = this.props.navigation
    try {
      await firebase.auth().signOut()
      navigate('Splash')
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>Hi 👋 {currentUser && currentUser.email}!</Text>
        <Button title="Sign Out" onPress={() => this.signOutUser()} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
