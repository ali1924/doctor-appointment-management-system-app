import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Login from "./App/Screens/Login";
import SignInWithOAuth from "./App/Components/SignInWithOAuth";
import Home from "./App/Screens/Home";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./App/Navigations/TabNavigation";
import TabNavigation from "./App/Navigations/TabNavigation";
export default function App() {
  return (
    // <ClerkProvider
    //   publishableKey={
    //     "pk_test_aW5jbHVkZWQtZmFsY29uLTMuY2xlcmsuYWNjb3VudHMuZGV2JA"
    //   }
    // >
    //   <SafeAreaView style={styles.container}>
    //     {/* Sign IN */}

    //     <SignedIn>
    //       {/* <Text>Ali</Text>
    //       <Text>Ali</Text>
    //       <Text>Ali</Text>
    //       <Text>Ali</Text> */}

    //       {/* <TabNav/> */}
    //     </SignedIn>

    //     {/* Sign Out */}
    //     <SignedOut>
    //       {/* <Text>You are Signed out</Text> */}
    //       {/* <SignInWithOAuth /> */}
    //       <Login />
    //     </SignedOut>
    //   </SafeAreaView>
    <NavigationContainer>
      <TabNavigation />
      {/* <TabNavigation/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
