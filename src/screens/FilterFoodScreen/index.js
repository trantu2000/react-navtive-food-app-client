import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList ,ScrollView} from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import BookmarkCard from "../../components/BookmarkCard";
import FoodCart from "../../components/FoodCard";
import Separator from "../../components/Separator";
import Colors from "../../constants/Colors";
import { FoodService } from "../../services";
import { Display } from "../../utils";

const ListItemSeparator = () => (
  <View
    style={{
      height: 0.8,
      backgroundColor: Colors.DEFAULT_GREY,
      width: "100%",
      marginVertical: 10,
    }}
  />
);

const FilterFoodScreen = ({ navigation }) => {
 
  const [foods, setFoods] = useState(null);
  //console.log(foods);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const category = useSelector((state) => state?.categoryState?.category);
  console.log(category['activeCategory']);



  useEffect(() => {
    FoodService.getAllFood().then((response) => {
      // console.log(response?.data);
      setFoods(response?.data);
    });
  }, []);
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
        <Text style={styles.headerTitle}>Tìm kiếm</Text>
      </View>
    
      <ScrollView>
        <View style={styles.foodList}>
          {foods
            ?.filter((food) => food?.category === category['activeCategory'])
            ?.map((item) => (
              <FoodCart
                key={item?.id}
                {...item}
                navigate={() =>
                  navigation.navigate("FoodScreen", { foodId: item?.id })
                }
              />
            ))}
          <Separator height={Display.setHeight(2)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: "center",
  },
  foodList: {
    marginHorizontal: 20,
  },
});

export default FilterFoodScreen;
