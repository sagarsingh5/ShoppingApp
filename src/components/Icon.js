import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Icon({
  onPress,
  style,
  name,
  size = 24,
  color = "#000",
}) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
