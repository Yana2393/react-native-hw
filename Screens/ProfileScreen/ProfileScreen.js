import {
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import bgPhoto from "../../assets/bgPhoto.jpg";
import AddPhoto from "../../Components/AddPhoto/AddPhoto";
import { useState } from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import LogoutBtn from "../../Components/LogoutBtn/LogoutBtn";
import AddSvg from "../../Components/AddSvg/AddSvg";
import UserSvg from "../../Components/UserSvg/UserSvg";
import PostSvg from "../../Components/PostSvg/PostSvg";
import LikeSvg from "../../Components/LikeSvg/LikeSvg";
import ComentsSvg from "../../Components/ComentsSvg/ComentsSvg";
import MapPinSvg from "../../Components/MapPinSvg/MapPinSvg";

const POSTS = [
  {
    image: img1,
    id: "45k6-j54k-4jth",
    title: "Ліс",
    comments: "8",
    likes: "153",
    location: "Ukraine",
  },
  {
    image: img2,
    id: "4116-jfk5-43rh",
    title: "Захід на Чорному морі",
    comments: "3",
    likes: "200",
    location: "Ukraine",
  },
  {
    image: img3,
    id: "4d16-5tt5-4j55",
    title: "Старий будиночок у Венеції",
    comments: "50",
    likes: "200",
    location: "Italy",
  },
];

function PostsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function CreatePosts() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState(POSTS);
  const Tabs = createBottomTabNavigator();

  return (
    <ImageBackground style={styles.bgPhoto} resizeMode="cover" source={bgPhoto}>
      <View style={styles.container}>
        <AddPhoto></AddPhoto>
        <LogoutBtn
          style={{ position: "absolute", right: 16, top: 22 }}
        ></LogoutBtn>
        <Text style={styles.title}>Natali Romanova</Text>
        <ScrollView style={{ flex: 1 }}>
          <SafeAreaView style={styles.listContainer}>
            {posts.map((post) => (
              <View key={post.id} style={styles.linkContainer}>
                <ImageBackground
                  source={post.image}
                  style={styles.image}
                  borderRadius={8}
                ></ImageBackground>
                <Text style={styles.titleTxt}>{post.title}</Text>
                <View style={styles.dataWrapp}>
                  <View style={styles.likeWrapp}>
                    <TouchableOpacity>
                      <ComentsSvg
                        fill={"#FF6C00"}
                        stroke={"#FF6C00"}
                        marginRight={8}
                        onPress={() => navigation.navigate("Comments")}
                      ></ComentsSvg>
                    </TouchableOpacity>
                    <Text style={styles.txt}>{post.comments}</Text>
                    <LikeSvg marginRight={8}></LikeSvg>
                    <Text style={styles.txt}>{post.likes}</Text>
                  </View>
                  <View style={styles.textWrapp}>
                    <MapPinSvg marginRight={4}></MapPinSvg>
                    <Text style={styles.locationTxt}>{post.location}</Text>
                  </View>
                </View>
              </View>
            ))}
          </SafeAreaView>
        </ScrollView>
      </View>
     
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  bgPhoto: {
    flex: 1,
    justifyContent: "flex-end",
    height: "auto",
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 16,
    paddingTop: 32,
    paddingBottom: 0,
    backgroundColor: "#FFFFFF",
    minHeight: "83%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
  },
  linkContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 32,
  },
  title: {
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 32,
    marginTop: 32,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 240,
  },
  dataWrapp: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeWrapp: {
    flexDirection: "row",
  },
  textWrapp: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  titleTxt: {
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 8,
  },
  txt: {
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    marginRight: 24,
  },
  locationTxt: {
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    textDecorationLine: "underline",
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
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});

export default ProfileScreen;
