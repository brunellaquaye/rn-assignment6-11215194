import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Clothes from "./components/Clothes";

const HomeScreen = () => {
  const clothesData = [
    {
      id: 1,
      image: require("./assets/dress1.png"),
      title: "Office Wear",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("./assets/add_circle.png"),
    },
    {
      id: 2,
      image: require("./assets/dress2.png"),
      title: "Black",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("./assets/add_circle.png"),
    },
    {
      id: 3,
      image: require("./assets/dress3.png"),
      title: "Church Wear",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("./assets/add_circle.png"),
    },
    {
      id: 4,
      image: require("./assets/dress4.png"),
      title: " Lamerei",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("./assets/add_circle.png"),
    },
    {
      id: 5,
      image: require("./assets/dress5.png"),
      title: " 21WN",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("./assets/add_circle.png"),
    },
    {
      id: 6,
      image: require("./assets/dress6.png"),
      title: " Lopo",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("./assets/add_circle.png"),
    },
    {
      id: 7,
      image: require("./assets/dress7.png"),
      title: "21WN",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("./assets/add_circle.png"),
    },
    {
      id: 8,
      image: require("./assets/dress6.png"),
      title: "lame",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("./assets/add_circle.png"),
    },
  ];
  return (
    <SafeAreaView style = {{ flex: 1}}>
    <View style = {{backgroundColor: "white"}}>
      <View style={styles.title}>
        <Text style = {styles.topic}>OUR STORY</Text>
        <View style = {styles.menu}>
        <View style = {styles.filter}>
          <Image source={require("./assets/Listview.png")} />
          </View>
          <View style = {styles.filter}>
            <Image source={require("./assets/Filter.png")} />
          </View>
        </View>
      </View>

      <View>
        <FlatList
          data={clothesData}
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          renderItem={({ item }) => (
              <Clothes
                image={item.image}
                icon={item.icon}
                title={item.title}
                description={item.description}
                price={item.price}
              />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "black",
  },
  topic:{
    fontSize: 24,
    fontWeight: "400",
    marginLeft: 15,
    marginTop: 10,
    letterSpacing: 2,
  },
  filter:{
    padding: 10,
    backgroundColor: "#F7F7F7",
   justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: 20,

  }

});

export default HomeScreen;
