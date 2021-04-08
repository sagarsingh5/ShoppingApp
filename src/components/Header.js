import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./Icon";

export default function Header({
  centerText,
  leftText,
  rightText,
  rightIcon,
  leftIcon,
}) {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <Icon onPress={() => console.log("pressed")} name={leftIcon} />
      )}
      {leftText && <Text style={styles.text}>{leftText}</Text>}
      {centerText && <Text style={styles.centertext}>{centerText}</Text>}
      {rightText && <Text style={styles.text}>{rightText}</Text>}
      {rightIcon && (
        <Icon name={rightIcon} onPress={() => console.log("search")} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  centertext: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
