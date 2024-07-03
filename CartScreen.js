import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import CartsClothes from "./components/Checkout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "./components/CartContext";
import Footer from "./components/Footer";

const CartScreen = () => {
  const { cart, removeFromCart, clearCart, getTotalItems } =
    useContext(CartContext);
  const navigation = useNavigation();
  console.log("Cart contents:", cart);

  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) => total + parseFloat(item.price.replace("$", "")),
        0
      )
      .toFixed(2);
  };

  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Total Items: {getTotalItems()}</Text>
      <Text style={styles.footerText}>Total Cost: ${calculateTotal()}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => {}}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );


  //   {
  //     id: 1,
  //     image: require("./assets/dress1.png"),
  //     title: "OFFICE WEAR",
  //     description: "Office wear for your Office",
  //     price: "$120",
  //     icon: require("./assets/remove.png"),
  //   },
  //   {
  //     id: 2,
  //     image: require("./assets/dress2.png"),
  //     title: "BLACK",
  //     description: "Recycle Knit Cardigan ",
  //     price: "$120",
  //     icon: require("./assets/remove.png"),
  //   },
  //   {
  //     id: 3,
  //     image: require("./assets/dress3.png"),
  //     title: "CHURCH WEAR",
  //     description: "Recycle Knit Cardigan",
  //     price: "$120",
  //     icon: require("./assets/remove.png"),
  //   },
  //   {
  //     id: 4,
  //     image: require("./assets/dress4.png"),
  //     title: " LAMEREI",
  //     description: "Recycle Knit Cardigan",
  //     price: "$120",
  //     icon: require("./assets/remove.png"),
  //   },
  //   {
  //     id: 5,
  //     image: require("./assets/dress5.png"),
  //     title: " 21WN",
  //     description: "Recycle Knit Cardigan",
  //     price: "$120",
  //     icon: require("./assets/remove.png"),
  //   },
  //   {
  //     id: 6,
  //     image: require("./assets/dress6.png"),
  //     title: " LOPO",
  //     description: "Recycle Knit Cardigan",
  //     price: "$120",
  //     icon: require("./assets/remove.png"),
  //   },
  //   {
  //     id: 7,
  //     image: require("./assets/dress7.png"),
  //     title: "21WN",
  //     description: "Recycle Knit Cardigan",
  //     price: "$120",
  //     icon: require("./assets/remove.png"),
  //   },
  //   {
  //     id: 8,
  //     image: require("./assets/dress6.png"),
  //     title: "LAME",
  //     description: "Recycle Knit Cardigan",
  //     price: "$120",
  //     icon: require("./assets/remove.png"),
  //   },
  // ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style = {{backgroundColor:"red"}}> */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            style={styles.drawerMenu}
            source={require("./assets/Menu.png")}
          />
        </TouchableOpacity>
        <Image style={styles.logo} source={require("./assets/Logo.png")} />
        <Ionicons
          name="search-outline"
          size={24}
          color="black"
          style={{ marginTop: 40, marginRight: 30 }}
        />
      </View>

      <Text style={styles.title}>CHECKOUT</Text>
      <View style={styles.span}>
        <View style={styles.line}></View>
        <MaterialCommunityIcons
          name="cards-diamond-outline"
          size={20}
          color="#AFB0B6"
        />
        <View style={styles.line}></View>
      </View>
      <View style={{}}>
        <FlatList
          data={cart}
          vertical
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CartsClothes
              image={item.image}
              icon={require("./assets/remove.png")}
              description={item.description}
              price={item.price}
              onPressRemove={() => removeFromCart(item.id)}
            />
          )}
          keyExtractor={(item, index) =>
            item && item.id ? item.id.toString() : `item-${index}`
          }
        />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "light",
    marginTop: 20,
    marginLeft: 110,
    letterSpacing: 5,
    justifyCOntent: "center",
    alignContent: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
  drawerMenu: {
    width: 20,
    height: 20,
    margin: 10,
    marginTop: 40,
    marginLeft: 20,
  },
  line: {
    width: 60,
    height: 1,
    backgroundColor: "#AFB0B6",
    marginTop: 20,
    alignContent: "center",
    bottom: 10,
  },
  span: {
    flexDirection: "row",
    marginHorizontal: 120,
  },
  logo: {
    marginLeft: 10,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CartScreen;
