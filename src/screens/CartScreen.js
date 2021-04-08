import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Constant from "expo-constants";
import CartCards from "../components/CartCards";
import Header from "../components/Header";
import AuthContext from "../config/AuthContext";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/core";

export default function CartScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const [items, setItems] = useState(null);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setItems(authContext.cart);
      console.log("Cart");
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = () => setItems(authContext.data);

      return () => unsubscribe();
    }, [authContext.cart])
  );

  console.log(authContext.cart);

  const onPressBin = (item) => {
    // const elements = authContext.cart;
    // elements.filter((doc) => {
    //   return doc.id === item.id;
    // });
  };

  return (
    <View style={styles.container}>
      <Header leftText="item(3)" centerText="Cart" rightText="total 100" />
      <FlatList
        data={items}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <CartCards
            title={item.title}
            oPrice={item.oPrice}
            nPrice={item.nPrice}
            onPressBin={onPressBin(item)}
            quantity={items.quantity}
          />
        )}
      />
      <TouchableOpacity
        onPress={() => console.log(authContext.cart)}
        style={styles.pay}
      >
        <Text style={{ fontSize: 28, color: "#fff" }}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
    paddingHorizontal: 10,
  },
  pay: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
    alignSelf: "center",
    backgroundColor: "blue",
    padding: 10,
    paddingHorizontal: 30,
  },
});
