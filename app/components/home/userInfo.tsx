import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import {
  Text,
  TextInput,
  Avatar,
  IconButton,
  MD3Colors,
  Button,
} from "react-native-paper";

export interface IuserInfoProps {}

export function UserInfo(props: IuserInfoProps) {
  const Feed: string[] = ["For you", "followings"];
  const [active, setActive] = React.useState("For you");

  return (
    <View>
      <View style={styles.FirsWrapper}>
        <View style={styles.Feed}>
          {Feed.map((data) => {
            return (
              <Pressable onPress={() => setActive(data)}>
                <View
                  style={[
                    styles.userFeed,
                    { borderBottomWidth: active === data ? 3 : 0 },
                  ]}
                >
                  <Text variant="headlineSmall">{data}</Text>
                </View>
              </Pressable>
            );
          })}
          {/* <View style={styles.followings}>
            <Text variant="headlineSmall">followings</Text>
          </View> */}
        </View>
      </View>
      <View style={styles.secondWrapper}>
        <View style={styles.WritePost}>
          <View>
            <Avatar.Image
              size={45}
              source={require("../../../assets/images/shakira.jpeg")}
            />
          </View>
          <View style={styles.postInfo}>
            <View style={styles.postInputWrapper}>
              <TextInput
                style={styles.postInput}
                mode="outlined"
                placeholder="What's on your mind..."
                autoCapitalize="words"
                outlineColor="#e0e0e0"
                outlineStyle={{ borderRadius: 25 }}
              />
            </View>
            <View style={styles.public}>
              <IconButton
                icon="earth"
                iconColor="#4527a0"
                size={20}
                onPress={() => console.log("Pressed")}
                style={{
                  margin: 0,
                  padding: 0,
                  width: 20,
                  height: 20,
                }}
              />
              <Text variant="labelMedium" style={{ color: "#4527a0" }}>
                Public view
              </Text>
            </View>
            <View style={styles.actions}>
              <View style={styles.actionIcons}>
                <IconButton
                  icon="image-area"
                  iconColor="#2e7d32"
                  size={20}
                  onPress={() => console.log("Pressed")}
                  style={{
                    marginHorizontal: 0,
                    paddingHorizontal: 0,
                    marginVertical: 0,
                    paddingVertical: 0,
                    height: 24,
                  }}
                />
                <IconButton
                  icon="emoticon-happy"
                  iconColor="#ff9800"
                  size={20}
                  onPress={() => console.log("Pressed")}
                  style={{
                    marginHorizontal: 0,
                    paddingHorizontal: 0,
                    marginVertical: 0,
                    paddingVertical: 0,
                    height: 24,
                  }}
                />
                <IconButton
                  icon="camera"
                  iconColor={MD3Colors.error50}
                  size={20}
                  onPress={() => console.log("Pressed")}
                  style={{
                    marginHorizontal: 0,
                    paddingHorizontal: 0,
                    marginVertical: 0,
                    paddingVertical: 0,
                    height: 24,
                  }}
                />
              </View>
              <View>
                <Button mode="contained">Post</Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FirsWrapper: { width: "100%" },
  Feed: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#bdbdbd",
    borderStyle: "solid",
    marginTop: 15,
  },
  userFeed: {
    paddingBottom: 6,
    borderBottomColor: "#4527a0",
    borderStyle: "solid",
    marginLeft: 15,
    marginRight: 13,
  },
  userFeedText: { fontWeight: "bold" },
  followings: { paddingBottom: 6, marginRight: 16 },
  followingsText: { fontWeight: "bold" },
  // second wrapper
  secondWrapper: { width: "100%", marginTop: "5%" },
  WritePost: {
    marginHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    gap: 14,
    borderStyle: "solid",
  },
  userImage: {},
  postInfo: { flexGrow: 1 },
  postInputWrapper: {
    borderStyle: "solid",
    paddingBottom: 7,
  },
  postInput: { backgroundColor: "#f5f5f5", color: "#4527a0" },
  actions: {
    marginTop: 14,
    paddingBottom: 18,
    marginHorizontal: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionIcons: { display: "flex", flexDirection: "row" },
  public: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginLeft: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#bdbdbd",
  },
});
