import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DrawerNavigaton() {
  return (
    <View style={styles.container}>
      <Text>DrawerNavigaton</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
