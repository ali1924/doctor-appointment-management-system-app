import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import SearchBar from "../Components/Home/SearchBar";

export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Header />
      {/* <SearchBar /> */}
      <SearchBar setSearchText={(value) => console.log(value)} />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    padding: 20,
    marginTop: 20,
  },
});
