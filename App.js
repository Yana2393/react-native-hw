import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import Home from "./Screens/Home/Home";
import CommentsScreen from "./Screens/CommentsScreen/CommentsScreen";
import MapScreen from "./Screens/MapScreen/MapScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";

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
        }} />
        <MainStack.Screen name="Home" component={Home} options={{
          headerTransparent: true,
          headerTitle: " "
        }}/>
        <MainStack.Screen name="Profile" component={ProfileScreen} options={{
          headerTransparent: true,
          headerTitle: " "
        }} />
        <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} options={{
          headerTransparent: true,
          headerTitle: " "
        }} />
        <MainStack.Screen name="PostsScreen" component={PostsScreen} options={{
          headerTransparent: true,
          headerTitle: " "
        }} />
        <MainStack.Screen name="Comments" component={CommentsScreen} options={{
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
