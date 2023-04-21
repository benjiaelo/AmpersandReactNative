import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
//import { TextInput } from "react-native-paper";
import imgphoto from "../Components/images/user2.jpg";
import * as ExpoImagePicker from "expo-image-picker";

const RegisterScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setconPassword] = useState("");
  const [twitter, setTwitter] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  const handleSignUp = () => {};

  const RegisterScreen = async () => {
    // No permissions request is necessary for launching the image library
    // const [status, requestPermission] = ExpoImagePicker.useCameraPermissions();
    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.uri);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.addphotoContaianer}>
        <TouchableOpacity onPress={RegisterScreen}>
          {/* <Image source={imgphoto} style={styles.img}/> */}
          <Text style={styles.addphoto}>Profile Photo</Text>
          <Image source={{ uri: image }} style={styles.img} />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullname}
          onChangeText={(text) => setFullname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={conpassword}
          onChangeText={(text) => setconPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phoneNo}
          onChangeText={(text) => setPhoneNo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Twitter"
          value={twitter}
          onChangeText={(text) => setTwitter(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="LinkedIn"
          value={LinkedIn}
          onChangeText={(text) => setLinkedIn(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  img: {
    width: "100%",
    height: 300,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    //marginVertical:20,
    // tinColor:"orange"
  },

  addphoto: {
    textAlign: "center",
    // color: "#01796F",
    fontSize: 15,

    marginTop: 10,
  },
  addphotoContaianer: {
    marginBottom: 1,
    backgroundColor: "#eee",
  },
  card: {
    alignItems: "center",
    backgroundColor: "#eee",

    padding: 20,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderBottomColor: "#999",
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: "90%",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 5,
    padding: 10,
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
