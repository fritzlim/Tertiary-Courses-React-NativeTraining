// Module 2: UI Components
// Button

import React from 'react'
import { Button } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <Button
        onPress={() => {
          Alert.alert('You tapped the button!');
        }}
        title="Press Me"
        />

    )
  }
}
