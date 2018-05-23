import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './app/components/Header'
import Body from './app/components/Body'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = { todos: [], text: '' }
  }

  handleTextChange = text => this.setState({ text })

  render () {
    return (
      <View style={styles.container}>
        <Header onChange={this.handleTextChange}/>
        <Text>{this.state.text}</Text>
        <Body />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
