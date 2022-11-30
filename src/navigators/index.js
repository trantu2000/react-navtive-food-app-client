import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  FoodScreen,
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
import { useSelector, useDispatch } from "react-redux";
import { GeneralAction } from "../Redux/Actions";
import FilterFoodScreen from "../screens/FilterFoodScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const Navigators = () => {
  const { isAppLoading, token, isFirstTimeUse } = useSelector(
    (state) => state?.generalState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GeneralAction.appStart());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAppLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : !token || token === null || token === "" ? (
          <>
            {isFirstTimeUse && (
              <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            )}
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
          </>
        ) : (
          <>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="RestaurantScreen"
              component={RestaurantScreen}
            />
            <Stack.Screen name="FoodScreen" component={FoodScreen} />
            <Stack.Screen name="FilterFoodScreen" component={FilterFoodScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
