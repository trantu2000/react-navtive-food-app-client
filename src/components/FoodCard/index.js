import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import Colors from "../../constants/Colors";
import { Display } from "../../utils";
import AntDesign from "react-native-vector-icons/AntDesign";
import ApiConstants from "../../constants/ApiConstants";
import { StaticImageService } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import CartAction from "../../Redux/Actions/CartAction";

const FoodCart = ({
  id,
  name,
  description,
  price,
  image,
  navigate,
  navigation,
}) => {
  const dispatch = useDispatch();
  const itemCount = useSelector(
    (state) =>
      state?.cartState?.cart?.cartItems?.find((item) => item?.foodId === id)
        ?.count
  );
  // console.log(itemCount);
  // console.log(id);

  const addToCart = (foodId) => dispatch(CartAction.addToCart({ foodId }));
  const removeFromCart = (foodId) =>
    dispatch(CartAction.removeFromCart({ foodId }));



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate()} activeOpacity={0.8}>
        <Image
          style={styles.image}
          source={{
            uri: StaticImageService.getGalleryImage(
              image,
              ApiConstants.STATIC_IMAGE.SIZE.SQUARE
            ),
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
          <Text style={styles.priceText}>
            {(price * 1000).toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </Text>
          <View style={styles.itemAddContainer}>
            {itemCount > 0 ? (
              <>
                <AntDesign
                  name="minus"
                  color={Colors.DEFAULT_YELLOW}
                  size={18}
                  onPress={() => removeFromCart(id)}
                />
                <Text style={styles.itemCountText}>{itemCount}</Text>
              </>
            ) : null}

            <AntDesign
              name="plus"
              color={Colors.DEFAULT_YELLOW}
              size={18}
              onPress={() => addToCart(id)}
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
