import React from 'react'

import {
  StyleSheet,
  AppRegistry,
  View,
  Text,
  StatusBar
} from 'react-native'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>Sierra</Text>
        <Text style={[styles.defaultText,styles.selectedText]}>
          Tanner
        </Text>
        <Text style={styles.defaultText}>Travis</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: '#DDD'
  },
  defaultText: {
    textAlign: 'center',
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black'
  },
  selectedText: {
    alignSelf: 'flex-end',
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  }
})

export default App