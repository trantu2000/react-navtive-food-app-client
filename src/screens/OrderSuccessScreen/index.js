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
      Alert.alert("Đặt hàng thành công", "Vui lòng đợi nhà hàng", 
      
      [
          
        {
          text: "Đóng",
          onPress: () => {()=>navigation.navigate("CartScreen")},
          style: "cancel",
        },
        // { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
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
          <Text style={styles.headerTitle}>thành công</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Vui lòng chọn phương thức thanh toán
          </Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <View style={styles.rowAndCenter}>
            <Image style={styles.imageMoMo} source={Images.MOMO} />
            <View>
              <Text style={styles.checkoutText}>MoMo</Text>
              <Text style={styles.checkoutSubText}>Thanh toán qua momo</Text>
            </View>
          </View>
  
          <View>
            <CheckBox
              center
              checked={isSelected1}
              onPress={handleCheckBox1}
              uncheckedColor={Colors.DEFAULT_GREEN}
              checkedColor={Colors.DEFAULT_GREEN}
            />
          </View>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.checkoutButton}>
          <View style={styles.rowAndCenter}>
            <Image style={styles.imageVisaCard} source={Images.VISACARD} />
            <View>
              <Text style={styles.checkoutText}>Visa</Text>
              <Text style={styles.checkoutSubText}>Thanh toán qua thẻ visa</Text>
            </View>
          </View>
  
          <View>
            <CheckBox
              center
              checked={isSelected2}
              onPress={handleCheckBox2}
              uncheckedColor={Colors.DEFAULT_GREEN}
              checkedColor={Colors.DEFAULT_GREEN}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkoutButton}>
          <View>
            <Text style={styles.checkoutText}>Thanh toán tiền mặt</Text>
          </View>
          <View>
            <CheckBox
              center
              checked={isSelected3}
              onPress={handleCheckBox3}
              uncheckedColor={Colors.DEFAULT_GREEN}
              checkedColor={Colors.DEFAULT_GREEN}
            />
          </View>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.buttonContinue} onPress={createTwoButtonAlert}>
          <Text style={styles.buttonText}>Xác nhận đặt hàng</Text>
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
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
  
      marginTop: 30,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "600",
      lineHeight: 20 * 1.4,
      width: Display.setWidth(80),
      textAlign: "center",
    },
    subTitle: {
      fontSize: 17,
      marginLeft: 30,
      paddingVertical: 20,
    },
    subTitleContainer: {
      marginBottom: 40,
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
    imageMoMo: {
      width: Display.setWidth(7),
      height: Display.setHeight(4),
    },
    imageVisaCard: {
      width: Display.setWidth(10),
      height: Display.setHeight(4),
    },
    checkoutText: {
      fontSize: 15,
      fontWeight: "600",
      lineHeight: 15 * 1.4,
      color: Colors.DEFAULT_BLACK,
      marginLeft: 8,
    },
    checkoutSubText: {
      fontSize: 15,
      lineHeight: 15 * 1.4,
      color: Colors.DEFAULT_BLACK,
      marginLeft: 8,
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
  