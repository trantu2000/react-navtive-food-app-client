import {
  Alert,
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
import { CheckBox } from "react-native-elements";

const OrderSuccessScreen = ({ navigation }) => {
  const cart = useSelector((state) => state?.cartState?.cart);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(true);

  const handleCheckBox1 = () => {
    setSelection1(true);
    setSelection2(false);
    setSelection3(false);
  };
  const handleCheckBox2 = () => {
    setSelection1(false);
    setSelection2(true);
    setSelection3(false);
  };
  const handleCheckBox3 = () => {
    setSelection1(false);
    setSelection2(false);
    setSelection3(true);
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Đặt hàng thành công",
      "Vui lòng đợi nhà hàng",

      [
        {
          text: "Đóng",
          onPress: () => {
            () => navigation.navigate("CartScreen");
          },
          style: "cancel",
        },
        // { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      <View style={styles.subContainer}>
        <Text style={styles.subTitle1}>Đặt hàng thành công</Text>
        <Image style={styles.image} source={Images.ORDERSUCCESS} />
        <Text style={styles.subTitle2}>Vui lòng chờ nhà hàng</Text>
        <Text style={styles.subTitle2}>Đơn hàng sẽ nhanh chóng giao đến!!</Text>
        <Text style={styles.subTitle3} onPress={() => navigation.navigate("ListOrderScreen")}>Xem đơn đặt hàng</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonContinue}
        onPress={() => navigation.navigate("CartScreen")}
      >
        <Text style={styles.buttonText}>Quay lại giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // backgroundColor: Colors.DEFAULT_WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  subTitle1: {
    fontSize: 19,
    paddingVertical: 20,
    fontWeight:'700'
  },
  subTitle2: {
    fontSize: 17,
    paddingVertical: 10,
  },
  subTitle3: {
    fontSize: 16,
    paddingVertical: 20,
    fontWeight:'700'
  },

  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkoutButton: {
    flexDirection: "row",
    width: Display.setWidth(80),
    backgroundColor: Colors.DEFAULT_GREY,
    alignSelf: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 30,
    height: Display.setHeight(9),
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },

  buttonContinue: {
    width: Display.setWidth(70),
    backgroundColor: Colors.DEFAULT_GREEN,
    alignSelf: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: Display.setHeight(6),
    marginTop: 100,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 16 * 1.4,
    color: Colors.DEFAULT_WHITE,
    marginLeft: 8,
  },
});
