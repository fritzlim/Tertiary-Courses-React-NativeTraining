// Module 2: UI Components
// Button

import React, { Component } from 'react';
import { Button, Alert} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={()=>{Alert.alert('Hello!')}} title = "Press Me" color = "red"/>
      </View>

    )
  }
}
