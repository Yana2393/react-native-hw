import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import img2 from "../../assets/img2.jpg";
import ArrowSvg from "../../Components/ArrowSvg/ArrowSvg";

const CommentsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapp}>
      <View style={styles.header}>
        <Text style={styles.title}>Коментарі</Text>
      </View>
      <View style={styles.imgCard}>
        <ImageBackground
          source={img2}
          style={styles.imgDownload}
          resizeMode="cover"
          borderRadius={8}
        ></ImageBackground>

        <ScrollView style={styles.commentsList}>
          <View style={styles.followerCommentsLink}>
            <View style={styles.followerImg}></View>
            <View style={styles.followerComment}>
              <Text style={styles.followerCommentTxt}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.followerCommentData}>
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View>

          <View style={styles.userCommentsLink}>
            <View style={styles.userImg}></View>
            <View style={styles.userComment}>
              <Text style={styles.userCommentTxt}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text style={styles.userCommentData}>
                09 червня, 2020 | 09:14
              </Text>
            </View>
          </View>
          <View style={styles.followerCommentsLink}>
            <View style={styles.followerImg}></View>
            <View style={styles.followerComment}>
              <Text style={styles.followerCommentTxt}>
                Thank you! That was very helpful!
              </Text>
              <Text style={styles.followerCommentData}>
                09 червня, 2020 | 09:20
              </Text>
            </View>
          </View>
          <View style={styles.userCommentsLink}>
            <View style={styles.userImg}></View>
            <View style={styles.userComment}>
              <Text style={styles.userCommentTxt}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text style={styles.userCommentData}>
                09 червня, 2020 | 09:14
              </Text>
            </View>
          </View>
          <View style={styles.followerCommentsLink}>
            <View style={styles.followerImg}></View>
            <View style={styles.followerComment}>
              <Text style={styles.followerCommentTxt}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.followerCommentData}>
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.commentInput}
            placeholder="Коментувати..."
          ></TextInput>
          <TouchableOpacity style={styles.arrowBtn}>
            <ArrowSvg></ArrowSvg>
          </TouchableOpacity>
        </KeyboardAvoidingView>
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
  commentsList: {
    paddingTop: 20,
    marginBottom: 255,
  },
  followerCommentsLink: {
    flexDirection: "row",
    paddingBottom: 16,
  },
  userCommentsLink: {
    flexDirection: "row-reverse",
    paddingBottom: 16,
  },
  followerImg: {
    width: 28,
    height: 28,
    backgroundColor: "#ACB3BF",
    borderRadius: 50,
    marginRight: 16,
  },
  userImg: {
    width: 28,
    height: 28,
    backgroundColor: "#ACB3BF",
    borderRadius: 50,
    marginLeft: 16,
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
  followerComment: {
    backgroundColor: "#F6F6F6",
    color: "#212121",
    fontSize: 13,
    fontWeight: "400",
    padding: 16,
    width: 300,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  userComment: {
    backgroundColor: "#F6F6F6",
    color: "#212121",
    fontSize: 13,
    fontWeight: "400",
    padding: 16,
    width: 300,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  userCommentTxt: {
    paddingBottom: 8,
  },
  followerCommentTxt: {
    paddingBottom: 8,
  },
  followerCommentData: {
    color: "#BDBDBD",
    fontSize: 10,
    fontWeight: "400",
    alignSelf: "flex-end",
  },
  userCommentData: {
    color: "#BDBDBD",
    fontSize: 10,
    fontWeight: "400",
    alignSelf: "flex-start",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    gap: 31,
    padding: 16,
    paddingTop: 9,
    paddingBottom: 16,
  },
  commentInput: {
    width: "100%",
    borderRadius: 50,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderColor: "#BDBDBD",
    padding: 16,
  },
  arrowBtn: {
    width: 34,
    height: 34,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    position: "absolute",
    top: 11,
    right: 8,
  },
});

export default CommentsScreen;