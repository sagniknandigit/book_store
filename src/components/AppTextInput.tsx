import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const AppTextInput = ({value,onChangeText,placeholder,keyboardType,...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} keyboardType={keyboardType} {...otherProps}></TextInput>
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#EAF4EF',
    width:'100%',
    height:40,
    borderRadius:8,
    justifyContent:'center',
    paddingHorizontal:8,
    marginBottom:20
  }
})