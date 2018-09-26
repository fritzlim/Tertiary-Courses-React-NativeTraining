// Module 2: UI Components
// Platform

import React, { Component } from 'react';
import { Text, TextInput, StyleSheet,View, Platform } from 'react-native';

const greeting = Platform.select({
  ios: 'Welcome to Courses iOS Store',
  android:
    'Welcome to Courses Android Store',
});

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>{greeting}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
});
