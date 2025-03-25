import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "@/data/Colors";

const landing = () => {
  return (
    <View>
      <Image
        source={require("./../assets/images/login.png")}
        style={{
          width: "100%",
          height: 480,
        }}
      ></Image>
      <View
        style={{
          padding: 20,
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
        <View
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
            Gets Started
          </Text>
        </View>
                <Text
                style={{
                    fontSize:16,
                    textAlign: "center",
                    marginTop: 7,
                    color: Colors.GRAY,
                }}>Already have  an account? Sign In here</Text>
      </View>
    </View>
  );
};

export default landing;
