import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";

export default function SearchBar({ setSearchText }) {
  const [searchInput, setSearchInput] = useState();
  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignContent: "center",
          borderWidth: 0.6,
          borderColor: Colors.gray,
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Ionicons name="search-outline" size={24} color={Colors.primary} />
        <TextInput
          placeholder="Search"
          //   dynamic value
          onChangeText={(value) => {
            // console.log(value);
            setSearchInput(value);
          }}
          //   enter deawr por kaj korbe
          onSubmitEditing={() => {
            // console.log(searchInput);
            setSearchText(searchInput);
          }}
          style={{
            width: "100%",
          }}
        />
      </View>
    </View>
  );
}
