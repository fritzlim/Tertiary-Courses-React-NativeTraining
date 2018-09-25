import React, { Component } from 'react';
import {Text,View} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Ally' />
        <Greeting name='Belinda' />
        <Greeting name='Jan' />
      </View>
    );
  }
}
