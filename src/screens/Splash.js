import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

class Splash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'black' }}>Splash</Text>
        <ActivityIndicator size="large" />
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
