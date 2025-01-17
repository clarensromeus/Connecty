import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { PaperProvider } from "react-native-paper";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
    PlaywriteAr: require("../assets/fonts/Playwrite-Regular.ttf"),
    GaMaamli: require("../assets/fonts/GaMaamli-Regular.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Connecty",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: "GaMaamli",
              fontSize: 26,
            },
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerTitle: "Connecty",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: "GaMaamli",
              fontSize: 26,
            },
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="forgotpassword" options={{ headerShown: false }} />
        <Stack.Screen name="(user)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
