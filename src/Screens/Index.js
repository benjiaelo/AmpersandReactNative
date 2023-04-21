import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Logo from "../Components/images/photo1.jpg";
import back from "../Components/images/back.jpg";

const Index = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={back} style={styles.img} />
      </View>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>
          KEEP INTOUCH WITH THE PEOPLE OF TEKWAVE INCORPORATION
        </Text>
        <Text style={styles.logoText2}>
          Sign in or Register with your email{" "}
        </Text>
      </View>
      <View style={styles.LoginRegisterContainer}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}>
            <Text style={styles.LetstartText}>REGISTER</Text>
          </TouchableOpacity>
          <View style={styles.LetstartText2}></View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}>
            <Text style={styles.LetstartText}>SIGN IN</Text>
          </TouchableOpacity>
          <View style={styles.LetstartText2}></View>
        </View>
      </View>
    </View>
  );
};

export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 380,
    marginTop: 38,
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: 0,
    borderBottomColor: "orange",
  },
  LetstartText2: {
    width: 70,
    height: 2,
    marginHorizontal: 50,
    justifyContent: "left",
    alignSelf: "left",
    backgroundColor: "red",
  },
  logoContainer: {
    width: 380,
    height: 280,
    marginBottom: 20,
  },
  logoText: {
                         //textAlign:"center",
    marginTop: 230,
    fontSize: 18,
    //fontWeight:"bold",
    fontWeight: "bold",
    justifyContent: "center",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: -5,
  },
  logoText2: {
    color: "#8c8c8c",
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
    marginLeft: -90,
  },
  LetstartText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    justifyContent: "center",
  },
  img: {
    width: 700,
    height: 600,
    alignSelf: "center",
    marginTop: -100,
  },
  LoginRegisterContainer: {
    marginTop: 140,
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
    marginBottom: 100,
    borderRadius: 20,
    marginLeft: -37,
  },
});
