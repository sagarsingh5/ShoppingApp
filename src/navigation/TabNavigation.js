import React, { useContext, useEffect } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigations = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={35} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" size={35} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigations;
