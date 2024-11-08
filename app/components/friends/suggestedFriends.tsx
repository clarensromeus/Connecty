import * as React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { Image } from "expo-image";

export interface IYourFriendsProps {}

export function SuggestedFriends(props: IYourFriendsProps) {
  const { width } = useWindowDimensions();

  const ITEM_SIZE: number = (width + 30) / 2;

  return (
    <View style={styles.container}>
      <View style={styles.suggestion}>
        <View>
          <Text style={styles.suggestionTitle}>People you may know (12)</Text>
        </View>
        <View style={styles.suggestedFriendsWrapper}>
          <ScrollView contentContainerStyle={{ gap: 20 }} horizontal>
            {Array.from([1, 2, 3, 4, 5], (v, ind) => {
              return (
                <View key={ind} style={{ width: ITEM_SIZE }}>
                  <Card
                    style={{
                      shadowOffset: { width: 0, height: 0 },
                      borderColor: "#e0e0e0",
                      borderWidth: 1,
                    }}
                  >
                    <Card.Cover
                      source={{
                        uri: "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2023/10/17/737f015c-a9ef-4020-9df5-83a9bc70ff96_5ed13648.jpg?itok=akNoFjFy&v=1697537122",
                      }}
                    />
                    <Card.Actions
                      style={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                    >
                      <View style={styles.cardActionsWrapper}>
                        <Text style={{ fontWeight: "bold" }}>
                          romeus clarens
                        </Text>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "row",

                            marginVertical: 8,
                          }}
                        >
                          <View>
                            <Avatar.Image
                              size={17}
                              source={{
                                uri: "data:image/jpeg;base64,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",
                              }}
                            />
                          </View>
                          <View>
                            <Avatar.Image
                              size={17}
                              source={{
                                uri: "data:image/jpeg;base64,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",
                              }}
                            />
                          </View>
                        </View>
                        <View style={styles.buttonWrapper}>
                          <Button
                            buttonColor="#5e35b1"
                            style={{ borderRadius: 6 }}
                            mode="contained"
                          >
                            Add friend
                          </Button>
                          <Button
                            buttonColor="#ede7f6"
                            textColor="#4527a0"
                            style={{ borderRadius: 6 }}
                            mode="contained"
                          >
                            Remove
                          </Button>
                        </View>
                      </View>
                    </Card.Actions>
                  </Card>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  suggestion: {
    marginHorizontal: 10,
    marginVertical: 18,
  },
  suggestionTitle: {
    fontWeight: "bold",
    fontSize: 25,
  },
  suggestedFriendsWrapper: {
    marginTop: 10,
  },
  cardActionsWrapper: {
    flex: 1,
    paddingBottom: 7,
  },
  buttonWrapper: {
    gap: 4,
    width: "96%",
  },
});
