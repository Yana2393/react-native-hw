import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { TouchableOpacity, StyleSheet, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PostsIcon from "../../Components/UserSvg/UserSvg";
import CreateIcon from "../../Components/AddSvg/AddSvg";
import InfoIcon from "../../Components/PostSvg/PostSvg";

const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("Login");
  };
  return (
    <View backgroundColor="white" height={"100%"} paddingTop={30}>
      <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 15,
        },
        headerStyle: {
            borderColor: "#BDBDBD",
            borderBottomWidth: 0.6,
          },
      }}
    >
      <Tab.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          tabBarLabel: "",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity style={styles.logOut} onPress={handleLogout}>
              <Ionicons name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => <InfoIcon />,
        }}
      />
      <Tab.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarLabel: "",
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CreatePosts")}>
              <CreateIcon fill={"white"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          headerTitleAlign: "center",
          headerShown: false,
          tabBarIcon: () => <PostsIcon />,
        }}
      />
    </Tab.Navigator>
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    padding: 16,
  },
  logOut: {
    marginRight: 10,
  },
  button: {
    paddingBottom: 13,
    paddingTop: 13,
    paddingLeft: 28,
    paddingRight: 28,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});
export default Home;
