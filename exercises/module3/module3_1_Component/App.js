// Module 3: Props and State
// Components

import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Greeting/>
      </View>
    );
  }
}
class Greeting extends Component {
  render() {
    return (
        <Text style={styles.welcome}>Welcome to Courses</Text>
    );
  }
}

//Exercise
// class Welcome extends Component {
//   render() {
//     return (
//         <Text>Hello World</Text>
//     );
//   }
// }

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
