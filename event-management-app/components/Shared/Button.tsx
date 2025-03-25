import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'

type ButtonPrpos={
  text: string,
  onPress: () => void;

}

export default function Button({text, onPress}:ButtonPrpos) {
  return (
    <TouchableOpacity
    onPress={onPress}
              style={{
                marginTop: 15,
                backgroundColor: Colors.PRIMARY,
    
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  color: Colors.WHITE,
                }}
              >
                {text}
              </Text>
              </TouchableOpacity>
  )
}