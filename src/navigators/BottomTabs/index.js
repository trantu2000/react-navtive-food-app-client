import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../screens";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Display } from "../../utils";
import Colors from "../../constants/Colors";

const BottomTabs = createBottomTabNavigator();


const HomeTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: Display.setHeight(8),
          backgroundColor: Colors.DEFAULT_WHITE,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.DEFAULT_GREEN,
        tabBarInactiveTintColor: Colors.INACTIVE_GREY,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IonIcons name="home-outline" size={23} color={color}/>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default HomeTabs;
