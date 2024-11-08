import * as React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Contents } from "./contents";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    // <View>
    <Contents />
    // </View>
  );
}
