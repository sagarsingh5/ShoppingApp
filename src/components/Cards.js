import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Constant from "expo-constants";
import Icon from "./Icon";

const screenHeight = Dimensions.get("screen").height;
export default function Cards({
  title,
  oPrice,
  nPrice,
  onPressCart,
  // carted = false,
}) {
  // const [carted, setCarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../../assets/icon.png")}
        />
      </View>
      <View style={styles.content}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{ fontSize: 18, fontWeight: "600" }}
        >
          {title}
        </Text>
        <View style={styles.priceContainer}>
          <Text
            style={{ textDecorationLine: "line-through", color: "#a9a9a9" }}
          >
            {oPrice}
          </Text>
          <Text style={{ color: "#06BCEE", fontSize: 18 }}>{nPrice}</Text>
        </View>
      </View>
      <Icon
        style={styles.cart}
        name="cart"
        color="#fff"
        onPress={onPressCart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    height: screenHeight * 0.5,
    width: "50%",
    padding: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderTopWidth: 0,
  },
  image: {
    width: "80%",
    height: "65%",
  },
  cart: {
    backgroundColor: "black",
    padding: 10,
    position: "absolute",
    top: 15,
    right: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    marginTop: 20,
    alignItems: "center",
    // backgroundColor: "yellow",
  },
});
