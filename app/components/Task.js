import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Task = (props) => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.task }>{ props.task.text }</Text>
      <TouchableOpacity onPress={ () => props.handlePressRemove(props.task.key) }>
        <Ionicons
          name="md-trash"
          size={ 24 }
          color="black"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },

  task: {
    fontSize: 24
  }
})

export default Task
