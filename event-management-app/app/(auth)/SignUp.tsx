import { View, Text, Image } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Colors from '@/data/Colors';

export default function SignUp() {
  return (
    <View style={{
        // marginTop:60,
        padding:20,
    }}>
      <Text style={{
        fontSize:25,
        // textAlign: 'center',
        fontFamily:'bold',
        fontWeight:900,
      }}>Create New Account</Text>

`<View style={{
    display:'flex',
    alignItems: 'center',
}}>

      <Image source={require("./../../assets/images/image.png")} 
      style={{
        width:100,
        height:100,
        borderRadius:99,
        marginTop:20,
        
        alignItems: 'center',
        

      
      }}
      />
      <EvilIcons name="camera" size={24} color={Colors.PRIMARY} />
      </View>
    </View>
  )
}