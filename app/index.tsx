import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, View } from "react-native";
import Assets from "../constant/Assets";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Animation sequence for modern effect
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.elastic(1),
      }),
    ]).start();

    // Simulate loading time - replace with actual app initialization logic
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Primary color background with centered logo
  return (
    <View className="flex-1 items-center justify-center bg-blue-600">
      <StatusBar hidden />
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        }}
      >
        <Image 
          source={Assets.logo.whiteSquareLogo} 
          className="w-40 h-40"
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}
