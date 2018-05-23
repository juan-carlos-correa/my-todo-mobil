import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Task extends React.Component {
  render () {
    return (
      <View style={ styles.container }>
        <Text style={ styles.task }>{this.props.task.text}</Text>
        <Ionicons
          name="md-trash"
          size={24}
          color="black"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },

  task: {
    fontSize: 24
  }
})
