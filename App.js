import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './app/components/Header'
import Body from './app/components/Body'
import { setItem, getItem } from './app/utils/asyncStorage'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = { todos: [], text: '', isLoading: true }
  }

  handleTextChange = text => this.setState({ text })

  addTodo = async (todo) => {
    const todos = [...this.state.todos, todo]
    await setItem('myAppTodo@todos', todos)
    this.setState({ todos })
  }

  removeText = () => this.setState({ text: '' })

  handlePressSubmit = () => {
    this.addTodo({ text: this.state.text, key: this.state.todos.length })
    this.removeText()
  }

  removeTodo = async key => {
    let todos = this.state.todos.filter(todo => todo.key !== key)
    await setItem('myAppTodo@todos', todos)
    this.setState({ todos })
  }

  async componentDidMount () {
    const todos = await getItem('myAppTodo@todos')
    this.setState({ isLoading: false, todos })
  }

  render () {
    return (
      <View style={styles.container}>
        <Header
          onChange={ this.handleTextChange }
          handlePressSubmit={ this.handlePressSubmit }
          text={ this.state.text }
        />
        <Body todos={ this.state.todos } removeTodo={ this.removeTodo } />
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
