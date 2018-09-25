// Module 3: Props and State
// Props

import React, { Component } from 'react';
import {Text,View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Ally' />
        <Welcome course='React Native Training' />
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }

//Exercise
// class Welcome extends Component {
//     render() {
//       return (
//         <Text>Welcome to {this.props.course}!</Text>
//       );
//     }
// }
