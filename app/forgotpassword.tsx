import * as React from "react";
import { View } from "react-native";
import { Avatar, Button, List, Text } from "react-native-paper";

export interface IAppProps {}

export default function ForgoPasswordScreen(props: IAppProps) {
  return (
    <View>
      <List.Section
        style={
          {
            /* paddingHorizontal: 8 */
          }
        }
      >
        <List.Subheader>
          <Text>Who to follow</Text>
        </List.Subheader>
        <List.Item
          title={
            <View style={{ display: "flex" }}>
              <Text>beyonce grammy</Text>
              <Text style={{ color: "gray" }}>@beyoncesinger</Text>
            </View>
          }
          right={(props) => (
            <View style={{ position: "relative", left: 10 }}>
              <Button mode="contained" onPress={() => console.log("Pressed")}>
                follow
              </Button>
            </View>
          )}
          left={() => (
            <Avatar.Image
              size={48}
              source={{
                uri: "https://variety.com/wp-content/uploads/2020/04/Beyonce-Grammy-Win.jpg?w=1000",
              }}
            />
          )}
        />
        <List.Item
          title={
            <View style={{ display: "flex" }}>
              <Text>Neymar junior</Text>
              <Text style={{ color: "gray" }}>@Neymarplayer</Text>
            </View>
          }
          left={() => (
            <Avatar.Image
              size={48}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxaEAlFJHkecuQnsrsI_Ux1iPORBBrMGZKQ&s",
              }}
            />
          )}
          right={() => (
            <View style={{ paddingHorizontal: 0, marginHorizontal: 0 }}>
              <Button
                style={{ marginTop: 7 }}
                mode="contained"
                onPress={() => console.log("Pressed")}
              >
                follow
              </Button>
            </View>
          )}
        />
        <List.Item
          title={
            <View style={{ display: "flex" }}>
              <Text>Katty perry</Text>
              <Text style={{ color: "gray" }}>@kattysinger</Text>
            </View>
          }
          left={() => (
            <Avatar.Image
              size={48}
              source={{
                uri: "https://variety.com/wp-content/uploads/2024/02/170255_4037-e1707806599266.jpg",
              }}
            />
          )}
          right={() => (
            <View style={{ paddingHorizontal: 0, marginHorizontal: 0 }}>
              <Button
                style={{ marginTop: 7 }}
                mode="contained"
                onPress={() => console.log("Pressed")}
              >
                follow
              </Button>
            </View>
          )}
        />
      </List.Section>
    </View>
  );
}
