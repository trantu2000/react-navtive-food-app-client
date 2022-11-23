import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import IonIcons from "react-native-vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import Images from "../../constants/Images";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StaticImageService } from "../../services";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const RestaurantCard = ({
  id,
  name,
  images: { poster },
  tags,
  distance,
  time,
  navigate,
}) => {
  let [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <IonIcons
        name="bookmark"
        color={Colors.DEFAULT_YELLOW}
        size={24}
        style={styles.bookmark}
      />
      <Image
        source={{ uri: StaticImageService.getPoster(poster) }}
        style={styles.posterStyle}
      />
      <Text style={styles.titleText}>{name}</Text>
      <Text style={styles.tagText}>{tags?.join(" • ")}</Text>
      <View style={styles.footerContainer}>
        <View style={styles.rowAndCenter}>
          <FontAwesome name="star" color={Colors.DEFAULT_YELLOW} />
          <Text style={styles.ratingText}>4</Text>
          <Text style={styles.reviewsText}>({10})</Text>
        </View>
        <View style={styles.rowAndCenter}>
          <View style={styles.timeAndDistanceContainer}>
            <IonIcons
              name="location-outline"
              color={Colors.DEFAULT_BLACK}
              size={15}
            />
            <Text style={styles.timeAndDistanceText}>{distance}</Text>
          </View>
          <View style={styles.timeAndDistanceContainer}>
            <IonIcons
              name="ios-time-outline"
              color={Colors.DEFAULT_BLACK}
              size={15}
            />
            <Text style={styles.timeAndDistanceText}>{time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 10,
    elevation: 10,
    marginBottom: 5,
    marginRight: 10,
  },
  posterStyle: {
    width: 1920 * 0.15,
    height: 1080 * 0.15,
    borderRadius: 10,
    margin: 10,
  },
  titleText: {
    marginLeft: 10,
    fontSize: 15,
    lineHeight: 13 * 1.4,
    fontFamily: "Poppins-Medium",
    color: Colors.DEFAULT_BLACK,
  },
  bookmark: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
  tagText: {
    marginLeft: 10,
    fontSize: 11,
    lineHeight: 11 * 1.4,
    fontFamily: "Poppins-Medium",
    color: Colors.DEFAULT_GREY,
    marginBottom: 5,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 6,
    justifyContent: "space-between",
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeAndDistanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: Colors.DEFAULT_YELLOW,
    borderRadius: 12,
    marginHorizontal: 3,
  },
  timeAndDistanceText: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    fontFamily: "Poppins-Bold",
    color: Colors.DEFAULT_BLACK,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 10,
    lineHeight: 10 * 1.4,
    fontFamily: "Poppins-Bold",
    color: Colors.DEFAULT_BLACK,
  },
  reviewsText: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    fontFamily: "Poppins-Bold",
    color: Colors.DEFAULT_BLACK,
  },
});
