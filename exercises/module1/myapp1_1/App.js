import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Tertiary Courses</Text>
      </View>

      // <View
      //   style={{
      //     flexDirection: 'row',
      //     height: 100,
      //     padding: 20,
      //     }}>
      // <   View style={{backgroundColor: 'blue', flex: 0.3}} />
      //     <View style={{backgroundColor: 'red', flex: 0.5}} />
      //     <Text>Welcome to Tertiary Courses</Text>
      // </View>

      
    );
  }
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
