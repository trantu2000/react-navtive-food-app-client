import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";
import Colors from "../../constants/Colors";
import Images from "../../constants/Images";

const CategoryMenuItem = ({
  name,
  logo,
  activeCategory,
  setActiveCategory,
  navigate,
}) => {
  const handleClick = () => {
    setActiveCategory(name);
    navigate();
  };
  return (
    <TouchableOpacity onPress={handleClick} style={styles.category()}>
      <Image
        source={Images[logo]}
        style={styles.categoryIcon(activeCategory === name)}
      />
      <Text style={styles.categoryText(activeCategory === name)}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryMenuItem;

const styles = StyleSheet.create({
  category: (marginTop = 0) => ({
    alignItems: "center",
    marginTop,
  }),
  categoryIcon: (isActive) => ({
    height: 30,
    width: 30,
    opacity: isActive ? 1 : 0.5,
  }),
  categoryText: (isActive) => ({
    fontSize: 10,
    lineHeight: 10 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    marginTop: 5,
    opacity: isActive ? 1 : 0.5,
  }),
});
