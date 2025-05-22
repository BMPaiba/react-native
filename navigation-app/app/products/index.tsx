import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

export default function index() {
  return (
    <View className="flex-1 items-center justify-center bg-secondary">
      <Text className="font-cascadia-light text-5xl text-blue-100">
        products
      </Text>
      <Pressable onPress={() => router.push("./home")}>
        <Text className="text-red-100 font-cascadia-light text-2xl">Ir a home</Text>
      </Pressable>
      <Link href="/">
        <Text className="text-red-100 font-cascadia-light text-2xl">Ir al inicio</Text>
      </Link>
    </View>
  )
}