import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
const userInfo = {
  fullName: "Mohammad Ali",
  imageUrl: "../../../assets/images/IMG20221213224056.jpg",
};
import profileImage from "../../../assets/images/IMG20221213224056.jpg";
export default function Header() {
  //   const { isLoaded, isSignIn, user } = useUser();
  //   if (!isLoaded || !isSignIn) {
  //     return null;
  //   }
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Profile Info */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 7,
          alignItems: "center",
        }}
      >
        <Image
          //   source={{ uri: userInfo.imageUrl }}
          source={profileImage}
          style={{ width: 45, height: 45, borderRadius: 90 }}
        />

        <View>
          <Text>Hello</Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {userInfo.fullName}
          </Text>
        </View>
      </View>
      {/* Notification */}
      <Ionicons name="notifications-outline" size={28} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
});
