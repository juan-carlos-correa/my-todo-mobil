import { AsyncStorage } from 'react-native'

export const setItem = (key, value) => {
  return AsyncStorage.setItem(key, JSON.stringify(value))
    .then(() => true)
    .catch(e => console.log(e))
}

export const getItem = key => {
  return AsyncStorage.getItem(key)
    .then(val => JSON.parse(val) || [])
    .catch(e => '')
}
