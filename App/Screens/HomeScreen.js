import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";

export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    padding: 20,
    marginTop: 20,
  },
});
