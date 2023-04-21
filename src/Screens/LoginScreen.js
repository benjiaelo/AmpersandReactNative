import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import imgphoto from "../Components/images/Mphoto.jpg";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image source={imgphoto} style={styles.img} />

      <View style={styles.card}>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("QRGenerator");
          }}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 40, marginLeft: 97 }}>
          <Text style={styles.ForgotpasswordText}>
            Forgot Password? Reset Password
          </Text>
          <View style={styles.ForgotpasswordTextLine}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    backgroundColor: "#eee",
  },
  img: {
    width: "100%",
    height: 450,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  ForgotpasswordTextLine: {
    width: 128,
    height: 2,
    marginLeft: 120,
    backgroundColor: "#ff1a75",
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
    backgroundColor: "#eee",
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
