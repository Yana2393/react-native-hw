import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import AddSvg from "../../Components/AddSvg/AddSvg";
import DeliteSvg from "../../Components/DeliteSvg/DeliteSvg";
import MapPinSvg from "../../Components/MapPinSvg/MapPinSvg";
import { useNavigation } from "@react-navigation/native";
import photoIcon from "../../assets/photoIcon.png";

const CreatePostsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapp}>
      <View style={styles.header}>
        <Text style={styles.title}>Створити публікацію</Text>
      </View>
      <View style={styles.imgCard}>
        <TouchableOpacity style={styles.imgDownload}>
          <ImageBackground
            source={photoIcon}
            style={styles.addPhoto}
            resizeMode="cover"
          ></ImageBackground>
        </TouchableOpacity>
        <Text style={styles.userName}>Завантажте фото</Text>
        <View style={styles.userData}>
          <TextInput style={styles.input} placeholder="Назва..."></TextInput>
          <TextInput
            style={styles.input}
            placeholder="   Місцевість..."
          ></TextInput>
          <MapPinSvg style={styles.mapPin}></MapPinSvg>
          <TouchableOpacity style={styles.AuthButton}>
            <Text
              style={{
                color: "#BDBDBD",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              Опубліковати
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <DeliteSvg></DeliteSvg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapp: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 27,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  title: {
    textAlign: "center",
    color: "#212121",
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: -0.408,
    fontSize: 17,
    marginTop: 24,
    marginBottom: 16,
    marginLeft: 16,
    alignSelf: "center",
  },
  imgDownload: {
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    width: "100%",
    height: 240,
    marginBottom: 8,
  },
  addPhoto: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 62,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  imgCard: {
      justifyContent: "center",
      alignContent: "center",
      padding: 16,
  },
  userData: {
    justifyContent: "center",
  },
  userName: {
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 32,
  },
  input: {
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "400",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    padding: 16,
  },
  mapPin:{
    position: "absolute",
    top: 79,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    gap: 31,
    paddingTop: 9,
    paddingBottom: 34,
  },
  button: {
    paddingBottom: 13,
    paddingTop: 13,
    paddingLeft: 28,
    paddingRight: 28,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
  AuthButton: {
    padding: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    width: "100%",
    marginBottom: 16,
    marginTop: 32,
  },
});

export default CreatePostsScreen;
