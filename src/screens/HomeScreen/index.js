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
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import Separator from "../../components/Separator";
import IonIcons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { Display } from "../../utils";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Mock from "../../constants/Mock";
import CategoryMenuItem from "../../components/CategoryMenuItem";
import RestaurantCard from "../../components/RestaurantCard";
import RestaurantMediumCard from "../../components/RestaurantMediumCard";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { RestaurantService } from "../../services";

// const restaurants = [
//   {
//     id: "0",
//     name: "KiChi KiChi",
//     images:
//       "https://i2.wp.com/dinhhuong.vn/wp-content/uploads/2018/10/thiet-ke-thi-cong-nha-hang-lau-bang-chuyen-kichi-kichi-4.jpg?fit=1500%2C900",
//   },
//   {
//     id: "1",
//     name: "MC Donal",
//     images:
//       "https://global-uploads.webflow.com/60af8c708c6f35480d067652/61a2ea3a06fdbcd5b4f51079_screenshot_1638066729.png",
//   },
//   {
//     id: "2",
//     name: "KFC",
//     images: "http://kyluc.vn/Userfiles/Upload/images/239z22.jpg",
//   },
//   {
//     id: "3",
//     name: "Chicken Plus",
//     images:
//       "https://lh3.googleusercontent.com/p/AF1QipOtRHzgmjkmtuTd1MNyPIY1XOCyzqRTgrpMJavE=w1080-h608-p-no-v0",
//   },
//   {
//     id: "4",
//     name: "Texas",
//     images:
//       "https://oms.hotdeal.vn/images/editors/sources/000355061509/355061-355061-body%20(37).jpg",
//   },
// ];

const sortStyle = (isActive) =>
  isActive
    ? styles.sortListItem
    : { ...styles.sortListItem, borderBottomColor: Colors.DEFAULT_WHITE };

const HomeScreen = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState();
  const [restaurants, setRestaurants] = useState(null);
  const [activeSortItem, setActiveSortItem] = useState("Gần đây");

  let [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     RestaurantService.getRestaurants().then(response => {
  //       if (response?.status) {
  //         setRestaurant(response?.data);
  //       }
  //     });
  //   });
  //   return unsubscribe;
  // }, []);

  RestaurantService.getRestaurants().then((response) => {
    if (response?.status) {
      setRestaurants(response?.data);
    }
  });
  //console.log(restaurants);

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
            <Text
              style={styles.listHeaderTitle}
              // onPress={() => navigation.navigate("RestaurantScreen")}
            >
              Xếp hạng hàng đầu
            </Text>
            <Text style={styles.listHeaderSubtitle}>Xem tất cả</Text>
          </View>
          <FlatList
            data={restaurants}
            keyExtractor={(item) => item?.id}
            horizontal
            ListHeaderComponent={() => <Separator width={20} />}
            ListFooterComponent={() => <Separator width={20} />}
            renderItem={({ item }) => (
              <RestaurantCard
                {...item}
                
                navigate={(restaurantId) =>
                  navigation.navigate("RestaurantScreen", { restaurantId })
                }
              />
            )}
          />
        </View>
        <View style={styles.sortListContainer}>
          <TouchableOpacity
            style={sortStyle(activeSortItem === "Gần đây")}
            activeOpacity={0.8}
            onPress={() => setActiveSortItem("Gần đây")}
          >
            <Text style={styles.sortListItemText}>Gần đây</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sortStyle(activeSortItem === "Yêu thích")}
            activeOpacity={0.8}
            onPress={() => setActiveSortItem("Yêu thích")}
          >
            <Text style={styles.sortListItemText}>Yêu thích</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sortStyle(activeSortItem === "Xếp hạng")}
            activeOpacity={0.8}
            onPress={() => setActiveSortItem("Xếp hạng")}
          >
            <Text style={styles.sortListItemText}>Xếp hạng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sortStyle(activeSortItem === "Phổ biến")}
            activeOpacity={0.8}
            onPress={() => setActiveSortItem("Phổ biến")}
          >
            <Text style={styles.sortListItemText}>Phổ biến</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sortStyle(activeSortItem === "Xu hướng")}
            activeOpacity={0.8}
            onPress={() => setActiveSortItem("Xu hướng")}
          >
            <Text style={styles.sortListItemText}>Xu hướng</Text>
          </TouchableOpacity>
        </View>
        {restaurants?.map((item) => (
          <RestaurantMediumCard {...item} key={item?.id} />
        ))}
        <Separator height={Display.setHeight(5)} />
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
    fontFamily: "Poppins-Medium",
  },
  selectedLocationText: {
    color: Colors.DEFAULT_YELLOW,
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    fontFamily: "Poppins-Medium",
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
    fontFamily: "Poppins-Medium",
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
    // paddingHorizontal:20
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
    fontFamily: "Poppins-Medium",
  },
  listHeaderSubtitle: {
    color: Colors.DEFAULT_YELLOW,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: "Poppins-Medium",
  },
  sortListContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.DEFAULT_WHITE,
    marginTop: 8,
    elevation: 1,
  },
  sortListItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.DEFAULT_YELLOW,
    height: 50,
  },
  sortListItemText: {
    color: Colors.DEFAULT_BLACK,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: "Poppins-Medium",
  },
});
