import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Login from "./App/Screens/Login";
import SignInWithOAuth from "./App/Components/SignInWithOAuth";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_aW5jbHVkZWQtZmFsY29uLTMuY2xlcmsuYWNjb3VudHMuZGV2JA"
      }
    >
      <SafeAreaView style={styles.container}>
        {/* Sign IN */}
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        {/* Sign Out */}
        <SignedOut>
          {/* <Text>You are Signed out</Text> */}
          <SignInWithOAuth />
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
