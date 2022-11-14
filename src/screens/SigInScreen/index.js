import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Separator from "../../components/Separator";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <View>
        <Separator />
      </View>
      <Text>SignInScreen</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
