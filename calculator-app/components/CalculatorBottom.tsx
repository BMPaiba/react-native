import { Text, Pressable } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/Colors";
import * as Haptics from 'expo-haptics';

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onPress?: () => void;
}

export default function CalculatorBottom({
  label,
  color = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 160 : 70 ,
      })}
      onPress={ () => {
        onPress?.();
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }}
    >
      <Text style={[globalStyles.buttonText, { color: blackText ? "black" : "white" }]}>{label}</Text>
    </Pressable>
  );
}
