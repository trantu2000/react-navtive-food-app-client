import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Display } from "../../utils";

const WelcomeCard = ({ title, content, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode='contain'/>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Display.setWidth(100),
  },
  image: {
    height: Display.setHeight(25),
    width: Display.setWidth(50),
  },
  titleText: {
    fontSize: 22,
    paddingBottom: 10,
    paddingTop: 15,
  },
  contentText: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
