import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Login" component={LoginScreen} options={{
          headerTransparent: true,
          headerTitle: " "
        }}/>
        <MainStack.Screen name="Registration" component={RegistrationScreen} options={{
          headerTransparent: true,
          headerTitle: " "
        }}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
