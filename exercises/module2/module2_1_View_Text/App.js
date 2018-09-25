// Module 2: UI Components
// View and Text 

import React, { Component } from 'react';
import {Text,View} from 'react-native';

export default class App extends Component {
  render() {
    return(
      <View>
        <Text>Welcome to Courses</Text>
      </View>

    // Exercise
    // <View>
    //   <Text style={{fontWeight: 'bold'}}>
    //       I am bold <Text style={{color: 'red'}}>and red</Text>
    // </Text>
    // </View>
    )
  }
}
