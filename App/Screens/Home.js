import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import Colors from "../../assets/Shared/Colors";

export default function Home() {
  const { isLoaded, signOut } = useAuth();
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.logOutWithGoogleBtn}
        onPress={() => signOut()}
      >
        <Text
          style={{
            fontSize: 17,
            color: Colors.white,
          }}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logOutWithGoogleBtn: {
    padding: 16,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 90,
    backgroundColor: Colors.primary,
    width: Dimensions.get("screen").width * 0.8,
  },
});
