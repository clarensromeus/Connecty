import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import "react-native-reanimated";
import { View, StyleSheet } from "react-native";
import { Text, Badge, IconButton, TextInput } from "react-native-paper";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { router } from "expo-router";

export default function RootLayout() {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#4527a0",
        headerTitle: "Connecty",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "GaMaamli",
          color: "black",
          fontSize: 25,
        },
        headerShown:
          getFocusedRouteNameFromRoute(route) === "[id]" ||
          route.name === "(chat)" ||
          route.name === "friends" ||
          route.name === "search"
            ? false
            : true,
        headerTitleAlign: "center",
        tabBarStyle: {
          display:
            getFocusedRouteNameFromRoute(route) === "[id]" ? "none" : "flex",
        },
        headerLeft: () => (
          <View>
            <View style={styles.item}>
              <IconButton
                icon="bell-outline"
                iconColor="#4527a0"
                size={36}
                style={styles.button}
                onPress={() => router.replace("(user)")}
              />
              <Badge visible={visible} style={styles.badge}>
                12
              </Badge>
            </View>
          </View>
        ),
        headerRight: ({ pressColor }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <Ionicons
              name="paper-plane-outline"
              size={28}
              color={pressColor}
              onPress={() => router.replace("(user)/settings")}
            />
          </View>
        ),
      })}
    >
      <Tabs.Screen
        name="index"
        key={1}
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="house-damage" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        key={2}
        name="friends"
        options={{
          header: () => {
            return (
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 15,
                  paddingBottom: 16,
                  backgroundColor: "white",
                }}
              >
                <View style={{ flex: 1, gap: 4 }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                      Friends
                    </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                      (2)
                    </Text>
                  </View>
                  <View>
                    <TextInput
                      mode="outlined"
                      placeholder="Search..."
                      placeholderTextColor="#9e9e9e"
                      outlineStyle={{
                        borderRadius: 30,
                        backgroundColor: "#eeeeee",
                        borderWidth: 0,
                      }}
                      left={<TextInput.Icon color="#9e9e9e" icon="magnify" />}
                      style={{
                        height: 38,
                      }}
                    />
                  </View>
                </View>
              </View>
            );
          },
          headerShown: true,
          tabBarLabel: "Friends",
          title: "Friends",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-friends" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        key={3}
        options={{
          tabBarLabel: "Search",
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={28} color={color} />
          ),
          headerShown: true,
          header: () => {
            return (
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 15,
                  paddingBottom: 16,
                  backgroundColor: "white",
                }}
              >
                <View style={{ flex: 1, gap: 4 }}>
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                      Search
                    </Text>
                  </View>
                  <View>
                    <TextInput
                      mode="outlined"
                      placeholder="Search..."
                      placeholderTextColor="#9e9e9e"
                      outlineStyle={{
                        borderRadius: 30,
                        backgroundColor: "#eeeeee",
                        borderWidth: 0,
                      }}
                      left={<TextInput.Icon color="#9e9e9e" icon="magnify" />}
                      style={{
                        height: 38,
                      }}
                    />
                  </View>
                </View>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        key={4}
        name="(chat)"
        options={{
          tabBarLabel: "Chats",
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" size={28} color={color} />
          ),
          tabBarBadge: 4,
        }}
      />
      <Tabs.Screen
        key={5}
        name="profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  item: {
    //margin: 16,
    marginVertical: 16,
  },
  button: {
    opacity: 0.6,
  },
  badge: {
    position: "absolute",
    top: 12,
    right: 9,
    backgroundColor: "#f44336",
    fontWeight: "bold",
  },
});
