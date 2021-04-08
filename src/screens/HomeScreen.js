import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import Constant from "expo-constants";
import { useState } from "react";
import Cards from "../components/Cards";
import AuthContext from "../config/AuthContext";
// import HomeCard from "../components/HomeCard";

export default function HomeScreen() {
  const [selected, setSelected] = useState("All");
  const authContext = useContext(AuthContext);

  const blocks = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Labtops",
    },
    {
      id: 3,
      title: "Mobiles",
    },
    {
      id: 4,
      title: "Tablets",
    },
    {
      id: 5,
      title: "Mobiles",
    },
    {
      id: 6,
      title: "Tablets",
    },
  ];
  const items = [
    {
      id: 1,
      title: "Gionee A1",
      category: "mobiles",
      oPrice: 100,
      nPrice: 80,
    },
    {
      id: 2,
      title: "Macbook",
      category: "labtops",
      oPrice: 100,
      nPrice: 80,
    },
    {
      id: 3,
      title: "Realme Xt",
      category: "mobiles",
      oPrice: 100,
      nPrice: 80,
    },
    {
      id: 4,
      title: "ipad",
      category: "tablets",
      oPrice: 100,
      nPrice: 80,
    },
    {
      id: 5,
      title: "Samsung Tablet",
      category: "tablets",
      oPrice: 100,
      nPrice: 80,
    },
    {
      id: 6,
      title: "dell pc",
      category: "labtops",
      oPrice: 100,
      nPrice: 80,
    },
  ];
  const filter = items
    ? items.filter((item) => {
        if (selected.toLowerCase() === "all") return item;
        return selected.toLowerCase() === item.category.toLowerCase();
      })
    : null;
  //   console.log(items);
  const carts = authContext.cart;
  // console.log(carts);
  const addCart = (item) => {
    // console.log(item, "===============================================");
    carts.push(item);
    if (
      carts.map((cart) => {
        if (cart.id === item.id) {
        }
      })
    ) {
    }
    authContext.setCart({ ...carts, quantity: 1 });
  };

  return (
    <View style={styles.container}>
      <Header leftIcon="menu" centerText="ShoppingApp" rightIcon="search" />
      <View style={{ borderBottomWidth: 1 }}>
        <FlatList
          data={blocks}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelected(item.title)}
              style={[
                styles.blocks,
                {
                  //   backgroundColor:
                  //     selected === item.title ? "#FAEEF0" : "transparent",
                  // borderColor: selected === item.title ? "yellow" : "#fff",
                },
              ]}
            >
              <Text
                style={{
                  color: selected === item.title ? "#ff0000" : "#000",
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <FlatList
          data={filter}
          keyExtractor={(data) => data.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <Cards
              title={item.title}
              oPrice={item.oPrice}
              nPrice={item.nPrice}
              onPressCart={() => addCart(item)}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
    marginBottom: 100,
  },
  blocks: {
    // borderWidth: 1,
    height: 30,
    margin: 13,
    paddingHorizontal: 10,
    // borderRadius: 30 / 2,
    alignItems: "center",
    // borderColor: "#fff",
  },
  Hlist: {
    // backgroundColor: "red",
    height: 50,
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    marginLeft: 10,
  },
});
