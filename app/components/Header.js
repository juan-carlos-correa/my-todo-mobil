import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

export default class header extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          placeholder="Next todo..."
          onChangeText={ this.props.onChange }
          onSubmitEditing={ this.props.handlePressSubmit }
          value={ this.props.text }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center'
  },

  text: {
    paddingHorizontal: 16,
    paddingVertical: 16
  }
})
