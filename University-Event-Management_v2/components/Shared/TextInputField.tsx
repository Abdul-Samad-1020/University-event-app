import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'

type TextInputFieldProp={
    label:String,
    onchangeText:(Text:string)=>void,
    password?: boolean,
}
const TextInputField = ({label,onchangeText,password=false}:TextInputFieldProp) => {
  return (
    <View style={{
        marginTop: 15,
    }}>
      <Text style={{color:Colors.GRAY}}>{label}</Text>
      <TextInput placeholder={label.toString()} 
      style={styles.textInput}
      secureTextEntry={password}
      onChangeText={onchangeText}/>
    </View>
  )
}

export default TextInputField
const styles = StyleSheet.create({
  textInput:{
    padding:15,
    borderWidth:0.3,
    borderRadius:5,
    fontSize:18,
    marginTop:5,
    
  }
})
