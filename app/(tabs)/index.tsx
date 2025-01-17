import * as React from "react";
import { Text, TextInput } from "react-native-paper";
import { View, StyleSheet, Button } from "react-native";
import { Home } from "../components/home";

export interface IMessageProps {}

export default function HomeScreen(props: IMessageProps) {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
