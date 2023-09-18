import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import bgPhoto from "../../assets/bgPhoto.jpg";
import RegisterButton from "../../Components/RegisterButton/RegisterButton";
import AddPhoto from "../../Components/AddPhoto/AddPhoto";

const RegistrationScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.bgPhoto} resizeMode="cover" source={bgPhoto}>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <AddPhoto></AddPhoto>
          <Text style={styles.Title}>Реєстрація</Text>
          <TextInput style={styles.inputEmaile} placeholder="Логін"></TextInput>
          <TextInput
            style={styles.inputEmaile}
            placeholder="Адреса електронної пошти"
          ></TextInput>
          <TextInput
            style={styles.inputPassword}
            placeholder="Пароль"
          ></TextInput>
          <RegisterButton></RegisterButton>
          <View style={styles.account}>
            <Text style={{ color: "#1B4371" }}>
              Вже є акаунт?{" "}
              <Text
                style={{
                  marginLeft: 10,
                  color: "#1B4371",
                  textDecorationLine: "underline",
                }}
                onPress={() => navigation.navigate("Login")}
              >
                Увійти
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  bgPhoto: {
    flex: 1,
    justifyContent: "flex-end",
    height: "100%",
  },
  container: {
    justifyContent: "flex-start",
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    minHeight: "70%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  Title: {
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 32,
    marginTop: 32,
  },
  inputEmaile: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    width: "100%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  inputPassword: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    width: "100%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 43,
  },
  registerButton: {
    color: "#1B4371",
  },
});

export default RegistrationScreen;
