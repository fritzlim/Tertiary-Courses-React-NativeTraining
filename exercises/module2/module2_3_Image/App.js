// Module 2: UI Components
// Image

import React from 'react'
import {Dimensions,Image,StyleSheet,View,Text} from 'react-native'
import cat from './assets/cat.jpg'
import dog from './assets/dog.jpg'

export default class App extends React.Component {
  render() {
    return (
      <View>

        //Static images - direct methohd
        <Image source={require('./cat.jpg')} style={{width:400,height:400}} /> 
        <Image source={require('./dog.jpg')} style={{width:400,height:400}} /> 

        //Static images - import methohd 

        <Image source={dog} style={{width:400,height:400}} /> 
        <Image source={cat} style={{width:400,height:400}} /> 

        //Dimension

        <Image source={dog} style={styles.pic}/> 
        <Image source={cat} style={{styles.pic} /> 

        //Network images - require width and hieghh
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
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
})
