import * as React from "react";
import { Text, TextInput } from "react-native-paper";
import { View, StyleSheet, Button } from "react-native";
import { GlobalSearch } from "../components/search/globalSearch";

export interface IMessageProps {}

export default function SearchScreen(props: IMessageProps) {
  return <GlobalSearch />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
