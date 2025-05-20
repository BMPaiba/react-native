import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
const RootLayout = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, error] = useFonts({
    "CascadiaCode-Black": require("../assets/fonts/CascadiaCode-Bold.ttf"),
    "CascadiaCode-Medium": require("../assets/fonts/CascadiaCode-Medium.ttf"),
    "CascadiaCode-Light": require("../assets/fonts/CascadiaCode-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Slot />;
};

export default RootLayout;
