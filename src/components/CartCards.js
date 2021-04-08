import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Constant from "expo-constants";
import Icon from "./Icon";
import { useState } from "react";

const screenHeight = Dimensions.get("screen").height;
export default function CartCards({
  onPressBin,
  title,
  oPrice,
  nPrice,
  quantity,
}) {
  const [count, setCount] = useState(quantity);
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../../assets/icon.png")}
        />
      </View>
      <View style={styles.content}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text
            style={{ textDecorationLine: "line-through", color: "#a9a9a9" }}
          >
            {oPrice}
          </Text>
          <Text style={{ color: "#06BCEE", fontSize: 18 }}>{nPrice}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="add" size={15} onPress={() => setCount(count + 1)} />
          <Text style={{ marginHorizontal: 10 }}>Quantity: {count}</Text>
          <Icon name="remove" size={15} onPress={() => setCount(count - 1)} />
        </View>
      </View>

      <Icon
        name="trash-bin-sharp"
        color="#fff"
        style={styles.cart}
        onPress={onPressBin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    height: screenHeight * 0.2,
    width: "95%",
    // padding: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#a9a9a9",
    // borderTopWidth: 0,
    flexDirection: "row",
    margin: 10,
  },
  image: {
    width: "40%",
    height: "65%",
    margin: 20,
  },
  cart: {
    backgroundColor: "black",
    padding: 5,
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
