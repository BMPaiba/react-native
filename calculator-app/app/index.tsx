import CalculatorBottom from "@/components/CalculatorBottom";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View, Text } from "react-native";

export default function CalculatorApp() {
  const { formula, number, previous, buildNumber } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText>{formula}</ThemeText>
        <ThemeText variant="h2">{number}</ThemeText>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBottom blackText color={Colors.lightGray} label="C" onPress={() => {}} />
        <CalculatorBottom blackText color={Colors.lightGray} label="+/-" onPress={() => {}} />
        <CalculatorBottom blackText color={Colors.lightGray} label="del" onPress={() => {}} />
        <CalculatorBottom label="/" color={Colors.orange} onPress={() => {}} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBottom  label="7" onPress={() => {buildNumber("7")}} />
        <CalculatorBottom  label="8" onPress={() => {buildNumber("8")}} />
        <CalculatorBottom  label="9" onPress={() => {buildNumber("9")}} />
        <CalculatorBottom label="*" color={Colors.orange} onPress={() => {}} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBottom  label="4" onPress={() => { buildNumber("4") }} />
        <CalculatorBottom  label="5" onPress={() => { buildNumber("5") }} />
        <CalculatorBottom  label="6" onPress={() => { buildNumber("6") }} />
        <CalculatorBottom label="-" color={Colors.orange} onPress={() => {}} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBottom  label="1" onPress={() => { buildNumber("1") }} />
        <CalculatorBottom  label="2" onPress={() => { buildNumber("2") }} />
        <CalculatorBottom  label="3" onPress={() => { buildNumber("3") }} />
        <CalculatorBottom label="+" color={Colors.orange} onPress={() => {}} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBottom  label="0" doubleSize onPress={() => {buildNumber("0")}} />
        <CalculatorBottom  label="." onPress={() => {buildNumber(".")}} />
        <CalculatorBottom  label="=" color={Colors.orange} onPress={() => {}} />
      </View>
    </View>
  );
}
