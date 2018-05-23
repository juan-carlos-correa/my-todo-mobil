import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Task from './Task'

export default class Body extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={ this.props.todos }
          renderItem={ ({ item }) => <Task task={ item } handlePressRemove={ this.props.removeTodo }></Task> }
          keyExtractor={ (item, index) => index.toString() }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#eceff1'
  }
})
