import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthContext from "./src/config/AuthContext";
import TabNavigations from "./src/navigation/TabNavigation";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <AuthContext.Provider value={{ cart, setCart }}>
      <NavigationContainer>
        <TabNavigations />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
