import React from "react";
import { View, Text, StatusBar, Platform } from "react-native";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { Colors } from "@/constants/Colors";
import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("white"); //todo: no funciona en android
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      {/* <Text style={{ color: "white" }}>RootLayout</Text> */}
      <Slot />
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
    </View>
  );
}
