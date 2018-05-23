import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './app/components/Header'
import Body from './app/components/Body'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = { todos: [], text: '' }
  }

  handleTextChange = text => this.setState({ text })

  addTodo = todo => this.setState({ todos: [...this.state.todos, todo]})

  removeText = () => this.setState({ text: '' })

  handlePressSubmit = () => {
    this.addTodo(this.state.text)
    this.removeText()
  }

  render () {
    return (
      <View style={styles.container}>
        <Header
          onChange={ this.handleTextChange }
          handlePressSubmit={ this.handlePressSubmit }
          text={ this.state.text }
        />
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
