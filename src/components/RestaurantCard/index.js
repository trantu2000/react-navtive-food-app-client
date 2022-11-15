import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import IonIcons from "react-native-vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import Images from "../../constants/Images";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const RestaurantCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <IonIcons
        name="bookmark"
        color={Colors.DEFAULT_YELLOW}
        size={24}
        style={styles.bookmark}
      />
      <Image source={Images.MCDONAL} style={styles.posterStyle} />
      <Text style={styles.titleText}>MC DoNal</Text>
      <Text style={styles.tagText}>Bugger, chicken, pizza</Text>
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
            <Text style={styles.timeAndDistanceText}>5000</Text>
          </View>
          <View style={styles.timeAndDistanceContainer}>
            <IonIcons
              name="ios-time-outline"
              color={Colors.DEFAULT_BLACK}
              size={15}
            />
            <Text style={styles.timeAndDistanceText}>30</Text>
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
    elevation: 3,
    marginBottom: 5,
  },
  posterStyle: {
    width: 1920 * 0.15,
    height: 1080 * 0.15,
    borderRadius: 10,
    margin: 15,
  },
  titleText: {
    marginLeft: 15,
    fontSize: 15,
    lineHeight: 13 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
  },
  bookmark: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
  tagText: {
    marginLeft: 15,
    fontSize: 11,
    lineHeight: 11 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_GREY,
    marginBottom: 5,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
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
    // fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 10,
    lineHeight: 10 * 1.4,
    // fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  reviewsText: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    // fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
});
