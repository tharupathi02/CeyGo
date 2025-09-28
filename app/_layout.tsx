import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Toaster } from "sonner-native";
import "./global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Light": require("../assets/font/Poppins-Light.ttf"),
    "Poppins-Regular": require("../assets/font/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/font/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/font/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/font/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "ios_from_right",
        }}
      />
      <Toaster
        position="top-center"
        duration={3000}
        // richColors
        theme="light"
        swipeToDismissDirection="up"
        closeButton
        toastOptions={{
          titleStyle: {
            fontFamily: "Poppins-Regular",
            fontWeight: "700",
          },
          descriptionStyle: {
            fontFamily: "Poppins-Regular",
            fontWeight: "300",
          },
          actionButtonTextStyle: {
            fontFamily: "Poppins-Regular",
            fontWeight: "700",
          },
          cancelButtonTextStyle: {
            fontFamily: "Poppins-Regular",
            fontWeight: "700",
          },
        }}
      />
    </GestureHandlerRootView>
  );
}
