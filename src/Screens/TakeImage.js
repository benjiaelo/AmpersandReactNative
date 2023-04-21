import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
  
   // if (!permission) ... 
  
   // if (!permission.granted) ... 
  
    function toggleCameraType() {
      setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
  
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 380,
      backgroundColor: "white",
      marginTop: 1,
      alignSelf: "center",
      backgroundColor:"white",
      borderBottomWidth: 5,
  
      borderRadius: 20,
      borderBottomColor: "orange"
    },
    camera: {
        flex:4,
    //   width: 380,
    //   height: 200,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: 'center',
      marginVertical: 1
    },
    inputContainer: {
      marginVertical: 20,
      flexDirection: "row"
    },
    inputemail: {
      marginHorizontal: 15,
      marginVertical: 15,
      fontWeight: "bold",
      color:"gray",
      fontSize:18,
    },
    inputLfelid: {
      width: 300,
      borderWidth: 0,
     backgroundColor: "white",
      borderColor: "white",
      textAlign:"right"
    },
    inputpassword: {
      marginHorizontal: 15,
      marginVertical: 15,
      fontWeight: "bold",
      color:"gray",
      fontSize:18,
    },
    inputLfelidpassword: {
      width: 270,
      borderWidth: 0,
      backgroundColor: "white",
      textAlign:"right",
      secureTextEntry:"true",
      outlineStyle: 'none',
    },
    button: {
      backgroundColor: "#ff4d4d",
      width: 360,
      height: 60,
      alignSelf: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom:50,
      borderRadius: 5,
    },
    text:{
      textAlign:"center",
      fontSize:22,
      color:"white",
      fontWeight:"bold",
    },
    ForgotpasswordTextLine:{
      width:128,
      height:2,
      marginLeft:85,
      //marginHorizontal:50,
     //alignSelf:"center",
     backgroundColor:"#ff1a75",
    },
    ForgotpasswordText:{
      textAlign:"left",
      fontSize:18,
      color:"gray",
      marginLeft:10
    },
  });
  