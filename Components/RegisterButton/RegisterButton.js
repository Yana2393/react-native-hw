import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterButton = ({ name, email, password }) => {
    const navigation = useNavigation();
//     const onRegister = () => {
//     Alert.alert("Credentials", `${name} + ${email} + ${password}`);
//   };
  return (
    <TouchableOpacity style={styles.AuthButton} onPress={() => navigation.navigate("Home")}>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: 400,
        }}
      >
        Зареєстуватися
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  AuthButton: {
    padding: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    width: "100%",
    marginBottom: 16,
  },
});
export default RegisterButton;
