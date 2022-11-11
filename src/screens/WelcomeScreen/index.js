import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import General from "../../constants/General";
import { WelcomeCard } from "../../components";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <View style={styles.welcomeListContainer}>
        <FlatList
          data={General.WELCOME_CONTENTS}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          renderItem={({ item }) => <WelcomeCard {...item} />}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeListContainer: {},
});
