// Module 2: UI Components
// Image

import React from 'react'
import {Dimensions,Image,StyleSheet,View,Text} from 'react-native'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        //Static images
        <Image source={require('./assets/img1.png')} />

        //Network images
        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 400, height: 400}} />

       //Import images
        <Image style={styles.pic} source={img1}>
        </Image>
        <Image style={styles.pic} source={img2}>
        </Image>
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
