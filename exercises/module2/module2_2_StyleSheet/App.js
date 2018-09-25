import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class App extends Component {
  render() {
    return(

    //Siple Styling
    <View>
        <Text style={{color:'red'}}>Welcome to Courses</Text>
    </View>

    // StyleSheet Component
    // <View>
    //     <Text style={styles.bigblue}>just
    // </View>

    // Exercise
    // <View>
    //   <Text style={styles.defaultText}>Apple</Text>
    //   <Text style={[styles.defaultText,styles.selectedText]}>Orange</Text>
    //   <Text style={styles.defaultText}> Banana</Text>
    // </View>

    // Fixed Dimension
    // <View>
    //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //   <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
    //   <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
    // </View>

    // Flex Dimension
    // <View style={{flex: 1}}>
    //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
    //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    // </View>
    )
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

// Exercise
// const styles = StyleSheet.create({
//   defaultText: {
//     fontSize: 22,
//     padding: 10,
//     margin: 5,
//     borderWidth: StyleSheet.hairlineWidth,
//     color: 'black'
//   },
//   selectedText: {
//     backgroundColor: 'yellow',
//     color: 'blue',
//     fontWeight: 'bold'
//   }
// })
