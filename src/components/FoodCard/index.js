import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Display } from "../../utils";
import AntDesign from "react-native-vector-icons/AntDesign";

const FoodCart = ({ id, name, description, price, image, navigate }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate()} activeOpacity={0.8}>
        <Image
          style={styles.image}
          source={{
            uri: "https://yummyday.vn/uploads/images/banh-hamburger-10.jpg",
          }}
        />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <TouchableOpacity onPress={() => navigate()} activeOpacity={0.8}>
          <Text numberOfLines={1} style={styles.titleText}>
            {name}
          </Text>
          <Text numberOfLines={2} style={styles.descriptionText}>
            {description}
          </Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.priceText}>{price} 000đ</Text>
          <View style={styles.itemAddContainer}>
            <AntDesign
              name="minus"
              color={Colors.DEFAULT_YELLOW}
              size={18}
              // onPress={() => removeFromCart(id)}
            />
            <Text style={styles.itemCountText}>0</Text>
            <AntDesign
              name="plus"
              color={Colors.DEFAULT_YELLOW}
              size={18}
              //   onPress={() => addToCart(id)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 10,
    elevation: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  image: {
    height: 100,
    width: 100,
    margin: 6,
    borderRadius: 8,
  },
  detailsContainer: {
    marginHorizontal: 5,
  },
  titleText: {
    width: Display.setWidth(60),
    color: Colors.DEFAULT_BLACK,
    // fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    marginBottom: 8,
  },
  descriptionText: {
    width: Display.setWidth(60),
    color: Colors.DEFAULT_GREY,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: 12,
    lineHeight: 10 * 1.4,
    marginBottom: 8,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  itemAddContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.LIGHT_GREY2,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  itemCountText: {
    color: Colors.DEFAULT_BLACK,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    marginHorizontal: 8,
  },
});
