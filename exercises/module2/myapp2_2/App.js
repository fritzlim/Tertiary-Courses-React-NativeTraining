import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black'
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  }
})


class App extends Component {
  render() {
    return(
    <View>
      <Text style={styles.defaultText}>Apple</Text>
      <Text style={[styles.defaultText,styles.selectedText]}>Orange</Text>
      <Text style={styles.defaultText}> Banana</Text>
    </View>
    )
  }
}

export default App