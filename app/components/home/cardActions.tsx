import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Text, IconButton, Icon } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export interface ICardActionsProps {}

interface Iactions {
  name: string;
  numb?: string;
  icon: JSX.Element;
}

export function CardActions(props: ICardActionsProps) {
  const actions: Iactions[] = [
    {
      name: "likeOrdislike",
      numb: "22.2k",
      icon: <EvilIcons name="heart" size={24} color="black" />,
    },
    {
      name: "retweet",
      numb: "2k",
      icon: <AntDesign name="retweet" size={24} color="black" />,
    },
    {
      name: "comment",
      numb: "50.5",
      icon: <EvilIcons name="comment" size={24} color="black" />,
    },
    {
      name: "bookmark",
      icon: <Ionicons name="bookmarks-outline" size={22} color="black" />,
    },
  ];

  return (
    <View style={styles.container}>
      {actions.map((value, index) => {
        return (
          <Pressable>
            <View style={styles.actions}>
              <View>{value.icon}</View>
              <View>
                <Text>{value.numb}</Text>
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
});
