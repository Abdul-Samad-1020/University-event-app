import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Colors from "@/data/Colors";
import TextInputField from "@/components/Shared/TextInputField";
import Button from "@/components/Shared/Button";
import * as ImagePicker from "expo-image-picker";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/Configs/FireBaseConfig"; 
export default function SignUp() {
  // Create prpors for local storage
  const [ProfileImg, setProfileImg] = useState<string | undefined>();
  const [fullName, setFullName] = useState<string | undefined>();
  const [Email, setEmail] = useState<string | undefined>();
  const [password, setpassword] = useState<string | undefined>();

  //expo function image piker
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImg(result.assets[0].uri);
    }
  };
  const onbtnPress = () => {
    if (!Email || !password || !fullName) {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.BOTTOM);
      return;
    }
    // create account through firbase account
    createUserWithEmailAndPassword(auth, Email, password)
      .then(async (userCredentails) => {
        console.log(userCredentails);
        //59:00
        //upliad profile image
          
        //save to database
      })
      .catch((error) => {
        const errorMessage = error.message;
        ToastAndroid.show(errorMessage, ToastAndroid.BOTTOM);
      });
  };

  return (
    <View
      style={{
        // marginTop:60,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 25,
          paddingTop: 30,
          // textAlign: 'center',
          fontFamily: "bold",
          fontWeight: 900,
        }}
      >
        Create New Account
      </Text>
      `
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <View>
          <TouchableOpacity onPress={() => pickImage()}>
            {ProfileImg ? (
              <Image source={{ uri: ProfileImg }} style={styles.profileImg} />
            ) : (
              <Image
                source={require("./../../assets/images/image.png")}
                style={styles.profileImg}
              />
            )}

            <EvilIcons
              name="camera"
              size={24}
              color={Colors.PRIMARY}
              style={{
                position: "absolute",
                bottom: 2,
                right: 3,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TextInputField label="Full Name" onchangeText={(v) => setFullName(v)} />
      <TextInputField label="Univerdity Id" onchangeText={(v) => setEmail(v)} />
      <TextInputField
        label="Password"
        password={true}
        onchangeText={(v) => setpassword(v)}
      />
      <Button text="Create Account" onPress={() => onbtnPress()} />
    </View>
  );
}
const styles = StyleSheet.create({
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 99,
    marginTop: 20,

    alignItems: "center",
  },
});
