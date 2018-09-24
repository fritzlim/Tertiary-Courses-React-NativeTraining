import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.defaultText}>Apple</Text>
        <Text style={[styles.defaultText,styles.selectedText]}>Orange</Text>
        <Text style={styles.defaultText}>Banana</Text>
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
