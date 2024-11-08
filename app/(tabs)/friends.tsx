import * as React from "react";
import { Text, TextInput } from "react-native-paper";
import { View, StyleSheet, Button } from "react-native";
import { Friends } from "../components/friends/container";

export interface IMessageProps {}

export default function FriendScreen(props: IMessageProps) {
  return <Friends />;
}
