import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import UserPhoto from "../../Components/UserPhoto/UserPhoto";
import LogoutBtn from "../../Components/LogoutBtn/LogoutBtn";
import AddSvg from "../../Components/AddSvg/AddSvg";
import UserSvg from "../../Components/UserSvg/UserSvg";
import PostSvg from "../../Components/PostSvg/PostSvg";

import { useNavigation } from "@react-navigation/native";

const PostsScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.wrapp}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <LogoutBtn style={{ marginRight: 16, marginTop: 8 }}></LogoutBtn>
      </View>
      <View style={styles.userCard}>
        <UserPhoto fill_color="#FF6C00" width={37}></UserPhoto>
        <View style={styles.userData}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <PostSvg onPress={() => navigation.navigate("PostsScreen")}></PostSvg>
        <TouchableOpacity style={styles.button}>
          <AddSvg fill={"white"} onPress={() => navigation.navigate("CreatePosts")}></AddSvg>
        </TouchableOpacity>
        <UserSvg onPress={() => navigation.navigate("Profile")}></UserSvg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapp: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 16,
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    flexDirection: "row",
    marginBottom: 32,
  },
  title: {
    flex: 1,
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
  userCard: {
    flexDirection: "row",
    padding: 16,
    paddingTop: 0,
  },
  userData: {
    justifyContent: "center",
  },
  userName: {
    color: "#212121",
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 8,
  },
  userEmail: {
    color: "#212121CC",
    fontSize: 11,
    fontWeight: "400",
    marginLeft: 8,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderTopColor: "#E8E8E8",
    borderTopWidth: 1,
    flexDirection: "row",
    gap: 31,
    paddingTop: 9,
    paddingBottom: 22,
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

export default PostsScreen;
