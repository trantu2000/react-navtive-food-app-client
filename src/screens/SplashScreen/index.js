import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Colors from "../../constants/Colors";
import Images from "../../constants/Images";
import { Display } from "../../utils";

const SplashScreen = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate("WelcomeScreen");
  //   },3000);
  // }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image source={Images.PLATE} style={styles.image} resizeMode="contain" />
      <Text style={styles.titleText}>Food App</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(55),
  },
  titleText: {
    fontSize: 32,
    color: Colors.DEFAULT_WHITE,
    fontWeight:'600'
  },
});
