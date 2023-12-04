import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Login from "./App/Screens/Login";
import SignInWithOAuth from "./App/Components/SignInWithOAuth";
import Home from "./App/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "./App/Navigations/TabNav";
import TabNavigation from "./App/Navigations/TabNavigation";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_aW5jbHVkZWQtZmFsY29uLTMuY2xlcmsuYWNjb3VudHMuZGV2JA"
      }
    >
      <SafeAreaView >
        {/* Sign IN */}

        <SignedIn>
          {/* <Text>Ali</Text>
          <Text>Ali</Text>
          <Text>Ali</Text>
          <Text>Ali</Text> */}
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>

          {/* <TabNav/> */}

        </SignedIn>

        {/* Sign Out */}
        <SignedOut>
          {/* <Text>You are Signed out</Text> */}
          {/* <SignInWithOAuth /> */}
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
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
