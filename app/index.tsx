import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, View } from "react-native";
import Assets from "../constant/Assets";
import { useRouter } from "expo-router";

export default function Index() {
  // Primary color background with centered logo

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.replace('/(screens)/onboarding/onboarding-screen')
    }, 5000)
  }, [])

  return (
    <View className="flex-1 items-center justify-center bg-blue-600">
      <StatusBar hidden />
      <View>
        <Image 
          source={Assets.logo.whiteSquareLogo} 
          className="w-40 h-40"
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
