import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import Separator from "../../components/Separator";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Display } from "../../utils";
import Entypo from "react-native-vector-icons/Entypo";
import Images from "../../constants/Images";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
import FoodCart from "../../components/FoodCard";

const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state?.cartState?.cart);

  // console.log(cart);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <IonIcons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Giỏ hàng</Text>
      </View>
      {cart?.cartItems?.length > 0 ? (
        <>
          <ScrollView>
            <View style={styles.foodList}>
              {cart?.cartItems?.map((item) => (
                <FoodCart
                  {...item?.food}
                  key={item?.food?.id}
                  navigate={() =>
                    navigation.navigate("FoodScreen", { foodId: item?.id })
                  }
                />
              ))}
            </View>
            <View style={styles.promoCodeContainer}>
              <View style={styles.rowAndCenter}>
                <Entypo name="ticket" size={30} color={Colors.DEFAULT_YELLOW} />
                <Text style={styles.promoCodeText}>Áp dụng mã khuyến mại</Text>
              </View>
              <IonIcons
                name="chevron-forward-outline"
                size={20}
                color={Colors.DEFAULT_BLACK}
              />
            </View>
            <View style={styles.amountContainer}>
              <View style={styles.amountSubContainer}>
                <Text style={styles.amountLabelText}>Tổng tiền sản phẩm</Text>
                <Text style={styles.amountText}>
                  {(cart?.metaData?.itemsTotal * 1000).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Text>
              </View>
              <View style={styles.amountSubContainer}>
                <Text style={styles.amountLabelText}>Giảm giá</Text>
                <Text style={styles.amountText}>
                  {(cart?.metaData?.discount).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Text>
              </View>
              <View style={styles.amountSubContainer}>
                <Text style={styles.amountLabelText}>Phí giao hàng</Text>
                <Text
                  style={{ ...styles.amountText, color: Colors.DEFAULT_GREEN }}
                >
                  miễn phí
                </Text>
              </View>
            </View>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Tổng cộng</Text>
              <Text style={styles.totalText}>
                {(cart?.metaData?.grandTotal * 1000).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton} onPress={()=>navigation.navigate("PaymentScreen")}>
              <View style={styles.rowAndCenter}>
                <IonIcons
                  name="cart-outline"
                  color={Colors.DEFAULT_WHITE}
                  size={20}
                />
                <Text style={styles.checkoutText}>Đặt hàng</Text>
              </View>
              <Text style={styles.checkoutText}>
                {(cart?.metaData?.grandTotal*1000).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </Text>
            </TouchableOpacity>
            <Separator height={Display.setHeight(9)} />
          </ScrollView>
        </>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Image
            style={styles.emptyCartImage}
            source={Images.EMPTY_CART}
            resizeMode="contain"
          />
          <Text style={styles.emptyCartText}>Giỏ hàng trống</Text>
          <Text style={styles.emptyCartSubText}>
            Tiến hành đặt hàng ngay nào
          </Text>
          <TouchableOpacity style={styles.addButtonEmpty} onPress={()=>navigation.navigate("HomeScreen")}>
            <AntDesign name="plus" color={Colors.DEFAULT_WHITE} size={20} />
            <Text style={styles.addButtonEmptyText}>Thêm món ăn</Text>
          </TouchableOpacity>
          <Separator height={Display.setHeight(15)} />
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: "center",
  },
  foodList: {
    marginHorizontal: Display.setWidth(4),
  },
  promoCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: Display.setWidth(4),
    paddingVertical: 15,
    marginTop: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    justifyContent: "space-between",
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  promoCodeText: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginLeft: 10,
  },
  amountContainer: {
    marginHorizontal: Display.setWidth(4),
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  amountSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  amountLabelText: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_GREEN,
  },
  amountText: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  totalContainer: {
    marginHorizontal: Display.setWidth(4),
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 20 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  checkoutButton: {
    flexDirection: "row",
    width: Display.setWidth(80),
    backgroundColor: Colors.DEFAULT_GREEN,
    alignSelf: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    height: Display.setHeight(7),
    marginTop: 10,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 16 * 1.4,
    color: Colors.DEFAULT_WHITE,
    marginLeft: 8,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartImage: {
    height: Display.setWidth(60),
    width: Display.setWidth(60),
  },
  emptyCartText: {
    fontSize: 30,
    // fontFamily: Fonts.POPPINS_LIGHT,
    lineHeight: 30 * 1.4,
    color: Colors.DEFAULT_GREEN,
  },
  emptyCartSubText: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 12 * 1.4,
    color: Colors.INACTIVE_GREY,
  },
  addButtonEmpty: {
    flexDirection: "row",
    backgroundColor: Colors.DEFAULT_YELLOW,
    borderRadius: 8,
    paddingHorizontal: Display.setWidth(4),
    paddingVertical: 5,
    marginTop: 10,
    justifyContent: "space-evenly",
    elevation: 3,
    alignItems: "center",
  },
  addButtonEmptyText: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_WHITE,
    marginLeft: 10,
  },
});
