import * as React from "react";
import { View } from "react-native";
import { Post } from "./post";
import { WhoToFollows } from "./whoTofollows";

export interface IContentsProps {}

export function Contents(props: IContentsProps) {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      {/* all posts */}
      <Post />
    </View>
  );
}
