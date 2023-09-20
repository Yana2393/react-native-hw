import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import bgPhoto from "../../assets/bgPhoto.jpg";
import RegisterButton from "../../Components/RegisterButton/RegisterButton";
import AddPhoto from "../../Components/AddPhoto/AddPhoto";
import { useState } from "react";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <ImageBackground style={styles.bgPhoto} resizeMode="cover" source={bgPhoto}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <AddPhoto></AddPhoto>
          <Text style={styles.Title}>Реєстрація</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              style={styles.inputEmaile}
              placeholder="Логін"
              value={name}
              onChangeText={setName}
            ></TextInput>
            <TextInput
              style={styles.inputEmaile}
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
            ></TextInput>
            <TextInput
              style={styles.inputPassword}
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
            ></TextInput>
            <Text
              style={styles.visiblePassword}
              onPress={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              {isVisiblePassword ? "Показати" : "Приховати"}
            </Text>
            <RegisterButton
              name={name}
              email={email}
              password={password}
            ></RegisterButton>
          </KeyboardAvoidingView>
          <View style={styles.account}>
            <Text style={{ color: "#1B4371", alignSelf: "center" }}>
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
      </TouchableWithoutFeedback>
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
    alignItems: "stretch",
    padding: 10,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    minHeight: "65%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  Title: {
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 32,
    marginTop: 32,
    alignSelf: "center",
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
    position: "relative",
  },
  visiblePassword: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: "400",
    position: "absolute",
    right: 16,
    top: 290 / 2 - 0,
  },
  registerButton: {
    color: "#1B4371",
  },
});

export default RegistrationScreen;
