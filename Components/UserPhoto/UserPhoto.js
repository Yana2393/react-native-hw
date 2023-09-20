import {
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import User from "../../assets/User.jpg";


const UserPhoto = () => {

  const styles = StyleSheet.create({
    image_container: {
      borderRadius: 16,
    },
    addPhoto: {
      width: 60,
      height: 60,
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
      marginLeft: "auto",
      marginRight: "auto",
    },
  });

  return (
    <View style={styles.image_container}>
      <ImageBackground
        source={User}
        style={styles.addPhoto}
        resizeMode="cover"
      ></ImageBackground>
    </View>
  );
};

export default UserPhoto;
