// Module 2: UI Components
// Image

import React from 'react'
import {Dimensions,Image,StyleSheet,View,Text} from 'react-native'
import cat from './assets/cat.jpg'
import dog from './assets/dog.jpg'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        //Static images
        <Image source={dog} style={styles.pic} /> 
        <Image source={cat} style={styles.pic} /> 

        //Network images
        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 400, height: 400}} />

       //Exercise
        // <Image source={{url:'https://facebook.github.io/react/logo-og.png'}}
        // style={{width:400,height:400}}
        // />
        // <Image source={dog} style={styles.pic} /> 
        // <Image source={cat} style={styles.pic} /> 
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  pic: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  userName: {
    backgroundColor: 'rgba(0,0,0,.7)',
    fontSize: 30,
    padding: 10,
    color: 'white'
  }
})
