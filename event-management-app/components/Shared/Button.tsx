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
                padding:10,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '600',
                  textAlign: "center",
                  color: Colors.WHITE,
                }}
              >
                {text}
              </Text>
              </TouchableOpacity>
  )
}