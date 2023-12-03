import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import app from "../../assets/icon.png";
import Colors from "../../assets/Shared/Colors";
export default function Login() {
  return (
    <View>
      <Image source={app} style={styles.appImage} />
      <View style={styles.loginContainer}>
        {/* Heading */}
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        {/* subheading */}
        <Text style={styles.subheading}>
          Book Appointments Effortlessly and manage your heath journey
        </Text>
        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => console.log("Login")}
        >
          <Text
            style={{
              fontSize: 17,
              color: Colors.white,
            }}
          >
            Login with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: Colors.white,
    padding: 25,
    alignItems: "center",
    marginTop: -50,
    elevation: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  appImage: {
    width: 300,
    height: 500,
    objectFit: "contain",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subheading: {
    textAlign: "center",
    marginTop: 20,
  },
  loginButton: {
    padding: 16,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 90,
    backgroundColor: Colors.primary,
    width: Dimensions.get("screen").width * 0.8,
  },
});
