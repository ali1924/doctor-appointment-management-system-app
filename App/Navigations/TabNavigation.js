import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Appointment from "../Screens/Appointment";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../Screens/HomeScreen";
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Appointment") {
            iconName = focused ? "calendar" : "calendar";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Appointment" component={Appointment} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
