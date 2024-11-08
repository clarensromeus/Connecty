import * as React from "react";
import { Text, TextInput } from "react-native-paper";
import { View, StyleSheet, Button } from "react-native";
import { User } from "../components/profile/user";

export interface IMessageProps {}

export default function ProfileScreen(props: IMessageProps) {
  return (
    <View style={styles.container}>
      <User />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
