import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import Images from "../../constants/Images";
import { Display } from "../../utils";
import Separator from "../../components/Separator";
import IonIcons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CategoryListItem from "../../components/CategoryListItem";
import FoodCart from "../../components/FoodCard";
import { RestaurantService, StaticImageService } from "../../services";
import ApiConstants from "../../constants/ApiConstants";

const foods = [
  {
    id: "2000",
    restaurantId: "100",
    name: "McSpicy Chicken",
    price: 220.0,
    image: "mcspicychicken",
    category: "Burgers & Wraps",
    description:
      "Zesty and redolent whole muscle leg meat patty: Fried to perfect golden tan; quenched with creamy veg mayo and garden-fresh shredded iceberg lettuce. The sandwich is served in fresh, sesame-studded quarter pounder bun.",
    ingredients:
      "Quarter pounder bun crown, Veg sauce, Shredded lettuce, McSpicy chicken patty, Quarter pounder bun heel.",
  },
  {
    id: "2001",
    restaurantId: "100",
    name: "McSpicy Paneer",
    price: 210.0,
    image: "mcspicypaneer",
    category: "Burgers & Wraps",
    description:
      "Crispy and spicy paneer patty with creamy tandoori sauce and crispy lettuce topping.",
    ingredients:
      "Quarter pounder bun crown, Shredded lettuce, Tandoori mayo, Spicy paneer patty, Quarter pounder bun heel.",
  },
  {
    id: "2002",
    restaurantId: "100",
    name: "McChicken",
    price: 160.0,
    image: "mcchicken",
    category: "Burgers & Wraps",
    description:
      "Batter & breaded chicken patty containing green peas, carrots, green beans, onion, potatoes, rice and spices, served in a bun with eggless mayonnaise and lettuce.",
    ingredients:
      "Quarter bun crown, Veg mayonnaise, Shredded lettuce, McChicken patty, Quarter bun heel.",
  },
  {
    id: "2003",
    restaurantId: "100",
    name: "Chicken Maharaja Mac",
    price: 250.0,
    image: "chickenmaharajamac",
    category: "Burgers & Wraps",
    description:
      "A double-decker toasted Maharaja bun sandwiched with one layer of flame-grilled chicken patty; crunchy iceberg lettuce; shredded onion; and a slice of cheese. Topped with another layer of flame-grilled chicken patty; tomato slices; and crunchy iceberg lettuce infused with harberno sauce.",
    ingredients:
      "Maharaja bun crown, Haberno sauce, Shredded lettuce, Shredded onion, Jalapenos, Flame-grilled chicken patty, Sliced cheese, Maharaja bun heel.",
  },
  {
    id: "2004",
    restaurantId: "100",
    name: "Chicken McNuggets",
    price: 180.0,
    image: "chickenmcnuggets",
    category: "Snacks & sides",
    description:
      "Bite-sized pieces of breaded, boneless chicken formed in various shapes (Ball, Boot, Bell & Bone) fried and served hot with smoky Barbeque Sauce or Mustard Sauce.",
    ingredients: "Chicken bites.",
  },
  {
    id: "2005",
    restaurantId: "100",
    name: "Pizza McPuff",
    price: 150.0,
    image: "pizzamcpuff",
    category: "Snacks & sides",
    description:
      "A blend of assorted vegetables (carrot, beans,capsicum, onion & green peas); mozzarella cheese mixed with tomato sauce; and exotic spices stuffed in rectangle shaped savoury dough. Quick frozen.",
    ingredients: "Assorted vegetables, Refined wheat flour, Pizza seasoning",
  },
  {
    id: "2006",
    restaurantId: "100",
    name: "Our World Famous Fries",
    price: 120.0,
    image: "ourworldfamousfries",
    category: "Snacks & sides",
    description:
      "The crisp, craveable, fan favourite: our World Famous Fries®. These epic fries are crispy and golden on the outside and fluffy on the inside.",
    ingredients: "Potato and salt",
  },
  {
    id: "2007",
    restaurantId: "100",
    name: "Sundae (Chocolate Brownie)",
    price: 130.0,
    image: "sundaechocolatebrownie",
    category: "Desserts",
    description:
      "An iconic premium dessert option. Can be bought as an add-on to make it a 'full meal' or simply as an indulgence.",
    ingredients:
      "Soft serve mix (100% diary), Hazelnut brownie, Hot fudge topping.",
  },
  {
    id: "2008",
    restaurantId: "100",
    name: "McFlurry (Choco Crunch)",
    price: 160.0,
    image: "mcflurrychococrunch",
    category: "Desserts",
    description:
      "Milk-based frozen dessert with chocolate crispies and chocolate dip.",
    ingredients: "Milk fat, Chocolate.",
  },
  {
    id: "2009",
    restaurantId: "100",
    name: "McSwirl Chocolate",
    price: 170.0,
    image: "mcswirlchocolate",
    category: "Desserts",
    description: "Delightful soft-serve with a delectable chocolate topping.",
    ingredients: "Soft serve mix (100% diary product), Chocolate dip.",
  },
  {
    id: "2010",
    restaurantId: "100",
    name: "Sundae (Strawberry)",
    price: 180.0,
    image: "sundaestrawberry",
    category: "Desserts",
    description: "Creamy vanilla soft-serve with strawberry topping.",
    ingredients: "Soft serve mix (100% diary), Strawberry topping.",
  },
  {
    id: "2011",
    restaurantId: "100",
    name: "Tea with Milk",
    price: 50.0,
    image: "teawithmilk",
    category: "Beverages",
    description: "It's always a good time for tea.",
    ingredients: "",
  },
  {
    id: "2012",
    restaurantId: "100",
    name: "Iced Tea",
    price: 40.0,
    image: "icedtea",
    category: "Beverages",
    description: "A blend of aromatic tea and the fruity flavour of lemon.",
    ingredients: "",
  },
  {
    id: "2013",
    restaurantId: "100",
    name: "Hot Coffee",
    price: 60.0,
    image: "hotcoffee",
    category: "Beverages",
    description: "Perfectly brewed for any time of the day.",
    ingredients: "",
  },
  {
    id: "2014",
    restaurantId: "100",
    name: "Cold Coffee",
    price: 50.0,
    image: "coldcoffee",
    category: "Beverages",
    description: "Rich, creamy and indulgent cold coffee.",
    ingredients: "",
  },
  {
    id: "2015",
    restaurantId: "101",
    name: "Crispy Veg Burger",
    price: 130.0,
    image: "crispyvegburger",
    category: "Burgers",
  },
  {
    id: "2016",
    restaurantId: "101",
    name: "Crispy Veg Double Patty",
    price: 160.0,
    image: "crispyvegdoublepatty",
    category: "Burgers",
  },
  {
    id: "2017",
    restaurantId: "101",
    name: "Spicy Grill Chicken Burger",
    price: 220.0,
    image: "spicygrillchickenburger",
    category: "Burgers",
  },
  {
    id: "2018",
    restaurantId: "101",
    name: "Chicken Whopper",
    price: 180.0,
    image: "chickenwhopper",
    category: "Whopper",
  },
  {
    id: "2019",
    restaurantId: "101",
    name: "Chicken Twisted Whopper",
    price: 160.0,
    image: "chickentwistedwhopper",
    category: "Whopper",
  },
  {
    id: "2020",
    restaurantId: "101",
    name: "Chicken Wings",
    price: 160.0,
    image: "chickenwings",
    category: "Chicken Wings",
  },
  {
    id: "2021",
    restaurantId: "101",
    name: "Grilled Chicken Wings",
    price: 260.0,
    image: "grilledchickenwings",
    category: "Chicken Wings",
  },
  {
    id: "2024",
    restaurantId: "101",
    name: "Fries (Small)",
    price: 80.0,
    image: "fries",
    category: "Sides",
  },
  {
    id: "2025",
    restaurantId: "101",
    name: "Fries (Medium)",
    price: 100.0,
    image: "fries",
    category: "Sides",
  },
  {
    id: "2026",
    restaurantId: "101",
    name: "Chicken Fries",
    price: 150.0,
    image: "chickenfries",
    category: "Sides",
  },
  {
    id: "2027",
    restaurantId: "102",
    name: "Pepper Barbeque Chicken",
    price: 310.0,
    image: "pepperbarbequechicken",
    category: "Non-Veg Pizza",
  },
  {
    id: "2028",
    restaurantId: "102",
    name: "Chicken Sausage",
    price: 180.0,
    image: "chickensausage",
    category: "Non-Veg Pizza",
  },
  {
    id: "2029",
    restaurantId: "102",
    name: "Chicken Golden Delight",
    price: 160.0,
    image: "chickengoldendelight",
    category: "Non-Veg Pizza",
  },
  {
    id: "2030",
    restaurantId: "102",
    name: "Indian Chicken Tikka",
    price: 170.0,
    image: "indianchickentikka",
    category: "Non-Veg Pizza",
  },
  {
    id: "2031",
    restaurantId: "102",
    name: "Margherita",
    price: 120.0,
    image: "margherita",
    category: "Veg Pizza",
  },
  {
    id: "2032",
    restaurantId: "102",
    name: "Veg Extravaganza",
    price: 140.0,
    image: "vegextravaganza",
    category: "Veg Pizza",
  },
  {
    id: "2033",
    restaurantId: "102",
    name: "Mexican Green Wave",
    price: 180.0,
    image: "mexicangreenwave",
    category: "Veg Pizza",
  },
  {
    id: "2034",
    restaurantId: "102",
    name: "Indian Tandoori Paneer",
    price: 200.0,
    image: "indiantandooripaneer",
    category: "Veg Pizza",
  },
  {
    id: "2035",
    restaurantId: "102",
    name: "Veg Loaded",
    price: 190.0,
    image: "vegloaded",
    category: "Pizza Mania",
  },
  {
    id: "2036",
    restaurantId: "102",
    name: "Paneer & Onion",
    price: 170.0,
    image: "paneerandonion",
    category: "Pizza Mania",
  },
  {
    id: "2037",
    restaurantId: "102",
    name: "Garlic Breadsticks",
    price: 100.0,
    image: "garlicbreadsticks",
    category: "Sides and Beverages",
  },
  {
    id: "2038",
    restaurantId: "102",
    name: "Stuffed Garlic Bread",
    price: 120.0,
    image: "stuffedgarlicbread",
    category: "Sides and Beverages",
  },
  {
    id: "2039",
    restaurantId: "103",
    name: "Veggie Supreme",
    price: 150.0,
    image: "veggiesupreme",
    category: "Pizzas",
    description: "",
    ingredients:
      "Black Olives, Green Capsicum, Mushroom, Onion, Red Paprika, Sweet Corn",
  },
  {
    id: "2040",
    restaurantId: "103",
    name: "Spiced Chicken Meatballs",
    price: 190.0,
    image: "spicedchickenmeatballs",
    category: "Pizzas",
    description: "",
    ingredients: "Schezwan Chicken Meatball, Onion",
  },
  {
    id: "2041",
    restaurantId: "103",
    name: "Italian Chicken Feast",
    price: 230.0,
    image: "italianchickenfeast",
    category: "Pizzas",
    description: "",
    ingredients:
      "Chicken Sausage, Chicken Pepperoni, Sweet Corn, Black Olive, Jalapeno",
  },
  {
    id: "2042",
    restaurantId: "103",
    name: "Zesty Chicken Pocket",
    price: 180.0,
    image: "zestychickenpocket",
    category: "Sides",
    description: "",
    ingredients:
      "Freshly Baked Pocket Stuffed With Chicken, Veggies & Smoked Texas Garlic Sauce",
  },
  {
    id: "2043",
    restaurantId: "103",
    name: "Spiced Tomato Twist Non Veg",
    price: 190.0,
    image: "spicedtomatotwistnonveg",
    category: "Sides",
    description: "",
    ingredients:
      "Tangy Flavourful Red Sauce Pasta Infused With Heavenly Herbs & Spices Topped With Chicken Sausage",
  },
];
const ListHeader = () => (
  <View
    style={{
      flexDirection: "row",
      flex: 1,
      width: 40,
      justifyContent: "flex-end",
    }}
  >
    <View
      style={{
        backgroundColor: Colors.LIGHT_YELLOW,
        width: 20,
        borderTopLeftRadius: 64,
        borderBottomLeftRadius: 64,
      }}
    />
  </View>
);

const ListFooter = () => (
  <View
    style={{
      flexDirection: "row",
      flex: 1,
      width: 40,
    }}
  >
    <View
      style={{
        backgroundColor: Colors.LIGHT_YELLOW,
        width: 20,
        borderTopRightRadius: 64,
        borderBottomRightRadius: 64,
      }}
    />
  </View>
);

const RestaurantScreen = ({
  navigation,
  route: {
    params: { restaurantId },
  },
}) => {
  const [restaurant, setRestaurant] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    RestaurantService.getOneRestaurantById(restaurantId).then((response) => {
      setSelectedCategory(response?.data?.categories[0]);
      setRestaurant(response?.data);
    });
  }, []);
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="default" translucent backgroundColor="transparent" /> */}
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
          uri: StaticImageService.getGalleryImage(
            restaurant?.images?.cover,
            ApiConstants.STATIC_IMAGE.SIZE.SQUARE
          ),
        }}
        style={styles.backgroundImage}
      />
      <ScrollView>
        <Separator height={Display.setHeight(35)} />
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{restaurant?.name}</Text>
            <IonIcons
              name={"bookmark"}
              color={Colors.DEFAULT_YELLOW}
              size={24}
            />
          </View>
          <Text style={styles.tagText}>{restaurant?.tags?.join(" • ")}</Text>
          <View style={styles.ratingReviewsContainer}>
            <FontAwesome name="star" size={18} color={Colors.DEFAULT_YELLOW} />
            <Text style={styles.ratingText}>4.2</Text>
            <Text style={styles.reviewsText}>(455 bình luận)</Text>
          </View>
          <View style={styles.deliveryDetailsContainer}>
            <View style={styles.rowAndCenter}>
              <Image
                style={styles.deliveryDetailIcon}
                source={Images.DELIVERY_CHARGE}
              />
              <Text style={styles.deliveryDetailText}>Miễn phí giao hàng</Text>
            </View>
            <View style={styles.rowAndCenter}>
              <Image
                style={styles.deliveryDetailIcon}
                source={Images.DELIVERY_TIME}
              />
              <Text style={styles.deliveryDetailText}>
                {" "}
                {restaurant?.time} min
              </Text>
            </View>
            <View style={styles.rowAndCenter}>
              <Image style={styles.deliveryDetailIcon} source={Images.MARKER} />
              <Text style={styles.deliveryDetailText}>
                {restaurant?.distance / 1000} km
              </Text>
            </View>
            <View style={styles.restaurantType}>
              <Text style={styles.restaurantTypeText}> {restaurant?.type}</Text>
            </View>
          </View>
          <View style={styles.categoriesContainer}>
            <FlatList
              data={restaurant?.categories}
              keyExtractor={(item) => item}
              horizontal
              ListHeaderComponent={() => <ListHeader />}
              ListFooterComponent={() => <ListFooter />}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <CategoryListItem
                  name={item}
                  isActive={item === selectedCategory}
                  selectCategory={(category) => setSelectedCategory(category)}
                />
              )}
            />
          </View>
          <View style={styles.foodList}>
            {foods
              ?.filter((food) => food?.category === selectedCategory)
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
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 10,
    zIndex: 10,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    height: Display.setWidth(100),
    width: Display.setWidth(100),
  },
  mainContainer: {
    backgroundColor: Colors.SECONDARY_WHITE,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 15,
  },
  title: {
    fontSize: 23,
    lineHeight: 23 * 1.4,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  tagText: {
    marginHorizontal: 25,
    marginTop: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_GREY,
  },
  ratingReviewsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
    marginTop: 10,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    // fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  reviewsText: {
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
  },
  deliveryDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
    marginTop: 10,
    justifyContent: "space-between",
  },
  deliveryDetailText: {
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
  },
  deliveryDetailIcon: {
    height: 16,
    width: 16,
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantType: {
    backgroundColor: Colors.LIGHT_YELLOW,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
  },
  restaurantTypeText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_YELLOW,
  },
  categoriesContainer: {
    marginVertical: 20,
  },
  foodList: {
    marginHorizontal: 15,
  },
});
