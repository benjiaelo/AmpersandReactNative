import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const BQScanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("Profile");
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.contaQR}>
        <View style={styles.QRboder1}></View>
        <View style={styles.QRboder}></View>
      </View>
      <View style={styles.contaQR}>
        <View style={styles.QRboder3}></View>
        <View style={styles.QRboder2}></View>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.wantText}>Want to share your contact? </Text>
        </View>
        <View style={styles.scanContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BQScanner");
            }}>
            <Text style={styles.LetstartText}>Send QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BQScanner;

const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: 380,
    marginHorizontal: 20,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "black",
  },
  contaQR: {
    flex: 1,
    width: "100%",
    // height:"100%",
    // backgroundColor:"red",
    flexDirection: "row",
    alignItems: "center",
    //alignContent:"center",
    alignSelf: "center",
    marginTop: 120,
    justifyContent: "center",
  },
  layerTop: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 1,
    flexDirection: "row",
    borderColor: "white",
  },

  layerCenter1: {
    flex: 1,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
  },
  focused: {
    flex: 10,
  },
  layerRight: {
    flex: 1,

    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity,
    // borderRadius:20
  },
  QRboder: {
    height: 30,
    width: 30,
    borderColor: "white",
    borderBottomWidth: 0,
    borderWidth: 5,
    borderLeftWidth: 0,
    borderRadius: 5,
    marginHorizontal: 100,
  },
  QRboder1: {
    width: 30,
    borderColor: "white",
    height: 30,
    borderWidth: 5,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginHorizontal: 100,
    borderRadius: 5,
  },
  QRboder2: {
    height: 30,
    width: 30,
    borderColor: "white",

    borderWidth: 5,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    //borderBottomWidth:0,
    borderRadius: 5,
    marginHorizontal: 100,
  },
  QRboder3: {
    width: 30,
    borderColor: "white",
    height: 30,
    borderWidth: 5,
    borderTopWidth: 0,
    borderRightWidth: 0,
    // borderBottomWidth:0,
    marginHorizontal: 100,
    borderRadius: 5,
  },
  bottomContainer: {
    width: "100%",
    backgroundColor: "white",
    height: "15%",
    flexDirection: "row",
    borderColor: "black",
    borderTopWidth: 1,
    marginHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 90,
  },
  wantText: {
    marginTop: 36,
    // marginRight:40,
    marginHorizontal: 2,
    //color:"white",
  },
  scanContainer: {
    // flex:1,
    width: 150,
    height: 50,
    borderWidth: 1,
    marginTop: 20,
    justifyContent: "center",
    marginHorizontal: 10,
    borderColor: "#01796F",
  },
  LetstartText: {
    textAlign: "center",
    // alignSelf:"center",
    color: "#01796F",
    fontSize: 20,
    fontWeight: "bold",
    //marginHorizontal:10,
    //justifyContent: 'center',
  },
});
