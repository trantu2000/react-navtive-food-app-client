import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  ForgotPasswordScreen,
  HomeScreen,
  RegisterPhoneScreen,
  SignInScreen,
  SignUpScreen,
  SplashScreen,
  WelcomeScreen,
} from "../screens";
import VerificationScreen from "../screens/VerificationScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import HomeTabs from "./BottomTabs";


const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="RegisterPhoneScreen"
          component={RegisterPhoneScreen}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />
        
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
