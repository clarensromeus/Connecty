import * as React from "react";
import { View, StyleSheet, Pressable, useWindowDimensions } from "react-native";
import { Text, IconButton, MD3Colors, Button } from "react-native-paper";
import { Image } from "expo-image";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import BlueCheck from "../home/blueCheck";

export interface IUserProps {}

export function ProfileInfo(props: IUserProps) {
  const { width } = useWindowDimensions();
  const postTabs: string[] = ["Posts", "Saved"];
  const [active, setActive] = React.useState<string>("Posts");

  const EDIT_POST_X = width - 110;

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Image
          style={styles.image}
          source="https://wallpapers.com/images/featured/beautiful-background-td7gsxerv3ecl20h.jpg"
          contentFit="cover"
          transition={1000}
        />
        <Button
          style={[styles.editButton, { left: EDIT_POST_X }]}
          icon="pen"
          mode="contained"
        >
          Edit
        </Button>
      </View>
      <View style={styles.userImage}>
        <Image
          style={styles.userProfile}
          source={require("../../../assets/images/shakira.jpeg")}
          contentFit="cover"
          transition={1000}
        />
        <View style={styles.camera}>
          <IconButton
            style={{ backgroundColor: "white", margin: 0, padding: 0 }}
            icon="camera"
            iconColor={MD3Colors.error50}
            size={22}
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
      <View style={styles.userInfo}>
        <View>
          <View>
            <View style={{ flex: 1, flexDirection: "row", gap: 2 }}>
              <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
                Shakira lamine
              </Text>
              <View style={{ marginTop: 7 }}>
                <BlueCheck />
              </View>
            </View>
            <Text style={{ color: "gray" }}>@shakiralamine045</Text>
          </View>
          <View style={{ marginTop: 12 }}>
            <Text style={{ color: "gray" }}>
              I'm a worldly famous woman singer
            </Text>
          </View>
        </View>
      </View>
      {/* user info */}
      <View style={styles.biology}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <EvilIcons name="location" size={24} color="black" />
          <Text>Port-aut-prine, Haiti</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginLeft: 5,
            marginTop: 2,
          }}
        >
          <Fontisto name="date" size={20} color="black" />
          <Text style={{ marginTop: 2 }}>Joined october 2023</Text>
        </View>
      </View>
      {/* followers */}
      <View style={styles.followWrapper}>
        <View style={styles.followersWrapper}>
          <Text style={{ fontWeight: "bold" }}>12</Text>
          <Text
            style={{
              fontFamily: "PlaywriteAr",
              marginTop: -7,
            }}
          >
            followers
          </Text>
        </View>
        <View style={styles.followingWrapper}>
          <Text style={{ fontWeight: "bold" }}>100</Text>
          <Text
            style={{
              fontFamily: "PlaywriteAr",
              marginTop: -7,
            }}
          >
            followings
          </Text>
        </View>
      </View>
      <View style={styles.post}>
        {postTabs.map((val, ind) => {
          return (
            <View
              style={[
                styles.postTitle,
                { borderBottomWidth: active === val ? 3 : 0 },
              ]}
            >
              <Pressable onPress={() => setActive(val)}>
                <Text
                  variant="labelLarge"
                  style={{ fontWeight: "bold", fontSize: 16 }}
                >
                  {val}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  frame: {
    flex: 1,
    height: 100,
  },
  image: {
    width: "100%",
    height: 100,
  },
  userImage: {
    position: "relative",
    top: -60,
    left: 40,
    width: 140,
    height: 140,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  camera: {
    position: "absolute",
    top: 80,
    left: 102,
    zIndex: 4,
  },
  userProfile: {
    width: 136,
    height: 136,
    borderRadius: 100,
    zIndex: 1,
  },
  userInfo: {
    marginHorizontal: 24,
    marginTop: -50,
    //width: 210,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  followWrapper: {
    flex: 1,
    marginTop: 15,
    flexDirection: "row",
    gap: 30,
    marginHorizontal: 21,
  },
  followersWrapper: {
    flexDirection: "row",
    gap: 4,
  },
  followingWrapper: {
    flexDirection: "row",
    gap: 4,
  },
  biology: {
    marginHorizontal: 18,
    marginTop: 15,
  },
  post: {
    //backgroundColor: "red",
    marginTop: -28,
    marginHorizontal: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#bdbdbd",
    borderBottomWidth: 1,
  },
  postTitle: {
    marginHorizontal: 12,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderBottomColor: "#4527a0",
    borderBottomWidth: 3,
  },
  editButton: {
    width: 94,
    position: "relative",
    //left: 280,
    zIndex: 2,
    top: 10,
  },
});
