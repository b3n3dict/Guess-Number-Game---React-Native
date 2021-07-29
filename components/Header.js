import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Color from "../constants/color.js";
const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({ ios: headerIos, android: headerAndroid }),
      }}
    >
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerMain: {
    width: "100%",
    height: 92,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIos: {
    backgroundColor: "white",
    borderBottomColor: "black",
    borderWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Color.primary,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? Color.primary : "white",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});
export default Header;
