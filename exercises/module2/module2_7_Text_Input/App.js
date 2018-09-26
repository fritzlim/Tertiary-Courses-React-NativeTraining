import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding:40}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type your name here!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          Hello, {this.state.text}
        </Text>
      </View>
    );
  }
}