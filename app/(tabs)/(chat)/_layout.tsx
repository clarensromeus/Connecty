import * as React from "react";
import { Stack } from "expo-router";
import { View, StyleSheet, Pressable, TouchableHighlight } from "react-native";
import { Text, Avatar, TextInput } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

export default function ChatLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          //statusBarAnimation,
          //statusBarColor
          //statusBarStyle
          //statusBarHidden
          title: "Chats",
          header: () => {
            return (
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 15,
                  paddingBottom: 16,
                  backgroundColor: "white",
                }}
              >
                <View style={{ flex: 1, gap: 4 }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                      Chats
                    </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                      (9)
                    </Text>
                  </View>
                  <View>
                    <TextInput
                      mode="outlined"
                      placeholder="Search..."
                      placeholderTextColor="#9e9e9e"
                      outlineStyle={{
                        borderRadius: 30,
                        backgroundColor: "#eeeeee",
                        borderWidth: 0,
                      }}
                      left={<TextInput.Icon color="#9e9e9e" icon="magnify" />}
                      style={{
                        height: 38,
                      }}
                    />
                  </View>
                </View>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: () => {
            return (
              <View style={styles.titleWrapper}>
                <View>
                  <Avatar.Image
                    size={40}
                    source={require("../../../assets/images/shakira.jpeg")}
                  />
                </View>
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 19 }}>
                    J. eminem
                  </Text>
                  <Text style={{ color: "purple", fontSize: 12 }}>online</Text>
                </View>
              </View>
            );
          },
          headerRight: () => {
            return (
              <View style={{ marginRight: 15, flexDirection: "row", gap: 8 }}>
                <TouchableHighlight
                  onPress={() => alert("let's video call her now")}
                >
                  <Feather name="video" size={24} color="#616161" />
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => alert("let's call her today")}
                >
                  <Feather name="phone-call" size={24} color="#616161" />
                </TouchableHighlight>
              </View>
            );
          },
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  titleWrapper: {
    position: "relative",
    right: 22,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
});
