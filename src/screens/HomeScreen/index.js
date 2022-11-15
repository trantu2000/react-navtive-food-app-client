import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import Separator from "../../components/Separator";
import IonIcons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { Display } from "../../utils";
import Images from "../../constants/Images";
import ToggleButton from "../../components/ToggleButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Mock from "../../constants/Mock";
import CategoryMenuItem from "../../components/CategoryMenuItem";
import RestaurantCard from "../../components/RestaurantCard";

const HomeScreen = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.backgroundCurvedContainer} />
      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <IonIcons
            name="location-outline"
            size={15}
            color={Colors.DEFAULT_WHITE}
          />
          <Text style={styles.locationText}>Giao hàng đến</Text>
          <Text style={styles.selectedLocationText}>Trang chủ</Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={16}
            color={Colors.DEFAULT_YELLOW}
          />
          <Feather
            name="bell"
            size={24}
            color={Colors.DEFAULT_WHITE}
            style={{ position: "absolute", right: 0 }}
          />
          <View style={styles.alertBadge}>
            <Text style={styles.alertBadgeText}>12</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchSection}>
            <IonIcons
              name="search-outline"
              size={25}
              color={Colors.DEFAULT_GREY}
            />
            <Text style={styles.searchText}>Tìm kiếm...</Text>
          </View>
          <Feather
            name="sliders"
            size={20}
            color={Colors.DEFAULT_YELLOW}
            style={{ marginRight: 10 }}
          />
        </View>
        <View style={styles.categoriesContainer}>
          {Mock.CATEGORIES.map(({ name, logo }) => (
            <CategoryMenuItem
              key={name}
              name={name}
              logo={logo}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </View>
      </View>
      <ScrollView style={styles.listContainer}>
        <View style={styles.horizontalListContainer}>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderTitle}>Xếp hạng hàng đầu</Text>
            <Text style={styles.listHeaderSubtitle}>Xem tất cả</Text>
          </View>
          <FlatList>
            
          </FlatList>
          <RestaurantCard/>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_WHITE,
  },
  backgroundCurvedContainer: {
    backgroundColor: Colors.DEFAULT_GREEN,
    height: 2000,
    position: "absolute",
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 2000,
    alignSelf: "center",
    zIndex: -1,
  },
  headerContainer: {
    justifyContent: "space-evenly",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
  },
  locationText: {
    color: Colors.DEFAULT_WHITE,
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
  },
  selectedLocationText: {
    color: Colors.DEFAULT_YELLOW,
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
  },
  alertBadge: {
    backgroundColor: Colors.DEFAULT_YELLOW,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    height: 16,
    width: 16,
    position: "absolute",
    right: -2,
    top: -10,
  },
  alertBadgeText: {
    color: Colors.DEFAULT_BLACK,
    fontSize: 10,
    lineHeight: 10 * 1.4,
    // fontFamily: Fonts.POPPINS_BOLD,
  },
  searchContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    height: 45,
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  searchText: {
    color: Colors.DEFAULT_GREY,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 10,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  listContainer: {
    paddingVertical: 5,
    zIndex: -5,
  },
  horizontalListContainer: {
    marginTop: 40,
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 5,
  },
  listHeaderTitle: {
    color: Colors.DEFAULT_BLACK,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
  },
  listHeaderSubtitle: {
    color: Colors.DEFAULT_YELLOW,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
  },
});
