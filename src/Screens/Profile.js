import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  MaterialIcons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.TopContainer}>
        <View style={styles.StarImg2}>
          <Text style={styles.logoTest}>My Profile</Text>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View>
          <Image
            style={styles.Image}
            source={require("../Components/images/profile.jpg")}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Nana Kwabena</Text>
          <Text style={styles.positionText}>Horrors</Text>
        </View>
      </View>
      <View style={styles.profileContainer1}>
        <Image
          style={styles.Image1}
          source={require("../Components/images/OIP24.jpg")}
        />
        <Image
          style={styles.Image1}
          source={require("../Components/images/R23.png")}
        />
      </View>
      <View style={styles.profileContainer2}>
        <Feather name="phone" size={20} color="gray" />
        <Text style={styles.numberText}> +233 (244) 910 550</Text>
      </View>
      <View style={styles.profileContainer2}>
        <Feather name="mail" size={20} color="gray" />
        <Text style={styles.numberText}>hndrxx@gmail.com</Text>
      </View>
      <View style={styles.profileContainer2}>
        <Ionicons name="location" size={30} color="gray" />
        <Text style={styles.numberText}>Tekwave Inc</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
  },
  profileContainer1: {
    flexDirection: "row",
    // width:100,
  },
  profileContainer2: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginVertical: 20,
    width: 300,
  },
  Image: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
    marginTop: 40,
    // alignSelf: "",
    borderRadius: 50,
  },
  Image1: {
    width: 40,
    height: 40,
    backgroundColor: "gray",
    marginLeft: 30,
    marginRight: 0,
    marginTop: 40,
    // alignSelf: "",
    borderRadius: 20,
  },
  infoContainer: {
    // width:70,
    justifyContent: "center",
    marginHorizontal: 0,
    //flexDirection:"row",
    marginTop: 70,
    //flex:4
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
    color: "gray",
  },
  icons: {
    flex: 1,
  },
  numberText: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
  positionText: {
    color: "white",
    fontSize: 20,
  },
  TopContainer: {
    flexDirection: "row",
    marginTop: -10,
    height: 200,
    width: "100%",
    backgroundColor: "#01796F",
    justifyContent: "center",
    alignItems: "center",
  },
  StarImg2: {
    marginTop: 2,
    fontSize: 25,
    //width:40,
    //height:40,
    // borderRadius:20,
    // backgroundColor:"white",
    alignSelf: "center",
    marginHorizontal: 10,
  },
  StarImg1: {
    marginTop: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    position: "relative",
    marginLeft: 60,
    // backgroundColor:"red"

    // alignItems:"flex-end",
  },
  logoTest: {
    fontSize: 25,
    color: "white",
  },
});
