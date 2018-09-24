import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'

import ColorButton from './components/ColorButton'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      backgroundColor: 'blue'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  render() {
    const { backgroundColor } = this.state
    return (
      <ScrollView style={[styles.container,{backgroundColor}]}>
        <ColorButton backgroundColor="red"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="blue"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="green"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="salon"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="#00FF00"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="rgb(255,0,255)"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="red"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="blue"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="green"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="salon"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="#00FF00"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="rgb(255,0,255)"
          onSelect={this.changeColor} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})