import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import bgPhoto from "../../assets/bgPhoto.jpg";
import AuthButton from "../../Components/AuthButton/AuthButton";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.bgPhoto} resizeMode="cover" source={bgPhoto}>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.Title}>Увійти</Text>
          <TextInput
            style={styles.inputEmaile}
            placeholder="Адреса електронної пошти"
          ></TextInput>
          <TextInput
            style={styles.inputPassword}
            placeholder="Пароль"
          ></TextInput>
          <AuthButton></AuthButton>

          <View style={styles.account}>
            <Text style={{ color: "#1B4371" }}>
              Немає акаунту?
              <Text
                style={{
                  marginLeft: 10,
                  color: "#1B4371",
                  textDecorationLine: "underline",
                }}
                onPress={() => navigation.navigate("Registration")}
              >
                {" "}
                Зареєструватись
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
  },
  container: {
    justifyContent: "flex-start",
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    minHeight: "60%",
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
    marginBottom: 33,
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

export default LoginScreen;
