import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SettingScreen from "./SettingScreen";
import Home from "../Screens/Home";
import Appointment from "../Screens/Appointment";
import Profile from "../Screens/Profile";
import Ionicons from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name="Appointment" component={Appointment} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
