import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Text, IconButton, MD3Colors, Button } from "react-native-paper";
import { Image } from "expo-image";
import { UserPosts } from "./userposts";

export interface IUserProps {}

export function User(props: IUserProps) {
  const postTabs: string[] = ["Post", "Saved"];
  const [active, setActive] = React.useState<string>("Post");

  return (
    <View style={{ flex: 1 }}>
      <UserPosts />
    </View>
  );
}
