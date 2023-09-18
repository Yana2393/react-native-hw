import {
  ImageBackground,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import defoltPhoto from "../../assets/defoltPhoto.png";

import AddBtnSvg from "../AddBtnSvg/AddBtnSvg";

const AddPhoto = () => {
  const { width: width_rec } = useWindowDimensions();

  const styles = StyleSheet.create({
    image_container: {
      position: "absolute",
      top: -100,
      left: width_rec / 2 - 60,
      borderRadius: 16,
    },
    addPhoto: {
      width: 120,
      height: 120,
      backgroundColor: "#F6F6F6",
      borderRadius: 62,
      marginLeft: "auto",
      marginRight: "auto",
    },
    addBtn: {
      position: "absolute",
      right: -5,
      bottom: 0,
      transform: [{ rotate: "45deg" }],
    },
  });

  return (
    <View style={styles.image_container}>
      <ImageBackground
        source={defoltPhoto}
        style={styles.addPhoto}
        resizeMode="cover"
      ></ImageBackground>
      <AddBtnSvg fill_color="#FF6C00" width={37} style={styles.addBtn} />
    </View>
  );
};

export default AddPhoto;
