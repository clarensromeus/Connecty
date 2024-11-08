import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { YourFriends } from "./yourFriends";
import { SuggestedFriends } from "./suggestedFriends";
import { FriendRequest } from "./friendRequest";

export interface IYourFriendsProps {}

export function Friends(props: IYourFriendsProps) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ gap: 0 }}>
        <SuggestedFriends />
        <YourFriends />
        <FriendRequest />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
