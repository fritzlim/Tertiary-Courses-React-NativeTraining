// Module 3: Props and State
// Props

import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome/>
        <Greeting title="React Native Courses"/>
      </View>
    );
  }
}
class Greeting extends Component {
  render() {
    return (
        <Text style={styles.welcome}>Welcome to {this.props.title}</Text>
    );
  }
}

class Welcome extends Component {
  render() {
    return (
        <Text>Hello World</Text>
    );
  }
}

// Exercise
// class Welcome extends Component {
//   render() {
//     return (
//         <Text>Hello {this.props.name}</Text>
//     );
//   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
