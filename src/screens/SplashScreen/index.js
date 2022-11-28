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
      <Text style={styles.titleSubText1}>Team: </Text>
      <Text style={styles.titleSubText2}>Cùng nhau qua môn </Text>
      <Text style={styles.titleSubText2}>S22-61TH1</Text>
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
    height: Display.setHeight(20),
    width: Display.setWidth(30),
  },
  titleText: {
    fontSize: 32,
    color: Colors.DEFAULT_WHITE,
    fontWeight:'600'
  },
  titleSubText1:{
    fontSize: 25,
    color: Colors.DEFAULT_WHITE,
    marginTop:10
  },
  titleSubText2:{
    fontSize: 32,
    color: Colors.DEFAULT_WHITE,
    marginTop:3,
    fontWeight:'600'
  }
});
