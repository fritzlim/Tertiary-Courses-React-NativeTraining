// Module 2: UI Components
// ScrollView

import React from 'react'
import {ScrollView,Text,} from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Image source={cat} style={{width:400,height:400}} /> 
        <Image source={dog} style={{width:400,height:400}} /> 
        <Image source={cat} style={{width:400,height:400}} />  
        <Image source={dog} style={{width:400,height:400}} /> 
        <Image source={cat} style={{width:400,height:400}} />  
        <Image source={dog} style={{width:400,height:400}} />
        <Image source={cat} style={{width:400,height:400}} />  
        <Image source={dog} style={{width:400,height:400}} />
        <Image source={cat} style={{width:400,height:400}} />  
        <Image source={dog} style={{width:400,height:400}} />
      </ScrollView>
    )
  }
}
