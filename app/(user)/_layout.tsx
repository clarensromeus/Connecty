import * as React from "react";
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function UserLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Text
                variant="headlineSmall"
                style={{ fontWeight: "bold", fontSize: 22 }}
              >
                Notifications
              </Text>
            );
          },
        }}
      />
      <Stack.Screen name="Settings" />
    </Stack>
  );
}
