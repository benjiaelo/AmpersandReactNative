import React, { useState } from "react";
import { View } from "react-native";
import * as ExpoImagePicker from "expo-image-picker";
//import { TouchableOpacity } from 'react-native-gesture-handler';

const ImagePicker = () => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };
  return (
    <TouchableOpacity
      onPress={pickImage}
      style={styles.container}></TouchableOpacity>
  );
};
export default ImagePicker;
const styles = StyleSheet.create({
  container: {
    Width: 200,
    height: 200,
  },
});
