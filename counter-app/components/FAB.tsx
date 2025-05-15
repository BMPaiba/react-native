import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

interface Props {
  label: string;

  position?: "left" | "right";

  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({ label, onLongPress, onPress, position = "right" }: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.floatingButton,
        position === "right" ? styles.positionRight : styles.positionLeft,
        pressed && { opacity  : 0.5},
      ]}
    >
      <Text style={styles.textHuge}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textHuge: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
    lineHeight: 100,
  },
  floatingButton: {
    position: "absolute",
    fontSize: 100,
    color: "white",
    bottom: 20,
    backgroundColor: "#65558f",
    borderRadius: 100,
    width: 100,
    height: 100,
    textAlign: "center",
    lineHeight: 100,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
