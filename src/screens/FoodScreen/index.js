import {
  Image,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Separator from "../../components/Separator";
import IonIcons from "react-native-vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import { Display } from "../../utils";

const FoodScreen = () => {
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
      </View>
      <Image
        source={{
          uri: "https://yummyday.vn/uploads/images/banh-hamburger-10.jpg",
        }}
        style={styles.image}
      />
      <ScrollView>
        <Separator height={Display.setWidth(100)} />
        <View style={styles.mainContainer}>
          <View style={styles.titleHeaderContainer}>
            <Text style={styles.titleText}>hamburger</Text>
            <Text style={styles.priceText}>80.000 đ</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  image: {
    position: "absolute",
    height: Display.setWidth(100),
    width: Display.setWidth(100),
    top: 0,
  },
  mainContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  titleHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  titleText: {
    fontSize: 23,
    lineHeight: 23 * 1.4,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  priceText: {
    fontSize: 23,
    lineHeight: 23 * 1.4,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_YELLOW,
  },
});
