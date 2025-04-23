import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/data/Colors";
import Button from "@/components/Shared/Button";
import { useRouter } from "expo-router";

const landing = () => {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/login.png")}
        style={{
          width: "100%",
          height: 450,
          
        }}
      ></Image>
      <View
        style={{
          // borderTopRightRadius:20,
          padding:20,
          marginTop:0,
          height: 450,
         
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
          }}
        >
          Wellcome to NUML University
        </Text>
        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
            marginTop: 10,
            color: Colors.GRAY,
          }}
        >
          your University news, updated in your pokets, join the society which
          ever you want & get notify for Upcomming events
        </Text>
        <Button text="Get started"
         onPress={()=> router.push('/(auth)/SignIn')}/>   
              
              
              <TouchableOpacity onPress={()=>{
                router.push('/(auth)/SignIn');
              }}>
                <Text
                style={{
                    fontSize:16,
                    textAlign: "center",
                    marginTop: 7,
                    color: Colors.GRAY,
                  }}>Already have  an account? Sign In here</Text>
                </TouchableOpacity>
      </View>
    </View>
  );
};

export default landing;
