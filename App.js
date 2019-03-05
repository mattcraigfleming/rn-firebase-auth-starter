import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import firebase from 'react-native-firebase'
import AppNavigator from './src/navigation/AppNavigator'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        loading: false,
        user
      })
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
