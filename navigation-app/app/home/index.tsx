import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="font-cascadia-light text-5xl text-blue-100">HOME</Text>
      <Link href="./products">
        <Text className="text-red-100 font-cascadia-light text-2xl">Ir a productos</Text>
      </Link>
      <Link href="/">
        <Text className="text-red-100 font-cascadia-light text-2xl">Ir al inicio</Text>
      </Link>
    </View>
  );
}
